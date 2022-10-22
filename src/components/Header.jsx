import React from 'react'
import logoImage from "../img/logo.png"

function Header() {
  return (
    <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <img src={logoImage} alt=""/>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header