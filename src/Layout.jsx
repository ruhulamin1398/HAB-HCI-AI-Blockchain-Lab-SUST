 import React from 'react';
import Nav from './Componenets/Nav';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFoo } from './features/fooSlice';
 
 function Layout() {

    function initialFoo(){
        const dispatch = useDispatch()
        dispatch(updateFoo('project'))
        


    }
    return (
      
        <>
        { initialFoo()}
        <Nav/>
        <Outlet />
     
        </>

    );
 }
 
 export default Layout;