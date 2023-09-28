 import React from 'react';
import Nav from './Componenets/Nav';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFoo } from './features/fooSlice';
import HomeHero from './Componenets/HomeHero'; 
import './assets/customjs'
import Footer from './Componenets/footer';
 
 
 function Layout() {


    


 


    const currentPath = window.location.pathname;
 
 
    return (
      
        <>
 
    <Nav/>
    <Outlet />
    <Footer/>

    
     
        </>

    );
 }
 
 export default Layout;