import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="accueil" className="h-screen hero-bg flex items-center justify-center text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 fade-in">
          L'art de la Coiffure
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light fade-in">
          Votre salon de coiffure d'exception à Paris 20
        </p>
        <Button 
          onClick={handleCTAClick}
          className="bg-secondary hover:bg-secondary/90 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 fade-in"
        >
          Prendre Rendez-vous
        </Button>
      </div>
    </section>
  );
}
