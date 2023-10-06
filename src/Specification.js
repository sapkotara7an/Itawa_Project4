import React from 'react'
import DrawingRoom from './DrawingRoom';
import { Link } from 'react-router-dom';



function Specification() {
  return (
    <>
    
    <div className='specification'>
    <div className='container' >
        <div className='title text-center'>
        <h2 className='pt-4'>Property Specification</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
    
    <div className='property_specification py-5'>
        <div className='room_types mb-5'>

            <ul className=''>
            <li><Link to='/specification'>Drawing Room</Link></li>
            <li><Link to='/specification/kitchen'>Kitchen</Link></li>
            <li><Link to='/specification/bathroom'>Bathroom</Link></li>
            <li> <Link to='/specification/balcony'>Balcony</Link></li>
            <li>  <Link to='/*'>Bedroom</Link></li>
            </ul>
        </div>
        <DrawingRoom/>
    </div>
    </div>
    </div>
   
    </>
  )
}

export default Specification;