import Home from './pages/Home/HomePage'
import Login from './pages/Login/LoginPage'
import PlayerPage from './pages/Player/PlayerPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("Logged In");
        navigate('/')
      }
      else{
        console.log("Logged Out");
        navigate('/login')
      }
    }) 
  }, [])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/player/:id' element={<PlayerPage />} />
      </Routes>
    </div>
  )
}

export default App; 

