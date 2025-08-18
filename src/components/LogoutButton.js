import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

export default function LogoutButton() {
    const {logout, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
        <button onClick={() => logout()}> Sign Out </button>
    )
  )
}
