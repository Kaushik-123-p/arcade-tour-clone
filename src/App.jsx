import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import StepEditor from "./components/StepEditor";
import HomeDemo from "./components/HomeDemo";
import loginImg from "./assets/login.png";
import dashboardImg from "./assets/dashboard.png";
import repoImg from "./assets/repo.png";

function App() {
  const [showSteps, setShowSteps] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
    <div className={`${isDark ? "dark" : ""}  `}>
      <div className="min-h-screen p-6 bg-gray-200 dark:bg-gray-900 dark:text-white ">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="absolute top-4 px-2 py-2 rounded-full bg-gray-500 text-white dark:bg-gray-700 dark:text-white right-4"
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button
            className={`px-4 py-2 rounded ${
              !isEditor
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setIsEditor(false)}
          >
            Home
          </button>
          <button
            className={`px-4 py-2 rounded ${
              isEditor
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-gray-700"
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
    </div>
  );
}

export default App;
