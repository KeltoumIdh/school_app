import React, {  useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar.jsx";

import "../App.css";
const App = () => {

    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex h-screen transition-all duration-300 ease-in-out ">
            <div className="flex-1 flex flex-col overflow-hidden">
                <header>
                    <NavBar open={open} toggleOpen={toggleOpen} />
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto  p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default App;
