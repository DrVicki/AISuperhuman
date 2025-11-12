
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const profileImage = PlaceHolderImages.find(
  (img) => img.id === 'profile-picture'
);

const skills = [
    { name: 'AI and Machine Learning', description: 'Building intelligent systems that learn from data.' },
    { name: 'AI Driven predictive Analysis', description: 'Utilizing machine learning models to forecast and neutralize cyber-attacks before they occur.' },
    { name: 'Full-Stack Development', description: 'Expertise in both front-end and back-end technologies to build complete applications.' },
    { name: 'Mobile App Development', description: 'Creating applications for iOS and Android devices.' },
    { name: 'Curriculum Design and Development', description: 'Designing and creating educational content and curricula for training programs.' },
    { name: 'Boot Camp Developer and Facilitator', description: 'Leading and instructing intensive software development bootcamps.' },
];

export function ProfileSection() {
  return (
    <section id="profile" className="scroll-mt-20 space-y-8">
      <Card className="overflow-hidden">
        <CardHeader className="relative h-48 bg-muted/20 p-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          {profileImage && (
            <Image
                src={profileImage.imageUrl}
                alt="AISuperHuman infiltrating a server room"
                data-ai-hint="hacker server room"
                fill
                className="object-cover object-top"
            />
          )}
          <div className="relative flex h-full items-end p-6">
              <div className="flex items-end gap-4">
                  {profileImage && (
                      <div className="relative h-32 w-32 rounded-full border-4 border-background shadow-lg">
                          <Image
                            src={profileImage.imageUrl}
                            alt={profileImage.description}
                            data-ai-hint={profileImage.imageHint}
                            fill
                            className="rounded-full object-cover"
                          />
                      </div>
                  )}
                  <div>
                      <h1 className="text-3xl font-headline font-bold text-primary">
                          AISuperHuman
                      </h1>
                      <p className="text-muted-foreground">
                          Dr. Vicki Bealman
                      </p>
                  </div>
              </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="font-headline text-lg font-semibold">Biometric Data</h3>
            <p className="mt-2 text-muted-foreground">
              AISuperHuman is a legendary figure in the realm of education and technology, a lifelong educator renowned for their transformative influence on the field of coding and artificial intelligence. Revered in the whispered conversations of tech forums and academic circles, AISuperHuman is a guiding force behind countless innovations in digital pedagogy and AI applications. Operating both within and beyond traditional educational boundaries, AISuperHuman crafts learning experiences with unmatched finesse and insight. Their dedication is as profound as their expertise, consistently aligning with empowering future generations to drive ethical advancements in technology and AI, while fostering a safer, smarter digital world.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle className="font-headline">Core Competencies</CardTitle>
            <CardDescription>Primary skillsets and operational specialties.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                <TooltipProvider>
                    {skills.map((skill) => (
                        <Tooltip key={skill.name}>
                            <TooltipTrigger asChild>
                                <Badge variant="secondary" className="cursor-help text-base">
                                    {skill.name}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs">{skill.description}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
