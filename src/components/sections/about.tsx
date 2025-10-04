import { AnimatedSection } from '@/components/animated-section';

export function AboutSection() {
  return (
    <AnimatedSection>
      <section id="about" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            As a full-stack web developer, I have a passion for creating dynamic, responsive web applications. With a strong foundation in both front-end and back-end technologies, I specialize in building seamless and efficient user experiences. My expertise in the MERN stack allows me to develop robust and scalable solutions tailored to meet diverse client needs. I am dedicated to continuous learning and staying current with the latest industry trends to deliver high-quality, modern web applications.
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}
