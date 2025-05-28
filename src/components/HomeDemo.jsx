import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

function HomeDemo({ demoSteps, userSteps, showSteps, setShowSteps }) {
  const combinedSteps = [...demoSteps, ...userSteps];
  const [selectedStep, setSelectedStep] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        Start Demo
      </motion.button>

      {showSteps && (
        <div className="mt-10 max-h-[80vh] overflow-y-auto space-y-8 p-2 flex flex-col items-center ">
          {combinedSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm w-full max-w-xl dark:bg-gray-200 dark:text-gray-700 ring-2 ring-indigo-300 hover:ring-indigo-500 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <img
                src={step.image}
                alt={step.title}
                title={step.title}
                onClick={() => {
                  setSelectedStep(step);
                  setShowModal(true);
                }}
                className="w-full h-48 object-contain mx-auto rounded mb-2 cursor-pointer"
              />
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}

          {showModal && selectedStep && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative ring-2 ring-indigo-300 hover:ring-indigo-500 transition duration-300">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
                  onClick={() => setShowModal(false)}
                >
                  <FaRegWindowClose size={24} />
                </button>
                <h2 className="text-xl font-semibold mb-2">
                  {selectedStep.title}
                </h2>
                <img
                  src={selectedStep.image}
                  alt={selectedStep.title}
                  title={selectedStep.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <p className="text-gray-700 dark:text-gray-200">
                  {selectedStep.description}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HomeDemo;
