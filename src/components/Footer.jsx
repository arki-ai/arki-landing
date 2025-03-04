import React from "react";
import { IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-slate-100 bg-white py-12">
			<div className="container mx-auto max-w-6xl px-4 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
						{/* Logo y descripción */}
						<div className="items-left flex flex-col gap-2">
							<img src="/img/arki_logo.png" alt="Arki logo" className="w-20 rounded-sm" />
							<p className="max-w-[180px] text-xs text-slate-500">Transformamos tus documentos en experiencias de aprendizaje.</p>
						</div>

						{/* Enlaces rápidos */}
						<div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
							<div>
								<h3 className="mb-1.5 text-xs font-medium text-slate-800">Producto</h3>
								<ul className="space-y-0.5">
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Características
										</a>
									</li>
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Precios
										</a>
									</li>
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Demo
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h3 className="mb-1.5 text-xs font-medium text-slate-800">Empresa</h3>
								<ul className="space-y-0.5">
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Sobre nosotros
										</a>
									</li>
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Blog
										</a>
									</li>
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Contacto
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h3 className="mb-1.5 text-xs font-medium text-slate-800">Legal</h3>
								<ul className="space-y-0.5">
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Términos
										</a>
									</li>
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Privacidad
										</a>
									</li>
									<li>
										<a href="#" className="text-xs text-slate-500 hover:text-[#0281EF]">
											Cookies
										</a>
									</li>
								</ul>
							</div>
						</div>

						{/* Redes sociales y créditos */}
						<div className="flex flex-col items-end space-y-1.5">
							<div className="flex space-x-3">
								<a href="#" className="text-slate-400 transition-colors hover:text-[#0281EF]">
									<IconBrandTwitter size={16} />
								</a>
								<a href="#" className="text-slate-400 transition-colors hover:text-[#0281EF]">
									<IconBrandInstagram size={16} />
								</a>
								<a href="#" className="text-slate-400 transition-colors hover:text-[#0281EF]">
									<IconBrandLinkedin size={16} />
								</a>
							</div>
							<p className="text-[10px] text-slate-400">© {year} Arki. Todos los derechos reservados.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
