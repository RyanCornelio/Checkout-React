import React from 'react'
import { Products } from '../components/productList';
import { CSSProperties } from '@material-ui/core/styles/withStyles'

/* for eller map för listan */

console.log(Products);

const Store = () => {
  return (
    <>

    <div style={boxStyle}><h3>Store page</h3></div>
    <div style={boxStyle}>
    <p>See our products here.</p>

    </div>
    </>
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

export default Store