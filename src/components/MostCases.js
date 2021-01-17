import React from 'react'
import CountryList from './CountryList'
import Filter from './Filter'

export const MostCases = ({countryDetails,loading}) => {
    let data = []
    for(let key in countryDetails){
        if(countryDetails[key].All.country){
            data.push(countryDetails[key])
        }
    }
    let mostPopulated = data.sort((a,b)=>b.All.confirmed-a.All.confirmed)
    let uniqueMostPopulated = [...new Set(mostPopulated)]
    return (
        <div className="home">
            <Filter  optionName="mostcases"/>
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

export default MostCases