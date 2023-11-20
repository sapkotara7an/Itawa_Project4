import React, { useEffect } from 'react';
import floorPlan from './Data/FloorPlans';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, } from 'react-icons/fa';



const FloorPlanDetail = ({ }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let {pid} = useParams()
  let data=floorPlan.find((a)=>a.id==pid)

  const navigate = useNavigate();
  const handleInfo = () => {
    navigate('/')
  }
  
  return (
  <>
   <button className='mt-4 px-2 rounded-2 bg-light' style={{marginLeft:'200px'}} onClick={handleInfo}><FaArrowLeft/> back</button>
    
    
    <div className='container  my-5 py-4 ' style={{maxWidth:'800px',border:'1px solid grey',}}>
      
      <div className='text-center pb-3'><h2>{data.title}</h2> </div>
      
      
      <div className='text-center'><img  src={data.imageSrc} alt={data.title} /></div>

     <div className='p-5'><p>{data.description}</p></div>
      
    </div>
    </>
  );
};

export default FloorPlanDetail;
