import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

/*const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-white-200'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    </>
            }

        </nav>
    )
}*/

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <Link className="text-2xl font-bold" to="/home">School App</Link>
            <div>
                {userLoggedIn ? (
                    <button
                        onClick={() => {
                            doSignOut().then(() => {
                                navigate('/login');
                            });
                        }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Déconnexion
                    </button>
                ) : (
                    <>
                        <Link className="text-sm text-blue-200 hover:text-blue-400 mr-4" to="/login">
                            Connexion
                        </Link>
                        <Link className="text-sm text-blue-200 hover:text-blue-400" to="/register">
                            Inscription
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};


export default Header