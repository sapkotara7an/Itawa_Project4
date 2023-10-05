
import { Carousel } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom'; 


function Home() {
const [banner, setBanner] =useState([]);
useEffect(()=> {
  const getBanner = async()=>{
    const reqData = await fetch("");
    const resData = await reqData.json();

    setBanner(resData);

  }
  getBanner();
},[]);

  const navigate = useNavigate();
  const [info, setInfo] = useState(false);

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

  <div className='me-0 building col-lg-4 col-md-12 col-sm-12'>
  <img src='./assets/apartment-1.jpg' alt='/' width='300px'/>
  <h4 className='py-3'>Tokas Penthouse</h4>
  <p >The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect.</p>
  </div>
 
 <div className='me-0 building col-lg-4 col-md-5 col-sm-12'><img src='./assets/apartment-2.jpg' alt='/' width='300px'/>
  <h4 className='py-3'>Tokas Penthouse</h4>
  <p >The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect.</p>
  </div>

  <div className='me-0 building col-lg-4 col-md-5 col-sm-12'><img src='./assets/apartment-3.jpg' alt='/' width='300px'/>
    <h4 className='py-3'>Tokas Penthouse</h4>
  <p >The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect.</p>
  </div>
</div>

</div>
</div>

<div className='floorplan text-center py-5'>
<div className=''><h1>Floor Plans</h1>
<p className='py-4'>For Your Better Understanding. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

  <div className='row floor_img'>

    <div className='col-lg-3 col-md-12 col-sm-12'>

   <div className='plan_img'> <img src={require('../src/img/small-building-plan.jpg')} alt='/' className='w-100'/>
   <h4 className='py-3'>Lower Ground</h4>
   </div>
   <div className='py-4 plan_img'> <img src={require('../src/img/small-building-plan-2.jpg')} alt='/' className='w-100'/>
   <h4 className='py-3'>Upper Ground</h4>
   </div>
   
    </div>

  <div className='col-lg-3 col-md-12 col-sm-12'>
<div className='plan_img'> <img src={require('../src/img/small-building-plan-3.jpg')} alt='/' className='w-100'/>
<h4 className='py-3'>First Floor</h4>
</div>
<div className='py-0 plan_img'> <img src={require('../src/img/small-building-plan-4.jpg')} alt='/' className='w-100'/>
<h4 className='py-3'>Second Floor</h4>
</div>

 </div>

 <div className='col-lg-3 col-md-6 col-sm-12'>
<div className='plan_img'> <img src={require('../src/img/small-building-plan-5.jpg')} alt='/' className='w-100'/>
<h4 className='py-3'>Third Floor</h4>
</div>
<div className='py-4 plan_img'> <img src={require('../src/img/small-building-plan-6.jpg')} alt='/' className='w-100'/>
<h4 className='py-3'>Fourth Floor</h4>
</div>

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
  )
}

export default Home