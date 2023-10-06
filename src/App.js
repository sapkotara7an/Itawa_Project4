
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import './style.scss';
import Gallery from './Gallery';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Specification from './Specification';
import HomePageLayout from './HomePage.Layout';
import Contact from './Contact';

import Kitchen from './Kitchen';
import Bathroom from './Bathroom';
import Balcony from './Balcony';
import { ErrorPage } from './ErrorPage';
import SimpleMap from './googleMap';
import FloorPlanDetail from './FloorPlan.Detail';



function App() {
  return (
    <div className="App">
      <Routes>
     
          
          
        <Route path="/" element={ <HomePageLayout/> } >
          
        <Route index element ={<Home/>}/>
        <Route path="gallery" element={ <Gallery/> } />
        <Route path="project" element={ <Projects/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path='specification' element={<Specification/>}/>
        <Route path='specification/kitchen' element={<Kitchen/>}/>
        <Route path='specification/bathroom' element={<Bathroom/>}/>
        <Route path='specification/balcony' element={<Balcony/>}/>
        <Route path='location' element={<SimpleMap/>}/>
        <Route path="/floor-plan/:pid" element={<FloorPlanDetail/>} />


        <Route path="*" element={<ErrorPage />} />
       
        
          </Route>

        
           
            
         


        

        
      </Routes>
    </div>
  )
}

export default App;
