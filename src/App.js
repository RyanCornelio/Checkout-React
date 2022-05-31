import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import ProductCards from './Components/Cards/ProductCards'

export default function App() {
  return (
    <Grid container>
    <Navbar/>
    <Outlet/>
    </Grid>
  )
}

