import { useEffect, useState } from "react";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#63666A] py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPPp5Z6MJIzLSMPHOC2OnHDs3vt4yDKY1jF1eK3jZP18mo9mOwNTagO36iFavz4miE2vpgRKAYP55iTr8D9e4RUbWaDa6-C12MCfKIavtS0rPjyRH0=w2400"
            alt="AECH Agente Aduanal"
            className="w-auto h-12 rounded-md object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-[-4px] after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-6 py-3 rounded-full text-base lg:text-lg font-medium bg-[#db512d] text-[#0e3f8a] hover:bg-[#db512d]/90 transition-colors"
        >
          Contáctanos
        </a>
      </div>
    </header>
  );
}
