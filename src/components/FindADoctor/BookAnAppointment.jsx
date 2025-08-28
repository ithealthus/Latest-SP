import React, { useEffect, useState } from "react";
import { MdOutlineVideoCall } from "react-icons/md";

const BookAnAppointment = ({ token, selectedDepartment, onOpenModal, doctorData }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false); // ✅ check if more doctors exist

  const doctorsPerPage = 12;

  useEffect(() => {
    if (!token) return;

    const fetchDoctors = async () => {
      setLoading(true);
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-GB"); // dd/mm/yyyy

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
        const fetchedDoctors = data.data || [];

        setDoctors(fetchedDoctors);
        doctorData(fetchedDoctors);

        // ✅ If API returned exactly 12 doctors, assume maybe more exist
        setHasMore(fetchedDoctors.length === doctorsPerPage);

        console.log("Doctors Data:", fetchedDoctors);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [token, selectedDepartment, currentPage]);

  // Helpers
  const getName = (doc) => doc?.doctor_name ?? doc?.name ?? "";
  const getDept = (doc) => doc?.department_name ?? doc?.department ?? "";
  const getTitle = (doc) => doc?.title ?? doc?.designation ?? "";
  const getImageSrc = (doc) => {
    if (!doc?.image) return "/male.jpg";
    if (doc.image.startsWith("http")) return doc.image;
    return `data:image/jpeg;base64,${doc.image}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Loader Skeleton */}
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
          {/* No Doctors */}
          {doctors.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <img
                src="/images/images.jpg"
                alt="No Doctors"
                className="mx-auto w-48 h-48 mb-6"
              />
              <h2 className="text-2xl font-semibold mb-2 text-primary">
                No doctors available
              </h2>
              <p className="text-gray-600">
                Please try a different department or check back later.
              </p>
            </div>
          ) : (
            <>
              {/* Doctors List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {doctors.map((doc) => (
                  <div
                    key={doc._id ?? getName(doc)}
                    className="w-full max-w-sm bg-white mx-auto border border-gray-200 hover:border-primary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative overflow-hidden rounded-xl border-2 border-primary mb-4">
                        <img
                          src={getImageSrc(doc)}
                          alt={getName(doc)}
                          className="w-full h-64 2xl:h-[300px] object-cover object-top"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-1">{getName(doc)}</h3>
                      <p className="text-base text-gray-700 font-medium mb-1">{getDept(doc)}</p>
                      <p className="text-sm text-gray-500 mb-4">{getTitle(doc)}</p>
                    </div>

                    <button
                      onClick={() => onOpenModal(doc)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm xl:text-base font-semibold bg-primary text-white rounded-full shadow-md hover:shadow-xl hover:bg-primary/90 mt-auto"
                    >
                      <MdOutlineVideoCall size={20} /> Book Consultation
                    </button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg border shadow-sm ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white hover:bg-primary hover:text-white"
                  }`}
                >
                  Prev
                </button>
                <span className="px-4 py-2">{currentPage}</span>
                <button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={!hasMore} // ✅ disable Next if less than 12 doctors
                  className={`px-4 py-2 rounded-lg border shadow-sm ${
                    !hasMore
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-white hover:bg-primary hover:text-white"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BookAnAppointment;
