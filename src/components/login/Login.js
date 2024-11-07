import './login.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='principal'>
      <form className='formulariol' action="" method="post">
  <div class="imgcontainer">
    <img  alt="Avatar" class="avatar"></img>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>

    <button type="submit">Login</button>
   
  </div>

  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
    <span class="psw">¿No tienes cuenta? <Link to='/signup'>Registrarse?</Link></span>
  </div>
</form>
    </div>
  )
}

export default Login
