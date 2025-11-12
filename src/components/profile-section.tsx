import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profileImage = PlaceHolderImages.find(img => img.id === 'profile-picture');

const skills = [
  'Artificial Intelligence', 'Machine Learning', 'Agentic Agents', 'Full-Stack Development',
  'Curriculum Development', 'Boot Camp Designer', 'Jupyter Notebook', 'Quantum Computing'
];

export function ProfileSection() {
  return (
    <section id="profile" className="scroll-mt-20">
      <h2 className="text-3xl font-headline font-bold tracking-tight text-primary">Profile Showcase</h2>
      <p className="mt-2 text-muted-foreground">The brains behind the code.</p>

      <div className="mt-6 space-y-8">
        <Card>
          <CardHeader>
              <CardTitle className="font-headline">Bio</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/4 flex flex-col items-center">
                  {profileImage && (
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                        <Image
                            src={profileImage.imageUrl}
                            alt={profileImage.description}
                            data-ai-hint={profileImage.imageHint}
                            fill
                            sizes="192px"
                            className="object-cover"
                        />
                    </div>
                  )}
                  <h3 className="mt-4 text-2xl font-headline font-semibold">AISuperHuman</h3>
                  <p className="text-muted-foreground">"Dr. Vicki Bealman"</p>
                </div>
                <div className="md:w-3/4">
                  <p className="text-muted-foreground">
                  AISuperHuman is a legendary figure in the realm of education and technology, a lifelong educator renowned for their transformative influence on the field of coding and artificial intelligence. Revered in the whispered conversations of tech forums and academic circles, AISuperHuman is a guiding force behind countless innovations in digital pedagogy and AI applications. Operating both within and beyond traditional educational boundaries, AISuperHuman crafts learning experiences with unmatched finesse and insight. Their dedication is as profound as their expertise, consistently aligning with empowering future generations to drive ethical advancements in technology and AI, while fostering a safer, smarter digital world.
                  </p>
                </div>
              </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Core Competencies</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {skills.map(skill => <Badge key={skill} variant="secondary" className="text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">{skill}</Badge>)}
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
