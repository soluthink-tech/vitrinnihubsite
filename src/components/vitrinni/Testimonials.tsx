import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária",
      company: "Confecções Elegance",
      text: "O VITRINNI revolucionou nossa gestão. Hoje temos tudo organizado e em tempo real. Não consigo mais imaginar trabalhar sem ele!",
    },
    {
      name: "João Santos",
      role: "Representante",
      company: "Moda Masculina",
      text: "Consigo fazer muito mais visitas por dia. O catálogo digital impressiona os clientes. Meu faturamento aumentou 45% em 6 meses!",
    },
    {
      name: "Ana Paula Costa",
      role: "Multimarcas",
      company: "Fashion Group",
      text: "Trabalho com 10 marcas diferentes e o VITRINNI organizou minha vida! Tudo em um só lugar, sem confusão.",
    }
  ];

  return (
    <section id="depoimentos" className="py-16 xl:py-32 relative">
      <div className="container mx-auto px-4 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 xl:mb-20">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            Quem Usa <span className="gradient-text">Aprova</span>
          </h2>
          <p className="text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de quem transformou o negócio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
            >
              <CardContent className="pt-8 pb-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <p className="text-base text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
