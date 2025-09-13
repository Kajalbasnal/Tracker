
import './App.css'

import { Route,Routes } from 'react-router'
import Navbar from './Components/Navbar'
import ToDoList from './Pages/ToDoList'
import Notes from './Pages/Notes'
import Progress from './Pages/Progress'
import Timer from './Pages/Timer'
import Home from './Pages/Home'
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/to-do-list" element={<ToDoList/>} />
        <Route path="/timer" element={<Timer/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/progress" element={<Progress/>} />
      </Routes>
    </div>
  )
}

export default App
