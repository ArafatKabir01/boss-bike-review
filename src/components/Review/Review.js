import React from 'react';
import UserReview from '../../CoustomHooks/UserReview';
import './Review.css'

const Review = () => {
    const [users , setUsers] = UserReview()
    return (
        <div className='all-user-carts'>
            {
                users.map(user => 
                    <div key={user.id} className='user-cart'>
                        <div style={{display:'flex', alignItems: 'center',padding:'10px'}}>
                            <img src={user.img}></img>
                            <h2 style={{marginLeft:'5px'}}> {user.name}</h2>
                        </div>
                    < hr / >
                    <div style={{padding:'10px'}}>
                        <small>Ratings : {user.ratings}</small>
                     
                         <p>{user.comment}</p>
                    </div>
                    
                    </div>
            )}
            

        </div>
    );
};

export default Review;