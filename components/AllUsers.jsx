import { useState, useEffect } from "react";
import { UserCard } from "./UserCard";
import { Spinner } from "./Spinner";

export function AllUsers() {
    const
        [users, setUsers] = useState([]),
        [load, setLoad] = useState(false);

    useEffect(() => {
        async function getUser() {
            setLoad(true);
            
            try {
                const
                    res = await fetch('https://jsonplaceholder.typicode.com/users/'),
                    userArr = await res.json();
                setUsers(userArr);
            } catch (err) {
                console.log('catch', err);
            } finally {
                setLoad(false);
            }
        };
        getUser();
    }, []);

    return <>
        {load ? <Spinner /> : <UserCard user={users} />}
    </>;
}