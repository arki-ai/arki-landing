import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

const CardLeftContent = () => {
  return (
    <motion.div
      className="mb-16 md:mb-0 md:w-1/2 md:pr-8 lg:pr-12"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-8">
        <motion.span
          className="border-arkiorange-700/30 bg-arkiorange-700/10 text-arkiorange-600 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-arkiorange-600 mr-2">✦</span>
          Potenciado por IA avanzada
        </motion.span>
      </div>

      <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        <motion.span
          className="text-white block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Transforma
        </motion.span>
        <motion.span
          className="text-arkiblue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          tu contenido
        </motion.span>
        <motion.span
          className="text-white mt-1 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          en aprendizaje
        </motion.span>
      </h1>

      <motion.p
        className="mb-10 max-w-xl text-lg text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Sube tus libros o exámenes y Arki creará automáticamente quizzes, rutas
        de aprendizaje, flashcards y juegos personalizados para ti.
      </motion.p>

      <motion.div
        className="mb-10 space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {[
          "Rutas de aprendizaje adaptadas a tu nivel.",
          "Quizzes generados automáticamente desde tus materiales.",
          "Flashcards interactivas para repasar conceptos clave.",
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          >
            <div className="bg-arkiblue-600 mr-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="text-slate-300">{item}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mb-8 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <motion.button
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 25px -5px rgba(2, 129, 239, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-arkiblue-600 rounded-md px-6 py-3 font-medium text-white transition-all overflow-hidden relative"
        >
          <motion.span
            className="absolute inset-0 bg-white/10"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          <span className="relative z-10">Comenzar gratis</span>
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 25px -5px rgba(2, 129, 239, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          className="border-arkiblue-600/20 text-arkiblue-600 flex items-center rounded-md border bg-slate-800/30 px-6 py-3 font-medium transition-all backdrop-blur-sm"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Ver demo
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const CardRightContent = () => {
  return (
    <motion.div
      className="relative mt-6 px-4 md:mt-0 md:w-1/2 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative z-10 mx-auto w-72 rotate-3 transform overflow-hidden rounded-[40px] border-[14px] border-[#111] bg-[#111] shadow-xl sm:w-80 md:h-[600px]"
        initial={{ y: 40, rotate: 3 }}
        animate={{ y: 0, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
      >
        <div className="absolute left-1/2 top-0 z-20 h-5 w-36 -translate-x-1/2 transform rounded-b-xl bg-[#111]"></div>

        <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-slate-900">
          <div className="bg-slate-800 p-4 text-white">
            <div className="mb-4 flex items-center justify-between">
              <div className="mt-2 flex items-center">
                <img
                  src="/img/arki_favicon.png"
                  alt="Arki logo"
                  className="mr-2 w-6 rounded-sm"
                />
                <span className="text-arkiblue-600 text-lg font-normal">
                  arki
                </span>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
              </div>
            </div>
            <h3 className="mb-1 text-lg font-bold">Tu ruta de aprendizaje</h3>
            <p className="text-sm text-slate-300">Personalizada para ti</p>
          </div>

          <div className="p-4">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-slate-400">Progreso</span>
                <span className="text-sm font-medium text-white">3 de 4</span>
              </div>

              <div className="relative mb-2 flex items-center justify-between">
                {[1, 2, 3, 4].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${
                      step <= 3
                        ? "bg-arkiblue-600"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {step}
                  </motion.div>
                ))}
                <div className="absolute left-0 top-1/2 -z-0 h-1 w-full -translate-y-1/2 transform bg-slate-700"></div>
                <div className="bg-arkiblue-600 absolute left-0 top-1/2 -z-0 h-1 w-3/4 -translate-y-1/2 transform"></div>
              </div>
            </motion.div>

            <motion.div
              className="mb-4 rounded-2xl border border-white/10 bg-slate-800/50 p-4 shadow-lg backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="flex items-center text-sm font-bold text-white">
                  <svg
                    className="mr-2 h-4 w-4 text-arkiblue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Quiz
                </h3>
                <span className="rounded-full bg-arkiblue-600 px-2 py-0.5 text-xs text-white">
                  Nuevo
                </span>
              </div>

              <p className="mb-3 text-xs font-medium text-slate-300">
                ¿Qué técnica se usa en CNNs?
              </p>

              <div className="mb-3 space-y-2">
                {[
                  "Max pooling",
                  "Regresión lineal",
                  "Integración continua",
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    className={`cursor-pointer rounded-lg p-3 text-sm transition-colors ${
                      index === 0
                        ? "border border-arkiblue-600 bg-arkiblue-600/10 text-white"
                        : "border border-white/5 bg-slate-800/80 text-slate-300"
                    } hover:border-arkiblue-600 hover:bg-arkiblue-600/10`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mb-4 rounded-2xl border border-white/10 bg-slate-800/50 p-4 shadow-lg backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="flex items-center text-sm font-bold text-white">
                  <svg
                    className="mr-2 h-4 w-4 text-arkiorange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11l-8-8-8 8m16 0l-8 8-8-8"
                    ></path>
                  </svg>
                  Flashcards
                </h3>
                <span className="rounded-full bg-arkiorange-600 px-2 py-0.5 text-xs text-white">
                  Interactivas
                </span>
              </div>

              <p className="mb-2 text-xs font-medium text-slate-300">
                Desliza para ver conceptos clave generados automáticamente.
              </p>

              <div className="mt-3 flex justify-center">
                <motion.div
                  className="mx-1 h-1 w-8 rounded-full bg-slate-500"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
                <div className="mx-1 h-1 w-2 rounded-full bg-slate-500"></div>
                <div className="mx-1 h-1 w-2 rounded-full bg-slate-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Efectos visuales sutiles alrededor del teléfono */}
      <motion.div
        className="absolute -right-10 top-40 h-32 w-32 rounded-full opacity-20 blur-2xl"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ backgroundColor: "#0281ef" }}
      />

      <motion.div
        className="absolute -left-10 bottom-40 h-40 w-40 rounded-full opacity-10 blur-2xl"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ backgroundColor: "#e67e45" }}
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#0A1525]">
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        radial-gradient(rgba(230, 126, 69, 0.1) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px, 40px 40px, 20px 20px",
            backgroundPosition: "0 0, 0 0, 10px 10px",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 right-0 z-10 h-60"
          style={{
            background:
              "linear-gradient(to top, rgba(10,21,37,1), rgba(10,21,37,0))",
          }}
        ></div>
      </div>

      <Navbar />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <CardLeftContent />
          <CardRightContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;