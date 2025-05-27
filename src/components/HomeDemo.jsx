// src/components/HomeDemo.jsx
import React from "react";

function HomeDemo({ demoSteps, showSteps, setShowSteps }) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
        Welcome to the Product Tour
      </h1>
      <p className="text-gray-600 text-base lg:text-lg">
        A simple interactive demo like Arcade.software
      </p>
      <button
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        onClick={() => setShowSteps(true)}
      >
        Start Demo
      </button>

      {showSteps && (
        <div className="mt-10 max-h-[80vh] overflow-y-auto space-y-8 p-2 flex flex-col items-center">
          {demoSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm w-full max-w-xl"
            >
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-contain mx-auto rounded mb-2"
              />
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeDemo;
