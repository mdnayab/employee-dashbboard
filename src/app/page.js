"use client";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import employeeData from "../app/data/employee-details";

export default function Home() {
  const [status, setStatus] = useState("all");
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Imported employeeData:", employeeData);
    setEmployees(employeeData);
  }, []);

  console.log("Employees state:", employees);

  const filteredEmployees =
    employees.length > 0
      ? employees.filter(
          (employee) =>
            (status === "all" || employee.status === status) &&
            employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const handleTabChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBlock = (id) => {
    console.log(`Blocked employee with id: ${id}`);
  };

  const handleDetails = (id) => {
    console.log(`Showing details for employee with id: ${id}`);
  };

  return (
    <div className="m-4">
      <h1 className="text-5xl font-extrabold text-center my-4">Employee Dashboard</h1>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-20% px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleTabChange("all")}
            className={`px-4 py-2 rounded-lg text-white ${
              status === "all" ? "bg-purple-600" : "bg-gray-300"
            } hover:bg-purple-500`}
          >
            All
          </button>
          <button
            onClick={() => handleTabChange("active")}
            className={`px-4 py-2 rounded-lg text-white ${
              status === "active" ? "bg-purple-600" : "bg-gray-300"
            } hover:bg-purple-500`}
          >
            Active
          </button>
          <button
            onClick={() => handleTabChange("inactive")}
            className={`px-4 py-2 rounded-lg text-white ${
              status === "inactive" ? "bg-purple-600" : "bg-gray-300"
            } hover:bg-purple-500`}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredEmployees.map((employee) => (
          <Card
            key={employee.id}
            name={employee.name}
            role={employee.role}
            email={employee.email}
            image={employee.image}
            onBlock={() => handleBlock(employee.id)}
            onDetails={() => handleDetails(employee.id)}
          />
        ))}
      </div>
    </div>
  );
}
