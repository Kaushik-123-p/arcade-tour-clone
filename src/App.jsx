import React, { useState } from "react";
import loginImg from "./assets/login.png";
import dashboardImg from "./assets/dashboard.png";
import repoImg from "./assets/repo.png";

function App() {
  const [showSteps, setShowSteps] = useState(false);

  const demoSteps = [
    {
      title: "Login to your account",
      image: loginImg,
      description: "This is the login screen where users enter credentials.",
    },
    {
      title: "Dashboard Overview",
      image: dashboardImg,
      description: "Here is your main dashboard with all features.",
    },
    {
      title: "Create New Project",
      image: repoImg,
      description: "Click here to create a new project in seconds.",
    },
  ];

  return (
    <div className=" min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Welcome to the Product Tour
        </h1>
        <p className=" text-gray-600 text-base lg:text-lg">
          A simple interactive demo link Arcade.software
        </p>
        <button
          className=" bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          onClick={() => setShowSteps(true)}
        >
          Start Demo
        </button>

        {showSteps && (
          <div className="mt-10 space-y-8 lg:flex lg:space-x-8 p-2 lg:items-center lg:justify-center">
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm min-w-96 miin-h-96  "
              >
                <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full max-w-md max-h-60 object-contain mx-auto rounded mb-2 "
                />
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
