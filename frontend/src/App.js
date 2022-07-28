import React from 'react'
import './App.css'
import CreateUser from './CreateUser'
import PoolManager from './PoolManager'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<CreateUser />} />
            <Route exact path='/poolManager' element={<PoolManager />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
