import React, { useState, useEffect } from "react";
import students from "../../database/students.json";
import exams from "../../database/exams.json";
import examNotesData from "../../database/examNotes.json";
import Modal from 'react-modal';

export default function ExamNotesPage() {
    // State to hold exam notes data
    const [examNotes, setExamNotes] = useState([]);
    // State to hold form input values
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedExam, setSelectedExam] = useState('');
    const [notes, setNotes] = useState('');
    // State to manage modal visibility
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // State to hold selected exam note for editing
    const [selectedExamNote, setSelectedExamNote] = useState(null);
    const [editedNotes, setEditedNotes] = useState('');

    useEffect(() => {
        // Fetch data from the JSON file
        setExamNotes(examNotesData);
    }, []);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new exam note object with selected student, exam, and notes
        const newNote = {
            student: selectedStudent,
            exam: selectedExam,
            notes: notes
        };
        // If selectedExamNote is not null, it means we're editing an existing note
        if (selectedExamNote !== null) {
            const updatedNotes = examNotes.map(note => {
                if (note === selectedExamNote) {
                    return newNote;
                }
                return note;
            });
            setExamNotes(updatedNotes);
            setSelectedExamNote(null); // Reset selectedExamNote after editing
        } else {
            // Add the new exam note to the list
            setExamNotes([...examNotes, newNote]);
        }
        // Reset form input values
        setSelectedStudent('');
        setSelectedExam('');
        setNotes('');
        setModalIsOpen(false); // Close the modal after submission
    };

    // Function to handle deleting an exam note
    const handleDelete = (note) => {
        const updatedNotes = examNotes.filter(n => n !== note);
        setExamNotes(updatedNotes);
    };

    // Function to handle opening the edit modal
    const openEditModal = (note) => {
        setSelectedExamNote(note);
        setSelectedStudent(note.student);
        setSelectedExam(note.exam);
        setEditedNotes(note.notes);
        setModalIsOpen(true);
    };

    // Function to handle closing the modal
    const closeEditModal = () => {
        setSelectedExamNote(null);
        setSelectedStudent('');
        setSelectedExam('');
        setEditedNotes('');
        setModalIsOpen(false);
    };
    const saveChanges = () => {
        const updatedNotes = examNotes.map(note => {
            if (note === selectedExamNote) {
                return {
                    ...note,
                    notes: editedNotes
                };
            }
            return note;
        });
        setExamNotes(updatedNotes);
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
            <h1 className="text-lg font-bold max-w-md mx-auto py-7">Exam Notes</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="grid md:grid-cols-1 md:gap-1">
                    <div className="relative z-0 w-full mb-3 group">
                        <label htmlFor="student" className="block mb-2 text-sm font-medium text-gray-700">Student:</label>
                        <select
                            id="student"
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="block w-full py-2.5 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="" disabled>Select student</option>
                            {students.map((student, index) => (
                                <option key={index} value={student.name}>{student.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="exam" className="block mb-2 text-sm font-medium text-gray-700">Exam:</label>
                        <select
                            id="exam"
                            value={selectedExam}
                            onChange={(e) => setSelectedExam(e.target.value)}
                            className="block w-full py-2.5 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="" disabled>Select exam</option>
                            {exams.map((exam, index) => (
                                <option key={index} value={exam.examName}>{exam.examName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            name="note"
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="block py-2.5 px-4 w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter note"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Save Notes
                </button>
            </form>
            {/* Display the list of exam notes */}
            <div className="mt-8 max-w-md mx-auto">
                <h2 className="text-lg font-bold">Student Exam Notes:</h2>
                {examNotes.map((note, index) => (
                    <div key={index} className="border rounded-lg p-4 mt-4">
                        <h3 className="text-lg font-semibold">Student: {note.student}</h3>
                        <p className="text-sm font-normal mt-2">Exam: {note.exam}</p>
                        <p className="mt-2 font-bold">Note: {note.notes}</p>
                        <div>
                            <button onClick={() => openEditModal(note)} className="mr-2 text-blue-500 hover:text-blue-600">Edit</button>
                            <button onClick={() => handleDelete(note)} className="text-red-500 hover:text-red-600">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Edit modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeEditModal}
                contentLabel="Edit Exam Note"
                style={customStyles}
            >
                <h2 className="font-bold my-2">Edit Exam Note</h2>
                <input
                    type="text"
                    value={editedNotes}
                    onChange={(e) => setEditedNotes(e.target.value)}
                    className="mr-3 border p-2 rounded"
                />
                <button onClick={saveChanges} className="mr-3 border p-2 rounded bg-green-700 text-white">Save</button>
                <button onClick={closeEditModal} className="mr-3 border p-2 rounded bg-slate-500 text-white">Cancel</button>
            </Modal>
        </div>
    );
}
