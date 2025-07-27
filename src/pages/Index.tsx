import Header from '@/components/Portfolio/Header';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import ResumeSection from '@/components/Portfolio/ResumeSection';
import ContactSection from '@/components/Portfolio/ContactSection';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
