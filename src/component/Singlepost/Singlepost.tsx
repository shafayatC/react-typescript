import React from 'react';
import './style.scss'; 




function Singlepost(props:{title:string, description:string}) {

    const readmore=(desc: string, limit:number)=> {

        if(desc.length > limit){
            return <div><p>{desc.substring(0, limit)}...</p><button>Read more</button></div> 
        }else{
            return <p>{desc}</p>
        }
    }
    
    return (
        <div className='singleWrap'>
{/*
            <h2> Facebook Status Generator</h2>
            <p>Prank your friends or imitate celebrities. You can make fake facebook status updates in any creative way you like. Upload profile picture, write status, select likes, add comments and many more cool features. Build your own fake facebook status now.</p>
*/}
            <h2>{props.title}</h2>
           {readmore(props.description, 200)}
        </div>
    );
}

export default Singlepost;