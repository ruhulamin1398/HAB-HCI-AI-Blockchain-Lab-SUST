import { useEffect, useState } from "react";

export function ReacherPaper(id){
    const [paper, setPaper] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Upload/ResearchPaper?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setPaper(res))
    }, []);

    return paper;
}

