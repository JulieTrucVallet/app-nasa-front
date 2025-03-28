import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
//import { useNavigate } from 'react-router'

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token) {
            setIsAuthenticated(true)
        }
    }, [])

    const handleLogin = async (e, email, password) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:8010/login`, { email, password })
            if(response.status === 200){
                setIsAuthenticated(true)
                alert(response.data.message)
                //useNavigate('/')
            }
        }
        catch (err) {
            console.log(err)
            if (err) {
                alert(err.response.data)
            }
        }
    }

    const handleLogout = async () => {
        try{
            localStorage. removeItem('token')
            setIsAuthenticated(false)
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}