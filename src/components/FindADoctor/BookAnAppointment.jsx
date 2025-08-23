import React, { useEffect, useState } from "react";
import { MdOutlineVideoCall } from "react-icons/md";

const BookAnAppointment = ({
  token,
  selectedDepartment,
  onOpenModal,
  doctorData
}) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const doctorsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchDoctors() {
      if (!token) return;

      setLoading(true);
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-GB");

      try {
        const res = await fetch("/api/get-doctors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            token,
            branch_id: "",
            date: formattedDate,
            page: currentPage.toString(),
            page_count: doctorsPerPage.toString(),
            department_id: selectedDepartment || "",
            doctor_id: "",
           
          }),
        });

        const data = await res.json();
        setDoctors(data.data || []);
        doctorData(data.data || [])
      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, [token, selectedDepartment, currentPage]);

  const getName = (doc) => doc?.doctor_name ?? doc?.name ?? "";
  const getDept = (doc) => doc?.department_name ?? doc?.department ?? "";
  const getTitle = (doc) => doc?.title ?? doc?.designation ?? "";

  return (
    <div className="max-w-7xl mx-auto px-4">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: doctorsPerPage }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse w-full max-w-sm mx-auto border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col"
            >
              <div className="w-full h-52 bg-gray-200 rounded-xl mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded mt-auto"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {doctors.map((doc) => (
              <div
                key={doc._id ?? getName(doc)}
                className="w-full max-w-sm bg-white mx-auto border border-gray-200 hover:border-primary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden rounded-xl border-2 border-primary mb-4">
                    <img
                      src={doc?.image?.location || "/male.jpg"}
                      alt={getName(doc)}
                      className="w-full h-52 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{getName(doc)}</h3>
                  <p className="text-base text-gray-700 font-medium mb-1">{getDept(doc)}</p>
                  <p className="text-sm text-gray-500 mb-4">{getTitle(doc)}</p>
                </div>

                <button
                  onClick={() => onOpenModal(doc)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm xl:text-lg font-semibold bg-primary text-white rounded-full shadow-md hover:shadow-xl hover:bg-primary/90 mt-auto"
                >
                  <MdOutlineVideoCall size={20} /> Book Consultation
                </button>
              </div>
            ))}
          </div>

          {doctors.length >= doctorsPerPage && (
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border shadow-sm ${currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white hover:bg-primary hover:text-white"
                  }`}
              >
                Prev
              </button>
              <span className="px-4 py-2">{currentPage}</span>
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 rounded-lg border shadow-sm bg-white hover:bg-primary hover:text-white"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookAnAppointment;
