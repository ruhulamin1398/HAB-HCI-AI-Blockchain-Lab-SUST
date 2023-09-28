 import React from 'react';
import Nav from './Componenets/Nav';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFoo } from './features/fooSlice';
import HomeHero from './Componenets/HomeHero';
import Nav2 from './Componenets/nav2';
import './assets/customjs'
 
 
 function Layout() {


    


 


    const currentPath = window.location.pathname;
 
 
    return (
      
        <>
 
 

        <Outlet />
     
        </>

    );
 }
 
 export default Layout;