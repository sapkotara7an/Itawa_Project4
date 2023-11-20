
import { Carousel } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom'; 
import projectData from './Data/ProjectData';
import floorPlan from './Data/FloorPlans';



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [info,setInfo] = useState(false);

  const handleInfo = () => {
    setInfo(true);
    navigate('/contact'); 
  };
  

  

  return (
  <>
    <Carousel fade >   
      <Carousel.Item> 
    <img src={require('../src/img/slider-1.jpg')} alt='/' height='800' className='w-100'/>
 
         <div className='image_text' ><h2>Book Your Dream Home with Itawa</h2>
         <p>Want to see your kid become more expressive?</p>
         <button  onClick={handleInfo} className='img_btn' type='button'>Enquire now</button>
         </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../src/img/slider-2.jpg')} alt='/' height='800'className='w-100'/>
      <div className='image_text2' ><h2>Elegant Home For Sale</h2>
         <p>Want to see your kid become more expressive?</p>
         <button onClick={handleInfo} className='img_btn' type='button'>Enquire now</button>
         </div>
      </Carousel.Item>
     
    </Carousel>


<div className='project'>
  <h2 className='text-center py-2'>Our Projects</h2>
  <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  
  <div className='building_image container text-center'>
    <div className='row '>

  {projectData.map((project) => (
<div className='me-0 px-3 building col-lg-4 col-md-12 col-sm-12 ' key={project.id}>
  <Link to={`/Project/${project.id}`}>
<img className='shadow' src={project.imageSrc} width='300px' alt={project.id}/>
<h4 className='py-3'>{project.title}</h4>
</Link>
      <p >{project.description}</p>
      
</div>
  ))}



</div>

</div>
</div>

<div className='floorplan text-center container py-5'>
<div className=''><h1>Floor Plans</h1>
<p className='py-4'>For Your Better Understanding. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<div>
      <div className='row floor_img'>
        {floorPlan.map((plan) => (
          <div className='col-lg-3 col-md-12 col-sm-12 m-3' key={plan.id}>
            <div className='plan_img'>
              <Link to={`/floor-plan/${plan.id}`}>
                <img
                  src={plan.imageSrc}
                  alt={plan.title}
                  className='w-100'
                 
                />
                <h4 className='py-3'>{plan.title}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>







</div>

      
      <div className='body_agent  py-5 agent' >
        <h2 className='text-center'>Meet The Agents</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className=' cards row'>
          
          <div className='col-lg-5 col-md-12 col-sm-12 flex box'>

            <div className='px-2'> <img src={require('../src/img/agent-a.jpg')} alt='/' /></div>
            <div className='agent_text'><h5>Jeniffer Doe</h5>
              <p className=''>
                Cras sit amet nibh libero, in gravida nulla.
                Nulla vel metus scelerisque ante sollicitudin.</p>
              <p className='px-2'>Sales Agent Real Estate Agency</p>
              <p className='text-center text-black'><Link to="/contact">Book Appointment</Link></p>
            </div>
          </div>

          <div className='col-lg-5 col-md-12 col-sm-12 flex box'>
          <div className='px-2'> <img src={require('../src/img/agent-b.jpg')} alt='/'  /></div>
            <div className='agent_text'><h5>Jeniffer Doe</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla.
                Nulla vel metus scelerisque ante sollicitudin.</p>

              <p>Sales Agent Real Estate Agency</p>
              <p className='text-center text-black'>
                <Link to="/contact">Book Appointment</Link></p>
            </div>
          </div>

        </div>
      </div>

   
    
    </>
  );
}

export default Home;