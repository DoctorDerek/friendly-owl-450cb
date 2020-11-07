import React from "react"
import { AuthService, useAuth } from "gatsby-theme-auth0"

export default () => {
  const { isLoggedIn, profile } = useAuth()
  return (
    <React.Fragment>
      {profile && (
        <li key="Hello Username" className="navbar__item">
          Hello {profile.name}
        </li>
      )}
      <li key={"Login Button"} className="navbar__item">
        {isLoggedIn ? (
          <button onClick={AuthService.logout}>Logout</button>
        ) : (
          <button onClick={AuthService.login}>Login</button>
        )}
      </li>
    </React.Fragment>
  )
}
