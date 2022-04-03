import React from 'react';
import UserReview from '../../CoustomHooks/UserReview';
import bikeImg from '../../images/homePageImg.png'
import Review from '../CoustomerReview/Review';
import './Home.css'

const Home = () => {
    const [users , setUsers] = UserReview()
    console.log(users)
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
            {/* Review section */}
            <div>
                <h2 className='section-title'>Coustomer <span style={{color: 'rgb(211, 82, 7)'}}>Review</span></h2>
                <h4 style={{textAlign : 'center', color:'green',fontSize:'20px'}}>Total Review: {users.length} </h4>
                <div className='user-carts'>
                   {
                       users.slice(0,3).map(user => <div className='user-cart'>
                           <div style={{display:'flex', alignItems: 'center',padding:'10px'}}>
                                <img src={user.img}></img>
                                <h2 style={{marginLeft:'5px'}}> {user.name}</h2>
                           </div>
                           < hr / >
                           <div style={{padding:'10px'}}>
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