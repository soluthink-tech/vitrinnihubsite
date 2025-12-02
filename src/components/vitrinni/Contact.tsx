import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";

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

    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
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
    <section id="contato" className="py-16 xl:py-32 relative">
      <div className="container mx-auto px-4 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 xl:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Comece Agora</span>
          </div>
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            Solicite uma <span className="gradient-text">Demonstração</span>
          </h2>
          <p className="text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como o VITRINNI pode transformar suas vendas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos sobre seu negócio..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background/50"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero uma Demonstração"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Formas de Pagamento Aceitas</p>
            <img 
              src="/images/payment-methods.png" 
              alt="Formas de pagamento aceitas"
              className="h-12 w-auto mx-auto opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
