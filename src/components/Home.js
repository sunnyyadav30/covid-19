import React from 'react'
import CountryList from './CountryList'
import './Home.css'
import Filter from './Filter'

export const Home = ({countryDetails,loading}) => {
    let data = []
    for(let key in countryDetails){
        if(countryDetails[key].All.country){
            data.push(countryDetails[key])
        }
    }

    return (
        <div className="home">
            <Filter optionName="home"/>
            <div className="home__container">
                {
                    !loading ? data.map((countryDetail,index)=>(
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

export default Home