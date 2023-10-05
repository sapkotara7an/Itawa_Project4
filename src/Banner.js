import React from 'react'


function Banner() {
  return (
    <>
<div className='project'>
  <h2 className='text-center py-2'>Our Projects</h2>
  <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <div className='building_image flex '>
  <div className='building'>
  <img src={require('../src/img/apartment-1.jpg')} width='375px'/>
 
  <h5 className='py-3'>Tokas Penthouse </h5>
  <p >The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect.</p>
  </div>


  
  <div className='building '><img src={require('../src/img/apartment-2.jpg')} width='375px'/>
  
  <h4 className='py-3'>Tokas Penthouse</h4>
  <p >The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect.</p>
  </div>
  <div className='building '><img src={require('../src/img/apartment-3.jpg')} width='375px'/>
  
  <h5 className='py-3'>Tokas Penthouse</h5>
  <p >The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect.</p>
  </div>
</div>
</div>

<div className='floorplan text-center py-5'>

<div className=''><h1>Floor Plans</h1>
<p className='py-4'>For Your Better Understanding. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
  <div className='row floor_img'>
    <div className='col-lg-3'>

   <div className='plan_img'> <img src={require('../src/img/small-building-plan.jpg')}className='w-100'/>
   <h4 className='py-3'>Lower Ground</h4>
   </div>
   <div className=' plan_img'> <img src={require('../src/img/small-building-plan-2.jpg')} className='w-100'/>
   <h4 className=''>Upper Ground</h4>
   </div>
   
    </div>


    <div className='col-lg-3'>

<div className='plan_img'> <img src={require('../src/img/small-building-plan-3.jpg')}className='w-100'/>
<h4 className='py-3'>First Floor</h4>
</div>
<div className='py-4 plan_img'> <img src={require('../src/img/small-building-plan-4.jpg')} className='w-100'/>
<h4 className='pt-3'>Second Floor</h4>
</div>

 </div>

 <div className='col-lg-3'>

<div className='plan_img'> <img src={require('../src/img/small-building-plan-5.jpg')}className='w-100'/>
<h4 className='py-3'>Third Floor</h4>
</div>
<div className=' plan_img'> <img src={require('../src/img/small-building-plan-6.jpg')} className='w-100'/>
<h4 className=''>Fourth Floor</h4>
</div>

 </div>
  </div>
</div>


    <div className='banner  py-5 agent' >
      <h2 className='text-center'>Meet The Agents</h2>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className=' cards flex'>
          <div className=' flex box'>

            <div className='px-2'> <img src={require('../src/img/agent-a.jpg')} height='200px'/></div>
            <div className='agent_text'><h5>Jeniffer Doe</h5>
            <p className='px-2'>
Cras sit amet nibh libero, in gravida nulla.
 Nulla vel metus scelerisque ante sollicitudin.</p>
 <p className='px-2'>Sales Agent Real Estate Agency</p>
 <p className='text-center text-black '><a href="">Book Appointment</a></p>
            </div>
          </div>
          <div className=' flex box'>
          <div div className='px-2'> <img src={require('../src/img/agent-b.jpg')} height='200px'/></div>
          <div className='agent_text'><h5>Jeniffer Doe</h5>
            <p>
Cras sit amet nibh libero, in gravida nulla.
 Nulla vel metus scelerisque ante sollicitudin.</p>

<p>Sales Agent Real Estate Agency</p>
<p className='text-center text-black'><a href="">Book Appointment</a></p>
            </div>
          </div>
        </div>
    </div>



    </>

  )
}

export default Banner