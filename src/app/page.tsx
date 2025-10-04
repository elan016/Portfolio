import { HeroSection } from '@/components/sections/hero';
import { CertificationsSection } from '@/components/sections/certifications';
import { SpeakingSection } from '@/components/sections/speaking';
import { ProjectsSection } from '@/components/sections/projects';
import { ArticlesSection } from '@/components/sections/articles';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CertificationsSection />
      <SpeakingSection />
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}
