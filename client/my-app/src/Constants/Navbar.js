import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = ()=>{
    return (
        <div>
            <ul>
                <li ><Link to={'/'} className='text-link'>Main</Link></li>
                <li><Link to={'/Blogs'} className='text-link' >Blogs</Link></li>
                <li><Link to={'/SignIn'}className='text-link'>SignIn</Link></li>
                <li><Link to={'/SignUp'}className='text-link'>SignUp</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;