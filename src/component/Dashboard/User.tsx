import React, { useContext, useRef, useState } from 'react';
import { SassString } from 'sass';
import { postContext, userContext } from '../../App';
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss'; 


function User() {

    const {post, postValueSet} = useContext(postContext); 


    const titleRef = useRef<HTMLInputElement | null>(null); 
    const desRef = useRef<HTMLTextAreaElement | null>(null); 

    const postSubmit =(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        e.preventDefault();
     
        if(titleRef.current && desRef.current){
            if(titleRef.current.value.length > 0 && desRef.current.value.length > 0){

                postValueSet(titleRef.current.value, desRef.current.value);
                // use toast for successfully inserted
                toast.success('Post successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }else{
                toast.error('please fill up the form completely', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }
    }

    return (
        <div>
            <Header/>

            <div id="postWrapper_2">
                <div className='postForm'>
                    <form>
                        <div className='inputWrap'>
                            <span className='inputInfo'> Title : </span><input ref={titleRef} className='dataInput' type="text" placeholder='Input post title'></input>
                        </div>
                        
                        <div className='inputWrap'>
                            <span className='inputInfo'> Description : </span><textarea ref={desRef} rows={8} className='dataInput'  placeholder='Input post description'></textarea>
                        </div>

                        <button onClick={(postSubmit)}>Submit</button>
                    </form>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    );
}

export default User;