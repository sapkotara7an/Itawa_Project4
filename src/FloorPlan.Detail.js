import React from 'react';
import floorPlan from './Data/FloorPlans';
import { useParams } from 'react-router-dom';



const FloorPlanDetail = ({ }) => {
  let {pid} = useParams()
  let data=floorPlan.find((a)=>a.id==pid)
  
  return (
  <>

    
    <div className='container  my-5 py-4 ' style={{maxWidth:'800px',border:'1px solid grey',}}>
      
      <div className='text-center pb-3'><h2>{data.title}</h2> </div>
      
      
      <div className='text-center'><img  src={data.imageSrc} alt={data.title} /></div>

     <div className='p-5'><p>{data.description}</p></div>
      
    </div>
    </>
  );
};

export default FloorPlanDetail;
