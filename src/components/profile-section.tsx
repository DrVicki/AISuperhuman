import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profileImage = PlaceHolderImages.find(img => img.id === 'profile-picture');

const skills = [
  'Stealth Operations', 'Cyber Warfare', 'Close Quarters Combat', 'Cryptography',
  'Social Engineering', 'Systems Infiltration', 'AI & Machine Learning', 'Quantum Computing'
];

const missions = [
    { name: "Project Chimera", location: "Neo-Tokyo", date: "2042-10-26", status: "Success" },
    { name: "Operation Nightfall", location: "Geneva", date: "2042-08-15", status: "Success" },
    { name: "The Serpent's Coil", location: "Mumbai Megacity", date: "2042-05-02", status: "Success" },
    { name: "Data Heist", location: "Silicon Valley 2.0", date: "2041-12-20", status: "Success" },
];

export function ProfileSection() {
  return (
    <section id="profile" className="scroll-mt-20">
      <h2 className="text-3xl font-headline font-bold tracking-tight text-primary">Profile Showcase</h2>
      <p className="mt-2 text-muted-foreground">The operative behind the code.</p>

      <div className="mt-6 flex flex-col md:flex-row gap-8 items-start">
        <Card className="md:w-1/3 flex flex-col items-center justify-center p-6 bg-card/50 transition-all hover:shadow-primary/10 hover:shadow-lg">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/20">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                fill
                sizes="192px"
                className="object-cover"
              />
            )}
          </div>
          <h3 className="mt-4 text-2xl font-headline font-semibold">AISuperHuman</h3>
          <p className="text-muted-foreground">Ghost in the Machine</p>
        </Card>

        <div className="md:w-2/3 space-y-8">
            <Card>
            <CardHeader>
                <CardTitle className="font-headline">Bio</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                A legend whispered in the darkest corners of the net, AISuperHuman is a phantom entity mastering the arts of digital and physical infiltration. Operating outside conventional jurisdictions, AISuperHuman executes missions with unparalleled precision and silence. Their motives are as enigmatic as their identity, but their actions consistently align with thwarting global cyber-terrorism and corporate espionage.
                </p>
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
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Mission History</CardTitle>
            <CardDescription>Declassified operations record.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operation</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {missions.map(mission => (
                  <TableRow key={mission.name}>
                    <TableCell className="font-medium">{mission.name}</TableCell>
                    <TableCell>{mission.location}</TableCell>
                    <TableCell className="hidden sm:table-cell">{mission.date}</TableCell>
                    <TableCell className="text-right">
                        <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10">
                            {mission.status}
                        </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
