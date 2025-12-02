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
    <section id="contato" className="py-12 md:py-20 xl:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 xl:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 mb-4 md:mb-6 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
            <span className="text-xs md:text-sm font-medium">Comece Agora</span>
          </div>
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
            Solicite uma <span className="gradient-text">Demonstração</span>
          </h2>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground px-4">
            Descubra como o VITRINNI pode transformar suas vendas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm md:text-base">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 text-sm md:text-base h-10 md:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm md:text-base">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background/50 text-sm md:text-base h-10 md:h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 text-sm md:text-base h-10 md:h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm md:text-base">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos sobre seu negócio..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background/50 text-sm md:text-base"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-base md:text-lg py-5 md:py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero uma Demonstração"}
                <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
