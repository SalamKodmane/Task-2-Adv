import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import TopNavBar from './components/TopNavBar/TopNavBar'
import Hero from './components/Hero/Hero'
import Featured from './components/Featured/Featured';
import VideoView from './components/VideoView/VideoView';
import VideoCards from './components/VideoCards/VideoCards';
import BestDeal from './components/BestDeal/BestDeal';
import Properties from './components/Properties/Properties';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <TopNavBar />
     <NavBar />
     <Hero />
     <Featured />
     <VideoView />
     <VideoCards />
     <BestDeal />
     <Properties />
     <Contact />
     <Footer />  
    </>
  )
}

export default App
