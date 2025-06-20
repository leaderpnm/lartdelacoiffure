import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marie Dubois",
    text: "Un accueil chaleureux et un service impeccable ! Mon balayage est absolument magnifique. Je recommande vivement ce salon.",
    rating: 5
  },
  {
    name: "Sophie Martin",
    text: "Enfin un salon qui comprend mes cheveux bouclés ! L'équipe est professionnelle et à l'écoute. Le résultat dépasse mes attentes.",
    rating: 5
  },
  {
    name: "Céline Laurent",
    text: "Une équipe exceptionnelle ! Le lissage kératine a transformé mes cheveux. Je me sens magnifique. Merci pour ce savoir-faire unique.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Elles & Ils témoignent
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez les retours de nos clients satisfaits
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[hsl(var(--cream))] shadow-lg fade-in">
              <CardContent className="p-6">
                <div className="flex text-secondary mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-primary">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
