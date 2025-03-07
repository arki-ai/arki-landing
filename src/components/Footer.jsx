import React from "react";
import { IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1525] py-8 border-t border-white/5">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src="/img/arki_favicon.png" alt="Arki" className="w-4 rounded-sm" />
            <span className="ml-2 text-xs text-slate-400">
              © {year} Arki
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="text-xs text-slate-400 hover:text-arkiblue-600 transition-colors">Características</a>
            <a href="#" className="text-xs text-slate-400 hover:text-arkiblue-600 transition-colors">Precios</a>
            <a href="#" className="text-xs text-slate-400 hover:text-arkiblue-600 transition-colors">Demo</a>
            <a href="#" className="text-xs text-slate-400 hover:text-arkiblue-600 transition-colors">Sobre nosotros</a>
            <a href="#" className="text-xs text-slate-400 hover:text-arkiblue-600 transition-colors">Términos</a>
            <a href="#" className="text-xs text-slate-400 hover:text-arkiblue-600 transition-colors">Privacidad</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-arkiblue-600 transition-colors">
              <IconBrandTwitter size={15} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-slate-400 hover:text-arkiblue-600 transition-colors">
              <IconBrandInstagram size={15} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-slate-400 hover:text-arkiblue-600 transition-colors">
              <IconBrandLinkedin size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;