import React, { useState} from "react";
import axios from "axios";
import './App.css';
import Tasks from "./components/task"



const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
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
  const login =async () => {
    const result= await axios.post(`${BASE_URL}/login`,{
    email:logEmail,
    password:logPassword,
    
    })
    console.log(result)
    
    }
     
  return (
    <div className="App">
      <div className="register">
  <input
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
       <br />
      <input
        placeholder="password"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
       <br />
      <button onClick={register}>sign-up</button>
      <br />
      </div>



      <div className="login">
  <input
        placeholder="email"
        type="text"
        onChange={(e) => setLogEmail(e.target.value)}
      />
       <br />
      <input
        placeholder="password"
        type="text"
        onChange={(e) => setLogPassword(e.target.value)}
      />
       <br />
      <button onClick={login}>login</button>
      <br />   
        <Tasks />
      </div>
    
    </div>

    
  );
  
  }
export default App;
