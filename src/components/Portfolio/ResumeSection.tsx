const ResumeSection = () => {
  const experience = [
    {
      title: 'Personal Projects',
      period: '2023 - Present',
      description: 'Developed multiple full-stack web applications using React.js and Java'
    },
    {
      title: 'Academic Projects',
      period: '2021 - 2024',
      description: 'Built various projects during B.Sc Computer Science program'
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ajithkumar_Resume.pdf';
    link.download = 'Ajithkumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">My Resume</h2>
        
        <div className="glass-card fade-up">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6 relative">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <p className="text-primary text-sm mb-2">{exp.period}</p>
                    <p className="text-white/80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-6">Key Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'MySQL', 'JDBC', 'API Development'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'VS Code', 'MySQL Workbench'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <button
              onClick={handleDownload}
              className="hero-btn text-white inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;