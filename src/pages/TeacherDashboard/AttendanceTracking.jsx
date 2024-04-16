import React, { useState } from "react";
import modules from "../../database/modules.json";
import students from "../../database/students.json";

export default function AttendanceTrackingPage() {
  // Sample data for students and modules (you can replace it with your actual data)

  // State to hold attendance data
  const [attendance, setAttendance] = useState([]);

  // State to hold form input values
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();

  // Filter out only the checked students
  const presentStudents = students.filter((student) =>
    attendanceRecords.some(
      (record) => record.student === student.id && record.present
    )
  );

  // Create a new attendance record object with selected class, date, and attendance for each checked student
  const newRecord = {
    class: selectedClass,
    date: selectedDate,
    attendance: presentStudents.map((student) => ({
      student: student.name,
      present: true,
    })),
  };

  // Update the attendance state with the new record
  setAttendance([...attendance, newRecord]);

  // Reset form input values
  setSelectedClass("");
  setSelectedDate("");
  setAttendanceRecords([]);
};


  // Function to handle attendance marking for a student
  const handleAttendanceChange = (studentId, present) => {
    const updatedAttendance = attendanceRecords.map((record) => {
      if (record.student === studentId) {
        return { student: studentId, present: present };
      }
      return record;
    });
    // If the student's attendance record doesn't exist, add it to the attendance records
    if (!updatedAttendance.some((record) => record.student === studentId)) {
      updatedAttendance.push({ student: studentId, present: present });
    }
    setAttendanceRecords(updatedAttendance);
  };

  return (
    <div className="w-full px-20 ">
      <h1 className="text-lg font-bold max-w-md mx-auto py-7">Attendance Tracking</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid md:grid-cols-1 md:gap-1">
          <div className="relative z-0 w-full mb-3 group">
            <label
              htmlFor="class"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Module:
            </label>
            <select
              id="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="block w-full py-2.5 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="" disabled>
                Select module
              </option>
              {modules.map((className, index) => (
                <option key={index} value={className.moduleName}>
                  {className.moduleName}
                </option>
              ))}
            </select>
          </div>
          <div className="relative z-0 w-full mb-3 group">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="block w-full py-2.5 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Students Attendance:</h2>
          {students.map((student, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={student.id}
                checked={attendanceRecords.some(
                  (record) => record.student === student.id && record.present
                )}
                onChange={(e) =>
                  handleAttendanceChange(student.id, e.target.checked)
                }
                className="form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor={student.id} className="ml-2 text-sm text-gray-700">
                {student.name}
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit Attendance
        </button>
      </form>
      {/* Display the attendance records */}
      <div className="mt-8 max-w-md mx-auto">
        <h2 className="text-lg font-bold">Attendance Records:</h2>
        {attendance.map((record, index) => (
          <div key={index} className="border rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold">{record.class}</h3>
            <p className="text-sm font-normal mt-2">Date: {record.date}</p>
            <ul className="list-disc pl-6 mt-2">
              {record.attendance.map((attendanceRecord, index) => (
                <li key={index}>
                  {attendanceRecord.student}:{" "}
                  {attendanceRecord.present ? "Present" : "Absent"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
