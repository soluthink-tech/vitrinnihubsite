import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio (em produção, conectar com backend)
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua demonstração.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-12 xl:py-24">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            Solicite uma <span className="gradient-text">Demonstração</span>
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para 
            apresentar o VITRINNI Ecosystem e descobrir qual solução é ideal para você
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl xl:text-2xl">Entre em Contato</CardTitle>
              <CardDescription className="text-sm xl:text-base">
                Preencha seus dados e conte-nos sobre sua necessidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Quero uma Demonstração"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <div className="space-y-6">
            <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-xl xl:text-2xl">Por que solicitar uma demonstração?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p className="text-sm xl:text-base text-muted-foreground">
                    Conheça todos os recursos do VITRINNI Ecosystem na prática
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p className="text-sm xl:text-base text-muted-foreground">
                    Tire todas as suas dúvidas com nossa equipe especializada
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p className="text-sm xl:text-base text-muted-foreground">
                    Descubra qual aplicativo é ideal para o seu perfil
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p className="text-sm xl:text-base text-muted-foreground">
                    Receba uma proposta personalizada para o seu negócio
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p className="text-sm xl:text-base text-muted-foreground">
                    Sem compromisso e totalmente gratuito
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg xl:text-xl">Formas de Pagamento Aceitas</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/images/payment-methods.png" 
                  alt="Formas de pagamento: Visa, Mastercard, Elo, American Express, Hipercard, Diners Club, Hiper, Aura, JCB, Discover, Pix e Boleto"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
