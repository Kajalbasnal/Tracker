
import './App.css'

import { Route,Routes } from 'react-router'
import Navbar from './Components/Navbar'
import ToDoList from './Pages/ToDoList'
import Explore from './Pages/Explore'
import Calculator from './Pages/Calculator'
import Timer from './Pages/Timer'
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/to-do-list" element={<ToDoList/>} />
        <Route path="/timer" element={<Timer/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/calculator" element={<Calculator/>} />
      </Routes>
    </div>
  )
}

export default App
