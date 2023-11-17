import { useEffect, useState } from "react";

export function AllPublication(){
    const [publications, AllPublications] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/Upload/AllPublication', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => {
                AllPublications(res);
               
            });
    }, []);
    return publications;
}

