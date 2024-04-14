import React, { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './Appwrite/auth'
import {login, logout} from './store/authSlice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect((userData) => {
    authService.getCurrUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false))
    
  }
  ,[])

  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
      {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  </div>) : null 
}

export default App
