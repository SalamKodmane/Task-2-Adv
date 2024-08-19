import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMap} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './TopNavBar.css'

const TopNavBar = () => {
  return (
    <>
    <div className='SK-TopNavBar'>
        <div className='SK-InfoContact'>
        <div>
            <FontAwesomeIcon icon={faEnvelope} className='Envelope-Icon' />
            <span className='SK-Email'>info@company.com</span>
        </div>
        <div>
            <FontAwesomeIcon icon={faMap} className='Map-Icon' />
            <span>Sunny Isles Beach, FL 33160</span>
        </div>
        </div>

        <div>
            <ul className='SK-Contact'>
                <li><a href="#Facebook"><FontAwesomeIcon icon={faFacebook} className='SK-Contact-Icon'/></a></li>
                <li><a href="#Twitter"><FontAwesomeIcon icon={faTwitter} className='SK-Contact-Icon' /></a></li>
                <li><a href="#Linkedin"><FontAwesomeIcon icon={faLinkedin} className='SK-Contact-Icon' /></a></li>
                <li><a href="#Instagram"><FontAwesomeIcon icon={faInstagram} className='SK-Contact-Icon' /></a></li>
            </ul>
        </div>
       
          
            
            
    </div>
    </>
  )
}

export default TopNavBar
