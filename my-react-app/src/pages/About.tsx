import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'

const About = () => {
  return (
    <>

    <div style={boxStyle}><h3>About page</h3></div>
    <div style={boxStyle}>
    <p>We are a group of students from Medieinstitutet in Gothenburg. We plan to build a flower webshop based on React, Typescript & Vite.</p>

    </div>
    </>
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

export default About