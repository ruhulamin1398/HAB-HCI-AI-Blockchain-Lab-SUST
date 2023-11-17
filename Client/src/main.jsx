import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import router from './route.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { Provider } from 'react-redux'
import About from './About.jsx'
import Login from './Componenets/Account/Login.jsx'
import SingUp from './Componenets/Account/SingUp.jsx'
import AddPublications from './Componenets/AddPublication/AddPublications.jsx'
import Authors from './Componenets/Authors/Authors.jsx'
import SinglePublication from './Componenets/SinglePublication/SinglePublication.jsx'
import UserProfile from './Componenets/UserProfile/UserProfile.jsx'
import PeopleDetails from './Componenets/people/PeopleDetails.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import Layout from './Layout.jsx'
import People from './People.jsx'
import Projects from './Projects.jsx'
import Publications from './Publications.jsx'
import ResearchArea from './ResearchArea.jsx'
import { store } from './app/store.js'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}    >
      <Route path='' element={<Home />} />
      <Route path='people' element={<People />} />
      <Route path='people/:name' element={<PeopleDetails />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SingUp />} />
      <Route path='userProfile' element={<UserProfile />} />
      <Route path='project' element={<Projects />} />
      <Route path='publications' element={<Publications />} />
      <Route path='singlePublication/:id' element={<SinglePublication />} />
      <Route path='userdetails/:name' element={<Authors />} />
      <Route path='research-area' element={<ResearchArea />} />
      <Route path='AddPublication' element={<AddPublications />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider
      router={router}
    />
  </Provider>

)
