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
    <section id="depoimentos" className="py-12 md:py-20 xl:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 xl:mb-20">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
            Quem Usa <span className="gradient-text">Aprova</span>
          </h2>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Depoimentos de quem transformou o negócio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
            >
              <CardContent className="pt-6 md:pt-8 pb-6 md:pb-8">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/30 dark:text-white/30 mb-3 md:mb-4" />
                
                <p className="text-sm md:text-base text-foreground/80 dark:text-white/90 mb-4 md:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground dark:text-white text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-foreground/70 dark:text-white/70">{testimonial.role} • {testimonial.company}</p>
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
