import React from 'react'
import CountryList from './CountryList'
import {Link} from 'react-router-dom'

export const MostRecovered = ({countryDetails,loading}) => {
    let data = []
    for(let key in countryDetails){
        if(countryDetails[key].All.country){
            data.push(countryDetails[key])
        }
    }
    let mostPopulated = data.sort((a,b)=>b.All.recovered-a.All.recovered)
    let uniqueMostPopulated = [...new Set(mostPopulated)]
    return (
        <div className="home">
            <div className="home__filter">
                <div className="home__filter__label">
                    <span>Sort country by</span>
                </div>
                <div className="home__filter__options">
                    <Link to="/">
                        <div className="home__filter__option" style={{backgroundColor:'#e0f2f1',color:"#000"}}>
                            <input type="radio" name="filter" id="alphaOrder" value="alphaOrder"/>
                            <label htmlFor="alphaOrder">Alphbetical order</label>
                        </div>
                    </Link>
                    <Link to="/mostinfected">
                        <div className="home__filter__option" style={{backgroundColor:'#e0f2f1',color:"#000"}}>
                            <input type="radio" name="filter" id="mostCases" value="mostCases"/>
                            <label htmlFor="mostCases">Most covid cases</label>
                        </div>
                    </Link>
                    <Link to="/mostrecovered">
                        <div className="home__filter__option" style={{backgroundColor:'#00897b',color:"#fff"}}>
                            <input type="radio" name="filter" id="mostRecovered" value="mostRecovered"/>
                            <label htmlFor="mostRecovered">Most Recovered cases</label>
                        </div>
                    </Link>
                    <Link to="/mosttdeths">
                        <div className="home__filter__option" style={{backgroundColor:'#e0f2f1',color:"#000"}}>
                            <input type="radio" name="filter" id="mostDeath" value="mostDeath"/>
                            <label htmlFor="mostDeath">Most death cases</label>
                        </div>
                    </Link>
                    <Link to="mostpopulated">
                        <div className="home__filter__option" style={{backgroundColor:'#e0f2f1',color:"#000"}}>
                            <input type="radio" name="filter" id="mostPopulated" value="mostPopulated"/>
                            <label htmlFor="mostPopulated">Most Populated</label>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="home__container">
                {
                    !loading ? uniqueMostPopulated.map((countryDetail,index)=>(
                        <CountryList countryDetail={countryDetail.All} key={index}/>
                    ))
                    :
                    (
                        <div className="loading">
                            <h3>Loading...</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MostRecovered