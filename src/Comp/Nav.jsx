import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from 'react-router-dom';
import { CiLogout, CiUser} from 'react-icons/ci';
import { MdLocalShipping } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import './nav.css'


  
export default function Nav({search,setSearch,searchpro}) {

  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

  return (
    <>
        
        <div className='header d-none d-lg-block'>
        <div className='top_header'>
            <div className='icon'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
        <div className='mid_header'>
          <div className='logo'>
            <img src='image/logo.webp' alt='logo'></img>
          </div>
          <div className='search_box'>
            <input type='text' value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='searh' ></input>
            <button onClick={ searchpro}><AiOutlineSearch /></button>
          </div>
          {
            isAuthenticated ? 
            // if user is login then Logout Button will shown and also user profile         
            <div className='user'>
              <div className='icon'>
                <CiLogout />
                <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</span>
              </div>
              
            </div>
          :
          // if user is not Login then login button will shown
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
              <span onClick={() => loginWithRedirect()}>Login</span>

            </div>
            
          </div>
          }
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
              // User Profile Will Shown Here
              isAuthenticated ?
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
              <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <p>Please Login</p>
              </div>
              </>
            }
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/cart' className='link'>Cart</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
          </div>
          <div className='offer'>
            <p>flat 10% over all iphone</p>
          </div>
        </div>
    </div>

    <nav className="navbar bg-body-tertiary d-lg-none mb-4  fixed-top">
      <div className="container-fluid">
      <div className='logo'>
            <img src='image/logo.webp' alt='logo'></img>
          </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">

          <div className='user_profile'>
            {
              // User Profile Will Shown Here
              isAuthenticated ?
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
              <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <p>Please Login</p>
              </div>
              </>
            }
          </div>
          {
            isAuthenticated ? 
            // if user is login then Logout Button will shown and also user profile         
            <div className='user 	'>
              <div className='icon text-white mx-5'>
                <CiLogout />
              <span className='text-white ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</span>
              </div>
              
            </div>
          :
          // if user is not Login then login button will shown
          <div className='user'>
            <div className='icon text-white mx-5 '>
              <FiLogIn />
              <span onClick={() => loginWithRedirect()} className='text-white'>Login</span>
            </div>
            
          </div>
          }
          <button type="button" class="btn-close  text-bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className='my-3'><Link to='/' className='link'>Home</Link></li>
              <li className='my-3'><Link to='/shop' className='link'>Shop</Link></li>
              <li className='my-3'><Link to='/cart' className='link'>Cart</Link></li>
              <li className='my-3'><Link to='/contact' className='link'>Contact</Link></li>         
              
            </ul>
            <div className='search_box '>
            <input type='text' value={search} className='mt-5 w-50' onChange={(e)=> setSearch(e.target.value)} placeholder='searh' ></input>
            <button onClick={ searchpro}><AiOutlineSearch /></button>
          </div>
          </div>
        </div>
      </div>
    </nav>



        
        </>
  )
}
