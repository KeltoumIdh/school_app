import React, { useState ,useEffect} from "react";
import Modal from 'react-modal';
import modulesData from "../../database/modules.json";





export default function AddModule() {
    // State to hold the module data
    const [modules, setModules] = useState([]);
    const [moduleName, setModuleName] = useState('');
    const [days, setHours] = useState('');
    const [startDate, setStartDate] = useState('');


    useEffect(() => {
        // Simulate fetching data from JSON file
        setModules(modulesData);
    }, []);


    // State to manage modal visibility
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editModuleId, setEditModuleId] = useState(null);
const [editedModuleName, setEditedModuleName] = useState('');
    const [editedHours, setEditedHours] = useState('');


const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new module object
    const newModule = {
        id: Math.random(), // Unique ID for each module
        moduleName: moduleName,
        days: days,
        startDate: startDate

    };
    // Update the modules state with the new module
    setModules([...modules, newModule]);
    // Reset form input values
    setModuleName('');
    setHours('');
    setStartDate('');

};

   const handleDelete = (id) => {
    setModules(modules.filter(module => module.id !== id));
};

    // Function to handle opening the edit modal
    const openEditModal = (id, moduleName, days) => {
        setEditModuleId(id);
        setEditedModuleName(moduleName);
        setEditedHours(days);
        setModalIsOpen(true);
    };

    const closeEditModal = () => {
        setModalIsOpen(false);
        setEditModuleId(null);
        setEditedModuleName('');
        setEditedHours('');
    };

    // Function to handle saving changes in the edit modal
    const saveChanges = () => {
        const updatedModules = modules.map(module => {
            if (module.id === editModuleId) {
                return {
                    ...module,
                    moduleName: editedModuleName,
                    days: editedHours
                };
            }
            return module;
        });
        setModules(updatedModules);
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
            <h1 className="text-lg font-bold max-w-md mx-auto py-7">Add new module</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="moduleName"
                            id="moduleName"
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="moduleName"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Module Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="days"
                            id="days"
                            value={days}
                            onChange={(e) => setHours(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="days"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Days
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="startDate"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Start Date
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Submit
                </button>
            </form>
            {/* Display the list of modules in a table */}
            <div className="mt-8 max-w-md mx-auto">
                <h2 className="text-lg font-bold">Modules:</h2>
                <table className="w-full mt-4">
                    <thead>
                        <tr>
                            <th className="py-2 text-left">Module Name</th>
                            <th className="py-2 text-left">Days</th>
                            <th className="py-2 text-left">Start date</th>
                            <th className="py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modules.map((module, index) => (
                            <tr key={index} className="">
                                <td className="py-2">{module.moduleName}</td>
                                <td className="py-2">{module.days}</td>
                                <td className="py-2">{module.startDate}</td>
                                <td className="py-2">
                                    <button
                                        onClick={() => openEditModal(module.id, module.moduleName, module.days)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(module.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Edit modal */}
            {/* <div className="w-[50%] bg-red-400"> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeEditModal}
                contentLabel="Edit Module"
                style={customStyles}            >
                <h2 className="font-bold my-2">Edit Module</h2>
                <input
                    type="text"
                    className="mr-3 border p-2 rounded"
                    value={editedModuleName}
                    onChange={(e) => setEditedModuleName(e.target.value)}
                />
                <input
                    type="text"
                    value={editedHours}
                    onChange={(e) => setEditedHours(e.target.value)}
                    className="mr-3 border p-2 rounded"
                />
                <button onClick={saveChanges} className="mr-3 border p-2 rounded bg-green-700 text-white">Save</button>
                <button onClick={closeEditModal} className="mr-3 border p-2 rounded bg-slate-500 text-white">Cancel</button>
            </Modal>
            {/* </div> */}
        </div>
    );
}

