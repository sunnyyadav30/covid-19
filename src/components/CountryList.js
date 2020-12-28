import React from 'react'
import './CountryList.css'

export const CountryList = ({countryDetail}) => {
    return (
        <div className="country__details">
            <div className="country__top">
                <div className="country__name country__detail"><small>Country - </small><strong>{countryDetail.country}</strong></div>
                <div className="country__capital country__detail"><small>Capital - </small><strong>{countryDetail.capital_city}</strong></div>
                <div className="country__population country__detail"><small>Population - </small><strong>{countryDetail.population}</strong></div>
            </div>
            <div className="country__bottom">
                <div className="country__cases country__detailCol">
                    <small>Infected</small>
                    <strong>{countryDetail.confirmed}</strong>
                </div>
                <div className="country__recovered country__detailCol">
                    <small>Recovered</small>
                    <strong>{countryDetail.recovered}</strong>
                </div>
                <div className="country__deaths country__detailCol">
                    <small>Deaths</small>
                    <strong>{countryDetail.deaths}</strong>
                </div>
            </div>
        </div>
    )
}

export default CountryList