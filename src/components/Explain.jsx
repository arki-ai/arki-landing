import React from "react";
import { motion } from "framer-motion";

const Explain = () => {
  // Datos de los pasos del proceso
  const steps = [
    {
      id: 1,
      title: "Sube tu material",
      description: "Carga tus documentos, libros, PDF o exámenes. Arki procesa y entiende automáticamente el contenido.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Genera contenido educativo",
      description: "La IA de Arki analiza el material y crea automáticamente rutas de aprendizaje, quizzes, flashcards y más.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Personaliza tu aprendizaje",
      description: "Adapta el contenido a tu nivel y necesidades específicas. Arki se ajusta a tu ritmo y estilo de aprendizaje.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Estudia y progresa",
      description: "Aprovecha las herramientas interactivas para maximizar tu aprendizaje y ver tu progreso en tiempo real.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#0A1525] py-24 text-white overflow-hidden">
      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Elementos decorativos mínimos */}
        <div className="absolute -left-20 top-40 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute right-0 bottom-20 h-60 w-60 rounded-full bg-orange-500/5 blur-3xl"></div>
        
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
            PROCESO SIMPLE
          </motion.span>
          
          <motion.h2 
            className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl"
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
            >
              Cómo funciona Arki
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-slate-300"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transformar tu material de estudio en una experiencia personalizada de aprendizaje nunca fue tan fácil
          </motion.p>
        </motion.div>

        {/* Pasos del proceso */}
        <div className="relative mt-20">
          {/* Línea de conexión */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-arkiblue-600/20 via-arkiblue-600/10 to-arkiblue-600/5 md:block hidden"></div>
          
          <div className="grid gap-16 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative flex flex-col items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:gap-16`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Número del paso (visible solo en móvil) */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-arkiblue-600 text-white font-bold md:hidden mb-4">
                  {step.id}
                </div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-xl`}>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-arkiblue-600/30 bg-slate-800/50 backdrop-blur-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-arkiblue-600/20 text-arkiblue-600">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                {/* Espacio vacío para la columna de la derecha/izquierda */}
                <div className="hidden md:block w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explain;