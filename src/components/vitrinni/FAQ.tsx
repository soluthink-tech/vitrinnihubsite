import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O VITRINNI Ecosystem funciona para qualquer tamanho de confecção?",
      answer: "Sim! O VITRINNI Ecosystem foi desenvolvido para atender desde pequenas confecções com poucos representantes até grandes fábricas com equipes comerciais extensas. A solução se adapta ao tamanho e às necessidades específicas do seu negócio."
    },
    {
      question: "Preciso usar os três apps ou posso contratar só um?",
      answer: "Você pode contratar apenas os aplicativos que fazem sentido para o seu negócio. Se você é uma fábrica, pode usar apenas o VITRINNI Fábrica. Se é um representante exclusivo, apenas o VITRINNI Representante. A integração acontece quando diferentes perfis da cadeia de vendas usam os apps correspondentes."
    },
    {
      question: "Como é feita a implantação e o treinamento?",
      answer: "A implantação é acompanhada pela nossa equipe. Primeiro, entendemos suas necessidades e configuramos o sistema. Depois, auxiliamos no cadastro inicial de produtos, clientes e representantes. Por fim, oferecemos treinamento completo para todos os usuários, garantindo que todos saibam usar as ferramentas adequadamente."
    },
    {
      question: "Existe suporte se eu tiver dúvidas?",
      answer: "Sim! Oferecemos suporte contínuo por e-mail, WhatsApp e telefone. Nossa equipe está sempre disponível para tirar dúvidas, resolver problemas e ajudar você a aproveitar ao máximo todos os recursos do VITRINNI Ecosystem."
    },
    {
      question: "Os dados ficam seguros na nuvem?",
      answer: "Absolutamente! Utilizamos servidores seguros com backup automático e criptografia de dados. Suas informações estão protegidas e você pode acessá-las de qualquer lugar, a qualquer momento, com total segurança."
    },
    {
      question: "Posso acessar de qualquer dispositivo?",
      answer: "Sim! O VITRINNI Ecosystem funciona em notebooks, tablets e smartphones, tanto em sistemas Windows, Mac, Android quanto iOS. Você e sua equipe podem acessar de qualquer dispositivo com internet."
    },
    {
      question: "Como funciona a sincronização entre fábrica e representantes?",
      answer: "A sincronização é automática e em tempo real. Quando a fábrica atualiza produtos, preços ou coleções, os representantes recebem as informações instantaneamente. Quando um representante registra um pedido, ele aparece imediatamente no sistema da fábrica. Tudo conectado e sincronizado."
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "O investimento varia de acordo com o número de usuários e os aplicativos contratados. Entre em contato conosco para receber uma proposta personalizada para o seu negócio. Trabalhamos com planos mensais flexíveis e sem fidelidade."
    },
    {
      question: "Posso testar antes de contratar?",
      answer: "Sim! Oferecemos demonstrações personalizadas onde você pode conhecer todos os recursos e tirar suas dúvidas. Também disponibilizamos um período de teste para que você experimente o sistema na prática antes de tomar a decisão final."
    },
    {
      question: "E se eu já uso outro sistema, consigo migrar?",
      answer: "Sim! Nossa equipe auxilia na migração de dados do seu sistema atual para o VITRINNI Ecosystem. Fazemos todo o processo de forma cuidadosa para garantir que nenhuma informação seja perdida e que a transição seja tranquila."
    }
  ];

  return (
    <section id="faq" className="py-12 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            <span className="gradient-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre o VITRINNI Ecosystem
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-base xl:text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 xl:mt-12 text-center">
          <p className="text-base xl:text-lg text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <p className="text-base xl:text-lg font-semibold text-foreground">
            Entre em contato conosco! Estamos prontos para ajudar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
