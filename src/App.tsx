import React, { createContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import User from './component/Dashboard/User';
import { fakeData } from './component/FakeData/FakeData';
import Home from './component/Home/Home';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

type Post = {
  title: string;
  des: string;
}

type UserType = {
  username: string;
  userpass: string
}

type ctxType_user = {
  user: UserType,
  userSetup: (u:string, p:string)=> void
}

type ctxType_post = {
  post: Post[],
  postValueSet: (t:string, d:string)=> void
}

export const userContext = createContext({} as ctxType_user);
export const postContext = createContext({} as ctxType_post);

function App() {

  const [user, setUser] = useState<UserType>({
    username: "", 
    userpass: ""
  });

  const [post, setPost] = useState<Post[]>(fakeData);

  // create function for setPost value
  const postValueSet = (pTitle:string, pDes:string)=>{

    setPost([...post, {title: pTitle, des: pDes}]); 

  }

  // create function for setUser value
  const userSetup=(userL: string, passL: string)=>{

    setUser({username: userL, userpass : passL}); 

  }

  return (
    <userContext.Provider value={{user, userSetup}}>
    <postContext.Provider value={{post, postValueSet}}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<User />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </postContext.Provider>
    </userContext.Provider>
  );
}

export default App;
