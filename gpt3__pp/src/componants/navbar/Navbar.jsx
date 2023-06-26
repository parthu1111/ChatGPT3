import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
import logo from "../../Assests/GPT-3.svg";

const Menu=()=>(
  <>
    <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT-3?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
  </>
)
const Navbar = () => {

  const [toggleMenu,setToggleMenu]=useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gp3__navbar-links_logo'>
          <img src={logo} alt='gpt-3'/>
        </div>
        <div className='gpt3__navbar-links_container'>
        <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        {
          toggleMenu?<RiCloseLine size={27} color='#fff' onClick={()=>setToggleMenu(false)} />:
          <RiMenu3Line size={27} color='#fff' onClick={()=>setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='gpt3__navbar-menu_container'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu/>
                <div className='gpt3__navbar-menu_container-links_sign'>
                  <p>Sign In</p>
                  <button>Sign Up</button>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>

  )
}

export default Navbar