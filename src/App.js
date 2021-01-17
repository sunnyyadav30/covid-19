import './App.css';
import React,{useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import MostCases from './components/MostCases'
import MostDeath from './components/MostDeath'
import MostRecovered from './components/MostRecovered'
import MostPopulated from './components/MostPopulated'

function App() {
  const [data,setData] = useState({})
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch('https://covid-api.mmediagroup.fr/v1/cases/')
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      setLoading(false)
      setData(res)
    })
    .catch(err=>{
      setLoading(false)
      alert("Something went wrong!\nPlease try later.")
      setData(err)
    })
  },[])
  return (
    <Router basename={'/covid-info'}>
      <Switch>
        <Route path="/mostinfected">
          <div className="App">
            <Header />
            <MostCases countryDetails={data} loading={loading}/>
          </div>
        </Route>
        <Route path="/mostrecovered">
          <div className="App">
            <Header />
            <MostRecovered countryDetails={data} loading={loading}/>
          </div>
        </Route>
        <Route path="/mosttdeths">
          <div className="App">
            <Header />
            <MostDeath countryDetails={data} loading={loading}/>
          </div>
        </Route>
        <Route path="/mostpopulated">
          <div className="App">
            <Header />
            <MostPopulated countryDetails={data} loading={loading}/>
          </div>
        </Route>
        <Route path="/worldmap">
          <div className="App">
            <Header />
            <Home countryDetails={data} loading={loading}/>
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <Header />
            <Home countryDetails={data} loading={loading}/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;