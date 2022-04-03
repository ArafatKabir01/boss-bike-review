import React from 'react';
import './Review.css'

const Review = ({user}) => {
    return (
        <div>
            <p>{user.name}</p>

        </div>
    );
};

export default Review;