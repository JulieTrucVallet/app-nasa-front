import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/authContext.jsx';

const NavBar = () => {
//    const {positionY, setPositionY, positionX, setPositionX} = useContext(ISSContext);
    const {isAuthenticated, setIsAuthenticated, handleLogout} = useContext(AuthContext);

    return (
        <>
            <h1>Hello, the ISS is here!</h1>
            <ul className='bg-gray-500 flex justify-center space-x-4'>
                <Link to='/'><li>Home</li></Link>
                {!isAuthenticated ? (
                    <>
                        <Link to='/register'><li>Register</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                    </>
                )

                    : (
                        <>
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