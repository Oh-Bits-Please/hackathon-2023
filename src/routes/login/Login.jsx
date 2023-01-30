import React from "react";

function Login() {

  return (
    <>
      <h3>Login</h3>
      <form>
      <label>
        <p>Email:</p>
        <input type="text" />
      </label>
      <label>
        <p>Password:</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Login now</button>
        <p>Need an account? Sign up here.</p>
      </div>
    </form>
    </>
  );
}

export default Login;
