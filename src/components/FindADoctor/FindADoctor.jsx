"use client";

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BookAnAppointment from "./BookAnAppointment";
import AppointmentModal from "./AppointmentModal";

export default function FindADoctor() {
  const [token, setToken] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  // console.log(doctor, "sdasdadasds");

  useEffect(() => {
    async function fetchTokenAndDepartments() {
      try {
        const tokenRes = await fetch("/api/get-token", { method: "POST" });
        const { access_token } = await tokenRes.json();
        setToken(access_token);

        const depRes = await fetch("/api/get-departments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: access_token, branch_id: "" }),
        });

        const depData = await depRes.json();
        setDepartments(depData.data || []);
      } catch (err) {
        console.error("Error fetching token/departments", err);
      }
    }
    fetchTokenAndDepartments();
  }, []);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("");
    setSortBy("name");
  };


  const handleDepartmentSelect = (deptId) => {
    setSelectedDepartment(deptId.toString());
    setCurrentPage(1);
    console.log("Selected Department:", deptId);
  };


  return (
    <section className="bg-white pb-20">
      {/* Header / Search */}
      <div className="bg-primary text-white p-6 relative">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb textColor="text-white" borderColor="border-white" />
          <h1 className="text-4xl font-bold mb-5">Find a Doctor</h1>
        </div>
        <div className="absolute lg:-bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your Expert at SP Medifort Hospital..."
              className="w-full border-4 border-[#870064] rounded-full px-6 py-4 shadow-xl focus:outline-none text-black"
              disabled={sortBy === "department"}
            />
            <FaSearch className="absolute right-5 text-primary text-lg top-6" />
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="mt-16 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="border rounded-xl p-4 shadow space-y-4 bg-[#FFEFF9] lg:w-[600px] xl:w-full mx-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-primary font-bold">Filters</h2>
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 text-sm font-semibold text-red-600 border border-red-200 rounded-full hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-all duration-200 shadow-sm"
                >
                  Clear Filters
                </button>
              </div>

              {/* Sort Buttons */}
              <div>
                <label className="text-lg text-primary font-medium block mb-5">
                  Sort by
                </label>
                <div className="flex border-4 rounded-full w-fit border-primary">
                  <button
                    onClick={() => setSortBy("name")}
                    className={`px-3 py-2 rounded-full text-sm ${sortBy === "name" ? "bg-primary text-white" : "text-gray-700"
                      }`}
                  >
                    Name
                  </button>
                  <button
                    onClick={() => setSortBy("department")}
                    className={`px-3 py-2 rounded-full text-sm ${sortBy === "department"
                      ? "bg-primary text-white"
                      : "text-gray-700"
                      }`}
                  >
                    Department
                  </button>
                </div>
              </div>

              <hr className="my-2" />

              {/* Departments */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Departments</h3>
                <ul className="space-y-2 text-sm text-gray-700 max-h-96 overflow-y-auto">
                  {departments.length === 0
                    ? Array.from({ length: 13 }).map((_, i) => (
                      <li
                        key={i}
                        className="h-5 bg-gray-200 animate-pulse rounded w-full"
                      ></li>
                    ))
                    : departments.map((dept) => (
                      <li key={dept.id}>
                        <label className="flex text-base items-center cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="department"
                            checked={selectedDepartment === dept.id.toString()}
                            onChange={() => handleDepartmentSelect(dept.id)}
                            value={dept.id}
                            className="mr-2 accent-primary"
                          />
                          <span
                            className={`line-clamp-1 ${selectedDepartment === dept.id.toString()
                              ? "text-primary"
                              : "text-gray-700"
                              }`}
                          >
                            {dept.department_name}
                          </span>
                        </label>
                      </li>
                    ))}
                </ul>
              </div>

            </div>
          </aside>

          {/* Doctor cards + pagination */}
          <div className="md:col-span-3">
            <BookAnAppointment
              token={token}
              searchTerm={searchTerm}
              sortBy={sortBy}
              selectedDepartment={selectedDepartment}
              onOpenModal={(doc) => {
                setSelectedDoctor(doc);
                setIsModalOpen(true);
              }}
              doctorData={setDoctors}
            />
          </div>
        </div>
      </div>

      {/* Shared Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={selectedDoctor}
        branch_id=""
        token={token}
      />
    </section>
  );
}
