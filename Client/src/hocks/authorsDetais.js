import { useEffect, useState } from "react";
export function SingleAuthors(name){
    const [SingleAuthors, setSingleAuthors] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/User/SingleAuthors?username='+name, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                setSingleAuthors(res);
              
            });
    }, []);
    return SingleAuthors;
}

