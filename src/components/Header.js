import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import Logo from '../assets/coronavirus_logo.png'

export const Header = () => {

    return (
        <div className="header">
            <div className="left-header">
                <Link to="/">
                    <img src={Logo} alt="logo"/>
                </Link>
            </div>
        </div>
    )
}

export default Header