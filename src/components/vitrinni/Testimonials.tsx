import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Confecções Elegance",
      role: "Proprietária",
      text: "O VITRINNI Fábrica revolucionou nossa gestão. Antes era um caos controlar pedidos de 15 representantes. Hoje temos tudo organizado e em tempo real. Não consigo mais imaginar trabalhar sem ele!",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Representante Exclusivo",
      role: "Representante de Moda Masculina",
      text: "Com o VITRINNI Representante, consigo fazer muito mais visitas por dia. O catálogo digital impressiona os clientes e registro os pedidos na hora. Meu faturamento aumentou 45% em 6 meses!",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      company: "Multimarcas Fashion",
      role: "Representante Multimarcas",
      text: "Trabalho com 10 marcas diferentes e o VITRINNI Multimarcas organizou minha vida! Tudo em um só lugar, sem confusão. Meus clientes adoram a praticidade e eu economizo horas de trabalho todo dia.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      company: "Fábrica de Calçados Premium",
      role: "Gerente Comercial",
      text: "A integração entre fábrica e representantes é perfeita. Atualizamos preços e produtos, e na mesma hora todos os representantes já têm acesso. Acabaram os problemas de informação desatualizada!",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      company: "Representante Regional",
      role: "Representante de Moda Feminina",
      text: "A imagem profissional que passo para meus clientes mudou completamente. Apresento os produtos no tablet, registro o pedido na hora e o cliente recebe a confirmação por e-mail. Simplesmente perfeito!",
      rating: 5
    },
    {
      name: "Roberto Alves",
      company: "Confecções Sport Style",
      role: "Diretor Comercial",
      text: "Implementamos o VITRINNI Ecosystem há 1 ano e os resultados são impressionantes. Reduzimos erros, aumentamos a produtividade e temos controle total das vendas. Investimento que se paga sozinho!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-12 xl:py-24">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de quem já transformou seu negócio com o VITRINNI Ecosystem
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm xl:text-base text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
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
