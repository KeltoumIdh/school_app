import React, { useState } from "react";
import useUserStore from '../store/userStore';

const Profile = () => {
    const { user, setUser } = useUserStore(); // Destructure setUser from the store

    const [userr, setUserr] = useState({
        name: user.name ? user.name : "keltoum",
        email: user.email ? user.email : "keltoumidhssou@gmail.com",
        password: user.password ? user.password : "123456",
        role: user.role ? user.role : "teacher",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserr({ ...userr, [name]: value });
    };

    const handleDataChange = () => {
        setUser(userr); // Update user data in the global state
        alert("Data changed!");
    };

    return (
        <>
            <div className="main mt-8 ml-1/3 max-w-md mx-auto text-lg px-4" style={{ fontSize: "18px" }}>
                <h2 className="text-gray-700 text-xl font-semibold mb-6">PROFILE</h2>
                <div className="card bg-white rounded-lg shadow-lg p-8 mb-10 relative">
                    <i className="fa fa-pen fa-xs edit absolute right-8 text-gray-400"></i>
                    <table className="w-4/5">
                        <tbody>
                            <tr>
                                <td className="text-gray-600 px-4 font-medium">Name</td>
                                <td className="font-semibold">
                                    <input
                                        type="text"
                                        name="name"
                                        value={userr.name}
                                        onChange={handleInputChange}
                                        className="border-b border-gray-400 focus:outline-none focus:border-indigo-500"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-600 px-4 font-medium">Email</td>
                                <td className="font-semibold">
                                    <input
                                        type="email"
                                        name="email"
                                        value={userr.email}
                                        onChange={handleInputChange}
                                        className="border-b border-gray-400 focus:outline-none focus:border-indigo-500"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-gray-600 px-4 font-medium">Role</td>
                                <td className="font-semibold">
                                    <input
                                        type="role"
                                        name="role"
                                        value={userr.role}
                                        className="border-b cursor-no-drop border-gray-400 focus:outline-none focus:border-indigo-500"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDataChange}>
                    Change Data
                </button>
            </div>
        </>
    );
};

export default Profile;
