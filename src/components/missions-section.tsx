import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mapImage = PlaceHolderImages.find(img => img.id === 'world-map');

const featuredMissions = [
    { title: "Project Chimera", location: "Neo-Tokyo", description: "Dismantled a rogue AI network aiming to destabilize the global financial market." },
    { title: "Operation Nightfall", location: "Geneva", description: "Infiltrated a clandestine summit to prevent the sale of weaponized nanite schematics." },
    { title: "The Serpent's Coil", location: "Mumbai Megacity", description: "Recovered stolen biotech research from a black market auction." },
]

export function MissionsSection() {
  return (
    <section id="missions" className="scroll-mt-20">
      <h2 className="text-3xl font-headline font-bold tracking-tight text-primary">Global Operations</h2>
      <p className="mt-2 text-muted-foreground">Mapping Shadowblade's impact across the globe.</p>

      <Card className="mt-6">
        <CardContent className="p-2">
          <div className="aspect-[16/9] relative overflow-hidden rounded-md border border-primary/20 shadow-inner">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                data-ai-hint={mapImage.imageHint}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h3 className="text-2xl font-headline font-bold">Featured Missions</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredMissions.map((mission) => (
            <Card key={mission.title} className="bg-card/50 hover:bg-accent/10 hover:border-accent/50 border border-transparent transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="font-headline text-primary">{mission.title}</CardTitle>
                <CardDescription>{mission.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{mission.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
