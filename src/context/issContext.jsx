import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const ISSContext = createContext(null)

export const ISSController = ({children}) => {
    const [positionX, setPositionX] = useState(null)
    const [positionY, setPositionY] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  
    const fetchPosition = async () => {
      try {
        const response = await axios.get(`http://localhost:8010`)
        if (response.status === 200) {
          setServices(response.data)
        }
      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
    }
  
    useEffect(() => {
      fetchPosition()
    }, [])
   
    return(
        <ISSContext.Provider value={{positionX, setPositionX, positionY, setPositionY}}>
            {!loading && children}
        </ISSContext.Provider>
    )
}