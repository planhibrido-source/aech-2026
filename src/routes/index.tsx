import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Handshake,
  Settings2,
  Scale,
  Phone,
  Mail,
  MapPin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Section, Reveal } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AECH — Agente Aduanal | 40 años de confianza" },
      {
        name: "description",
        content:
          "Agente aduanal con más de 40 años de trayectoria. Importación, exportación, desaduanamiento y consultoría en Venezuela.",
      },
      { property: "og:title", content: "AECH — Agente Aduanal" },
      { property: "og:description", content: "40 años transformando la logística en confianza." },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    desc: "Compromiso en el manejo y resguardo de su carga.",
  },
  {
    icon: Handshake,
    title: "Integridad",
    desc: "Transparencia absoluta y ética profesional en cada gestión.",
  },
  {
    icon: Settings2,
    title: "Eficiencia",
    desc: "Agilidad y precisión para optimizar sus tiempos de logística.",
  },
  {
    icon: Scale,
    title: "Confianza",
    desc: "Más de 40 años de trayectoria brindando seguridad operativa.",
  },
];

const services = [
  {
    title: "Asesoría Especializada",
    desc: "Ofrecemos Consultoría técnica en materia de aduana para optimizar tus operaciones.",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczPd-ayMTub_201vKevzH8rL6lAxFVqK_dIgmnGe-BcnUOjYMOPrlLdvURVWRMAvW4JAf7HXebRc4_E7f3TLY7YyvtzS3ORJke0Vv7Q1KBPL1ue1ROk=w2400",
  },
  {
    title: "Gestión de Importación y Exportación",
    desc: "Manejo integral de carga, incluyendo servicios de etiquetado y embalaje profesional.",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczNJiDFKXyh4HLPsxii9jWrHc1ZC-nMVpAeH_YdzzHZIazkU_XDUwfZB9d-YTGKiSgNYcQLRudoNCoJdggMbSKeyYBfW487WD-C_g82h_74kJtWMlD0=w2400",
  },
  {
    title: "Nacionalización de Mercancía",
    desc: "Desaduanamiento ágil y eficiente para que tu carga nunca se detenga.",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczMlYsSMn3DUsYejObIduqO9nHFGmvuqvZE2uvs-xpucBTarCMdlICz9BlkChXcevMYPgzz_aAozFTVOLy6OoA3gWVJz_ygvGogHAdTmyFvgT5JU_KI=w2400",
  },
  {
    title: "Logística Terrestre Nacional",
    desc: "Transporte seguro y puntual con cobertura en todo el territorio nacional.",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczMfsEYnSQVZ_RDIkehwf37N6bwGtlpggjroWlIdsa-9zA_1mK4_IiWltU9rrXcJpM4oN2mhOKg7YW4lmKFnAxnNELkuYsFgAvGrAyA_ZY6cTLPjEc0=w2400",
  },
];

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div id="top" className="bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <div
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy-deep"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPU84mY6aBz6SmtDF89iFI5MQSV2i--R2XsVop97SMwdxMlOiQqtC5MSnx9lmNB6PlOhAinYLk5HbnYuY6TuAhHP3UVTdcbJiXTUUe3cc8yz2ToSKg=w2400"
            alt="Puerto de carga al atardecer"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pb-24 pt-24 md:pt-20 md:pb-0"
        >
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold tracking-[0.3em] text-sm md:text-base lg:text-lg uppercase mb-4 md:mb-6"
          >
            Desde 1982
          </motion.p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light">
            40 años transformando
            <br />
            <span className="text-blue-300 italic font-medium">la logística en confianza</span>
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed">
            AECH, su agente aduanal de confianza en Venezuela. Importación y exportación por vía
            aérea y marítima con respaldo institucional.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#db512d] text-[#0e3f8a] font-medium hover:bg-[#db512d]/90 transition-all hover:shadow-[0_4px_24px_rgba(219,81,45,0.3)]"
            >
              Iniciar operación
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white hover:bg-white/10 transition"
            >
              Conocer servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            DESCUBRIR ↓
          </motion.div>
        </motion.div>
      </div>

      {/* NOSOTROS */}
      <Section id="nosotros" className="bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-gold tracking-[0.25em] text-sm md:text-base uppercase mb-5">
              Sobre AECH
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-navy-deep">
              Más de 40 años de <em className="text-gradient-gold not-italic">trayectoria</em> en el
              sector aduanal
            </h2>
          </Reveal>
          <Reveal
            delay={0.15}
            className="space-y-5 text-muted-foreground text-lg leading-relaxed text-justify"
          >
            <p>
              Desde 1982, en AECH nos consolidamos como líderes en gestión aduanal, asegurando
              transparencia absoluta y el cumplimiento estricto de la normativa vigente.
            </p>
            <p>
              Nuestro compromiso es la transparencia absoluta y el cumplimiento estricto de la
              normativa vigente, asegurando que el flujo de su negocio nunca se detenga.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-28">
          <Reveal>
            <div className="p-10 rounded-2xl bg-[#0e3f8a] text-white h-full">
              <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                Misión
              </p>
              <h3 className="font-display text-3xl mb-5">Soluciones integrales de excelencia</h3>
              <p className="text-white/70 leading-relaxed text-justify">
                Ofrecer soluciones integrales de excelencia en comercio exterior, facilitando
                procesos de importación y exportación con un compromiso inquebrantable hacia la
                transparencia y el éxito de nuestros clientes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="p-10 rounded-2xl border border-border h-full bg-card">
              <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                Visión
              </p>
              <h3 className="font-display text-3xl mb-5 text-navy-deep">
                El referente del mercado venezolano
              </h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Posicionarnos como el referente líder del mercado aduanero venezolano, siendo la
                primera opción en confianza, innovación y eficiencia para conectar negocios con el
                mundo.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="max-w-6xl mx-auto mt-28">
          <Reveal>
            <p className="text-gold tracking-[0.25em] text-sm md:text-base uppercase mb-4 text-center">
              VALORES
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-center text-navy-deep mb-16">
              Construimos cada operación sobre cuatro pilares
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group p-8 rounded-xl bg-card border border-border hover:border-gold hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] h-full">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                    <p.icon className="w-6 h-6 text-gold group-hover:text-navy-deep transition-colors" />
                  </div>
                  <h4 className="font-display text-xl mb-2 text-navy-deep">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section id="servicios" className="bg-white text-navy-deep">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-gold tracking-[0.25em] text-sm md:text-base uppercase mb-5 text-center">
              Soluciones
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-center mb-6 font-light">
              SOLUCIONES INTEGRALES EN{" "}
              <em className="text-gradient-gold not-italic">COMERCIO EXTERIOR</em>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg">
              Acompañamos cada etapa de su operación con experiencia, agilidad y respaldo legal.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-20">
            {services.map((s, i) => {
              const isWhiteCard =
                s.title === "Gestión de Importación y Exportación" ||
                s.title === "Nacionalización de Mercancía";
              const isOrangeHover =
                s.title === "Asesoría Especializada" || s.title === "Logística Terrestre Nacional";
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div
                    className={`group relative p-10 rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden h-full ${
                      isWhiteCard
                        ? "bg-white text-navy-deep border-border hover:border-gold/60 shadow-lg hover:shadow-xl"
                        : `bg-navy-deep text-white border-transparent ${isOrangeHover ? "hover:border-[#db512d]" : "hover:border-gold/60"} shadow-lg`
                    }`}
                  >
                    <div
                      className={`absolute -right-12 -top-12 w-40 h-40 rounded-full transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOrangeHover
                          ? "bg-[#db512d]/10 group-hover:bg-[#db512d]"
                          : "bg-gold/5 group-hover:bg-gold/15"
                      }`}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={s.icon}
                          alt={s.title}
                          className="w-16 h-16 rounded-full"
                          width={64}
                          height={64}
                        />
                      </div>
                      <h3 className="font-display text-2xl mt-4 mb-3">{s.title}</h3>
                      <p
                        className={`leading-relaxed ${isWhiteCard ? "text-muted-foreground" : "text-white/65"}`}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" className="bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-gold tracking-[0.25em] text-xs uppercase mb-5 text-center">
              Contáctanos
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-center mb-6 font-light">
              Conectemos su negocio <em className="text-gradient-gold not-italic">con el mundo</em>
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto text-lg mb-20">
              Estamos listos para acompañarle en cada operación.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 h-full">
                <Phone className="w-7 h-7 text-gold mb-5" />
                <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">Teléfono</p>
                <div className="space-y-2 text-white/85">
                  <a href="https://wa.me/584140201744" className="block hover:text-gold transition">
                    +58 414 020 1744 · WhatsApp
                  </a>
                  <a href="tel:+582123326974" className="block hover:text-gold transition">
                    +58 212 332 6974
                  </a>
                  <a href="tel:+582123316808" className="block hover:text-gold transition">
                    +58 212 331 6808
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 h-full">
                <Mail className="w-7 h-7 text-gold mb-5" />
                <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">Correo</p>
                <a
                  href="mailto:aechaduanal@gmail.com"
                  className="text-white/85 hover:text-gold transition break-all"
                >
                  aechaduanal@gmail.com
                </a>
                <a
                  href="https://instagram.com/aechagente"
                  className="mt-6 inline-flex items-center gap-2 text-white/65 hover:text-gold transition"
                >
                  <Instagram className="w-4 h-4" /> @aechagente
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 h-full">
                <MapPin className="w-7 h-7 text-gold mb-5" />
                <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">Ubicación</p>
                <p className="text-white/85 leading-relaxed">
                  Urb. Miramar, Segunda Transversal de Pariata, Edificio Lucciola, Piso 1, Oficina
                  2, Estado La Guaira.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/45">
          <p>© {new Date().getFullYear()} AECH Agente Aduanal</p>
          <p className="font-display italic">Conectando negocios con el mundo desde 1982</p>
        </div>
      </Section>
    </div>
  );
}
