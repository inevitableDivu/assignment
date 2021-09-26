import React from 'react'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
                            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span
                                className="icon-bar"></span> <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Rew Aud!</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
