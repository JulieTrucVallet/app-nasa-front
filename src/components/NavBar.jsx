import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/authContext.jsx';

const NavBar = () => {
    const {isAuthenticated, setIsAuthenticated, handleLogout} = useContext(AuthContext);

    return (
        <>
            <ul className='bg-gray-500 flex justify-center space-x-4'>
                {!isAuthenticated ? (
                    <>
                        <Link to='/register'><li>Register</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                    </>
                )
                
                : (
                    <>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/profile'><li>Profile</li></Link>
                            <Link to='/logout' onClick={handleLogout}><li>Logout</li></Link>
                        </>
                    )
                    }
            </ul>
        </>
    )
}


export default NavBar  