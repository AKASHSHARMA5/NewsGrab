/*
import React, { Component } from 'react'
import loading from "./loading.gif"
export class Spinner extends Component() {
  render(){
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" style={{width:"60px"}}/>
      </div>
    )
  }
}

export default Spinner
*/
//we can change our Spinner which is a class based component into a function based component because function based component is easier than class based component


import React from 'react'
import loading from "./loading.gif"
//import { render } from '@testing-library/react'
const Spinner =()=> {
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" style={{width:"60px"}}/>
      </div>
    )
  
}

export default Spinner
