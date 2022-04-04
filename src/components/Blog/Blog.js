import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='question-Ans-section'>
            <h2 style={{color:'chocolate' , textAlign:'center' , letterSpacing :'30px', fontSize : '50px'}}>BLOGS</h2>
            <div  style={{width:'500px', marginLeft:'400px'}}>
                <h2>Q.1 : What is ContextApi?</h2>
                <p><b>Ans</b> : Context Api is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.</p>
            </div>
            <div style={{width:'500px', marginLeft:'400px', marginTop:'20px'}}>
                <h2>Q.1 : Wright About semantic element/tags.</h2>
                <p><b>Ans</b> : A semantic element clearly describes its meaning to both the browser and the developer.Non-semantic elements tells nothing about its content.Like "div".semantic elements clearly defines its content.Like "table".Semantic element is much easier to read.This is probably the first thing you will notice when looking at the first block of code using semantic elements.</p>
            </div>
            
        </div>
    );
};

export default Blog;