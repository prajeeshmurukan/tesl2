import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FeatureTile from "@/components/site/FeatureTile";
import heroImage from "@/assets/hero-renewable2.png";
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

  const sectionIds = ["about", "why", "solutions", "portfolio", "renewable", "distributed", "economic", "services", "sectors", "industrial", "team", "contact"] as const;
  const navigateRelative = useCallback((currentId: typeof sectionIds[number], delta: number) => {
    const idx = sectionIds.indexOf(currentId);
    const next = sectionIds[(idx + delta + sectionIds.length) % sectionIds.length];
    const el = document.getElementById(next);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${next}`);
    }
  }, []);

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
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Powering Partnerships. Enabling Progress.
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Travancore Energy Solutions delivers end-to-end power sector advisory — from regulatory guidance to renewable integration — helping clients achieve cost efficiency and sustainability goals
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#services"><Button variant="hero" size="lg">Get Started</Button></a>
              </div>
            </div>
            <figure className="relative glass rounded-xl p-0 hover-scale md:ml-8 lg:ml-12 md:scale-105 lg:scale-110 origin-center transition-transform bg-[#E6FFFF] md:translate-x-[120px] overflow-hidden my-6 md:-my-24 h-64 md:h-[calc(100%+12rem)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(60% 50% at 60% 70%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0) 80%)",
                  filter: "blur(8px)",
                  opacity: 0.4,
                  transform: "translateY(6px)",
                }}
              />
              <img src={heroImage} alt="Strategic energy and power consulting across solar, wind, and modern power markets" className="w-full h-full object-cover rounded-lg shadow-none" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-lg"
                style={{
                  background:
                  "linear-gradient(to left, #dbeff8 0%, rgba(230,255,255,0) 5%)," +
                  "linear-gradient(to right, #dbf0f3 0%, rgba(230,255,255,0) 45%)," +
                    "linear-gradient(to left, #dbeff8 0%, rgba(230,255,255,0) 15%)," +
                    "linear-gradient(to bottom, #dbf0f4 0%, rgba(230,255,255,0) 15%)," +
                    "linear-gradient(to top,  #dbf0f4 0%, rgba(230,255,255,0) 1%)",
                  mixBlendMode: "normal",
                }}
              />
            </figure>
          </div>
        </section>


        <br></br>

        {/* About */}
        <section id="about" className="relative container py-16 md:py-24 bg-muted/30 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 top-0 right-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 left-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto w-[calc(100%-20px)] text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify space-y-4">
              <p>Founded in 2016, Travancore Energy Solutions Pvt. Ltd. (TESL) is a specialized energy services and consulting company focused on bridging the gap between power producers, utilities, and large consumers. 
                With years of hands-on experience in the evolving Indian power market, we deliver practical, regulatory, and strategic solutions that drive reliability, efficiency, and sustainability across the energy value chain.
                </p>
                <p>At TESL, we work closely with power generation companies, distribution utilities,Power trading companies and industrial/commercial consumers to streamline commercial and operational processes. Our expertise spans regulatory facilitation, power sale optimization, open access and trading advisory, renewable integration, and end-to-end support in policy and compliance matters. Our team combines strong regulatory understanding with on-ground experience in power procurement, tariff advisory, and commercial dispute resolution. 
                <p>We’ve helped clients navigate complex reforms, manage stakeholder relationships, and achieve financial and operational efficiency in alignment with national energy transition goals.
                By combining deep industry knowledge with a results-driven approach, Travancore Energy Solutions continues to be a trusted partner for organizations aiming to adapt and grow in India’s dynamic power sector.
                </p>
              </p>

            </div>
          </div>

          <div className="mx-auto mt-10 grid w-[calc(100%-20px)] max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">What we offer</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Regulatory advisory and assistance for private and government clients.</li>
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
                <li className="flex gap-2"><CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Major stakeholders of the power sector and industrial/commercial consumers</li>
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
        {/* Services */}
        <div className="mx-auto w-[calc(100%-20px)] max-w-6xl -mt-6 md:-mt-8 space-y-6">

          {/* Regulatory & Policy */}
          <section
            id="solutions"
            className="group relative mt-[5px] py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden"
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
                Regulatory & Policy
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
            The Indian power sector is evolving rapidly, and staying compliant demands more than just awareness—it requires strategic insight. At Travancore Energy Solutions, we help clients interpret and adapt to complex regulatory frameworks with confidence. Our services span tariff design, policy reform support, and compliance management for utilities, industries, and large power consumers.
We craft tailored strategies that align with both national and state-level regulations, ensuring smooth adaptation to new guidelines and seamless audit readiness. By simplifying technical and procedural requirements, we help clients minimize regulatory risk and stay focused on their core operations and growth.

              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">

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
            className="relative mt-[5px] py-16 md:py-24 bg-muted/20 rounded-xl overflow-hidden"
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
Power Portfolio Optimization and Open Access
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
          Energy costs can make or break competitiveness. We enable organizations to unlock cost efficiency through customized power sourcing and open access strategies. Our team evaluates sourcing options, analyzes market opportunities, and structures contracts that reduce costs while ensuring compliance and supply stability.
From portfolio optimization to long-term planning, we balance savings with reliability, empowering businesses to manage their power expenses predictably in a dynamic and reform-driven market.

              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                Our experts analyze market opportunities, assess sourcing models, and
                develop financially optimized frameworks for stable, cost-effective
                energy operations.
              </p>
              <div className="mt-2 grid gap-4 md:grid-cols-2 text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> Optimized power sourcing for industries & commercial cosumers
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
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />Economic and Commercial Analysis for Power Sector
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />Tariff evaluation and cost modeling
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />Economic and Commercial Analysis for Power Sector
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />Investment planning and risk analysis
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />Cost optimization and performance forecasting
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />Energy data analytics, forecasting, and reporting
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />AI-based forecast modeling and scenario simulation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Renewable Energy */}
          <section
            id="renewable"
            className="relative mt-[5px] py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden"
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
                Renewable Energy Consulting
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
          We guide organizations in their transition toward cleaner, more sustainable energy sources. Our expertise covers solar, wind, hydro, biomass, and waste-to-energy projects—right from feasibility studies to implementation.
With deep technical, financial, and regulatory understanding, we ensure each project is commercially sound, compliant, and strategically aligned with sustainability goals. Our approach combines sound engineering with realistic business modelling to help clients decarbonize while maintaining profitability and resilience.

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
            className="relative mt-[5px] py-16 md:py-24 bg-muted/20 rounded-xl overflow-hidden"
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
               Distributed Energy and Sustainable Technology Solutions
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
Decentralized energy is redefining the future. We assist clients in planning and implementing distributed energy resources (DERs), energy storage, and smart-grid solutions that enhance resilience, flexibility, and efficiency.
Our team develops integration frameworks that consider grid interoperability, evolving regulations, and emerging market mechanisms. We also support advanced energy management solutions such as microgrids, demand response, and digital monitoring tools—helping clients build reliable, cost-efficient, and future-ready energy systems.
.
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


          {/* Tech consulting */}
          <section
            id="tech-consulting"
            className="relative mt-[5px] py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 rounded-xl overflow-hidden"
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
Training and Capacity Building   
       </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
Knowledge is the foundation of progress. We offer specialized training and capacity-building programs for utilities, regulatory bodies, and industry professionals.
Our programs blend regulatory, technical, and commercial perspectives, equipping participants with the skills needed to adapt to policy shifts, adopt new technologies, and lead the energy transition. 
Each session is designed to build long-term institutional capability and drive innovation across the power sector.


              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              </p>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> We are equipped to empower industrial and commercial consumers with deep energy market knowledge
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> We proviude trainings designed to build confidence in navigating regulatory and compliance frameworks.

                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> We enable organizations to confidently participate in open access and power markets.

                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" /> We provide customized training programs tailored to meet specific operational needs.

                </li>

              </ul>
            </div>
          </section>


        </div>

        {/* Why choose us ? */}
        <section id="why" className="relative container py-16 md:py-24 bg-muted/30 rounded-xl overflow-hidden">
          <div className="pointer-events-none absolute -z-10 top-0 right-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -z-10 bottom-0 left-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="mx-auto w-[calc(100%-20px)] max-w-6xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-center">Why Choose Us ?</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              As a trusted power-sector consultancy, TESL combines regulatory insight, technical depth,
              and a results-focused approach to deliver lasting value.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Expert Consultants</h3>
                <p className="text-muted-foreground">A team with proven knowledge of power markets and policy.</p>
                <h3 className="text-lg font-semibold">Cost Optimization</h3>
                <p className="text-muted-foreground">Approaches that reduce spend and improve efficiency.</p>
                <h3 className="text-lg font-semibold">Continuous Support</h3>
                <p className="text-muted-foreground">End-to-end assistance from planning to execution.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tailored Solutions</h3>
                <p className="text-muted-foreground">Strategies customized to your business and energy goals.</p>
                <h3 className="text-lg font-semibold">Sustainable Focus</h3>
                <p className="text-muted-foreground">Guidance to integrate renewable and clean energy seamlessly.</p>
                <h3 className="text-lg font-semibold">Proven Success</h3>
                <p className="text-muted-foreground">Strong track record across industries, utilities, and renewables.</p>
              </div>
            </div>
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
              <FeatureTile Icon={CheckCircle2} title="Power Generation" description="Thermal, renewable, gas based and hybrid plants." />
              <FeatureTile Icon={CheckCircle2} title="Transmission" description="High voltage infrastructure and grid connectivity." />
              <FeatureTile Icon={CheckCircle2} title="Distribution" description="Last-mile power delivery systems." />
              <FeatureTile Icon={CheckCircle2} title="Trading" description="Power and commodity trading platforms." />
              <FeatureTile Icon={CheckCircle2} title="Power Market" description="Analytics, forecasting, and market participation." />
              <FeatureTile Icon={CheckCircle2} title="Renewable Energy" description="Solar, wind, and sustainable generation technologies." />
              <div className="md:col-span-2 lg:col-span-3">
                <FeatureTile Icon={CheckCircle2} title="Large-Scale Industrial/commercial consumers" description="TESL partners with energy-intensive industries/commercial consumers to reduce landed power cost, de-risk supply, and advance decarbonization goals. We combine market intelligence, regulatory know‑how, and technical expertise to deliver measurable outcomes" />
              </div>

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
          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Suresh Velappan – CEO</CardTitle>
                <CardDescription className="break-words">25+ years | Strategic visionary in power markets and renewable development.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify break-words">
                  Mr. Velappan is a senior energy professional with over 27 years of experience across the energy and infrastructure sector. He has a strong track record in business development, government interfacing, and stakeholder management, with deep understanding of market dynamics and emerging trends. His expertise spans revenue management, profit-centre leadership, conceptualizing and executing innovative business models, people management, strategy and planning, and dispute resolution. As an entrepreneur and independent energy and infrastructure consultant, he has advised leading organizations including Adani Power, Jindal Power, SEIL Limited, BALCO, and other multinational and listed corporates.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="">
                <CardTitle>Unni Viswanathan – Advisor</CardTitle>
                <CardDescription className="break-words">30+ years | Expert in grid integration, system analysis, and renewable technologies.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify break-words">
An energy-sector leader with a foundation in Finance and Commerce, bringing decades of experience across India’s power industry.
Led the top-line and bottom-line of a successful electricity trading business for over fifteen years.
Worked closely with state utilities, private generators, central government corporations, and large industrial consumers.
Deep exposure to power markets, commercial strategy, and operations across the subcontinent.
Experienced in business development, organisational leadership, customer relations, and human-resource management.
Two decades of hands-on involvement in regulatory and policy analysis across multiple forums.
Actively engaged with Government, regulators, policymakers, and sector stakeholders.
Provided strategic inputs on technical, legal, commercial, and policy matters affecting the energy ecosystem.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Pradeesh Kumar – Business Development Head</CardTitle>
                <CardDescription className="break-words">15+ years | Specialist in trading operations, compliance, and partnerships.</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify break-words">
                  Mr. Kumar is an accomplished business leader with over 15 years of experience in power trading, market operations, and strategic partnerships. He brings strong expertise in regulatory compliance, commercial structuring, and cross‑border trading mechanisms, with deep understanding of evolving market frameworks and renewable integration. His work spans portfolio management, bilateral and exchange trading, contract negotiation, and market‑entry strategies for utilities and large consumers. He has established and scaled trading desks, managed risk exposure, and ensured adherence to national and regional regulations.
                </p>
              </CardContent>
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
          <Card className="mx-auto mt-8 max-w-6xl">
            <CardContent className="grid gap-2 md:gap-3 p-6 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">e-mail</p>
                  <p className="text-muted-foreground break-words">ceo@tesl.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground break-words">+91 9811401096</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-primary" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground break-words hyphens-auto"><span><b>Travancore Energy Solutions Private Limited</b></span> 
                                                      <br/> First floor, Next to CASE Carmel Towers                                                       
                                                        <br/>Cotton Hill,Vazhuthacaud, 
                                                        <br/>Thiruvananthapuram, 
                                                        <br/>Kerala 695014, India
                  </p>
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
