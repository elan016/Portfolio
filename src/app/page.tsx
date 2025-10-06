import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';

export default function Home() {
  return (
    <div className="px-4 md:px-6">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
