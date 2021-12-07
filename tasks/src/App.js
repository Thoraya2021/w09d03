import React, { useState} from "react";
import axios from "axios";
import './App.css';



const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  //register 
  const [email ,setEmail] =useState("");
  const [password ,setPassword] =useState("");

  const register =async () => {
const result= await axios.post(`${BASE_URL}/signup`,{
email,
password,

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
    </div>
  );
  
  }
export default App;
