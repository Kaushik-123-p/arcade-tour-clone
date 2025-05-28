import React, { useEffect, useState } from "react";
import StepEditor from "./components/StepEditor";
import HomeDemo from "./components/HomeDemo";
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

  const [steps, setSteps] = useState(() => {
    const storedSteps = localStorage.getItem("userSteps");
    return storedSteps ? JSON.parse(storedSteps) : [];
  });

  useEffect(() => {
    localStorage.setItem("userSteps", JSON.stringify(steps));
  }, [steps]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
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

      {isEditor ? (
        <StepEditor steps={steps} setSteps={setSteps} />
      ) : (
        <HomeDemo
          demoSteps={demoSteps}
          userSteps={steps}
          showSteps={showSteps}
          setShowSteps={setShowSteps}
        />
      )}
    </div>
  );
}

export default App;
