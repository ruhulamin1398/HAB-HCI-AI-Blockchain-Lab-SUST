import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [visible, setVisible] = useState(false);
    const [admin, setAdmin] = useState(false)
    const [visibleR, setVisibleR] = useState(false);
    const [loginUser, setLoginUser] = useState(false);
    const [newUser, setNewUser] = useState({
        username: "",
        password_1: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewUser({
            ...newUser,
            [name]: value,
        });
    }

    const userSubmit = (e) => {
        e.preventDefault();
        const { username, password_1 } = newUser;
        if (username && password_1) {
            axios.post('http://localhost:5000/User/login', newUser)
                .then(res => {
                    if (res.data.error) {
                        setVisibleR(true);
                    } else {
                        localStorage.setItem('username', username);
                        localStorage.setItem('Userlogin', true);
                        localStorage.setItem('Token', res.data.access_token);
                        setVisible(true);
                        setLoginUser(true);
                    }
                });
        }
        else setVisibleR(true)

    }

    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [visible]);
    useEffect(() => {
        console.log(visibleR); // This will log the updated value of visibleR
        if (visibleR) {
            const timeout = setTimeout(() => {
                setVisibleR(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [visibleR]);

    let navigate = useNavigate();

    useEffect(() => {
        if (loginUser) {
            setTimeout(() => {
                navigate("/userProfile", { replace: true });
            }, 1500);
        }
    }, [loginUser]);

    return (
        <div className="flex items-center min-h-screen p-4  justify-center mt-28">
            {visible && (
                <div className="fixed z-50 inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500">
                    <div className="max-w-xl w-full bg-green-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center">
                        Registration Successful
                    </div>
                </div>
            )}

            {visibleR && (
                <div className="fixed z-50 inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500">
                    <div
                        className="max-w-xl w-full bg-red-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center"
                        style={{ zIndex: 1000 }}  // Increase the z-index value as needed
                    >
                        Something Is Wrong. Please Try Again.
                    </div>
                </div>
            )}
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-4 py-6 flex items-center justify-center text-white bg-[#002145] bg-theam-color md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    <img
                        src="/assets/images/logo/logo.png"
                        alt="logo"
                        className="header-logo w-full pl-20 pr-3 mr-12 "
                    />
                </div>
                {!admin && <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">User Login</h3>
                    <form action="#" className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="username" className="text-sm font-semibold text-gray-500">Your Name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                autoFocus
                                value={newUser.username}
                                onChange={handleChange}
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password_1" className="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password_1"
                                name="password_1"
                                value={newUser.password_1}
                                onChange={handleChange}
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#002145] px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-theam-color rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={userSubmit}
                            >
                                Log in
                            </button>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <span className="flex items-center justify-center space-x-2">
                                <span className="h-px bg-gray-400 w-14"></span>
                                <span className="font-normal text-gray-500">or login as a</span>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div className="flex flex-col space-y-4">
                                <button
                                    href="#"
                                    className="bg-[#002145] text-white flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    onClick={() => { setAdmin(true) }} >
                                    <span>
                                        <svg
                                            className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            aria-hidden="true"
                                        >
                                            {/* <path
                                                fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium  group-hover:text-white" >Admin</span>
                                </button>


                            </div>
                        </div>
                    </form>
                </div>}
                {admin && <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Admin Login</h3>
                    <form action="#" className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="username" className="text-sm font-semibold text-gray-500">Your Name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                autoFocus
                                value={newUser.username}
                                onChange={handleChange}
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password_1" className="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password_1"
                                name="password_1"
                                value={newUser.password_1}
                                onChange={handleChange}
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#002145] px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-theam-color rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={userSubmit}
                            >
                                Log in
                            </button>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <span className="flex items-center justify-center space-x-2">
                                <span className="h-px bg-gray-400 w-14"></span>
                                <span className="font-normal text-gray-500">or login as a</span>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div className="flex flex-col space-y-4">
                                <button
                                    href="#"
                                    className="bg-[#002145] text-white flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    onClick={() => {
                                        setAdmin(
                                            false
                                        )
                                    }} >
                                    <span>
                                        <svg
                                            className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            aria-hidden="true"
                                        >
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium  group-hover:text-white" >User</span>
                                </button>


                            </div>
                        </div>
                    </form>
                </div>}
            </div>
        </div>
    );
};

export default Login;
