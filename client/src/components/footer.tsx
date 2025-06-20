import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--neutral-dark))] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="font-playfair font-bold text-2xl text-secondary mb-4">
              L'art de la Coiffure
            </div>
            <p className="text-gray-300">
              Votre salon de coiffure d'exception à Paris 20
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                <Facebook className="h-8 w-8" />
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-gray-300 text-sm">
              © 2024 L'art de la Coiffure<br />
              Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
