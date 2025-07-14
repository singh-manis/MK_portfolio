import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description: "A Java-based application for managing student records, grades, and course information. Built as part of my Object-Oriented Programming course.",
      tech: ["Java", "Swing", "MySQL", "OOP"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Data Structures Visualizer",
      description: "An interactive web application to visualize various data structures and algorithms. Helps students understand complex concepts through visual representation.",
      tech: ["JavaScript", "HTML/CSS", "Canvas API", "Algorithms"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Simple Calculator App",
      description: "A basic calculator application built with Python and Tkinter. Demonstrates GUI programming and basic software development principles.",
      tech: ["Python", "Tkinter", "GUI", "Basic Logic"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Academic & Personal Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <div className="project-links-overlay">
                  <a href={project.demoLink} className="project-link-btn">View Demo</a>
                  <a href={project.githubLink} className="project-link-btn">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 