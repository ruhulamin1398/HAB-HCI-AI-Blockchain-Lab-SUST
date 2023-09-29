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
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import ResearchArea from './ResearchArea.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import PeopleDetails from './Componenets/people/PeopleDetails.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}    >
      <Route path='' element={ <Home/>} />
          <Route path='people' element={ <People/>} />
          <Route path='people/:name' element={<PeopleDetails/>} />
          
          <Route path='project' element={ <Projects/>} />
          <Route path='publications' element={ <Publications/>} />
          <Route path='research-area' element={ <ResearchArea/>} />
          <Route path='about' element={ <About/>} />
          <Route path='contact' element={ <Contact/>} />
      </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={store}>
<RouterProvider 
router = {router}
/> 
</Provider>

)
