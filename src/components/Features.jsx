import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IconPaperclip, 
  IconQuestionMark, 
  IconRoute, 
  IconCards, 
  IconChartBar, 
  IconDeviceGamepad
} from "@tabler/icons-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const featuresData = [
    {
      id: "docs",
      title: "Documentos",
      icon: <IconPaperclip />,
      color: "#0281ef", // arkiblue-600
      description: "Convierte cualquier PDF o libro en material de estudio estructurado",
    },
    {
      id: "quiz",
      title: "Quizzes",
      icon: <IconQuestionMark />,
      color: "#7c5bd9", // arkipurple-600
      description: "Preguntas inteligentes adaptadas a tu nivel de aprendizaje",
    },
    {
      id: "path",
      title: "Rutas",
      icon: <IconRoute />,
      color: "#0281ef", // arkiblue-600
      description: "Plan personalizado que optimiza tu tiempo de estudio",
    },
    {
      id: "cards",
      title: "Flashcards",
      icon: <IconCards />,
      color: "#e67e45", // arkiorange-600
      description: "Memorización efectiva con sistema de repetición espaciada",
    },
    {
      id: "stats",
      title: "Análisis",
      icon: <IconChartBar />,
      color: "#0281ef", // arkiblue-600
      description: "Visualiza tu progreso y areas de mejora en tiempo real",
    },
    {
      id: "game",
      title: "Gamificación",
      icon: <IconDeviceGamepad />,
      color: "#e67e45", // arkiorange-600
      description: "Mantén alta motivación con elementos de juego",
    },
  ];

  const handleFeatureClick = (id) => {
    setActiveFeature(activeFeature === id ? null : id);
  };

  const SvgIllustration = ({ id }) => {
    // Colores de la paleta
    const colors = {
      docs: "#0281ef", // arkiblue-600
      quiz: "#7c5bd9", // arkipurple-600
      path: "#0281ef", // arkiblue-600
      cards: "#e67e45", // arkiorange-600
      stats: "#0281ef", // arkiblue-600
      game: "#e67e45", // arkiorange-600
    };
    
    // SVG simples para cada característica con colores de la paleta
    const illustrations = {
      docs: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" className="h-full w-full">
          <rect x="40" y="20" width="120" height="80" rx="4" fill={colors.docs} fillOpacity="0.1" />
          <rect x="50" y="30" width="100" height="10" rx="2" fill={colors.docs} fillOpacity="0.4" />
          <rect x="50" y="50" width="100" height="5" rx="2" fill={colors.docs} fillOpacity="0.3" />
          <rect x="50" y="60" width="80" height="5" rx="2" fill={colors.docs} fillOpacity="0.3" />
          <rect x="50" y="70" width="90" height="5" rx="2" fill={colors.docs} fillOpacity="0.3" />
          <rect x="50" y="80" width="60" height="5" rx="2" fill={colors.docs} fillOpacity="0.3" />
        </svg>
      ),
      quiz: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" className="h-full w-full">
          <rect x="40" y="20" width="120" height="80" rx="4" fill={colors.quiz} fillOpacity="0.1" />
          <rect x="50" y="30" width="100" height="10" rx="2" fill={colors.quiz} fillOpacity="0.4" />
          <rect x="50" y="50" width="100" height="8" rx="4" fill={colors.quiz} fillOpacity="0.3" />
          <rect x="50" y="65" width="100" height="8" rx="4" fill={colors.quiz} fillOpacity="0.2" />
          <rect x="50" y="80" width="100" height="8" rx="4" fill={colors.quiz} fillOpacity="0.1" />
        </svg>
      ),
      path: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" className="h-full w-full">
          <path d="M40,60 Q70,20 100,60 Q130,100 160,60" stroke={colors.path} strokeWidth="3" fill="none" />
          <circle cx="40" cy="60" r="6" fill={colors.path} />
          <circle cx="100" cy="60" r="6" fill={colors.path} />
          <circle cx="160" cy="60" r="6" fill={colors.path} />
        </svg>
      ),
      cards: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" className="h-full w-full">
          <rect x="35" y="35" width="60" height="80" rx="4" fill={colors.cards} fillOpacity="0.2" transform="rotate(-5 35 35)" />
          <rect x="70" y="30" width="60" height="80" rx="4" fill={colors.cards} fillOpacity="0.4" transform="rotate(0 70 30)" />
          <rect x="105" y="35" width="60" height="80" rx="4" fill={colors.cards} fillOpacity="0.6" transform="rotate(5 105 35)" />
        </svg>
      ),
      stats: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" className="h-full w-full">
          <rect x="40" y="80" width="20" height="20" rx="2" fill={colors.stats} />
          <rect x="70" y="60" width="20" height="40" rx="2" fill={colors.stats} fillOpacity="0.8" />
          <rect x="100" y="40" width="20" height="60" rx="2" fill={colors.stats} fillOpacity="0.6" />
          <rect x="130" y="30" width="20" height="70" rx="2" fill={colors.stats} fillOpacity="0.4" />
          <path d="M40,80 L70,60 L100,40 L130,30" stroke={colors.stats} strokeWidth="2" fill="none" />
        </svg>
      ),
      game: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" className="h-full w-full">
          <circle cx="100" cy="60" r="40" fill={colors.game} fillOpacity="0.1" />
          <polygon points="100,30 120,50 120,70 100,90 80,70 80,50" fill={colors.game} fillOpacity="0.4" />
          <circle cx="100" cy="60" r="10" fill={colors.game} />
        </svg>
      ),
    };

    return illustrations[id] || null;
  };

  return (
    <section className="relative bg-[#0A1525] py-20 text-white overflow-hidden">
      {/* Fondo minimalista */}
      
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="relative">
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
						FUNCIONALIDADES PRINCIPALES
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
                Todo lo que necesitas para
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-arkiblue-600"
              >
                aprender efectivamente
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="mx-auto max-w-2xl text-lg text-slate-300"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Herramientas poderosas que transforman tu material de estudio en un sistema de aprendizaje optimizado
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              className={`group relative overflow-hidden rounded-lg ${
                activeFeature === feature.id 
                ? "ring-1 ring-opacity-30"
                : "bg-slate-800/20 hover:bg-slate-800/30"
              } transition-all duration-300 backdrop-blur-sm`}
              style={{ 
                backgroundColor: activeFeature === feature.id ? `${feature.color}10` : '',
                ringColor: feature.color
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <div className="p-5">
                <div 
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    color: feature.color 
                  }}
                >
                  {React.cloneElement(feature.icon, { size: 20 })}
                </div>
                
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>

              <AnimatePresence>
                {activeFeature === feature.id && (
                  <motion.div 
                    className="h-44 overflow-hidden border-t border-t-white/5 bg-gradient-to-b from-slate-800/30 to-slate-900/30"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 176 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full p-6">
                      <SvgIllustration id={feature.id} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div 
                className="absolute bottom-0 left-0 h-0.5 w-full transition-transform duration-500 ease-in-out"
                style={{ 
                  background: feature.color,
                  transform: `scaleX(${activeFeature === feature.id ? 1 : 0})`,
                  transformOrigin: 'left'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;