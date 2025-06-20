import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingCategories = [
  {
    title: "Coupes",
    services: [
      { name: "Coupe femme", price: "À partir de 45€" },
      { name: "Coupe enfant", price: "À partir de 25€" },
      { name: "Cheveux bouclés", price: "À partir de 55€" }
    ]
  },
  {
    title: "Colorations",
    services: [
      { name: "Balayage", price: "À partir de 85€" },
      { name: "Coloration complète", price: "À partir de 75€" },
      { name: "Retouches racines", price: "À partir de 45€" }
    ]
  },
  {
    title: "Soins & Lissages",
    services: [
      { name: "Lissage kératine", price: "À partir de 120€" },
      { name: "Traitement capillaire", price: "À partir de 35€" },
      { name: "Pose de perruque", price: "Sur devis" }
    ]
  }
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 bg-[hsl(var(--cream))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Nos Tarifs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tarifs indicatifs - Un devis personnalisé vous sera proposé lors de votre consultation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 fade-in">
              <CardHeader>
                <CardTitle className="font-playfair text-xl font-semibold text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between">
                      <span>{service.name}</span>
                      <span className="font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
