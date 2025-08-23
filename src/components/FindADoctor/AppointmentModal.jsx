"use client";

import { Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RiArrowUpWideFill } from "react-icons/ri";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { CgClose } from "react-icons/cg";


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const AppointmentModal = ({ isOpen, onClose, doctor, branch_id, token }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [validid, setValidId] = useState("");
  const [dates, setDates] = useState([]);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    age: "",
    message: "",
  });
  const [loadingSlots, setLoadingSlots] = useState(false);

  const modalRef = useRef(null);
  const dateScrollRef = useRef(null);
  const slotScrollRef = useRef(null);

  const resetModal = () => {
    setStep(1);
    setSelectedDate(dates[0]?.value || "");
    setValidId("");
    setSlots([]);
    setSelectedSlot(null);
    setMobileNumber("");
    setOtp("");
    setUserDetails({ name: "", email: "", age: "", message: "" });
  };

  const handleOutsideClick = (e) => {
    // console.log("Dsadsadsadsad");

    // if (modalRef.current && !modalRef.current.contains(e.target)) {
    resetModal();
    onClose();
    // }
  };

  // useEffect(() => {
  //   if (isOpen) document.addEventListener("mousedown", handleOutsideClick);
  //   else document.removeEventListener("mousedown", handleOutsideClick);
  //   return () => document.removeEventListener("mousedown", handleOutsideClick);
  // }, [isOpen]);



  function formatDateValue(dateObj) {
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatDateLabel(dateObj) {
    return `${days[dateObj.getDay()]} ${dateObj.getDate()}`;
  }

  useEffect(() => {
    const today = new Date();
    const result = [];
    for (let i = 0; i < 15; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      result.push({ label: formatDateLabel(d), value: formatDateValue(d) });
    }
    setDates(result);
    setSelectedDate(result[0].value);
  }, []);

  useEffect(() => {
    if (slots.length > 0 && !selectedSlot) {
      setSelectedSlot(slots[0].id); // 👈 first slot auto select
    }
  }, [slots]);


  useEffect(() => {
    async function fetchSlots() {
      if (!doctor?.doctor_id || !selectedDate) return;
      setLoadingSlots(true);
      try {
        const res = await fetch("/api/doctor-slots", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token,
            branch_id,
            date: selectedDate,
            page: "1",
            page_count: "10",
            doctor_id: doctor.doctor_id,
            ...(doctor.department_id && { department_id: doctor.department_id }),
          }),
        });
        const data = await res.json();
        setValidId(data.visits[0].visits[0].visit_id);
        setSelectedSlot(data.slots[0].id);

        // setSelectedSlot(slots[0]); // 👈 first slot auto select

        const formattedSlots = (data?.slots || []).map((s, idx) => ({
          id: s.visit_id || idx,
          label: `${s.time_from} - ${s.time_to}`,
          ...s,
        }));
        setSlots(formattedSlots);
        setSelectedSlot(null);
      } catch (err) {
        setSlots([]);
        setSelectedSlot(null);
      } finally {
        setLoadingSlots(false);
      }
    }
    fetchSlots();
  }, [doctor, selectedDate, branch_id, token]);

  const handleSendOtp = async () => {
    const digitsOnly = mobileNumber.replace(/\D/g, "");

    if (digitsOnly.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobile_number: digitsOnly,
          visit_id: validid,
          country_dial_code: "91",
          token: token,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Failed to send OTP");
        return;
      }

      toast.success(`OTP sent to ${digitsOnly}`);
      setStep(3);
      setOtp('')
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleConfirmOtp = async () => {
    if (otp.length !== 4) {
      toast.error("Enter valid 4-digit OTP");
      return;
    }

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            visit_id: validid,
            mobile_number: mobileNumber,
            otp: otp,
            token: token,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "OTP verification failed");
        return;
      }

      if (data?.otpVerification?.status === "success") {
        if (data?.otpVerification?.status === "error") {
          toast.error("Invalid OTP");
          setOtp("");
        } else {
          toast.success("OTP Verified Successfully");
          setStep(4);
        }
      } else {
        toast.error(data?.otpVerification?.msg || "Invalid OTP");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const [bookingData, setBookingData] = useState()
  const handleFinalBooking = async () => {
    const { patient_name, email, age, gender, address } = userDetails;

    if (!patient_name.trim()) return toast.error("Name is required");
    if (!/^[a-zA-Z ]+$/.test(patient_name.trim()))
      return toast.error("Name should contain only letters");

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email))
      return toast.error("Enter valid email");

    if (!age || age < 1 || age > 120)
      return toast.error("Enter valid age (1–120)");

    if (!gender) return toast.error("Select gender");
    if (!address.trim()) return toast.error("Address is required");

    try {
      const res = await fetch("/api/confirm-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visit_id: validid,
          mobile_number: mobileNumber,
          otp,
          op_number: "",
          email,
          address,
          dToken: selectedSlot,
          token,
          age,
          date: selectedDate,
          gender,
          patient_name,
          is_web_booking: true,
          telemedicine: false,
          telemedicine_mobile_user: false,
          country_dial_code: "91",
        }),
      });

      const data = await res.json();
      console.log(data);
      setBookingData(data?.data)

      if (!res.ok) {
        toast.error(data.error || "Booking failed");
        return;
      }

      toast.success("Appointment booked successfully!");
      setStep(5); // maybe show confirmation screen

    } catch (error) {
      toast.error("Something went wrong. Try again.");
      console.error(error);
    }
  };
  const [bookingDataCfm, setBookingDataCfm] = useState()
  const handlePayLater = async () => {
    try {
      const res = await fetch("/api/pay-later", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transaction_id: bookingData.transaction_id,
          is_free_visit: bookingData.is_free_visit,
          token,
        }),
      });

      const data = await res.json();
      setBookingDataCfm(data?.data)
      if (!res.ok) {
        toast.error(data.error || "Pay Later failed");
        return;
      }

      toast.success("Pay Later processed successfully");
      setStep(6);
      // resetModal(); 
      // onClose(); 
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };


  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        ref={modalRef}
        className={`bg-white rounded-3xl shadow-2xl p-3 md:p-8 w-full ${step === 1 ? "max-w-4xl" : "max-w-xl"
          }  transition-all`}
      >
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {step === 1 ? 'Book Appointment with ' : ''}
            <span className="text-secondary">{doctor?.doctor_name}</span>
          </h2>
          <CgClose
            className="cursor-pointer p-2  text-4xl text-gray-500 hover:text-red-500 hover:bg-gray-100 border rounded-full transition-colors duration-300"
            onClick={(e) => handleOutsideClick(e)}
          />
        </div>

        {/* Step 1: Select Date & Slot */}
        {step === 1 && (
          <div className="space-y-8">
            {/* Date Picker Section */}
            <div className="bg-white shadow-lg rounded-2xl p-3 md:p-6 border border-gray-100">
              <h3 className="text-lg md:text-xl font-semibold md:font-bold text-gray-800 mb-4">📅 Select Date</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    dateScrollRef.current.scrollBy({ left: -150, behavior: "smooth" })
                  }
                  className="p-2 rounded-full bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white shadow hover:scale-105 transition"
                >
                  <RiArrowUpWideFill className="-rotate-90 text-2xl" />
                </button>
                <div
                  ref={dateScrollRef}
                  className="flex gap-3 overflow-x-auto scrollbar-hide px-2 py-1"
                >
                  {dates.map((d) => (
                    <div
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`min-w-[110px] text-center px-5 py-4 rounded-2xl cursor-pointer font-medium transition-all duration-200 shadow-sm 
              ${selectedDate === d.value
                          ? "bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                    >
                      {d.label}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    dateScrollRef.current.scrollBy({ left: 150, behavior: "smooth" })
                  }
                  className="p-2 rounded-full bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white shadow hover:scale-105 transition"
                >
                  <RiArrowUpWideFill className="rotate-90 text-2xl" />
                </button>
              </div>
            </div>

            {/* Slot Picker Section */}
            <div className="bg-white shadow-lg rounded-2xl p-3 md:p-6 border border-gray-100">
              <h3 className="text-lg md:text-xl font-semibold md:font-bold text-gray-800 mb-4">⏰ Available Slots</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    slotScrollRef.current.scrollBy({ left: -150, behavior: "smooth" })
                  }
                  className="p-2 rounded-full bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white shadow hover:scale-105 transition"
                >
                  <RiArrowUpWideFill className="-rotate-90 text-2xl" />
                </button>
                <div
                  ref={slotScrollRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide px-2 py-1"
                >
                  {loadingSlots ? (
                    <div className="text-gray-500">Loading slots...</div>
                  ) : slots.length > 0 ? (
                    slots.map((slot) => (
                      // slots[0].id
                      <div
                        key={slot.id}
                        onClick={() => {
                          setSelectedSlot(slot.id);
                        }}
                        className={`min-w-[150px] flex flex-col items-center justify-center px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200 shadow-md border
        ${selectedSlot === slot.id
                            ? "bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white shadow-lg scale-105 border-transparent"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200"
                          }`}
                      >
                        <span
                          className={`my-2 text-xs font-medium px-3 py-1 rounded-full
          ${selectedSlot?.id === slot.id
                              ? "bg-white/20 text-white"
                              : "bg-gray-300 text-gray-700"
                            }`}
                        >
                          Token #{slot.token}
                        </span>
                        {/* Time Range */}
                        <span className="text-lg font-semibold">{slot.time_from}</span>

                        {/* To Time */}
                        <span className="text-sm font-medium">To</span>
                        <span className="text-lg font-semibold">{slot.time_to}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 max-w-4xl mx-auto">No slots available</div>
                  )}
                </div>

                <button
                  onClick={() =>
                    slotScrollRef.current.scrollBy({ left: 150, behavior: "smooth" })
                  }
                  className="p-2 rounded-full bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white shadow hover:scale-105 transition"
                >
                  <RiArrowUpWideFill className="rotate-90 text-2xl" />
                </button>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedSlot}
                className={`px-8 py-3 marker: rounded-full font-semibold flex gap-1 shadow-lg transition-all duration-200 
          ${selectedSlot
                    ? "bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white hover:shadow-xl hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Next{" "}
                <TbArrowLeftFromArc
                  className={`text-2xl ${selectedSlot ? "text-white" : "text-gray-500"}`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Enter Mobile */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-center">Enter Mobile Number</h3>
            <input
              type="number"
              value={mobileNumber}
              onChange={(e) => {
                // only digits le aur max 10 digit hi rakhe
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setMobileNumber(value);
              }}
              placeholder="Enter 10-digit mobile number"
              className="border rounded-xl p-3 mb-5 text-center text-lg"
            />
          </div>
        )}

        {/* Step 3: Enter OTP */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-center">Enter OTP</h3>
            <div className="flex justify-center py-5">
              <Input.OTP
                length={4}
                value={otp}
                onChange={(value) => setOtp(value)}
                inputType="numeric"
                className="otp-input "
              />
            </div>
          </div>
        )}

        {/* Step 4: Final Form */}
        {step === 4 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Your Details</h3>

            <input
              type="text"
              placeholder="Name"
              value={userDetails.patient_name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, patient_name: e.target.value })
              }
              className="border rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              placeholder="Age"
              value={userDetails.age}
              onChange={(e) =>
                setUserDetails({ ...userDetails, age: e.target.value })
              }
              className="border rounded-xl p-3"
            />

            <select
              value={userDetails.gender}
              onChange={(e) =>
                setUserDetails({ ...userDetails, gender: e.target.value })
              }
              className="border rounded-xl p-3"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              {/* <option value="Other">Other</option> */}
            </select>

            <textarea
              placeholder="Address"
              value={userDetails.address}
              onChange={(e) =>
                setUserDetails({ ...userDetails, address: e.target.value })
              }
              className="border rounded-xl p-3"
            />

            <textarea
              placeholder="Message (optional)"
              value={userDetails.message}
              onChange={(e) =>
                setUserDetails({ ...userDetails, message: e.target.value })
              }
              className="border rounded-xl p-3"
            />
          </div>
        )}

        {/* Step 5: Booking Confirmation */}
        {step === 5 && bookingData && (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-center">🎉 Appointment Confirmed!</h3>

            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h2>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span className="text-gray-500">Patient</span>
                  <span className="font-medium text-gray-800">{bookingData.patient_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Token No</span>
                  <span className="font-medium text-gray-800">#{bookingData.tokenNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-medium text-gray-800">₹{bookingData.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Transaction ID</span>
                  <span className="font-medium text-gray-800">{bookingData.transaction_id}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-600 font-medium">Net Amount</span>
                  <span className="text-lg font-semibold text-primary">₹{bookingData.net_amount}</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {step === 6 && bookingDataCfm && (
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 w-full max-w-lg mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
              Appointment Confirmation
            </h2>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between">
                <span className="text-gray-500">Patient</span>
                <span className="font-medium text-gray-800">{bookingDataCfm.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Doctor</span>
                <span className="font-medium text-gray-800">{bookingDataCfm.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date</span>
                <span className="font-medium text-gray-800">{bookingDataCfm.date_str}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Time Slot</span>
                <span className="font-medium text-gray-800">
                  {bookingDataCfm.selTimeFrom} - {bookingDataCfm.selTimeTo}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Token No</span>
                <span className="font-medium text-gray-800">#{bookingDataCfm.tocken}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-medium text-gray-800">{bookingDataCfm.txnid}</span>
              </div>

              <div className="flex justify-between border-t pt-3">
                <span className="text-gray-600 font-medium">Net Amount</span>
                <span className="text-lg font-semibold text-primary">
                  ₹{bookingDataCfm.net_amount}
                </span>
              </div>
            </div>

            <button
              className="mt-6 w-full px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-secondary/80 
                 text-white font-semibold tracking-wide shadow-md hover:shadow-lg 
                 transform transition-all duration-300 hover:scale-[0.98] active:scale-[0.96]"
              onClick={(e) => handleOutsideClick(e)}
            >
              Finish
            </button>
          </div>
        )}


        {/* Footer Buttons: Back + Action */}
        <div className="flex justify-between mt-6">
          {step > 1 && step < 5 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-all flex items-center gap-2 font-medium"
            >
              <TbArrowLeftFromArc
                className={`text-2xl rotate-180 text-gray-500`}
              />{" "}
              Back
            </button>
          )}

          {step === 2 && (
            <button
              onClick={handleSendOtp}
              className="px-6 py-2 bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white font-semibold rounded-full"
            >
              Send OTP
            </button>
          )}

          {step === 3 && (
            <button
              onClick={handleConfirmOtp}
              className="px-6 py-2 bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white font-semibold rounded-full"
            >
              Confirm OTP
            </button>
          )}

          {step === 4 && (
            <button
              onClick={handleFinalBooking}
              className="px-6 py-2 bg-gradient-to-tr from-secondary/90 to-secondary/70 text-white font-semibold rounded-full"
            >
              Book Now
            </button>
          )}

          {step === 5 && (
            <button
              onClick={handlePayLater}
              className="w-full px-6 py-3 rounded-full 
               bg-gradient-to-r from-secondary to-secondary/80 
               text-white font-semibold tracking-wide
               shadow-md hover:shadow-lg 
               transform transition-all duration-300 
               hover:scale-[0.98] active:scale-[0.96]"
            >
              Pay Later
            </button>
          )}
          {/* {step === 6 && (
            <button
              
              className="w-full px-6 py-3 rounded-full 
               bg-gradient-to-r from-secondary to-secondary/80 
               text-white font-semibold tracking-wide
               shadow-md hover:shadow-lg 
               transform transition-all duration-300 
               hover:scale-[0.98] active:scale-[0.96]"
            >
              Done
            </button>
          )} */}


        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
