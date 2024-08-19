import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'

function Hero() {
  return (
    <>
     <Carousel className='SK-sliderContainer'>
      <Carousel.Item className='Carousel-Item'>
      <div className='Carousel-Content'>
        <div className='Carousel-textbox'>
          <p>Toronto, <span> Canada</span></p>
          </div>
          <h1>HURRY! GET THE BEST VILLA FOR YOU</h1>
        </div>
        <div className='Slider-Img'>
        <img src="/assets/img/banner-01.jpg" alt="Banner1" />
        </div>
      </Carousel.Item>
      <Carousel.Item className='Carousel-Item'>
      <div className='Carousel-Content'>
        <div className='Carousel-textbox'>
          <p>Toronto,<span>Canada</span></p>
          </div>
          <h1>HURRY! GET THE BEST VILLA FOR YOU</h1>
        </div>
        <img src="/assets/img/banner-02.jpg" alt="Banner2" />
      </Carousel.Item>
      <Carousel.Item className='Carousel-Item'>
      <div className='Carousel-Content'>
        <div className='Carousel-textbox'>
          <p>Toronto,<span>Canada</span></p>
          </div>
          <h1>HURRY! GET THE BEST VILLA FOR YOU</h1>
        </div>
        <img src="/assets/img/banner-03.jpg" alt="Banner3" /> 
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Hero
