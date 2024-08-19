import './Contact.css'

const Contact = () => {
  return (
    <>
       <div className='SK-ContactSection'>
      <div className='SK-Container'>
      <div className='Contact-title'>
        <p>CONTACT US</p>
        <h2>Get In Touch With Our Agents</h2>
        </div>
        <div className='Contact-Image'>
          <img src="/assets/img/contact-bg.jpg" alt="Contact Image" />
        </div>
      </div>
      <div className='SK-IframeForm'>
        <div className='SK-IFrame'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.05388861514!2d-80.10441752163858!3d25.93910769338254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1723992526350!5m2!1sar!2s" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='SK-ContactCards'>
            <div className='SK-card'>
                <img src='/assets/img/Phone-Icon.png' alt="Phone-Icon" />
                <div>
                    <b>010-020-0340</b>
                    <p>Phone Number</p>
                </div>

            </div>
            <div className='SK-card'>
                <img src='/assets/img/Email-Icon.png' alt="Email-Icon" />
                <div>
                    <b>info@villa.co</b>
                    <p>Business Email</p>
                </div>

            </div>
          </div>
        </div>
        <div className='SK-Form'>
          <form>
            <label className='SK-LabelForm' htmlFor="">Full Name</label>
            <input type="text" placeholder="Your Name..." />

            <label className='SK-LabelForm' htmlFor="">Email Address</label>
            <input type="email" placeholder="Your E-mail..." />

            <label className='SK-LabelForm' htmlFor="">Subject</label>
            <input type="text" placeholder="Subject..." />

            <label className='SK-LabelForm' htmlFor="">Message</label>
            <textarea placeholder="Your Message..."></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
