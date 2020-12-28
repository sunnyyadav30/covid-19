import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export const Header = () => {

    return (
        <div className="header">
            <div className="left-header">
                <Link to="/">
                    <h2>Covid-19</h2>
                </Link>
            </div>
        </div>
    )
}

export default Header