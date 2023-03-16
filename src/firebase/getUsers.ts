import { collection, doc, onSnapshot } from "firebase/firestore";
import { UserData } from "../components/Types";
import { useEffect, useState } from "react";
import { db } from "./api";

const useGetUsers = () => {
    const [active, setActive] = useState<UserData[]>()
    const [inActive, setInActive] = useState<UserData[]>();
    const [data, setData] = useState<UserData[]>();
    const q = collection(db, 'users');
    useEffect(() => {
        (async () => {
            onSnapshot(q, (doc) => {
                let array: UserData[] = [];
                doc.docs.forEach(el => { array?.push({ id: el.id, ...el.data() }) })
                setData(array);
            })
        })()
    }, [])
    useEffect(() => {
        if(data) {
            const activeUsers = data?.filter(el => el.permission) || [];
            const inActiveUsers = data?.filter(el => !el.permission) || [];
            setActive(activeUsers)
            setInActive(inActiveUsers)
        };
    }, [data])
    return { active, inActive }
}

export default useGetUsers;