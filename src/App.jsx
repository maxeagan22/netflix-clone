import Home from './pages/Home/HomePage'
import Login from './pages/Login/LoginPage'
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App; 

