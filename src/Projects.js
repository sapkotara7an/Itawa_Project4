import React from 'react';
import projectData from './Data/ProjectData';


function Projects() {
  return (
    <>
      <div className='project'>
        <h2 className='text-center py-2'>Our Projects</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='building_image row text-center'>
          {projectData.map((project) => (
            <div className='building col-lg-3 col-md-12 col-sm-12 me-3' key={project.id}>
              <img src={project.imageSrc} width='375px' alt={`Project ${project.id}`} />
              <h5 className='py-3'>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
