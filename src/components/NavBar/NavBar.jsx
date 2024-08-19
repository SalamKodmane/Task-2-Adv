import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [navOpen , setnavOpen] = useState(false)

  return (
   <>
   <nav className='SK-NavBar'>
    <h1>VILLA</h1>
    <div>
    <FontAwesomeIcon icon={faBars} className='Bars-Icon' onClick={() =>{ setnavOpen(!navOpen); }} />
    </div>
     <ul className = {navOpen ? "open" : "" }>
        <li><a className='SK-listItem' href="#Home">Home</a></li>
        <li><a className='SK-listItem' href="#Properties">Properties</a></li>
        <li><a className='SK-listItem' href="#PropertyDetails">Property Details</a></li>
        <li><a className='SK-listItem' href="#ConatactUs">Conatact Us</a></li>
        <li className='SK-BtnlistItem' >
          <button className='SK-Btn'>
            <div className='SK-NavBtn'>
            <FontAwesomeIcon icon={faCalendar} className='SK-NavIcon' />
            </div>
            <span className='SK-BtnText'>Schedule a visit</span>
          </button>
        </li>
     </ul>
   </nav>
   </>
  )
}

export default NavBar
