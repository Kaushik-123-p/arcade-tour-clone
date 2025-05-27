import React, { useState } from "react";
import StepCard from "../components/StepCard"; // import StepCard

import loginImg from "../assets/login.png";
import dashboardImg from "../assets/dashboard.png";
import repoImg from "../assets/repo.png";

function Home() {
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
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to the Product Tour
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        A simple interactive demo like Arcade.software
      </p>

      <button
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        onClick={() => setShowSteps(true)}
      >
        Start Demo
      </button>

      {showSteps && (
        <div className="mt-10 max-h-[80vh] overflow-y-auto space-y-8 p-2 flex flex-col items-center">
          {demoSteps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              image={step.image}
              description={step.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
