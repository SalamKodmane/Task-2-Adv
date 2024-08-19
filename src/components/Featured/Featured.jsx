
import './Featured.css'

function Featured() {
  return (
    <>
     <div className="SK-FeaturedSection">
        <div className='SK-FeaturedImg'>
           <img src='/assets/img/featured.jpg' alt="Featured Image" />
              <div className='SK-FeaturedIcon'>
                <img src='/assets/img/featured-icon.png' alt="Featured Icon" />
              </div>
        </div>
        <div className='SK-FeaturedTitle'>
          <div className='FEATURED-title'>
          <p>FEATURED</p>
          <h2>Best Appartment & Sea View</h2>
          </div>
          <div className='SK-Questions'>
          <p className='Question1'>Best useful links ?</p>
          <p className='Answer1'>Get <b>the best villa </b> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the.
          <span  className='Answer-span'>best free CSS templates</span> in the world.
          Please tell your friends about it.</p>
          <p className='Question2'>How does this work?</p>
          <p>Why is Villa Agency the best?</p>
          </div>
          </div>
        <div className='SK-FeaturedCard'>
          <div className='SK-FeaturedCard-Content'>
            <img src='/assets/img/info-icon-01.png' alt="Featured Icon" />
            <div className='SK-FeaturedDetails'>
              <h4>250 m2</h4>
              <p>Total Flat Space</p>
              </div>
          </div>
          <div className='SK-FeaturedCard-Content'>
            <img src='/assets/img/info-icon-02.png' alt="Featured Icon" />
            <div className='SK-FeaturedDetails'>
              <h4>Contract</h4>
              <p>Contract Ready</p>
              </div>
          </div>
          <div className='SK-FeaturedCard-Content'>
            <div className='SK-FeaturedCardImg'>
            <img src='/assets/img/info-icon-03.png' alt="Featured Icon" />
            <p>Process</p>
            </div>
            <div className='SK-FeaturedDetails'>
              <h4>Payment</h4>
              <p>Payment</p>
              </div>
          </div>
          <div className='SK-FeaturedCard-Content'>
          <div className='SK-FeaturedCardImg'>
            <img src='/assets/img/info-icon-04.png' alt="Featured Icon" />
            <p>Control</p>
            </div>
            <div className='SK-FeaturedDetails'>
              <h4>Safety</h4>
              <p>24/7 Under</p>
              </div>
          </div>

        </div>
    </div>
     
    </>
  )
}

export default Featured
