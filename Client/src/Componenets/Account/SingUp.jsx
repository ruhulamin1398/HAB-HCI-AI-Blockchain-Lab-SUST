import axios from "axios";
import * as EmailValidator from 'email-validator';
import React, { useEffect, useState } from "react";

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const SingUp = () => {
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);

    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        batch: "",
        Roll_Number: "",
        Registration_Number: "",

        password_1: "",
        password_2: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };

    const userSubmit = (e) => {
        e.preventDefault();
        const {
            name,
            username,
            email,
            batch,
            Roll_Number,
            Registration_Number,
            password_1,
            password_2,
        } = newUser;

        if (
            name &&
            username &&
            email &&
            batch &&
            Registration_Number &&
            Roll_Number &&
            password_1 &&
            EmailValidator.validate(email) &&
            password_2 &&
            password_1.length >= 6
        ) {
            axios.post(
                "http://localhost:5000/User/Adduser",
                newUser,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                    },
                }
            )
                .then((res) => {
                    console.log(res.data);
                    if (res.data.message === "Signup was successful!") {
                        setVisible(true);
                    } else {
                        setVisibleR(true);
                        console.log(visibleR);
                    }
                })
                .catch((error) => {
                    console.error("Error during signup:", error);
                    setVisibleR(true);
                });
        } else {
            setVisibleR(true);
        }
    };

    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 1000);

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
    return (
        <>
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

            <div className="flex items-center min-h-screen p-4 justify-center mt-32">

                <div className=" overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">

                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">
                            Create User's Profile
                        </h3>
                        <form action="#" className="flex flex-col space-y-5" method="POST">
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="StudentsID"
                                    name="name"
                                    placeholder="Your name"
                                    value={newUser.name}
                                    onChange={handleChange}
                                    autoFocus
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email "
                                    value={newUser.email}
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>{" "}
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="User name "
                                    value={newUser.username}
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Batch
                                </label>
                                <input
                                    type="number"
                                    name="batch"
                                    placeholder="Batch"
                                    value={newUser.batch}
                                    onChange={handleChange}
                                    autoFocus
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>


                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Roll Number
                                </label>
                                <input
                                    type="number"
                                    name="Roll_Number"
                                    placeholder="Roll Number"
                                    value={newUser.Roll_Number}
                                    onChange={handleChange}
                                    autoFocus
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Registration Number
                                </label>
                                <input
                                    type="number"
                                    name="Registration_Number"
                                    placeholder="Registration Number"
                                    value={newUser.Registration_Number}
                                    onChange={handleChange}
                                    autoFocus
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password_1"
                                    placeholder="Password must be greater than 6 digits"
                                    value={newUser.password_1}
                                    onChange={handleChange}
                                    autoFocus
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="password_2"
                                    placeholder="Confirm Password"
                                    value={newUser.password_2}
                                    onChange={handleChange}
                                    autoFocus
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300  bg-[#002145]  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                    onClick={userSubmit}
                                >
                                    Register
                                </button>
                            </div>

                        </form>
                    </div>



                </div>
            </div >
        </>

    );
};

export default SingUp;