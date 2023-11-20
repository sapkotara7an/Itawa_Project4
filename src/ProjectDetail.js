import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import projectData from './Data/ProjectData';



const Project_details = ({ }) => {
  let {pid} = useParams()
  let data=projectData.find((a)=>a.id==pid)

  const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/');
      };
  
  return (
  <>
   
   <button className='mt-4 px-2 rounded-2 px-2 bg-light' style={{marginLeft:'200px'}} onClick={handleInfo}>back</button>
    
    <div className='container  my-5 py-4 ' style={{Width:'500px',border:'1px solid grey', marginTop:'50px'}}>
        <div className='row'>
        <div className='text-center pb-3'><h2>{data.title}</h2> </div>
            <div className='col-lg-5'>
            
      
      
      <div className='text-center'><img  src={data.imageSrc} alt={data.title} /></div>
            </div>
            <div className='col-lg-5'> <div className='p-5'><p>{data.details}</p></div></div>
        </div>
      
      

    
      
    </div>
    </>
  );
};

export default Project_details;
