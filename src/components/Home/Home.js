import React from 'react';
import bikeImg from '../../images/homePageImg.png'
import Review from '../CoustomerReview/Review';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-info-conteiner'>
                <div className='home-info'>
                    <h2>THIS IS YOURE NEXT BIKE</h2>
                    <h4>THIS BIKE NEVER DISSATISFACTION ANYONE!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur non officiis delectus repellat, asperiores fugit exercitationem dolorem molestias. Inventore laboriosam, perferendis totam enim tempore nulla fugiat quas magni impedit? Totam.</p>
                    <button>Learn More</button>
                </div>
                <div className='cover-img'>
                    <img src={bikeImg}></img>
                </div>

            </div>
            <Review></Review>
            
        </div>
    );
};

export default Home;