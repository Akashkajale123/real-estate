import React from 'react'

const Page2Compo = () => {
  return (
    <div>
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <br />
          <input type="email" placeholder="Email-Address" />
          <input type="password" placeholder="password" />
        </div>
        <button>continue</button>
    </div>
  )
}

export default Page2Compo
