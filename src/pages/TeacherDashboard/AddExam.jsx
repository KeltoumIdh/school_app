import React, { useState,useEffect } from "react";
import examsData from "../../database/exams.json";
import Modal from 'react-modal';

export default function AddExam() {
    // State to hold exam data
    const [exams, setExams] = useState([]);

    // State to hold form input values
    const [examName, setExamName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editExamId, setEditExamId] = useState(null);
    const [editedExamName, setEditedExamName] = useState('');
    const [editedDate, setEditedDate] = useState('');
    const [editedTime, setEditedTime] = useState('');
    useEffect(() => {
        setExams(examsData);
    }, []);
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new exam object
        const newExam = {
            examName: examName,
            date: date,
            time: time,
        };
        // Update the exams state with the new exam
        setExams([...exams, newExam]);
        // Reset form input values
        setExamName('');
        setDate('');
        setTime('');
    };
    const handleDelete = (id) => {
        setExams(exams.filter(exam => exam.id !== id));
    };

    const handleEditExam = (id, updatedExam) => {
        const updatedExams = exams.map((exam) =>
            exam.id === id ? { ...exam, ...updatedExam } : exam
        );
        setExams(updatedExams);
    };
    const openEditModal = (id, examName, date, time) => {
        setEditExamId(id);
        setEditedExamName(examName);
        setEditedDate(date);
        setEditedTime(time);
        setModalIsOpen(true);
    };
    const saveChanges = () => {
        const updatedExams = exams.map(exam => {
            if (exam.id === editExamId) {
                return {
                    ...exam,
                    examName: editedExamName,
                    date: editedDate,
                    time: editedTime,
                };
            }
            return exam;
        });
        setExams(updatedExams);
        setModalIsOpen(false);
    };
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f4f5f7', // Change background color
            border: '2px solid #ccc', // Change border color
            borderRadius: '8px', // Change border radius
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Change box shadow
        }
    };
    return (
        <div className="w-full px-20 ">
            <h1 className="text-lg max-w-md mx-auto py-7 font-bold">Create New Exam</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="examName"
                            id="examName"
                            value={examName}
                            onChange={(e) => setExamName(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="examName"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Exam Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="date"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Date
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="time"
                            name="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="time"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Time
                        </label>
                    </div>

                </div>
                <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                    Create Exam
                </button>
            </form>
            {/* Display the list of exams */}
            <div className="mt-8 max-w-md mx-auto">
                <h2 className="text-lg font-bold">Exams:</h2>
                <ul className="list-disc pl-6">
                    {exams.map((exam, index) => (
                        <tr key={index} className="">
                        <td className="py-2">{exam.examName}</td>
                        <td className="py-2">{exam.date}</td>
                        <td className="py-2">{exam.time}</td>
                        <td className="py-2">
                            <button
                                onClick={() => openEditModal(exam.id, exam.examName, exam.date, exam.time)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(exam.id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))}
                </ul>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Edit Exam"
                style={customStyles}

            >
                <h2 className="font-bold my-2">Edit Exam</h2>
                <input
                    type="text"
                    className="mr-3 border p-2 rounded"
                    value={editedExamName}
                    onChange={(e) => setEditedExamName(e.target.value)}
                />
                <input
                    type="date"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                    className="mr-3 border p-2 rounded"
                />
                <input
                    type="time"
                    value={editedTime}
                    onChange={(e) => setEditedTime(e.target.value)}
                    className="mr-3 border p-2 rounded"
                />
                <button onClick={saveChanges} className="mr-3 border p-2 rounded bg-green-700 text-white">Save</button>
                <button onClick={() => setModalIsOpen(false)} className="mr-3 border p-2 rounded bg-slate-500 text-white">Cancel</button>
            </Modal>
        </div>
    );
}
