import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
   function logoutHandler (){
    window.location.reload()
   }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">LogO</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Dashboard</Link>
                        <Link className="nav-link" to="product">Product</Link>
                        {/* <p className="nav-link" onClick={logoutHandler}>Product</p> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar