import React from 'react'

function Signup() {
  return (
    <>
      <h3>Signup</h3>
      <form>
      <label>
        <p>Email:</p>
        <input type="text" />
      </label>
      <label>
        <p>Password:</p>
        <input type="password" />
      </label>
      <label>
        <p>Retype password:</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Signup now</button>
      </div>
    </form>
    </>
  )
}

export default Signup