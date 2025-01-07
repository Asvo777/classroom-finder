import './App.css'
import Map from './components/Map';
import logo from './assets/classroom-finder-logo.svg'
import { useRef } from 'react'

function App() {
  const mainSectionRef = useRef<HTMLElement | null>(null); // Create a ref for the section to scroll to

  const scrollToSection = () => {
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <div className="Container">
    <div className='item header'>
        <img src={logo} onClick={scrollToSection} alt="Classroom Finder Logo" />
        <div style={{ marginLeft: '60px' }}>   
          <h1>GG Mapper</h1>
          <h3>Find a free spot - Know your way</h3>
        </div>
    </div>
    <div className='item main' ref={mainSectionRef}>
      <Map />
    </div>
    <div className='item footer'>Footer</div>
   
   </div>
  )
}

export default App
