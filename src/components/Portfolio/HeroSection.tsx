import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-accent rounded-full opacity-20 float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-up">
          <p className="text-xl md:text-2xl text-primary mb-4 font-light">
            Hi, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Ajithkumar
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Fullstack Developer
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building full-stack web applications with modern technologies. 
            Specializing in React.js, Java, and creating seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('resume')}
              className="hero-btn text-white"
            >
              View Resume
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hero-btn-outline"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;