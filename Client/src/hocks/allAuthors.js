import { useEffect, useState } from "react";

export function allAuthors(){
    const [allUser, setAlluser] = useState([]);
    const [userName, setUserName] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/User/AllUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => {
                setAlluser(res);
                // Assuming username is a unique identifier for users
                const userNames = res.map(data => data.username);
                setUserName(userNames);
            });
    }, []);
    return userName;
}

