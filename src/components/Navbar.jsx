import React, { useState } from "react";
import { motion } from "framer-motion";
import sparklesIcon from "../assets/svg/sparkles.svg";

const NavLink = ({ href, children }) => (
	<a href={href} className="hover:text-arkiblue-600 font-medium transition-colors">
		{children}
	</a>
);

const NavbarUpdateMessage = ({ msg = "¡Acceso anticipado disponible! Únete a nuestra lista de espera ahora." }) => (
	<div className="bg-arkiblue-600 flex items-center justify-center space-x-2 py-2 text-center text-xs text-white sm:text-sm">
		<img src={sparklesIcon} alt="Sparkles" className="h-5 w-5" />
		<span>{msg}</span>
	</div>
);

const ActionButtons = ({ isMobile = false }) => {
	const containerClasses = isMobile ? "pt-4" : "hidden items-center space-x-4 lg:flex";
	const loginClasses = isMobile
		? "mb-4 block rounded-lg px-4 py-2 text-center font-medium text-arkiblue-600 transition-colors hover:text-arkiblue-800"
		: "rounded-lg px-4 py-2 font-medium text-arkiblue-600 transition-colors hover:text-arkiblue-800";
	const registerClasses = isMobile
		? "block rounded-lg bg-arkiblue-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-arkiblue-800"
		: "rounded-lg bg-arkiblue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-arkiblue-800";

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
				<motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={registerClasses}>
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
				{/* Capa de gradiente superior para suavizar el borde */}
				<div
					className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-white/80"
					style={{
						boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.7), 0 4px 6px -4px rgba(255, 255, 255, 0.3)",
					}}
				></div>

				<nav className="relative mx-auto max-w-6xl px-4 py-4 sm:px-6">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<div className="flex items-center">
							<img src="./img/arki_logo.png" alt="Arki Logo" className="w-24" />
						</div>

						{/* Menú desktop */}
						<div className="hidden items-center space-x-8 lg:flex">
							{navLinks.map(link => (
								<NavLink key={link} href="#">
									{link}
								</NavLink>
							))}
						</div>

						{/* Botones de acción */}
						<ActionButtons />

						{/* Botón hamburguesa */}
						<div className="flex items-center lg:hidden">
							<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-arkiblue-900 focus:outline-none" aria-label="Abrir menú">
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
								</svg>
							</button>
						</div>
					</div>

					{/* Menú móvil */}
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							className="mt-8 space-y-4 lg:hidden"
						>
							{navLinks.map(link => (
								<NavLink key={`mobile-${link}`} href="#">
									{link}
								</NavLink>
							))}
							<ActionButtons isMobile={true} />
						</motion.div>
					)}
				</nav>
			</header>
		</div>
	);
};
