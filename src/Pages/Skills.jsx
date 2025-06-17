import "./skills.css";

const Skills = () => {
  return (
    <div className="skill-container">
      <div className="animation-bg"></div>

      <div className="skills-container">
        <h1>My Skills</h1>

        <div className="skills-card-container">
          {[
            { icon: "devicon-html5-plain colored", title: "HTML", desc: "Proficient in writing semantic HTML for structuring and presenting content on the web." },
            { icon: "devicon-css3-plain colored", title: "CSS", desc: "Experienced in using CSS for styling, responsive design, and preprocessors like Sass." },
            { icon: "devicon-bootstrap-plain colored", title: "Bootstrap", desc: "Using Bootstrap for responsive, mobile-first web applications." },
            { icon: "devicon-tailwindcss-original-wordmark colored", title: "Tailwind CSS", desc: "Using utility-first Tailwind CSS for rapid UI development." },
            { icon: "devicon-javascript-plain colored", title: "JavaScript", desc: "Proficient in interactivity, DOM manipulation, async programming." },
            { icon: "devicon-jquery-plain colored", title: "jQuery", desc: "Simplifying DOM manipulation, events, and Ajax." },
            { icon: "devicon-react-original colored", title: "React", desc: "Building reusable components with React, using state, props, hooks." },
            { icon: "devicon-nodejs-plain colored", title: "Node.js", desc: "Server-side JavaScript runtime for scalable backend services." },
            { icon: "devicon-express-original colored", title: "Express.js", desc: "Creating RESTful APIs using Express framework." },
            { icon: "devicon-mongodb-plain colored", title: "Mongoose/MongoDB", desc: "Modeling and querying MongoDB databases using Mongoose." },
            { icon: "devicon-c-plain colored", title: "C Language", desc: "Working knowledge of core concepts in the C programming language." },
            { icon: "devicon-git-plain colored", title: "Git", desc: "Version control with Git and collaboration via GitHub." },
          ].map((skill, index) => (
            <div className="skill-card" key={index} data-aos="fade-up">
              <i className={skill.icon}></i>
              <h2>{skill.title}</h2>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
