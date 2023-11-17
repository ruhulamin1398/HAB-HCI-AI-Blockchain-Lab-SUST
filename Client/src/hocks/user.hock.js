import { useEffect, useState } from "react";

export function useUserProfile(){
   
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/User/Profile?username=' + localStorage.getItem('username'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setUser(res)
            )
    }, []);

    return user;
}

