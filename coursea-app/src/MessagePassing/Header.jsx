import React from 'react'
import Wrapper from './Wrapper'
import Button from './Button'

function Header(props) {
  return (
    <div style={{ border: "10px solid whitesmoke" }}> 
    <h1>Header here</h1> 
    <Wrapper msg={props.msg} /> 
  </div> 
  )
}

export default Header