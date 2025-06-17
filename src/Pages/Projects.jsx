import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css"; // Import the external CSS file

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://portfolio-react-backend-ica2.onrender.com/projects") 
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="project-container">
      <div className="animation-bg"></div> {/* Background Animation */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: "#fff" }}>My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="col-md-4 mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <CardBody>
                  <CardTitle tag="h5">{project.title}</CardTitle>
                  <CardText>{project.description}</CardText>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
