const AboutSection = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React JS', level: 80 },
    { name: 'Java', level: 85 },
    { name: 'MySQL', level: 75 },
    { name: 'Git/GitHub', level: 80 },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card fade-up">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                I'm Ajithkumar, a dedicated Fullstack Developer with a strong foundation in both 
                frontend and backend technologies. I specialize in building dynamic, responsive 
                web applications using HTML, CSS, JavaScript, React JS for frontend, and Java 
                with MySQL for backend development.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Education</h3>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-white">B.Sc Computer Science</h4>
                  <p className="text-white/70">Govt Arts College (Autonomous), Kumbakonam</p>
                  <p className="text-sm text-white/60">2021 - 2024 | CGPA: 8.7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card fade-up">
              <h3 className="text-xl font-semibold text-primary mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card fade-up">
              <h3 className="text-xl font-semibold text-secondary mb-4">What I Do</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <p className="text-sm text-white/80">Frontend Development</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xl">⚙️</span>
                  </div>
                  <p className="text-sm text-white/80">Backend Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;