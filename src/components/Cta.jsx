import React from "react";
import { motion } from "framer-motion";

const BetaSection = () => {
  // Datos de testimonios de beta testers
  const testimonials = [
    {
      id: 1,
      content: "Arki transformó por completo mi forma de estudiar. Los quizzes generados automáticamente me ayudaron a preparar mi examen de anatomía en la mitad del tiempo.",
      author: "Laura M.",
      role: "Estudiante de Medicina",
      avatar: "/img/avatars/avatar-1.jpg"
    },
    {
      id: 2,
      content: "Las flashcards interactivas son increíbles para memorizar conceptos clave. Mi productividad aumentó un 40% desde que empecé a usar Arki.",
      author: "Carlos R.",
      role: "Estudiante de Ingeniería",
      avatar: "/img/avatars/avatar-2.jpg"
    },
    {
      id: 3,
      content: "Como profesor, Arki me ayuda a crear material personalizado para mis estudiantes en minutos. Una herramienta revolucionaria para la educación.",
      author: "Ana P.",
      role: "Profesora Universitaria",
      avatar: "/img/avatars/avatar-3.jpg"
    }
  ];

  // Datos de estadísticas
  const stats = [
    { id: 1, value: "87%", label: "Mejora en retención" },
    { id: 2, value: "2.5x", label: "Más eficiencia" },
    { id: 3, value: "30+", label: "Instituciones" }
  ];

  return (
    <section className="relative bg-[#0A1525] py-24 text-white overflow-hidden">
      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Elementos decorativos mínimos */}
        <div className="absolute right-1/4 top-10 h-3 w-3 rounded-full bg-orange-400/40"></div>
        
        {/* Encabezado de sección */}
        <motion.div 
          className="relative mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-3 inline-block text-sm font-medium text-arkiorange-600"
          >
            TESTIMONIOS DE BETA TESTERS
          </motion.span>
          
          <motion.h2 
            className="mb-4 text-4xl font-bold leading-tight md:text-5xl"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="block"
            >
              Lo que dicen nuestros
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-arkiblue-600"
            >
              usuarios
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-slate-300"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Descubre cómo Arki está transformando la forma en que estudiantes y profesores interactúan con el contenido educativo
          </motion.p>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Columna izquierda: Testimonios */}
          <div>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="rounded-lg border border-white/5 bg-slate-800/20 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <p className="mb-3 text-slate-300">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="mr-3 h-8 w-8 overflow-hidden rounded-full bg-slate-700/50">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230281ef'%3e%3ccircle cx='12' cy='7' r='5'/%3e%3cpath d='M17 14h.26A7.74 7.74 0 0 1 25 21.8v.2h-2a6 6 0 0 0-6-6h-6a6 6 0 0 0-6 6H3v-.2A7.74 7.74 0 0 1 10.74 14h.26'/%3e%3c/svg%3e";
                          e.target.style.padding = "2px";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.author}</h4>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Formulario beta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg border border-white/5 bg-slate-800/20 p-5 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Únete a la beta</h3>
              <p className="mb-5 text-slate-300">
                Sé de los primeros en experimentar Arki y ayúdanos a revolucionar el futuro del aprendizaje.
              </p>

              {/* Estadísticas */}
              <div className="mb-6 grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-xl font-bold text-arkiblue-600">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Formulario simplificado */}
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full rounded-md border-0 bg-slate-700/30 p-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-arkiblue-600"
                />
                <select className="w-full rounded-md border-0 bg-slate-700/30 p-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-arkiblue-600">
                  <option value="" disabled selected>¿Cómo piensas usar Arki?</option>
                  <option value="student">Como estudiante</option>
                  <option value="teacher">Como profesor</option>
                  <option value="institution">Para mi institución</option>
                </select>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-arkiblue-600 w-full rounded-md px-4 py-2.5 font-medium text-white"
                >
                  Solicitar acceso beta
                </motion.button>
              </form>

              {/* Nota de exclusividad */}
              <div className="mt-3 flex items-center justify-center">
                <div className="flex items-center text-xs text-slate-400">
                  <svg className="mr-1 h-3 w-3 text-arkiblue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Plazas limitadas - Acceso por invitación
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Botón de acción final */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.a 
            href="#" 
            className="bg-arkiblue-600 relative inline-flex items-center gap-2 rounded-md px-6 py-2.5 font-medium text-white"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="relative z-10">¿Listo para transformar tu aprendizaje?</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="relative z-10"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaSection;