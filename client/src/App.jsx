
import './App.css'

import { Route,Routes } from 'react-router'
import Navbar from './Components/Navbar'
import ToDoList from './Pages/ToDoList'
import About from './Pages/About'
import Explore from './Pages/Explore'
import ContactUs from './Pages/ContactUs'
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/to-do-list" element={<ToDoList/>} />
        <Route path="about" element={<About/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default App
