import React, { useContext, useRef } from 'react';
import { userContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import './style.scss'; 

const Login = () => {

   const {user, userSetup} = useContext(userContext); 
   let navigate = useNavigate();

   const username_ref = useRef<HTMLInputElement | null>(null);
   const password_ref = useRef<HTMLInputElement | null>(null);

    const cancelBtn=()=>{
        (document.getElementById("loginWrap") as HTMLFormElement).style.animationName = "go"; 
        (document.getElementById("loginWrap") as HTMLAnchorElement).style.right = "2050px"
    }

    const loginBtn=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault(); 

        if(username_ref.current && password_ref.current){
            if(username_ref.current.value == "test_user"){
                if(password_ref.current.value == "1234"){

                    userSetup(username_ref.current.value, password_ref.current.value); 

                    // toast for login success information
                    toast.success('Login successfully', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        
                        setTimeout(()=> navigate("/user"),2000)
                       
                }else {
                    toast.error('The password that you\'ve entered is incorrect', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            }else{
                toast.error('The username that you\'ve entered is incorrect', {
                    position: "top-center",
                    autoClose: 4000,
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
        <div id="loginWrap">
            <div className='loginForm'>
                <p>Use following default username and password for login.</p>
                <ul>
                    <li>username : <b>test_user</b></li>
                    <li>password: <b>1234</b></li>
                </ul>
                <form className='formWrap'>
                    <input ref={username_ref} type="text" placeholder='Input User Name'/>
                    <input ref={password_ref} type="password" placeholder='Input Password'/>
                    <button onClick={loginBtn}>Login</button>
                </form>
                <button onClick={cancelBtn} id='close'>X</button>
            </div>
            
            <ToastContainer
                position="top-center"
                autoClose={4000}
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
};

export default Login;