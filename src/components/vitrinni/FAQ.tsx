import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O VITRINNI funciona para qualquer tamanho de empresa?",
      answer: "Sim! Atendemos desde pequenas confecções até grandes fábricas. A solução se adapta às suas necessidades."
    },
    {
      question: "Preciso usar os três apps?",
      answer: "Não. Você contrata apenas os aplicativos que fazem sentido para o seu negócio. A integração acontece quando necessário."
    },
    {
      question: "Como funciona a implantação?",
      answer: "Nossa equipe cuida de tudo: configuração, cadastro inicial e treinamento completo. Você começa a usar rapidamente."
    },
    {
      question: "Existe suporte?",
      answer: "Sim! Oferecemos suporte contínuo por e-mail, WhatsApp e telefone. Estamos sempre disponíveis para ajudar."
    },
    {
      question: "Os dados ficam seguros?",
      answer: "Absolutamente! Utilizamos servidores seguros com backup automático e criptografia. Seus dados estão protegidos."
    },
    {
      question: "Posso acessar de qualquer dispositivo?",
      answer: "Sim! Funciona em notebooks, tablets e smartphones, em qualquer sistema operacional."
    }
  ];

  return (
    <section id="faq" className="py-12 md:py-20 xl:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 xl:mb-20">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tire suas dúvidas sobre o VITRINNI
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl px-4 md:px-6 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left text-sm md:text-base xl:text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm xl:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
