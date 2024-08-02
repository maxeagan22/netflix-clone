import Home from './pages/Home/HomePage'
import Login from './pages/Login/LoginPage'
import PlayerPage from './pages/Player/PlayerPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/player/:id' element={<PlayerPage />} />
      </Routes>
    </div>
  )
}

export default App; 

