import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import skills from '@/data/skills.json';

// Simple icons as components
const HtmlIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M15 11h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v-4zM5 11h4v4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM12 2l-2.5 5h5L12 2zM3 20h18"/></svg>;
const CssIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M15 11h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v-4zM5 11h4v4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM12 2l-2.5 5h5L12 2zM3 20h18"/></svg>;
const JavascriptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="M9 9h6v6H9z"/><path d="M10 15V9h4"/></svg>;
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19"/><path d="M21 5V19"/><ellipse cx="12" cy="19" rx="9" ry="3"/></svg>;
const NodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
const ExpressIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 12.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zM6.5 12.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/></svg>;
const MongoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 10c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"/></svg>;
const FirebaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M4.33 13.9l7.67 7.67 7.67-7.67-3.83-3.83-3.84 3.84-3.83-3.84z"/><path d="M12 2L4.33 9.67l3.84 3.84L12 9.67l3.83 3.84 3.84-3.84z"/></svg>;
const ReduxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4h2v4zm4 0h-2v-4h2v4zm-2-6c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z"/></svg>;
const GitIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4h2v4zm4 0h-2v-4h2v4zm-2-6c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z"/></svg>;


const iconMap: { [key: string]: React.FC } = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JavascriptIcon,
  React: ReactIcon,
  'Node.Js': NodeIcon,
  'Express.Js': ExpressIcon,
  MongoDB: MongoIcon,
  Firebase: FirebaseIcon,
  Redux: ReduxIcon,
  Git: GitIcon,
};

export function SkillsSection() {
  return (
    <AnimatedSection>
      <section id="skills" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            My technical expertise.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => {
            const Icon = iconMap[skill.name];
            return (
              <Card
                key={skill.name}
                className="flex flex-col items-center justify-center p-6 bg-card/60 backdrop-blur-sm border-primary/10 rounded-lg shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center gap-4">
                  {Icon && <Icon />}
                  <p className="font-semibold text-lg">{skill.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}
