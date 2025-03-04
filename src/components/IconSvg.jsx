import React from "react";
import { motion } from "framer-motion";
import {
  IconPaperclip,
  IconQuestionMark,
  IconRoute,
  IconCards,
  IconChartBar,
  IconDeviceGamepad,
  IconStar,
  IconUsers,
  IconTrophy,
} from "@tabler/icons-react";

// Componente de tarjeta de característica
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group">
    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full border bg-[#0281EF]/10 text-[#0281EF] border-[#0281EF]/30 group-hover:bg-[#0281EF]/20 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

// Componente de tarjeta de testimonio
const TestimonialCard = ({ text, author, role, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
  >
    <div className="flex gap-1 mb-4 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <IconStar key={i} size={18} fill="currentColor" stroke={1.5} />
      ))}
    </div>
    <p className="text-slate-600 mb-4 italic">"{text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-[#0281EF]/20 flex items-center justify-center text-[#0281EF] font-bold">
        {author.charAt(0)}
      </div>
      <div className="ml-3">
        <p className="font-medium text-slate-800">{author}</p>
        <p className="text-slate-500 text-sm">{role}</p>
      </div>
    </div>
  </motion.div>
);

// Componente para estadísticas
const StatItem = ({ value, label, icon }) => (
  <motion.div
    className="flex items-center p-6 rounded-xl bg-white shadow-sm border border-slate-100"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="w-12 h-12 rounded-full bg-[#0281EF]/10 flex items-center justify-center text-[#0281EF] mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold text-[#0281EF]">{value}</h3>
      <p className="text-slate-600 text-sm">{label}</p>
    </div>
  </motion.div>
);

// Componente de onda
const Wave = ({ position, color = "#ffffff" }) => {
  const isTop = position === "top";
  const path = isTop
    ? "M0,0L40,5.3C80,11,160,21,240,26.7C320,32,400,32,480,32C560,32,640,32,720,26.7C800,21,880,11,960,5.3C1040,0,1120,0,1200,5.3C1280,11,1360,21,1400,26.7L1440,32L1440,0L0,0Z"
    : "M0,32L40,26.7C80,21,160,11,240,5.3C320,0,400,0,480,5.3C560,11,640,21,720,26.7C800,32,880,32,960,26.7C1040,21,1120,11,1200,5.3C1280,0,1360,0,1400,0L1440,0L1440,100L0,100Z";

  return (
    <div className={`absolute ${isTop ? "top" : "bottom"}-0 left-0 w-full overflow-hidden line-height-0 z-10`}>
      <svg className="w-full relative block" height="70" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill={color} d={path}></path>
      </svg>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      title: "Sube tus documentos",
      description: "Carga tus PDFs, libros o apuntes y Arki procesará tu contenido automáticamente.",
      icon: <IconPaperclip size={28} stroke={1.5} />,
    },
    {
      title: "Quizzes personalizados",
      description: "Practica con preguntas generadas a partir de tu propio material de estudio.",
      icon: <IconQuestionMark size={28} stroke={1.5} />,
    },
    {
      title: "Rutas de aprendizaje",
      description: "Recibe un plan de estudio adaptado a tu ritmo y nivel de comprensión.",
      icon: <IconRoute size={28} stroke={1.5} />,
    },
    {
      title: "Flashcards interactivas",
      description: "Mejora tu memoria con tarjetas generadas a partir de conceptos importantes.",
      icon: <IconCards size={28} stroke={1.5} />,
    },
    {
      title: "Análisis de progreso",
      description: "Visualiza tu avance con métricas que muestran fortalezas y áreas de mejora.",
      icon: <IconChartBar size={28} stroke={1.5} />,
    },
    {
      title: "Gamificación",
      description: "Mantén la motivación alta con elementos que hacen divertido el estudio.",
      icon: <IconDeviceGamepad size={28} stroke={1.5} />,
    },
  ];

  const testimonials = [
    {
      text: "Arki ha transformado completamente mi forma de estudiar. Ahora puedo aprender mucho más rápido.",
      author: "María González",
      role: "Estudiante de medicina",
    },
    {
      text: "Como profesor, Arki me ha permitido crear materiales de estudio personalizados para mis alumnos.",
      author: "Carlos Rodríguez",
      role: "Profesor universitario",
    },
    {
      text: "El sistema de flashcards es increíble. Mi retención ha mejorado enormemente desde que uso la app.",
      author: "Ana López",
      role: "Estudiante de derecho",
    },
  ];

  const stats = [
    {
      value: "93%",
      label: "Mejora en retención",
      icon: <IconTrophy size={24} stroke={1.5} />,
    },
    {
      value: "+10k",
      label: "Estudiantes activos",
      icon: <IconUsers size={24} stroke={1.5} />,
    },
    {
      value: "2.5x",
      label: "Velocidad de aprendizaje",
      icon: <IconChartBar size={24} stroke={1.5} />,
    },
  ];

  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
  };

  return (
    <section className="py-24 relative bg-slate-50 overflow-hidden">
      <Wave position="top" />

      {/* Patrón de fondo */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(2, 129, 239, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(2, 129, 239, 0.03) 1px, transparent 1px)
        `,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Elementos decorativos */}
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-[#0281EF]/5 blur-xl"></div>
      <div className="absolute -left-40 bottom-40 w-96 h-96 rounded-full bg-[#0281EF]/5 blur-xl"></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado de la sección */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-[#0281EF]/10 rounded-full text-[#0281EF] text-sm font-medium border border-[#0281EF]/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Características principales
            </motion.div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">¿Qué puedes hacer con Arki?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Descubre las funcionalidades que hacen de Arki tu mejor aliado en el aprendizaje.
            </p>
          </motion.div>

          {/* Grid de características */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={variants.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                variants={variants.item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </motion.div>

          {/* Sección de estadísticas */}
          <div className="mt-20 mb-16">
            <motion.h3
              className="text-2xl font-bold text-slate-800 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Resultados comprobados
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <StatItem value={stat.value} label={stat.label} icon={stat.icon} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonios */}
          <div className="mt-24 mb-16">
            <motion.h3
              className="text-2xl font-bold text-slate-800 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Lo que dicen nuestros usuarios
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  text={testimonial.text}
                  author={testimonial.author}
                  role={testimonial.role}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16 bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">¿Listo para transformar tu aprendizaje?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Comienza a usar Arki hoy mismo y experimenta una nueva forma de aprender más efectiva.
            </p>
            <motion.a
              href="#comenzar"
              className="inline-flex items-center px-8 py-4 bg-[#0281EF] text-white font-medium rounded-lg hover:bg-[#0270cc] transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Comenzar gratis
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <Wave position="bottom" />
    </section>
  );
};

export default Features;
