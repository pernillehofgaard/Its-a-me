import projects from '../Info files/ProjectsInfo';
import skills from '../Info files/SkillsInfo';
import Header from '../Components/Header';
import Card from '../Components/Card';
import './Projects.css';



function Projects(){
  return(
    <div>
      <Header />
      <div className="Projects">
        <h1>Projects</h1>
      </div>
        {projects.map((project) => (
          <Card title={project.name} description={project.description} timePeriod={project.timePeriod}/>
        ))}
        <div className="Skills">
        <h1>Skills</h1>
        {skills.map((skill) => (
            <li>{skill.skill}</li>
        ))}
      </div>
    </div>
  );
}

export default Projects;