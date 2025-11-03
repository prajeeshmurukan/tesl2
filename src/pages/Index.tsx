import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FeatureTile from "@/components/site/FeatureTile";
import heroImage from "@/assets/hero-renewable.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sun, Wind, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCallback } from "react";
const Index = () => {
  const { toast } = useToast();

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Thank you!", description: "We will get back to you within 24 hours." });
  }, [toast]);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Energyoptimas Consultant Private Limited",
    url: "/",
    sameAs: [] as string[],
    slogan: "Strategic Energy & Power Consulting",
    areaServed: "Global",
  };

  return (
    <div>
      <Header />
      <main id="main" className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-15" aria-hidden />
          <div className="pointer-events-none absolute -z-10 top-[-10%] right-[-10%] h-64 w-64 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-accent/40 blur-3xl" aria-hidden />
          <div className="container grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
            <div className="space-y-6 animate-fade-up">
              <p className="text-sm font-medium tracking-wider text-primary">Advanced power consulting for the modern energy market</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Strategic Energy & Power Consulting
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We empower energy stakeholders with strategic insights, regulatory guidance, and data-driven optimization to manage their electricity portfolios effectively.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact"><Button variant="hero" size="lg">Get Started</Button></a>
                <a href="#services"><Button variant="outline" size="lg">Learn More</Button></a>
              </div>
            </div>
            <figure className="relative glass rounded-xl p-2 hover-scale">
              <img src={heroImage} alt="Strategic energy and power consulting across solar, wind, and modern power markets" className="w-full rounded-lg border shadow-sm" />
            </figure>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative container py-16 md:py-24 bg-muted/30 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 top-0 right-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 left-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
            <p className="text-muted-foreground text-lg">
              Energyoptimas Consultant Private Limited is a specialist consultancy firm operating in liberalizing energy sectors. We promote sustainable energy markets, design regulations, provide inputs to policymakers, and assist clients across power generation, transmission, distribution, and related businesses to succeed.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">What we offer</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Regulatory advisory and assistance for private and government power utilities.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Power portfolio management to optimize power purchase costs for industrial and commercial consumers.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Renewable energy project development and requirement assessments.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Commercial due diligence for renewable and conventional energy projects.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Clients include</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Power generators</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Transmission utilities</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Distribution utilities</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Power traders</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary" /> Major stakeholders of the power sector</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section id="solutions" className="relative container py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 -top-6 left-6 h-36 w-36 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Key Solutions</h2>
            <p className="text-muted-foreground text-lg">Sustainable, market-ready solutions tailored to your strategy.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Wind className="text-primary" />
                <CardTitle>Wind Energy Solutions</CardTitle>
                <CardDescription>Sustainable wind power consulting and development.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Sun className="text-primary" />
                <CardTitle>Solar Energy Solutions</CardTitle>
                <CardDescription>Advanced photovoltaic systems and solar consulting.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="relative container py-16 md:py-24 bg-muted/20 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 top-0 left-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive power trading solutions designed for today’s dynamic energy markets.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-primary" /><p>Energy Facilitation & Open Access – Seamless participation in power markets through facilitation and open access services.</p></div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-primary" /><p>Renewable Energy Solutions – Sustainable clean energy projects to meet environmental targets.</p></div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-primary" /><p>Energy Management & Energy Saving Technologies – Optimize consumption and reduce costs with advanced systems.</p></div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-primary" /><p>Power Engineering Advisory Services – Technical expertise for infrastructure and system optimization.</p></div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-primary" /><p>Energy Tech Consulting – Digital solutions to modernize energy operations.</p></div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-primary" /><p>Regulatory & Policy Advocacy – Navigate complex regulations with expert guidance.</p></div>
          </div>
        </section>

        {/* Sectors We Serve */}
        <section id="sectors" className="relative container py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 top-0 left-0 h-44 w-44 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 right-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Sectors We Serve</h2>
            <p className="text-muted-foreground text-lg">Delivering specialized energy solutions across diverse industries.</p>
          </div>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureTile Icon={CheckCircle2} title="Power Generation" description="Thermal, renewable, and hybrid plants." />
              <FeatureTile Icon={CheckCircle2} title="Transmission" description="High voltage infrastructure and grid connectivity." />
              <FeatureTile Icon={CheckCircle2} title="Distribution" description="Last-mile power delivery systems." />
              <FeatureTile Icon={CheckCircle2} title="Trading" description="Power and commodity trading platforms." />
              <FeatureTile Icon={CheckCircle2} title="Power Market" description="Analytics, forecasting, and market participation." />
              <FeatureTile Icon={CheckCircle2} title="Renewable Energy" description="Solar, wind, and sustainable generation technologies." />
            </div>
        </section>

        {/* Our Team */}
        <section id="team" className="relative container py-16 md:py-24 bg-muted/20 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 -top-8 right-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 left-0 h-52 w-52 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
            <p className="text-muted-foreground text-lg">Experienced professionals driving innovation in the energy sector.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Rajesh Kumar – CEO</CardTitle>
                <CardDescription>15+ years | Strategic visionary in power markets and renewable development.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Priya Sharma – Technical Director</CardTitle>
                <CardDescription>12+ years | Expert in grid integration, system analysis, and renewable technologies.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Anil Nair – Business Development Head</CardTitle>
                <CardDescription>10+ years | Specialist in trading operations, compliance, and partnerships.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Meera Pillai – Operations Manager</CardTitle>
                <CardDescription>8+ years | Expert in operational efficiency and sustainable practices.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative container py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 -top-8 left-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 right-0 h-52 w-52 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">Ready to optimize your energy trading strategy? Contact our team today.</p>
          </div>
          <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4">
            <div className="grid gap-2 md:grid-cols-2">
              <Input name="name" placeholder="Full name" required aria-label="Full name" />
              <Input name="email" placeholder="Email address" type="email" required aria-label="Email address" />
            </div>
            <Input name="phone" placeholder="Phone (optional)" aria-label="Phone" />
            <Textarea name="message" placeholder="Tell us about your energy goals" rows={5} required aria-label="Message" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">We respect your privacy.</p>
              <Button type="submit" variant="hero">Send Message</Button>
            </div>
          </form>
          <Card className="mx-auto mt-8 max-w-2xl">
            <CardContent className="grid gap-4 p-6 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">Emails</p>
                  <p className="text-muted-foreground">contact@tesl.com</p>
                  <p className="text-muted-foreground">trading@tesl.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 (471) 123-4567</p>
                  <p className="text-muted-foreground">+91 (471) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">123 Tech Park, Trivandrum, Kerala, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
