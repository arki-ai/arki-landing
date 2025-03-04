import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPaperclip, IconQuestionMark, IconRoute, IconCards, IconChartBar, IconDeviceGamepad, IconStarsFilled } from "@tabler/icons-react";

// Componente para cada item en el listado
const FeatureItem = ({ icon, title, isActive, onClick, index }) => (
	<motion.div
		className={`mb-2 flex cursor-pointer items-center rounded-lg p-3 transition-all duration-200 ${isActive ? "border-l-4 border-[#ef7002] bg-[#f9f9f9]" : "border-l-4 border-transparent hover:bg-[#f9f9f9]"}`}
		onClick={onClick}
		whileHover={!isActive ? { x: 3 } : {}}
		initial={{ opacity: 0, x: -10 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.2, delay: index * 0.05 }}
	>
		<div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${isActive ? "text-[#ef7002]" : "text-[#0281EF]"}`}>
			{React.cloneElement(icon, { size: 18 })}
		</div>
		<div className="ml-3">
			<h3 className={`text-sm font-medium ${isActive ? "text-[#ef7002]" : "text-slate-700"}`}>{title}</h3>
		</div>
	</motion.div>
);

// Componente para el panel de detalle
const FeatureDetail = ({ feature }) => (
	<AnimatePresence mode="wait">
		<motion.div
			key={feature.title}
			className="relative h-full overflow-hidden rounded-lg border border-slate-100 bg-white p-6"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.3 }}
		>
			<div className="relative">
				<div className="mb-4 flex items-center">
					<div className="mr-3 text-[#ef7002]">{React.cloneElement(feature.icon, { size: 24 })}</div>
					<h2 className="text-xl font-bold text-slate-800">{feature.title}</h2>
				</div>

				<p className="mb-5 text-slate-600">{feature.description}</p>

				<div className="border-t border-slate-100 pt-4">
					<h4 className="mb-3 text-sm font-medium text-[#ef7002]">Beneficios clave</h4>
					<ul className="space-y-2">
						{feature.benefits.map((benefit, idx) => (
							<li key={idx} className="flex items-start text-sm">
								<span className="mr-2 text-[#0281EF]">•</span>
								<span className="text-slate-600">{benefit}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</motion.div>
	</AnimatePresence>
);

const Features = () => {
	const [activeFeature, setActiveFeature] = useState(0);

	// Cambio automático de características
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveFeature(prev => (prev + 1) % featuresData.length);
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	const featuresData = [
		{
			title: "Sube tus documentos",
			description: "Carga tus PDFs, libros o apuntes y Arki procesará automáticamente tu contenido, extrayendo conceptos clave para tu aprendizaje.",
			icon: <IconPaperclip />,
			benefits: [
				"Procesamiento inteligente de textos y materiales",
				"Extracción automática de conceptos importantes",
				"Compatible con múltiples formatos (PDF, DOCX, TXT)",
			],
		},
		{
			title: "Quizzes personalizados",
			description: "Practica con preguntas generadas a partir de tu propio material de estudio, adaptadas a tu nivel de conocimiento actual.",
			icon: <IconQuestionMark />,
			benefits: [
				"Preguntas adaptadas a tu nivel de conocimiento",
				"Retroalimentación inmediata para cada respuesta",
				"Enfoque en tus áreas de mejora",
			],
		},
		{
			title: "Rutas de aprendizaje",
			description: "Recibe un plan de estudio personalizado adaptado a tu ritmo y nivel de comprensión para maximizar tu retención.",
			icon: <IconRoute />,
			benefits: ["Secuencia de aprendizaje optimizada", "Adaptación automática según tu progreso", "Enfoque en conexiones entre conceptos"],
		},
		{
			title: "Flashcards interactivas",
			description: "Mejora tu memoria con tarjetas interactivas generadas a partir de los conceptos más importantes de tu material.",
			icon: <IconCards />,
			benefits: [
				"Sistema de repetición espaciada para mejor retención",
				"Tarjetas interactivas con ejemplos contextualizados",
				"Algoritmos que priorizan lo que estás por olvidar",
			],
		},
		{
			title: "Análisis de progreso",
			description: "Visualiza tu avance con métricas que muestran tus fortalezas y áreas de oportunidad para un estudio efectivo.",
			icon: <IconChartBar />,
			benefits: [
				"Estadísticas detalladas sobre tu rendimiento",
				"Identificación automática de tus puntos débiles",
				"Recomendaciones basadas en datos",
			],
		},
		{
			title: "Gamificación",
			description: "Mantén la motivación alta con elementos que hacen del estudio una experiencia divertida y adictiva.",
			icon: <IconDeviceGamepad />,
			benefits: ["Sistema de puntos y recompensas", "Retos diarios y competencias amistosas", "Desbloqueo de logros que marcan tu progreso"],
		},
	];

	return (
		<section className="relative bg-white py-12">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="mx-auto max-w-5xl">
					{/* Encabezado de la sección */}
					<motion.div
						className="mb-10 text-center"
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
					>
						<motion.div className="mb-5 inline-block" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
							<span className="flex items-center justify-center gap-2 rounded-full border border-[#ef7002]/30 bg-[#ef7002]/5 px-3 py-1.5 text-sm text-[#ef7002]">
								<IconStarsFilled size={16} />
								<span>Características principales</span>
							</span>
						</motion.div>
						<h2 className="mb-2 text-2xl font-bold text-slate-800 md:text-3xl">¿Qué puedes hacer con Arki?</h2>
						<p className="mx-auto max-w-2xl text-slate-600">Descubre las funcionalidades que hacen de Arki tu mejor aliado en el aprendizaje.</p>
					</motion.div>

					<div className="grid grid-cols-1 gap-5 md:grid-cols-12">
						{/* Lista de características (izquierda) */}
						<div className="md:col-span-4">
							<div className="rounded-lg border border-slate-100 bg-white p-3">
								<h3 className="mb-3 ml-2 text-xs font-medium uppercase text-slate-400">Funcionalidades</h3>

								{featuresData.map((feature, index) => (
									<FeatureItem
										key={index}
										icon={feature.icon}
										title={feature.title}
										isActive={activeFeature === index}
										onClick={() => setActiveFeature(index)}
										index={index}
									/>
								))}
							</div>
						</div>

						{/* Detalle de característica (derecha) */}
						<div className="md:col-span-8">
							<FeatureDetail feature={featuresData[activeFeature]} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
