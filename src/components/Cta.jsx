import React from "react"
import { motion } from "framer-motion"
import { IconArrowRight } from "@tabler/icons-react"

const Cta = () => {
	return (
		<section className="relative overflow-hidden bg-[#0a1525] py-20">
			<div className="container relative z-10 mx-auto px-4 sm:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<motion.h2
						className="mb-6 text-4xl font-bold text-white md:text-5xl"
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Transforma tu aprendizaje con la solución arki
					</motion.h2>

					<motion.p
						className="mx-auto mb-10 max-w-2xl text-lg text-slate-300"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						Convierte tus documentos en experiencias de aprendizaje personalizadas y mejora tu retención de conocimiento con nuestra plataforma
						inteligente.
					</motion.p>

					<motion.div
						className="flex flex-col items-center justify-center gap-6 sm:flex-row"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<motion.a
							href="#demo"
							className="flex items-center rounded-lg bg-gradient-to-r from-[#ef7002] to-[#ef8002] px-8 py-3.5 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Comenzar gratis
							<IconArrowRight size={18} className="ml-2" />
						</motion.a>

						<motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0281EF]/20">
								<img src="https://via.placeholder.com/40" alt="Fundador" className="h-10 w-10 rounded-full object-cover" />
							</div>
							<div className="text-left">
								<p className="text-sm font-medium text-white">Habla con nuestro equipo</p>
								<p className="text-xs text-slate-400">Respuesta en menos de 24h</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Cta
