import { r as reactExports, b as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { u as useScroll, a as useTransform, m as motion, b as useReducedMotion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, S as ShieldCheck, H as Handshake, a as Settings2, b as Scale, P as Phone, M as Mail, I as Instagram, c as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("header", { className: "fixed top-0 inset-x-0 z-50 bg-[#63666A] py-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-7xl mx-auto px-6 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "#top", className: "flex items-center group", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "img",
      {
        src: "https://lh3.googleusercontent.com/pw/AP1GczPPp5Z6MJIzLSMPHOC2OnHDs3vt4yDKY1jF1eK3jZP18mo9mOwNTagO36iFavz4miE2vpgRKAYP55iTr8D9e4RUbWaDa6-C12MCfKIavtS0rPjyRH0=w2400",
        alt: "AECH Agente Aduanal",
        className: "w-auto h-12 rounded-md object-contain"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/Nav.tsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/Nav.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: l.href,
        className: "text-sm text-white/70 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-[-4px] after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
        children: l.label
      },
      l.href,
      false,
      {
        fileName: "/app/applet/src/components/Nav.tsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "/app/applet/src/components/Nav.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: "#contacto",
        className: "hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-[#db512d] text-[#0e3f8a] hover:bg-[#db512d]/90 transition-colors",
        children: "Contáctanos"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/Nav.tsx",
        lineNumber: 38,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Nav.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/Nav.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function Section({
  id,
  className = "",
  children
}) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    motion.section,
    {
      id,
      initial: reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" },
      whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
      viewport: { once: false, margin: "-100px" },
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      },
      className: `relative py-24 md:py-32 px-6 ${className}`,
      children
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/Section.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    motion.div,
    {
      initial: reduce ? false : { opacity: 0, x: -50, filter: "blur(5px)", scale: 0.98 },
      whileInView: { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 },
      viewport: { once: false, margin: "-50px" },
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      },
      className,
      children
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/Section.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}
const heroPort = "/assets/hero-port-F5UgniAv.jpg";
const pillars = [{
  icon: ShieldCheck,
  title: "Responsabilidad",
  desc: "Compromiso en el manejo y resguardo de su carga."
}, {
  icon: Handshake,
  title: "Integridad",
  desc: "Transparencia absoluta y ética profesional en cada gestión."
}, {
  icon: Settings2,
  title: "Eficiencia",
  desc: "Agilidad y precisión para optimizar sus tiempos de logística."
}, {
  icon: Scale,
  title: "Confianza",
  desc: "Más de 40 años de trayectoria brindando seguridad operativa."
}];
const services = [{
  title: "Asesoría Especializada",
  desc: "Ofrecemos Consultoría técnica en materia de aduana para optimizar tus operaciones.",
  icon: "https://lh3.googleusercontent.com/pw/AP1GczPd-ayMTub_201vKevzH8rL6lAxFVqK_dIgmnGe-BcnUOjYMOPrlLdvURVWRMAvW4JAf7HXebRc4_E7f3TLY7YyvtzS3ORJke0Vv7Q1KBPL1ue1ROk=w2400"
}, {
  title: "Gestión de Importación y Exportación",
  desc: "Manejo integral de carga, incluyendo servicios de etiquetado y embalaje profesional.",
  icon: "https://lh3.googleusercontent.com/pw/AP1GczNJiDFKXyh4HLPsxii9jWrHc1ZC-nMVpAeH_YdzzHZIazkU_XDUwfZB9d-YTGKiSgNYcQLRudoNCoJdggMbSKeyYBfW487WD-C_g82h_74kJtWMlD0=w2400"
}, {
  title: "Nacionalización de Mercancía",
  desc: "Desaduanamiento ágil y eficiente para que tu carga nunca se detenga.",
  icon: "https://lh3.googleusercontent.com/pw/AP1GczMlYsSMn3DUsYejObIduqO9nHFGmvuqvZE2uvs-xpucBTarCMdlICz9BlkChXcevMYPgzz_aAozFTVOLy6OoA3gWVJz_ygvGogHAdTmyFvgT5JU_KI=w2400"
}, {
  title: "Logística Terrestre Nacional",
  desc: "Transporte seguro y puntual con cobertura en todo el territorio nacional.",
  icon: "https://lh3.googleusercontent.com/pw/AP1GczMfsEYnSQVZ_RDIkehwf37N6bwGtlpggjroWlIdsa-9zA_1mK4_IiWltU9rrXcJpM4oN2mhOKg7YW4lmKFnAxnNELkuYsFgAvGrAyA_ZY6cTLPjEc0=w2400"
}];
function Index() {
  const heroRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { id: "top", className: "bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Nav, {}, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { ref: heroRef, className: "relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy-deep", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.div, { style: {
        y,
        opacity
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: heroPort, alt: "Puerto de carga al atardecer", className: "w-full h-full object-cover", width: 1920, height: 1280 }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0", style: {
          background: "var(--gradient-hero)"
        } }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.div, { initial: {
        opacity: 0,
        y: 40,
        filter: "blur(8px)"
      }, animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }, transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }, className: "relative z-10 max-w-5xl mx-auto px-6 text-center text-white pb-24 pt-24 md:pt-20 md:pb-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.p, { initial: {
          opacity: 0,
          filter: "blur(4px)"
        }, animate: {
          opacity: 1,
          filter: "blur(0px)"
        }, transition: {
          delay: 0.4,
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }, className: "text-gold tracking-[0.3em] text-sm md:text-base lg:text-lg uppercase mb-4 md:mb-6", children: "Desde 1982" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light", children: [
          "40 años transformando",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-blue-300 italic font-medium", children: "la logística en confianza" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 md:mt-8 text-base md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed", children: "AECH, su agente aduanal de confianza en Venezuela. Importación y exportación por vía aérea y marítima con respaldo institucional." }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "#contacto", className: "group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#db512d] text-[#0e3f8a] font-medium hover:bg-[#db512d]/90 transition-all hover:shadow-[0_4px_24px_rgba(219,81,45,0.3)]", children: [
            "Iniciar operación",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 103,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "#servicios", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white hover:bg-white/10 transition", children: "Conocer servicios" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 1.5,
        duration: 1
      }, className: "hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(motion.div, { animate: {
        y: [0, 8, 0]
      }, transition: {
        repeat: Infinity,
        duration: 2
      }, children: "DESCUBRIR ↓" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 119,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Section, { id: "nosotros", className: "bg-background", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-gold tracking-[0.25em] text-sm md:text-base uppercase mb-5", children: "Sobre AECH" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-navy-deep", children: [
            "Más de 40 años de ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { className: "text-gradient-gold not-italic", children: "trayectoria" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 138,
              columnNumber: 33
            }, this),
            " en el sector aduanal"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 137,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { delay: 0.15, className: "space-y-5 text-muted-foreground text-lg leading-relaxed text-justify", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Desde 1982, en AECH nos consolidamos como líderes en gestión aduanal, asegurando transparencia absoluta y el cumplimiento estricto de la normativa vigente." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 143,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Nuestro compromiso es la transparencia absoluta y el cumplimiento estricto de la normativa vigente, asegurando que el flujo de su negocio nunca se detenga." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 147,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-28", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-10 rounded-2xl bg-[#0e3f8a] text-white h-full", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4", children: "Misión" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-display text-3xl mb-5", children: "Soluciones integrales de excelencia" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 160,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-white/70 leading-relaxed text-justify", children: "Ofrecer soluciones integrales de excelencia en comercio exterior, facilitando procesos de importación y exportación con un compromiso inquebrantable hacia la transparencia y el éxito de nuestros clientes." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 161,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 156,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-10 rounded-2xl border border-border h-full bg-card", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4", children: "Visión" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 170,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-display text-3xl mb-5 text-navy-deep", children: "El referente del mercado venezolano" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-muted-foreground leading-relaxed text-justify", children: "Posicionarnos como el referente líder del mercado aduanero venezolano, siendo la primera opción en confianza, innovación y eficiencia para conectar negocios con el mundo." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 176,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 169,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 168,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-6xl mx-auto mt-28", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-gold tracking-[0.25em] text-sm md:text-base uppercase mb-4 text-center", children: "VALORES" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 188,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-display text-3xl md:text-4xl text-center text-navy-deep mb-16", children: "Construimos cada operación sobre cuatro pilares" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 191,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 187,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: pillars.map((p, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "group p-8 rounded-xl bg-card border border-border hover:border-gold hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] h-full", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(p.icon, { className: "w-6 h-6 text-gold group-hover:text-navy-deep transition-colors" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 199,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 198,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-display text-xl mb-2 text-navy-deep", children: p.title }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 201,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 202,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 197,
          columnNumber: 17
        }, this) }, p.title, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 196,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 195,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 186,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Section, { id: "servicios", className: "bg-white text-navy-deep", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-gold tracking-[0.25em] text-sm md:text-base uppercase mb-5 text-center", children: "Soluciones" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-4xl md:text-6xl text-center mb-6 font-light", children: [
          "SOLUCIONES INTEGRALES EN",
          " ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { className: "text-gradient-gold not-italic", children: "COMERCIO EXTERIOR" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 218,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 216,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-muted-foreground text-center max-w-2xl mx-auto text-lg", children: "Acompañamos cada etapa de su operación con experiencia, agilidad y respaldo legal." }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 220,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mt-20", children: services.map((s, i) => {
        const isWhiteCard = s.title === "Gestión de Importación y Exportación" || s.title === "Nacionalización de Mercancía";
        const isOrangeHover = s.title === "Asesoría Especializada" || s.title === "Logística Terrestre Nacional";
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `group relative p-10 rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden h-full ${isWhiteCard ? "bg-white text-navy-deep border-border hover:border-gold/60 shadow-lg hover:shadow-xl" : `bg-navy-deep text-white border-transparent ${isOrangeHover ? "hover:border-[#db512d]" : "hover:border-gold/60"} shadow-lg`}`, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `absolute -right-12 -top-12 w-40 h-40 rounded-full transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOrangeHover ? "bg-[#db512d]/10 group-hover:bg-[#db512d]" : "bg-gold/5 group-hover:bg-gold/15"}` }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 230,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4 mb-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: s.icon, alt: s.title, className: "w-16 h-16 rounded-full", width: 64, height: 64 }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 233,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 232,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-display text-2xl mt-4 mb-3", children: s.title }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 235,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: `leading-relaxed ${isWhiteCard ? "text-muted-foreground" : "text-white/65"}`, children: s.desc }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 236,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 231,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 229,
          columnNumber: 19
        }, this) }, s.title, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 228,
          columnNumber: 20
        }, this);
      }) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 224,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 211,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Section, { id: "contacto", className: "bg-black text-white", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-gold tracking-[0.25em] text-xs uppercase mb-5 text-center", children: "Contáctanos" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 251,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-4xl md:text-6xl lg:text-7xl text-center mb-6 font-light", children: [
            "Conectemos su negocio ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { className: "text-gradient-gold not-italic", children: "con el mundo" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 255,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 254,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-white/60 text-center max-w-2xl mx-auto text-lg mb-20", children: "Estamos listos para acompañarle en cada operación." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 257,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 250,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 rounded-2xl bg-white/[0.04] border border-white/10 h-full", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { className: "w-7 h-7 text-gold mb-5" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 264,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs tracking-[0.25em] uppercase text-white/50 mb-4", children: "Teléfono" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 265,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 text-white/85", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "https://wa.me/584140201744", className: "block hover:text-gold transition", children: "+58 414 020 1744 · WhatsApp" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 267,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "tel:+582123326974", className: "block hover:text-gold transition", children: "+58 212 332 6974" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 270,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "tel:+582123316808", className: "block hover:text-gold transition", children: "+58 212 331 6808" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 273,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 266,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 263,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 262,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 rounded-2xl bg-white/[0.04] border border-white/10 h-full", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "w-7 h-7 text-gold mb-5" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 281,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs tracking-[0.25em] uppercase text-white/50 mb-4", children: "Correo" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 282,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "mailto:aechaduanal@gmail.com", className: "text-white/85 hover:text-gold transition break-all", children: "aechaduanal@gmail.com" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "https://instagram.com/aechagente", className: "mt-6 inline-flex items-center gap-2 text-white/65 hover:text-gold transition", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Instagram, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 287,
                columnNumber: 19
              }, this),
              " @aechagente"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 286,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 280,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 279,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 rounded-2xl bg-white/[0.04] border border-white/10 h-full", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "w-7 h-7 text-gold mb-5" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 293,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs tracking-[0.25em] uppercase text-white/50 mb-4", children: "Ubicación" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 294,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-white/85 leading-relaxed", children: "Urb. Miramar, Segunda Transversal de Pariata, Edificio Lucciola, Piso 1, Oficina 2, Estado La Guaira." }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 295,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 292,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 291,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 261,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 249,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-6xl mx-auto mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/45", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " AECH Agente Aduanal"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 305,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-display italic", children: "Conectando negocios con el mundo desde 1982" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 306,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 304,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 248,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
export {
  Index as component
};
