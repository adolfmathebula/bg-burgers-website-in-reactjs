import '../styles/Nav.Styles.css';
import { Link } from 'react-router-dom';

 const DesktopLinks = () => {
  return (
    <>
        <div className='nav-links'>
            <Link to='/'><button className="nav-btn">Home</button></Link>
            <Link to='/about'><button className="nav-btn">About Us</button></Link>
            <Link to='/specials'><button className="nav-btn">Specials</button></Link>
            <Link to='/blog'><button className="nav-btn">Blog</button></Link>
            <Link to='/login'><button className="login-btn">Login</button></Link>
        </div>
    </>
  )
}

 const MobileLinks = () => {
    return (
      <>
          <div className='nav-links-mobile'>
            <Link to='/'><button className="nav-btn">Home</button></Link>
            <Link to='/about'><button className="nav-btn">About Us</button></Link>
            <Link to='/specials'><button className="nav-btn">Specials</button></Link>
            <Link to='/blog'><button className="nav-btn">Blog</button></Link>
            <Link to='/login'><button className="login-btn">Login</button></Link>
          </div>
      </>
    )
  }


export {DesktopLinks, MobileLinks}

