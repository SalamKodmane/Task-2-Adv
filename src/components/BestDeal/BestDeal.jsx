import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import './BestDeal.css'

function BestDeal() {
  return (
    <>
    <div className="SK-BestDealSection">
        <div className='SK-BestDeal'>
            <div className='BestDeal-title'>
              <p>BEST DEAL</p>
              <h2>Find Your Best Deal Right Now!</h2>
            </div>
            <div className='SK-DealButtons'>
                <button className='SK-DealButton'>Appartment</button>
                <button className='SK-DealButton'>Villa House</button>
                <button className='SK-DealButton'>Penthouse</button>
            </div>
        </div>
        <div className='SK-DealCard'>
        <div className='SK-FeaturedCard DealCard'>
          <div className='SK-DealCard-Content'>
            <div className='DealCard-Details'>
              <span>Total Flat Space</span>
              <b> 185 m2</b>
              </div>
          </div>
          <div className='SK-DealCard-Content'>
            <div className='DealCard-Details'>
              <span>Floor Number</span>
              <b>26th</b>
              </div>
          </div>
          <div className='SK-DealCard-Content'>
            <div className='DealCard-Details'>
              <span>Number Of Rooms</span>
              <b>4</b>
              </div>
          </div>
          <div className='SK-DealCard-Content'>
            <div className='DealCard-Details'>
              <span>Parking Available</span>
              <b>Yes</b>
              </div>
          </div>
          <div className='SK-DealCard-Content'>
            <div className='DealCard-Details'id='Deal-Lastchild'>
              <span>Payment Process</span>
              <b>Bank</b>
              </div>
          </div>
          
        </div>
            <div className='SK-BestDealImg'>
              <img src='/assets/img/deal-01.jpg' alt="Deal Image" />
            </div>
            <div className='SK-DealInfo'>
               <h5>Extra Info About Property</h5>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis mollitia dolorem nobis laborum porro dolore aliquam modi voluptatibus, velit doloremque dignissimos dolorum, ullam expedita at.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quidem. Sed aperiam iusto hic. Cumque atque sequi eius incidunt 
                laboriosam perspiciatis quis et 
                perferendis ratione sit, maxime beatae, ex doloribus!</p>
                <button className="SK-Btn">
                <div className="SK-NavBtn">
                <FontAwesomeIcon icon={faCalendar} className='SK-NavIcon' />
                </div>
                    <span className="button-text">Schedule a visit</span>
                </button> 
            </div>

        </div>

    </div>

    </>
  )
}

export default BestDeal
