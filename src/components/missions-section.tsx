import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const mapImage = {
  imageUrl: 'https://i.postimg.cc/13YpB0gB/world-map.jpg',
  description: 'World map of missions',
  imageHint: 'dark world map',
};

const featuredMissions = [
    { title: "Project AI DeVry University", location: "USA", description: " Transformed critical real-world challenges into a powerful learning opportunity by dismantling a rogue AI network set on destabilizing the global education market. Through this process, they developed an innovative curriculum that empowers students to tackle complex digital threats with confidence and skill. By turning a potential global crisis into a dynamic educational experience, AISuperHuman equips future leaders with the tools and knowledge needed to protect and enhance financial systems, fostering a new generation of tech-savvy problem solvers." },
    { title: "Operation Chegg", location: "India", description: "AISuperHuman transformed a high-stakes scenario—where they infiltrated a clandestine summit to prevent the sale of weaponized nanite schematics—into a cornerstone of Chegg's worldwide upskilling and professional development initiatives. By integrating these real-world challenges into cutting-edge educational modules, AISuperHuman creates engaging learning experiences that equip learners with the critical thinking and technical skills necessary to navigate and resolve complex security challenges. This innovative approach empowers individuals to become adept at safeguarding technological advancements and contributing positively to global safety and innovation." },
    { title: "The DigitalCraft's Coil", location: "Atlanta", description: "Leveraged her real-world skills in a daring recovery of effective learning and teaching research from a black market auction, seamlessly integrating this experience into the development of DigitalCrafts' Boot Camp curriculum. Emphasizing an intense and immersive structure, AISuperHuman crafted and taught a 13-week Full Stack Development program, turning high-stakes scenarios into powerful educational opportunities. This hands-on approach ensures that students not only master technical skills but also learn to apply them in dynamic, real-world situations, preparing them to lead and innovate in the fast-paced tech industry." },
]

export function MissionsSection() {
  return (
    <section id="missions" className="scroll-mt-20">
      <h2 className="text-3xl font-headline font-bold tracking-tight text-primary">Global Operations</h2>
      <p className="mt-2 text-muted-foreground">Mapping AISuperHuman's impact across the globe.</p>

      <Card className="mt-6 max-w-4xl mx-auto">
        <CardContent className="p-2">
          <div className="aspect-[16/9] relative overflow-hidden rounded-md border border-primary/20 shadow-inner">
            <Image
                src="https://i.postimg.cc/13YpB0gB/world-map.jpg"
                alt="World map of missions"
                data-ai-hint="dark world map"
                fill
                className="object-cover"
              />
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
