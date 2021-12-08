
import React, { useState} from "react";
import axios from "axios";
//import Todos from "./components/Task/task";
import Todos from "./../src/components/tasks";
import { login } from "./reducers/login";
import { useDispatch, useSelector } from "react-redux";



const BASE_URL = process.env.REACT_APP_BASE_URL;

const App =()=> {

  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();


  //register state
  const [email ,setEmail] =useState("");
  const [password ,setPassword] =useState("");
  // login state
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  //register function when i click button sign-in it return response 
  const register =async () => {
const result= await axios.post(`${BASE_URL}/signup`,{
email,
password,

})
console.log(result)

}


  //register function when i click login button it return response
  const log =async () => {
    try {
    const result= await axios.post(`${BASE_URL}/login`,{
    email:logEmail,
    password:logPassword,
    
    })
   
   const data = {
      user: result.data.result,
      token: result.data.token,
    };

    dispatch(login(data));
  } catch (error) {
    console.log(error);
  }
};
 

return (
  <>
    {!state.signIn.token ? (
      <>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        <br />
        <hr />
        <input
          type="email"
          placeholder="logEmail"
          name="logEmail"
          onChange={(e) => setLogEmail(e.target.value)}
        />
        <input
          type="password"
          name="logPassword"
          placeholder="logPassword"
          onChange={(e) => setLogPassword(e.target.value)}
        />
        <button onClick={log}>Login</button>
      </>
    ) : (
      <Todos />
    )}
  </>
);
};

export default App;
