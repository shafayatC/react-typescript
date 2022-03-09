import React, { useContext } from 'react';
import Header from '../Header/Header';
import Singlepost from '../Singlepost/Singlepost';
import Login from '../Login/Login';
import './style.scss'; 
import { postContext, userContext } from '../../App';

function Home() {
    const { post } = useContext(postContext); 

    return (
        <div>
            <Header/>
            <div id="postWrapper">
            {
                post.map(data =>
                    <Singlepost title={data.title} description={data.des}/>
                )
            }
            </div>
            <Login/>
        </div>
    );
}

export default Home;