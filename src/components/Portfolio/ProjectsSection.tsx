import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React JS', 'Java', 'MySQL', 'CSS'],
      image: project1Image,
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A responsive task management application with real-time updates, drag-and-drop functionality, and user collaboration features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      image: project2Image,
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Student Information System',
      description: 'A comprehensive student management system with CRUD operations, search functionality, and grade management features.',
      technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
      image: project3Image,
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-r from-background via-background/95 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;