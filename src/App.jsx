// src/App.jsx
import React, { useState } from "react";
import StepEditor from "./components/StepEditor";
import HomeDemo from "./components/HomeDemo"; // ✅ Import it
import loginImg from "./assets/login.png";
import dashboardImg from "./assets/dashboard.png";
import repoImg from "./assets/repo.png";

function App() {
  const [showSteps, setShowSteps] = useState(false);
  const [isEditor, setIsEditor] = useState(false);

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
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Switch Buttons */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            !isEditor ? "bg-indigo-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setIsEditor(false)}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 rounded ${
            isEditor ? "bg-indigo-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setIsEditor(true)}
        >
          Editor
        </button>
      </div>

      {/* Conditional View */}
      {isEditor ? (
        <StepEditor />
      ) : (
        <HomeDemo
          demoSteps={demoSteps}
          showSteps={showSteps}
          setShowSteps={setShowSteps}
        />
      )}
    </div>
  );
}

export default App;
