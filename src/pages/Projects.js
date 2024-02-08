import React from 'react'
import ProjectItem from '../components/ProjectItem';
// import file where project list is defined
// import { ProjectList } from "../helpers/ProjectList";
import '../styles/Projects.css';
import career from '../assets/career.PNG';
import ecommerce from '../assets/ecommerce.PNG';
import sunset from '../assets/sunset.PNG';
import clock from '../assets/clock.PNG';


function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        <ProjectItem name="Careerlink" image={career}/>
        <ProjectItem name="Eccomerce website" image={ecommerce}/>
        <ProjectItem name="Sunset Bay Resort" image={sunset}/>
        <ProjectItem name="Clock" image={clock}/>

        {/* {ProjectList.map(() => {
          return <ProjectItem name={Projects.name} image={Projects.image} skills={Projects.skills} />
        })} */}

      </div>
    </div> 
  );
}

export default Projects;
