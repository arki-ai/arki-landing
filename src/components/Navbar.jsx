import React, { useState } from "react";
import { motion } from "framer-motion";
import sparklesIcon from "../assets/svg/sparkles.svg";

const NavLink = ({ href, children }) => (
  <a href={href} className="font-medium text-slate-300 transition-colors hover:text-arkiblue-600">
    {children}
  </a>
);

const NavbarUpdateMessage = ({ msg = "¡Acceso anticipado disponible! Únete a nuestra lista de espera ahora." }) => (
  <div className="flex items-center justify-center space-x-2 bg-arkiblue-600 py-2 text-center text-xs text-white sm:text-sm">
    <img src={sparklesIcon} alt="Sparkles" className="h-5 w-5" />
    <span>{msg}</span>
  </div>
);

const ActionButtons = ({ isMobile = false }) => {
  const containerClasses = isMobile ? "pt-4" : "hidden items-center space-x-4 lg:flex";
  const loginClasses = isMobile
    ? "mb-4 block rounded-md border border-arkiblue-600/30 bg-slate-800/50 px-4 py-2 text-center font-medium text-arkiblue-600 backdrop-blur-sm transition-colors hover:bg-slate-800/80"
    : "rounded-md border border-arkiblue-600/30 bg-slate-800/50 px-4 py-2 font-medium text-arkiblue-600 backdrop-blur-sm transition-colors hover:bg-slate-800/80";
  const registerClasses = isMobile
    ? "block rounded-md bg-arkiblue-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-arkiblue-700"
    : "rounded-md bg-arkiblue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-arkiblue-700";

  return (
    <div className={containerClasses}>
      <a href="#" className={loginClasses}>
        Iniciar Sesión
      </a>
      {isMobile ? (
        <a href="#" className={registerClasses}>
          Regístrate
        </a>
      ) : (
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          className={registerClasses}
        >
          Regístrate
        </motion.button>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Producto", "Características", "Precios", "Recursos"];

  return (
    <div className="w-full">
      <NavbarUpdateMessage />

      <header className="sticky left-0 top-0 z-50 w-full bg-transparent">
        <div
          className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0A1525] to-[#0A1525]/80 backdrop-blur-sm"
          style={{
            boxShadow: "0 10px 15px -3px rgba(10, 21, 37, 0.7), 0 4px 6px -4px rgba(10, 21, 37, 0.3)",
          }}
        ></div>

        <nav className="relative mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="./img/arki_favicon.png" alt="Arki Logo" className="w-10 rounded-md" />
							<span className="text-slate-300 font-medium ml-4 text-lg">arki</span>
            </div>

            <div className="hidden items-center space-x-8 lg:flex">
              {navLinks.map(link => (
                <NavLink key={link} href="#">
                  {link}
                </NavLink>
              ))}
            </div>

            <ActionButtons />

            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="focus:outline-none text-white" 
                aria-label="Abrir menú"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 space-y-4 rounded-md bg-slate-800/80 p-4 backdrop-blur-sm lg:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map(link => (
                  <NavLink key={`mobile-${link}`} href="#">
                    {link}
                  </NavLink>
                ))}
              </div>
              <ActionButtons isMobile={true} />
            </motion.div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;