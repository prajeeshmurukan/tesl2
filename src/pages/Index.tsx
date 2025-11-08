import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FeatureTile from "@/components/site/FeatureTile";
import heroImage from "@/assets/hero-renewable.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sun, Wind, CheckCircle2, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCallback, useState } from "react";

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

  const sectionIds = ["about", "solutions", "portfolio", "renewable", "distributed", "economic", "services", "sectors", "team", "contact"] as const;
  const navigateRelative = useCallback((currentId: typeof sectionIds[number], delta: number) => {
    const idx = sectionIds.indexOf(currentId);
    const next = sectionIds[(idx + delta + sectionIds.length) % sectionIds.length];
    const el = document.getElementById(next);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${next}`);
    }
  }, []);

  const serviceSectionIds = ["solutions", "portfolio", "renewable", "distributed", "economic"] as const;
  const [activeService, setActiveService] = useState<typeof serviceSectionIds[number]>("solutions");
  const navigateService = useCallback((delta: number) => {
    const idx = serviceSectionIds.indexOf(activeService);
    const next = serviceSectionIds[(idx + delta + serviceSectionIds.length) % serviceSectionIds.length];
    setActiveService(next);
    window.history.replaceState(null, "", `#${next}`);
  }, [activeService]);

  const navBtnClass = "absolute top-1/2 -translate-y-1/2 z-30 rounded-full bg-background/80 backdrop-blur flex items-center justify-center h-12 w-12 md:h-14 md:w-14 p-0 hover:bg-background shadow-sm";
  const navIconClass = "h-8 w-8 md:h-9 md:w-9 text-primary";

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
              <p className="text-3xl font-bold tracking-wider text-primary whitespace-nowrap">
                Travancore Energy Solutions Private Limited.
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Strategic Energy & Power Consulting
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Travancore Energy Solutions delivers end-to-end power sector advisory — from regulatory guidance to renewable integration — helping clients achieve cost efficiency and sustainability goals
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact"><Button variant="hero" size="lg">Get Started</Button></a>
                <a href="#services"><Button variant="outline" size="lg">Learn More..</Button></a>
              </div>
            </div>
            <figure className="relative glass rounded-xl p-2 hover-scale md:ml-8 lg:ml-12">
              <img src={heroImage} alt="Strategic energy and power consulting across solar, wind, and modern power markets" className="w-full rounded-lg border shadow-sm" />
            </figure>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative container py-16 md:py-24 bg-muted/30 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 top-0 right-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 left-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto w-[calc(100%-20px)] text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify space-y-4">
              <p>Travancore Energy Solutions Private Limited is a leading consulting firm specializing in power sector reforms, regulatory strategy, and sustainable energy development. With a deep understanding of India’s evolving electricity ecosystem, we work alongside government agencies, state utilities, and regulators to design efficient market frameworks, tariff models, and renewable energy policies that align with national objectives.</p>
              <p>Our team of domain experts, engineers, and policy advisors brings extensive experience across generation, transmission, distribution, and trading sectors. We provide actionable insights to improve operational efficiency, ensure regulatory compliance, and facilitate the integration of emerging technologies in grid and market operations.</p>
              <p>At Travancore Energy Solutions, we are committed to enabling India’s energy transition — fostering transparency, efficiency, and sustainability across every link of the power value chain.</p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid w-[calc(100%-20px)] max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">What we offer</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Regulatory advisory and assistance for private and government power utilities.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Power portfolio management to optimize power purchase costs for industrial and commercial consumers.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Renewable energy project development and requirement assessments.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Commercial due diligence for renewable and conventional energy projects.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Clients include</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Power generators</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Transmission utilities</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Distribution utilities</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Power traders</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Major stakeholders of the power sector</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section
          id="services"
          className="relative container pt-16 md:pt-24 pb-0 md:pb-0 overflow-visible"
        >
          <div
            className="pointer-events-none absolute -z-10 top-0 left-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
            aria-hidden
          />
          <div className="mx-auto w-[calc(100%-20px)] max-w-12xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="text-muted-foreground text-lg">
            
            </p>
          </div>
        </section>
      <br></br>
        {/* Services Navigation Wrapper */}
        <div className="relative mx-auto w-[calc(100%-20px)] max-w-6xl min-h-[800px] md:min-h-[880px] -mt-6 md:-mt-8">
          <button
            aria-label="Previous section"
            onClick={() => navigateService(-1)}
            className={`left-0 -translate-x-full ${navBtnClass}`}
          >
            <ChevronLeft className={navIconClass} />
          </button>
          <button
            aria-label="Next section"
            onClick={() => navigateService(1)}
            className={`right-0 translate-x-full ${navBtnClass}`}
          >
            <ChevronRight className={navIconClass} />
          </button>

          {/* Regulatory & Policy */}
          <section
            id="solutions"
            className={`group relative mt-[5px] py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden ${
              activeService !== "solutions" ? "hidden" : ""
            }`}
          >
            <div
              className="pointer-events-none absolute -z-10 -top-6 left-6 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div className="mx-auto w-[calc(100%-20px)] max-w-6xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">
                Regulatory &amp; Policy
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                Navigating the power sector requires clear regulatory insight and
                practical execution. We support tariff design, policy reform, and
                compliance management so utilities, industries, and businesses can
                interpret evolving frameworks with confidence and minimize regulatory
                risk.
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Certified
                  specialists with proven expertise
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Guidance
                  on multi-year tariff petitions
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Policy
                  advisory for utilities and industries
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> End-to-end
                  compliance solutions
                </li>
              </ul>
            </div>
          </section>

          {/* Power Portfolio Optimization and Open Access */}
          <section
            id="portfolio"
            className={`relative mt-[5px] py-16 md:py-24 bg-muted/20 rounded-xl overflow-hidden ${
              activeService !== "portfolio" ? "hidden" : ""
            }`}
          >
            <div
              className="pointer-events-none absolute -z-10 top-0 left-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div className="mx-auto w-[calc(100%-20px)] max-w-6xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">
                Power Portfolio Optimization &amp; Open Access
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                Unlock cost efficiency with customized power sourcing strategies
                designed for your business needs. From open access procurement to
                portfolio optimization, we help organizations cut energy costs while
                maintaining regulatory compliance and supply reliability.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                Our experts analyze market opportunities, assess sourcing models, and
                develop financially optimized frameworks for stable, cost-effective
                energy operations.
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Optimized
                  power sourcing for industries
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Open access
                  advisory and execution
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Risk
                  assessment and financial modeling
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Cost-effective
                  portfolio strategies
                </li>
              </ul>
            </div>
          </section>

          {/* Renewable Energy */}
          <section
            id="renewable"
            className={`relative mt-[5px] py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden ${
              activeService !== "renewable" ? "hidden" : ""
            }`}
          >
            <div
              className="pointer-events-none absolute -z-10 -top-6 left-6 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div className="mx-auto w-[calc(100%-20px)] max-w-6xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">
                Renewable Energy
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                Transition to clean energy with confidence through our end-to-end
                consultancy services. We support projects across solar, wind, hydro,
                biomass, and waste-to-energy, guiding clients from feasibility to
                implementation while ensuring commercial and policy alignment.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                Our multi-disciplinary approach combines engineering insight, regulatory
                expertise, and financial modeling to maximize returns and accelerate
                India’s renewable transformation.
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Feasibility
                  and project advisory
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> End-to-end
                  renewable project guidance
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Compliance
                  with energy obligations
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Scalable
                  clean energy strategies
                </li>
              </ul>
            </div>
          </section>

          {/* Distributed Energy Resources & Sustainable Technologies */}
          <section
            id="distributed"
            className={`relative mt-[5px] py-16 md:py-24 bg-muted/20 rounded-xl overflow-hidden ${
              activeService !== "distributed" ? "hidden" : ""
            }`}
          >
            <div
              className="pointer-events-none absolute -z-10 top-0 left-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div className="mx-auto w-[calc(100%-20px)] max-w-6xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">
                Distributed Energy Resources &amp; Sustainable Technologies
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                The future of energy lies in decentralization. Travancore Energy
                Solutions supports clients in deploying distributed energy resources
                (DERs), battery storage, and smart technologies to enhance grid
                resilience and operational efficiency.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                We design integration frameworks for grid interoperability, regulatory
                compliance, and digital monitoring—enabling organizations to capture
                long-term value through innovation and sustainability.
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Advisory
                  on energy storage and DERs
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Integration
                  of sustainable technologies
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Efficiency-driven
                  deployment strategies
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Future-ready
                  infrastructure planning
                </li>
              </ul>
            </div>
          </section>

          {/* Economic & Commercial Analysis */}
          <section
            id="economic"
            className={`relative mt-[5px] py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden ${
              activeService !== "economic" ? "hidden" : ""
            }`}
          >
            <div
              className="pointer-events-none absolute -z-10 -top-6 left-6 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -z-10 bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div className="mx-auto w-[calc(100%-20px)] max-w-6xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">
                Economic &amp; Commercial Analysis for Power Utilities
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                In a dynamic energy environment, strategic financial insight drives
                sustainable growth. We offer economic and commercial analysis to help
                utilities and industries evaluate tariffs, assess market potential, and
                plan investments with clarity and confidence.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                Through advanced modeling and transparent evaluation, we support
                decision-making that enhances profitability and aligns with evolving
                regulatory frameworks.
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Tariff
                  evaluation and cost modeling
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Market
                  opportunity assessment
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Investment
                  planning and risk analysis
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Cost
                  optimization and performance forecasting
                </li>
              </ul>
            </div>
          </section>
        </div>

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
