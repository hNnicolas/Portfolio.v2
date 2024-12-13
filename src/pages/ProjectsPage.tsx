import "../scss/ProjectsPage.scss";
import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <>
    <div className='projects-page-text'>

          <h2 className="projects-page-title">PROJECTS</h2>
        {/*   <p className="projects-page-subtitle">
            A Curated Selection.
          </p> */}
          </div>
          <div className="projectsGrid">
  {projects.map((project) => (
    <div key={project.id} className="projectCard">
      <Link to={project.link} target="_blank">
        <div className="projectTitle">{project.title} {project.description}</div>
        {/* <div className="projectDescription">{project.description}</div> */}
        <div className="projectImageWrapper">
          <img src={project.image} alt={project.title} className="projectImage" />
          <div className="projectOverlay">
            <div className="projectView">VIEW</div>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>

      </>
  );
}

export default ProjectsPage;
