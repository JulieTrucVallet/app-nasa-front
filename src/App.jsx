import axios from 'axios'
import { useEffect } from 'react'
import './App.css'
import MyMapComponent from './components/Map'

function App() {

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
  fetchAPI();
}, [])

  return (
    <>
      <h1>Welcome</h1>
      <MyMapComponent />
    </>
  )
}

export default App
