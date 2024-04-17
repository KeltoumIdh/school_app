import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import useUserStore from "../../store/userStore";

const NavBar = ({ open, toggleOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const { user } = useUserStore();
  console.log("user", user);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center justify-between w-full gap-4">
            {userLoggedIn ? (
              <>
                <div className="hidden mr-4 lg:block">
                  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      <Link className={"flex items-center"} to={"/"}>
                        Dashboard
                      </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      <Link className={"flex items-center"} to={"/calendar"}>
                        Calendar
                      </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      <Link className={"flex items-center"} to={"/module"}>
                        Modules
                      </Link>
                    </li>
                    {user?.role !== "student" && (
                      <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        <Link
                          className={"flex items-center"}
                          to={"/teacher-dashboard"}
                        >
                          Teacher Portal
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <div></div>
            )}
            <div>
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="flex text-sm   rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 s"
                type="button"
                onClick={handleDropdownToggle}
              >
                {user?.role === "teacher" ? (
                  <>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="user photo"
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://i.pinimg.com/736x/e5/67/05/e5670578f82033760ab026c6b523e74a.jpg"
                      alt="user photo"
                    />
                  </>
                )}
              </button>

              <div
                id="dropdownAvatar"
                className={`${
                  dropdownOpen ? "" : "hidden"
                } z-10 right-0 fixed divide-y divide-gray-100 rounded-lg shadow w-44 bg-white`}
              >
                {userLoggedIn ? (
                  <>
                    {user && user.name && (
                      <>
                        <div className="px-4 py-3 text-sm  ">
                          <div>{user.name}</div>
                          <div className="font-medium truncate">
                            {user.email}
                          </div>
                        </div>
                      </>
                    )}
                    <ul
                      className="py-2 text-sm "
                      aria-labelledby="dropdownUserAvatarButton"
                    >
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Settings
                        </Link>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a
                        href="/sign-out"
                        onClick={() => {
                          doSignOut().then(() => {
                            navigate("/login");
                          });
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white"
                      >
                        Sign out
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="felex flex-col">
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white"
                        to="/login"
                      >
                        Connexion
                      </Link>
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white"
                        to="/register"
                      >
                        Inscription
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
