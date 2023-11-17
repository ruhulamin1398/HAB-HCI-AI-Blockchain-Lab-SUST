import React, { useEffect, useState } from "react";
import { allAuthors } from "../../hocks/allAuthors";
import { useUserProfile } from "../../hocks/user.hock";
const AddPublications = () => {
    // const [publications, setPublication] = useState([]);
    const [Info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState('');
    const [authorInput, setAuthorInput] = useState('');
    const [authors, setAuthors] = useState([]);
    const [authorSuggestions, setAuthorSuggestions] = useState([]);
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const user = useUserProfile();
    const userName = allAuthors();
    const handleBlur = (e) => {
        const newInfo = { ...Info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleAuthorInputChange = (e) => {
        const inputValue = e.target.value;
        setAuthorInput(inputValue);

        const filteredAuthors = userName.filter(author =>
            author.toLowerCase().includes(inputValue.toLowerCase())
        );

        setAuthorSuggestions(filteredAuthors);
    };

    const handleAuthorClick = (selectedAuthor) => {
        setAuthors([...authors, selectedAuthor]);
        setAuthorInput('');
        setAuthorSuggestions([]);
    };

    const handleRemoveAuthor = (index) => {
        const updatedAuthors = [...authors];
        updatedAuthors.splice(index, 1);
        setAuthors(updatedAuthors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('File', file);
        formData.append('date', formattedDate);

        formData.append('from', Info.from);
        formData.append('to', Info.to);
        formData.append('title', Info.title);
        formData.append('authors', authors.join(','));

        const token = localStorage.getItem("Token");
        const headers = {
            'Authorization': `Bearer ${token}`,
        };

        try {
            const response = await fetch('http://localhost:5000/Upload/Researchers', {
                method: 'POST',
                body: formData,
                headers: headers,
            });

            if (response.status === 200) {
                const data = await response.json();
                if (data.msg === "File Upload Successfully") {
                    setVisible(true);
                } else {
                    setVisibleR(true);
                }
            } else {
                setVisibleR(true);
            }
        } catch (error) {
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
        if (visibleR) {
            const timeout = setTimeout(() => {
                setVisibleR(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [visibleR]);

    return (
        <div className="flex items-center min-h-screen p-4 justify-center mt-48">
            <div className={`fixed inset-0 z-50  flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? '' : 'hidden'}`}>
                <div className="max-w-xl w-full bg-green-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    New Publication Added
                </div>
            </div>
            <div className={`fixed inset-0 flex z-50 items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? '' : 'hidden'}`}>
                <div className="max-w-xl  w-full bg-red-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Something is wrong. Please try again.
                </div>
            </div>
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-5 bg-white md:flex-1">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Add new publications</h3>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            onBlur={handleBlur}
                            placeholder="Title"
                            required
                        />

                        <div className="mb-4 flex space-x-4 items-center">
                            <div className="flex-1">
                                <label htmlFor="from" className="text-gray-600">From</label> <br />
                                <input
                                    type="date"
                                    name="from"
                                    className="px-4 py-2 border rounded focus:ring-4 focus:ring-blue-200"
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="to" className="text-gray-600">To</label> <br />
                                <input
                                    type="date"
                                    name="to"
                                    className="px-4 py-2 border rounded focus:ring-4 focus:ring-blue-200"
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                        </div>

                        <label htmlFor="details">Details</label>
                        <textarea
                            name="details"
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            onBlur={handleBlur}
                            placeholder="Details"
                            required
                        />

                        <label htmlFor="authors">Authors</label>
                        <div className="flex items-center space-x-2">
                            {authors.map((author, index) => (
                                <div key={index} className="flex items-center bg-gray-200 rounded px-2 py-1">
                                    <span>{author}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveAuthor(index)}
                                        className="ml-2 text-red-600 focus:outline-none"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            id="authorName"
                            name="authorName"
                            value={authorInput}
                            onChange={handleAuthorInputChange}
                            className="mt-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                        {authorSuggestions.length > 0 && (
                            <ul className="suggestions-list bg-gray-200 rounded px-2 py-1">
                                {authorSuggestions.map((author, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleAuthorClick(author)}
                                        className="cursor-pointer hover:bg-blue-100 px-4 py-2 transition duration-300"
                                    >
                                        {author}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <label htmlFor="pdfFile">Upload PDF File</label>
                        <input
                            type="file"
                            id="pdfFile"
                            name="pdfFile"
                            onChange={handleFileChange}
                            accept=".pdf"
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            required
                        />
                        <small className="text-gray-500">Please upload a PDF file.</small>

                        <button type="submit" name="reg" value="submit" className="bg-[#002145] w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-theam-color  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                            <b>Upload Publications</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPublications;
