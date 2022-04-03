import { useEffect, useState } from "react";


const UserReview = () => {
    const [users , setUsers] = useState([])
    useEffect(()=>{
        fetch('userComment.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users)
    return [users , setUsers];
};

export default UserReview;