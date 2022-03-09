import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './style.scss'; 

function Header() {

    const {user, userSetup } = useContext(userContext); 

    let trigerBool = false; 

    const loginBtn=()=>{
        (document.getElementById("loginWrap") as HTMLFormElement).style.animationName = "come"; 
        (document.getElementById("loginWrap") as HTMLAnchorElement).style.right = "0px"
    }

    const logOutBtn=()=>{
        userSetup("", "")
    }

    const dropDownMenu=()=>{
        trigerBool = !trigerBool; 

        if(trigerBool){
            (document.getElementById("menu_2") as HTMLBRElement).style.display = "block"; 
        }else{
            (document.getElementById("menu_2") as HTMLBRElement).style.display = "none"; 
        }
    }

    return (
        <div id="header">
            <div className='headerWrap'>
                <div className='logoWrap'>
                    <Link to="/" >
                        <img src={require('./img/logo.png')}/>  
                    </Link>
                <p>Website short description</p>
                </div>
                <div className='menuWrap'>
                    <div className='loginWrap'>
                        
                        {/* REMOVE LOGIN BUTTON IF USER LOGIN*/}
                        {user.username ? <button onClick={dropDownMenu} className='avatar'><img src={require('./img/apple.png')}/>
                        <ul id='menu_2'>
                            <li><Link to="/user">Dashbarod</Link></li>
                            <li onClick={logOutBtn}>Logout</li>
                        </ul>
                        </button> :
                        <button onClick={loginBtn} className='loginBtn'>Login</button>
                        }                   
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;