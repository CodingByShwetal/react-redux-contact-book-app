import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddContact from './AddContact'
import EditContact from './EditContact'
import ViewContacts from './ViewContacts'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Contact Book </h1>
        <Routes>
            <Route exact path="/" element= {<ViewContacts/>}/>
            <Route exact path="/addcontact" element = {<AddContact />} />
            <Route exact path="/editcontact/:id" element = {<EditContact />} />
        </Routes>
    </div>
  )
}

export default Home
