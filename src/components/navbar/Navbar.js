import { Outlet, Link } from 'react-router-dom';
import '../../styles/Navbar.scss';

const Navbar = () => {
    return (  
        <header className='navbar'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='contact'>Contact</Link>
                <Link to='aboutus' >About Us</Link>
            </nav>
            <Outlet />
        </header>
    );
}
 
export default Navbar;