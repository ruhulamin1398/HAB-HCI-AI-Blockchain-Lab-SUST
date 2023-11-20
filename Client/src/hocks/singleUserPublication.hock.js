import { useEffect, useState } from "react";

export function SingUserPublications(){
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Upload/Publications?username=' + localStorage.getItem('username'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setAuthors(res))
    }, []);

    return authors;
}

