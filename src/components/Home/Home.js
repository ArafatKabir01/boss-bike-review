import React from 'react';
import UserReview from '../../CoustomHooks/UserReview';
import bikeImg from '../../images/homePageImg.png'

import './Home.css'

const Home = () => {
    const [users , setUsers] = UserReview()
    return (
        <div>
            <div className='home-info-conteiner'>
                <div className='home-info'>
                    <h2 style={{color:'rgb(18 108 161'}}>THIS IS YOURE NEXT BIKE</h2>
                    <h4>THIS BIKE NEVER DISSATISFACTION ANYONE!</h4>
                    <p>Victory MotorCycles Jackpot from the American motorcycle manufacturer, Victory Motorcycles, is a custom cruiser that turns heads with its looks and offers an incredible riding experience. In its street adventures, this bike is helped by the 106 cubic inch V-Twin engine along with the six speed overdrive transmission with helical cut gears. The company has already taste huge success in countries like Spain, France, U.K, etc. and now wants to try its luck in India. Design:</p>
                    <button className='learn-more-btn'>Learn More</button>
                </div>
                <div className='cover-img'>
                    <img src={bikeImg}></img>
                </div>
            </div>
            {/* Review section */}
            <div>
                <h2 className='section-title'>Coustomer <span style={{color: 'rgb(211, 82, 7)'}}>Review</span></h2>
                <h4 style={{textAlign : 'center', color:'green',fontSize:'20px'}}>Total Review: {users.length} </h4>
                <div className='user-carts'>
                   {
                       users.slice(0,3).map(user => <div key={user.id} className='user-cart'>
                           <div  style={{display:'flex', alignItems: 'center',padding:'10px'}}>
                                <img src={user.img}></img>
                                <h2 style={{marginLeft:'5px'}}> {user.name}</h2>
                           </div>
                           < hr / >
                           <div style={{padding:'10px' ,marginTop:'20px'}}>
                               <small>Ratings : {user.ratings}</small>
                            
                                <p>{user.comment}</p>
                           </div>
                           
                           </div>)
                   }
                   
                </div>
                <button className='viewAll-btn'>SEE ALL</button>
            </div> 
            
        </div>
    );
};

export default Home;