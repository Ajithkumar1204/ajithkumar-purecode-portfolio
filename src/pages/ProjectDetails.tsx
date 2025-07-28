import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projects = {
    'online-books-review': {
      title: 'Online Books Review System',
      description: 'A comprehensive web application for reviewing and managing books with user authentication, book catalog, rating system, and review management.',
      fullDescription: `This project is a full-featured book review platform that allows users to browse, search, and review books. The system includes user registration and authentication, a comprehensive book catalog with search and filter capabilities, a 5-star rating system, and complete CRUD operations for reviews.

Key features include:
• User authentication and authorization system
• Book catalog with search and filtering
• Review management with CRUD operations  
• Rating system with star ratings
• Responsive design for all devices
• Database integration with MySQL`,
      technologies: ['Java', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'JDBC'],
      github: 'https://github.com/Ajithkumar1204/online-books-review-system',
      timeline: 'June 2023 - December 2023',
      role: 'Full Stack Developer',
      challenges: [
        'Implementing secure user authentication',
        'Designing efficient database schema',
        'Creating responsive UI components',
        'Managing state across multiple pages'
      ],
      outcomes: [
        'Successfully deployed working application',
        'Implemented all core functionality',
        'Achieved responsive design across devices',
        'Gained experience with full-stack development'
      ]
    },
    'student-task-management': {
      title: 'Student Task Management System',
      description: 'A full-stack application for managing student tasks and deadlines with Spring Boot backend, featuring task creation, assignment tracking, and progress monitoring.',
      fullDescription: `This comprehensive task management system is designed specifically for students to organize their academic workload effectively. Built with Spring Boot for robust backend functionality, the application provides a complete solution for task management, deadline tracking, and progress monitoring.

Key features include:
• Task creation and assignment management
• Deadline tracking with notifications
• Progress monitoring and reporting
• User-friendly interface for task organization
• RESTful API design with Spring Boot
• Secure data storage with MySQL`,
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML5', 'CSS3', 'REST API'],
      github: 'https://github.com/Ajithkumar1204/student-task-management',
      timeline: 'July 2024 - January 2025',
      role: 'Full Stack Developer',
      challenges: [
        'Learning Spring Boot framework',
        'Designing RESTful API architecture',
        'Implementing complex task relationships',
        'Creating efficient data models'
      ],
      outcomes: [
        'Built scalable Spring Boot application',
        'Implemented comprehensive API endpoints',
        'Created intuitive user interface',
        'Enhanced backend development skills'
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:text-primary/80">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Project Header */}
          <div className="text-center mb-12 fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300 text-white"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ajith-kumarma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Project Info */}
            <div className="glass-card fade-up">
              <h2 className="text-2xl font-semibold text-white mb-4">Project Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Timeline</h3>
                  <p className="text-white/80">{project.timeline}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Role</h3>
                  <p className="text-white/80">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="glass-card fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Key Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-white/80">
                    <span className="text-secondary mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="glass-card fade-up mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Detailed Description</h2>
            <div className="text-white/80 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </div>
          </div>

          {/* Outcomes */}
          <div className="glass-card fade-up">
            <h2 className="text-2xl font-semibold text-accent mb-4">Project Outcomes</h2>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-white/80">
                  <span className="text-accent mt-1">✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 fade-up">
            <h2 className="text-2xl font-semibold text-white mb-4">Interested in this project?</h2>
            <p className="text-white/80 mb-6">Let's discuss more about my work and experience.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ajithkumar12204@gmail.com"
                className="px-6 py-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors duration-300"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/ajith-kumarma"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-colors duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;