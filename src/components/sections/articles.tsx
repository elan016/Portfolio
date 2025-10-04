import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import articles from '@/data/articles.json';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ArticlesSection() {
  return (
    <AnimatedSection>
      <section id="articles" className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Articles
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            My thoughts on technology, DevOps, and cloud-native development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const image = PlaceHolderImages.find((img) => img.id === article.image);
            return (
              <Card
                key={article.title}
                className="flex flex-col bg-card/60 backdrop-blur-sm border border-primary/10 rounded-lg shadow-inner-glow transition-all duration-300 hover:border-primary/20 hover:shadow-lg overflow-hidden group"
              >
                <CardHeader className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </CardHeader>
                <div className="flex flex-col flex-1 p-6">
                  <CardTitle className="font-headline text-xl mb-2 flex-1">{article.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm text-muted-foreground mb-4">
                    <span className="font-semibold mr-2">{article.publication}</span>
                    <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {article.date}</span>
                  </CardDescription>
                  <CardFooter className="p-0 pt-4">
                    <Link href={article.url} className="flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}
