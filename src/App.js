/*
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
//import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  apikey=apikey
  state={
    progress:0
  }
  setProgress=(progress)=>{
    setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
        <Navbar />
          <LoadingBar
          height={2}
        color='#f11946'
        progress={progress}
      />
       
          //<News setProgress={setProgress} pageSize={6} country="in" category="science"/>
          <Routes>
            <Route exact path="/" element={<News api={apikey} setProgress={setProgress} key="general" pageSize={6} country="in" category="general" />} ></Route>
            <Route exact path="/business" element={<News api={apikey} setProgress={setProgress} key="business" pageSize={6} country="in" category="business" />} ></Route>
            <Route exact path="/entertainment" element={<News api={apikey} setProgress={setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" />} ></Route>
            <Route exact path="/general" element={<News api={apikey} setProgress={setProgress} key="general" pageSize={6} country="in" category="general" />} ></Route>
            <Route exact path="/health" element={<News api={apikey} setProgress={setProgress} key="health" pageSize={6} country="in" category="health" />} ></Route>
            <Route exact path="/science" element={<News api={apikey} setProgress={setProgress} key="science" pageSize={6} country="in" category="science" />} ></Route>
            <Route exact path="/sports" element={<News api={apikey} setProgress={setProgress} key="sports" pageSize={6} country="in" category="sports" />} ></Route>
            <Route exact path="/technology" element={<News api={apikey} setProgress={setProgress} key="technology" pageSize={6} country="in" category="technology" />} ></Route>
          </Routes>
        </Router>
      </>
    )
  }
}
*/
//we can change our App which is a class based component into a function based component because function based component is easier than class based component

//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
//import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const apikey = process.env.REACT_APP_MYAPI;

  const [progress, setProgress] = useState(0)
  return (
    <>
      <Router>
        <Navbar country="in" category="general" api={apikey} page="1" pageSize={6} />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />

        {/*<News setProgress={setProgress} pageSize={6} country="in" category="science"/>*/}
        <Routes>
          <Route exact path="/" element={<News api={apikey} setProgress={setProgress} key="general" pageSize={6} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News api={apikey} setProgress={setProgress} key="business" pageSize={6} country="in" category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News api={apikey} setProgress={setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" />} ></Route>
          <Route exact path="/general" element={<News api={apikey} setProgress={setProgress} key="general" pageSize={6} country="in" category="general" />} ></Route>
          <Route exact path="/health" element={<News api={apikey} setProgress={setProgress} key="health" pageSize={6} country="in" category="health" />} ></Route>
          <Route exact path="/science" element={<News api={apikey} setProgress={setProgress} key="science" pageSize={6} country="in" category="science" />} ></Route>
          <Route exact path="/sports" element={<News api={apikey} setProgress={setProgress} key="sports" pageSize={6} country="in" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News api={apikey} setProgress={setProgress} key="technology" pageSize={6} country="in" category="technology" />} ></Route>
        </Routes>
      </Router>
    </>
  )

}
export default App;