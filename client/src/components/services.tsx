import { Scissors, Users, Waves, Palette, Leaf, Wand2, Flame, Crown, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Balayage",
    description: "Technique de coloration naturelle pour un effet lumineux et sophistiqué"
  },
  {
    icon: Users,
    title: "Coupe Enfants",
    description: "Coupes adaptées aux plus jeunes dans une atmosphère bienveillante"
  },
  {
    icon: Waves,
    title: "Cheveux Bouclés",
    description: "Coupes spécialisées pour sublimer vos boucles naturelles"
  },
  {
    icon: Palette,
    title: "Coloration",
    description: "Colorations personnalisées avec des produits haut de gamme"
  },
  {
    icon: Leaf,
    title: "Traitement Capillaire",
    description: "Soins intensifs pour nourrir et réparer vos cheveux en profondeur"
  },
  {
    icon: Wand2,
    title: "Lissage Kératine",
    description: "Lissage longue durée pour des cheveux soyeux et disciplinés"
  },
  {
    icon: Flame,
    title: "Lissage Permanent",
    description: "Transformation permanente pour des cheveux lisses et brillants"
  },
  {
    icon: Crown,
    title: "Pose de Perruque",
    description: "Service spécialisé avec conseil et pose professionnelle"
  },
  {
    icon: User,
    title: "Coupe Femme",
    description: "Coupes sur-mesure pour révéler votre personnalité unique"
  }
];

export default function Services() {
  return (
    <section id="prestations" className="py-20 bg-[hsl(var(--cream))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Nos Prestations
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services professionnels, conçus pour sublimer votre beauté naturelle
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card bg-white shadow-lg hover:shadow-xl fade-in">
                <CardContent className="p-6">
                  <div className="text-secondary text-4xl mb-4">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
