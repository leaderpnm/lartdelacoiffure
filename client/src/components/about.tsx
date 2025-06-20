import { MapPin, Phone, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              À propos
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bienvenue dans notre salon de coiffure d'exception, où l'art de la coiffure prend tout son sens. Notre équipe d'experts passionnés vous accueille dans un cadre élégant et apaisant, dédié à la mise en valeur de votre cheveu sous toutes ses formes.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Spécialisés dans le balayage, les coupes sur-mesure, le lissage, les traitements capillaires et la pose de perruques, nous vous offrons un conseil personnalisé adapté à votre type de cheveu et à vos envies.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-secondary mr-3 h-5 w-5" />
                <span>52 Rue de Terre Neuve, 75020 Paris</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-secondary mr-3 h-5 w-5" />
                <a href="tel:0982487707" className="hover:text-secondary transition-colors">
                  09 82 48 77 07
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="text-secondary mr-3 h-5 w-5 mt-1" />
                <div>
                  <p>Lundi, Mercredi, Jeudi, Vendredi, Samedi : 09:30–18:30</p>
                  <p>Mardi, Dimanche : Fermé</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Intérieur élégant du salon de coiffure" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
