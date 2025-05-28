import React from "react";
import { motion } from "framer-motion";

function HomeDemo({ demoSteps, userSteps, showSteps, setShowSteps }) {
  const combinedSteps = [...demoSteps, ...userSteps];

  return (
    <div className="text-center space-y-6 ">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
        Welcome to the Product Tour
      </h1>
      <p className="text-gray-600 text-base lg:text-lg dark:text-white">
        A simple interactive demo like Arcade.software
      </p>
      <motion.button
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        onClick={() => setShowSteps(!showSteps)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Demo
      </motion.button>

      {showSteps && (
        <div className="mt-10 max-h-[80vh] overflow-y-auto space-y-8 p-2 flex flex-col items-center ">
          {combinedSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm w-full max-w-xl dark:bg-gray-200 dark:text-gray-700"
              initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <img
                src={step.image}
                alt={step.title}
                title={step.title}
                className="w-full h-48 object-contain mx-auto rounded mb-2"
              />
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeDemo;
