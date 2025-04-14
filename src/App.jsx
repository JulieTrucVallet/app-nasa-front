import axios from 'axios'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import './App.css'
import MyMapComponent from './components/Map'
import { AuthContext } from './context/authContext'

function App() {

  const {isAuthenticated} = useContext(AuthContext)
  const navigate = useNavigate()

  const fetchAPI = async () => {
    //const token = localStorage.getItem(`token`)
    try{
      const response = await axios.get(`http://localhost:8010`, {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(!isAuthenticated) {
        navigate('/login')
    }
    else {
        fetchAPI()
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      <h1>Welcome</h1>
      <MyMapComponent />
    </>
  )
}

export default App
