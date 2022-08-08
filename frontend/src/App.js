import React from 'react'
import './App.css'
import CreateUser from './CreateUser'
import PoolManager from './PoolManager'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowEmployees from './ShowEmployees'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<CreateUser />} />
            <Route exact path='/poolManager' element={<PoolManager />} />
            <Route exact path='/showEmployees' element={<ShowEmployees />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
