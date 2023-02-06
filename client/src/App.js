import React from 'react'
import Messenger from './pages/Messenger/Messenger'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <Router>
     <div>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/messenger' exact element={<Messenger/>}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
