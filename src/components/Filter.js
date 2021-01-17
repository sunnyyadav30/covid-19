import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'

const Filter = ({optionName}) => {
    const filterOptions = useRef()
    const filterOption = useRef()
    // const [optionName,setOptionName] = useState()
    const [isOptionsVisible,setIsOptionVisible] = useState(false)
    
    const toggleMenu = (e)=>{
        e.preventDefault()
        if(window.innerWidth<768){
            if(!isOptionsVisible){
                setIsOptionVisible(true)
                filterOptions.current.style.display = "flex"
            }
            else{
                setIsOptionVisible(false)
                filterOptions.current.style.display = "none"
            }
        }
    }
    return (
        <div className="home__filter">
            <div className="home__filter__label">
                <span onClick={toggleMenu}>Sort country by</span>
            </div>
            <div className="home__filter__options" ref={filterOptions}>
                <Link to="/" className={`home__filter__option ${ optionName==="home" ? "active" : ""}`} ref={filterOption}>Alphbetical order</Link>
                <Link to="/mostinfected" className={`home__filter__option ${ optionName==="mostcases" ? "active" : ""}`} ref={filterOption}>Most covid cases</Link>
                <Link to="/mostrecovered" className={`home__filter__option ${ optionName==="mostRecovered" ? "active" : ""}`} ref={filterOption}>Most Recovered cases</Link>
                <Link to="/mosttdeths" className={`home__filter__option ${ optionName==="mostDeath" ? "active" : ""}`} ref={filterOption}>Most death cases</Link>
                <Link to="/mostpopulated" className={`home__filter__option ${ optionName==="mostPopulted" ? "active" : ""}`} ref={filterOption}>Most Populated</Link>
            </div>
        </div>
    )
}

export default Filter
