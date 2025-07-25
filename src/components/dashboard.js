import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <header className="App-header">
        <img
          src="https://mofstaging.devshield.cloud/favicon.png"
          className="App-logo"
          alt="logo"
        />
        <p>
        <b>Nonprofit Fundraiser's Insider Playbook</b>
        </p>
        <a
          className="App-link"
          href="https://leip-id.us.auth0.com/u/login?state=hKFo2SAxZEZaSkMtdm15cVl4ZlJvWnNjaWFwZ3hOdEtxaHh3R6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHhrQzlOSTdlM0NWMlBBRktnNkZGZ0tXNExwUWcyTFJDo2NpZNkgOWRyS05zdUpWdDFWOXkwaFp3VGhRd05FY0dCOTJvcWc"
          target="_blank"
        >
          Log In
        </a>
        {/* <br/> */}
         <p style={{fontSize : '20px'}}>Don't have an account? <a className="sign-up"
          href="https://leip-id.us.auth0.com/u/login?state=hKFo2SAxZEZaSkMtdm15cVl4ZlJvWnNjaWFwZ3hOdEtxaHh3R6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHhrQzlOSTdlM0NWMlBBRktnNkZGZ0tXNExwUWcyTFJDo2NpZNkgOWRyS05zdUpWdDFWOXkwaFp3VGhRd05FY0dCOTJvcWc"
          target="_blank">Sign Up</a></p>
      </header> 
    </>
  )
}
