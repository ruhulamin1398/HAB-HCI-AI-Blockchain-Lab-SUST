import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import router from './route.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './Home.jsx'
import People from './People.jsx'
import Publications from './Publications.jsx'
import About from './About.jsx'
import Layout from './Layout.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}    >
      <Route path='' element={ <Home/>} />
          <Route path='people' element={ <People/>} />
          <Route path='about' element={ <About/>} />
          <Route path='publications' element={ <Publications/>} />
      </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider 
router = {router}
/> 
  </React.StrictMode>,
)
