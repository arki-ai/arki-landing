import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconQuestionMark, IconFileText, IconCreditCard, IconMessageQuestion, IconMessage } from "@tabler/icons-react";

const FAQCompact = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { name: "Básicos", icon: <IconMessage size={16} /> },
    { name: "Documentos", icon: <IconFileText size={16} /> },
    { name: "Planes", icon: <IconCreditCard size={16} /> },
  ];

  const faqData = [
    [
      {
        question: "¿Cómo funciona Arki?",
        answer:
          "Arki analiza tus documentos con IA para extraer conceptos clave y crear materiales de estudio personalizados.",
      },
      {
        question: "¿Es necesario crear una cuenta?",
        answer: "Sí, necesitas una cuenta para almacenar tus documentos y seguir tu progreso de aprendizaje.",
      },
      {
        question: "¿Puedo usar Arki en móvil?",
        answer: "Sí, Arki está optimizado para dispositivos móviles y ordenadores.",
      },
    ],
    [
      {
        question: "¿Qué formatos acepta Arki?",
        answer: "Actualmente aceptamos PDF, DOCX, TXT y otros formatos de texto comunes.",
      },
      {
        question: "¿Cómo se generan los quizzes y flashcards?",
        answer: "Nuestra IA identifica conceptos importantes y genera preguntas adaptadas al contenido.",
      },
      {
        question: "¿Mis documentos están seguros?",
        answer: "Sí, tus archivos están seguros y encriptados. Solo tú puedes acceder a ellos.",
      },
    ],
    [
      {
        question: "¿Existe una versión gratuita?",
        answer:
          "Ofrecemos un plan gratuito con funcionalidades básicas y planes premium con características avanzadas.",
      },
      {
        question: "¿Puedo cancelar mi suscripción?",
        answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu perfil.",
      },
      {
        question: "¿Tienen descuentos para estudiantes?",
        answer: "Sí, ofrecemos descuentos especiales para estudiantes con correo electrónico institucional.",
      },
    ],
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <motion.div className="inline-block mb-5" whileHover={{ scale: 1.02 }}>
            <span className="text-[#ef7002] border border-[#ef7002]/30 px-3 py-1.5 text-sm rounded-full bg-[#ef7002]/5 flex items-center gap-2">
              <IconMessageQuestion size={16} />
              Preguntas frecuentes
            </span>
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">Resolvemos tus dudas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Respuestas rápidas a las preguntas más comunes sobre Arki.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-50 rounded-lg shadow-sm border">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`relative px-4 py-2 text-sm rounded-md transition-all ${
                  activeCategory === index ? "text-[#0281EF] font-medium" : "text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {activeCategory === index && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-md shadow"
                    layoutId="activePill"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {faqData[activeCategory].map((item, index) => (
            <div key={index} className="border border-slate-100 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                className="w-full text-left p-4 flex justify-between items-center text-sm font-semibold text-slate-800 hover:bg-slate-50"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="text-[#0281EF]">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} transition={{ duration: 0.3 }}>
                  <div className="p-4 text-slate-600 text-sm border-t border-slate-100">{item.answer}</div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className=" pt-8 mt-10 text-center">
          <p className="text-slate-600 mb-4">¿No encuentras respuesta a tu pregunta?</p>
          <a
            href="#contacto"
            className="inline-block px-6 py-2 border border-[#0281EF] text-[#0281EF] hover:bg-[#0281EF] hover:text-white rounded-lg transition"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQCompact;
