import { useState } from "react";
import { MapPin, Phone, Clock, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        service: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.prenom || !formData.email) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Balayage",
    "Coupe femme",
    "Coupe enfant",
    "Cheveux bouclés",
    "Coloration",
    "Traitement capillaire",
    "Lissage kératine",
    "Lissage permanent",
    "Pose de perruque"
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Prendre Rendez-vous
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Contactez-nous dès maintenant pour réserver votre moment de bien-être capillaire
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium mb-2">Nom *</Label>
                  <Input 
                    type="text" 
                    required 
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    className="bg-white text-gray-900" 
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">Prénom *</Label>
                  <Input 
                    type="text" 
                    required 
                    value={formData.prenom}
                    onChange={(e) => handleInputChange('prenom', e.target.value)}
                    className="bg-white text-gray-900" 
                    placeholder="Votre prénom"
                  />
                </div>
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">Email *</Label>
                <Input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white text-gray-900" 
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">Téléphone</Label>
                <Input 
                  type="tel" 
                  value={formData.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  className="bg-white text-gray-900" 
                  placeholder="01 23 45 67 89"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">Service souhaité</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="bg-white text-gray-900">
                    <SelectValue placeholder="Choisir un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">Message</Label>
                <Textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-white text-gray-900" 
                  placeholder="Décrivez vos souhaits ou posez vos questions..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={submitMutation.isPending}
                className="w-full bg-secondary hover:bg-secondary/90 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {submitMutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </form>
          </div>
          
          <div className="fade-in">
            <Card className="bg-white/10 backdrop-blur-sm mb-6 border-white/20">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl font-semibold text-white">
                  Nos Coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white">
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
                    <p className="font-medium mb-1">Horaires d'ouverture :</p>
                    <p>Lun, Mer, Jeu, Ven, Sam : 09:30–18:30</p>
                    <p>Mar, Dim : Fermé</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm h-64 border-white/20">
              <CardContent className="p-6 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Map className="text-secondary text-4xl mb-4 mx-auto h-16 w-16" />
                  <p className="text-lg font-medium">Carte Google Maps</p>
                  <p className="text-sm opacity-75">52 Rue de Terre Neuve, 75020 Paris</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
