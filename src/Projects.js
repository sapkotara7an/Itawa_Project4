import React from 'react';
import projectData from './Data/ProjectData';
import { Link } from 'react-router-dom';


function Projects() {
  return (
    <>
      <div className='project '>
        <h2 className='text-center py-2'>Our Projects</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='container'>
        <div className='row '>

{projectData.map((project) => (
<div className='me-0 px-3 building_image col-lg-4 col-md-12 col-sm-12' key={project.id}>
<Link to={`/Project/${project.id}`}>
<img src={project.imageSrc} width='350px' alt={project.id}/>
<h4 className='py-3'>{project.title}</h4>
</Link>
   
    
</div>
))}



</div>
</div>
      </div>
     
    </>
  );
}

export default Projects;
