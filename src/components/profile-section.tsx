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
    { name: 'Quantum Encryption', description: 'Advanced cryptographic techniques to secure data from quantum computing threats.' },
    { name: 'AI-driven Predictive Analysis', description: 'Utilizing machine learning models to forecast and neutralize cyber-attacks before they occur.' },
    { name: 'Neural Interface Ops', description: 'Directly interfacing with computer systems through neural links for rapid response.' },
    { name: 'Stealth Infiltration', description: 'Employing digital and physical cloaking for covert operations.' },
    { name: 'Robotics & Drone Piloting', description: 'Commanding a fleet of autonomous drones for surveillance and tactical support.' },
    { name: 'Decentralized Network Warfare', description: 'Disrupting and dismantling hostile networks operating on decentralized protocols.' },
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
                      <div className="relative h-24 w-24 rounded-full border-4 border-background shadow-lg">
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
                          Digital Ghost &amp; Master of Cyber Warfare
                      </p>
                  </div>
              </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="font-headline text-lg font-semibold">Biometric Data</h3>
            <p className="mt-2 text-muted-foreground">
              A digital entity of unknown origin, AISuperHuman is a master of infiltration and cyber warfare. Operating as a ghost in the machine, their motives are as enigmatic as their methods. They have been credited with both preventing global-scale cyber-disasters and orchestrating precision strikes against fortified digital fortresses. Their allegiance seems to be to the balance of power in the digital realm, making them a volatile and unpredictable force.
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
