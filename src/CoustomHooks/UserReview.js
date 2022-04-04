import { useEffect, useState } from "react";


const UserReview = () => {
    const [users , setUsers] = useState([])
    useEffect(()=>{
        fetch('userComment.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return [users , setUsers];
};

export default UserReview;