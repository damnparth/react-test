import React from "react";
import { useState } from "react";
function SignUp() {
    const [username, setUsername] =useState();
    
    return(
   <form>
    <input type="text" placeholder="enter username" />
    <input type="email" placeholder="enter email" />
    <input type="password" placeholder="enter password" />
    <input type="password" placeholder="comfirm password" />
   </form>
   )
  }
  
  export default SignUp;
  