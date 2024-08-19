import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VideoView.css'

function VideoView() {
  return (
    <>
    <div className="SK-video">
   <div className="Videoimg1"> 
    <div className="video-title">
        <p>VIDEO VIEW</p>
        <h2>Get Closer View & Different Feeling</h2>
    </div>
     <img src='/assets/img/contact-bg.jpg' alt="" />
     </div>
    <div className="Videoimg2">
        <img src='/assets/img/video-frame.jpg' alt="video" />
        <div className="Videoplay-icon">
            <div className="Video-icon">
                <FontAwesomeIcon icon={faPlay} color='red'/>
            </div>
        </div>
    </div> 
   </div>
    </>
  )
}

export default VideoView
