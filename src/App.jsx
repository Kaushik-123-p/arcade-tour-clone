import React, { useState } from "react";
import loginImg from "./assets/login.png";
import dashboardImg from "./assets/dashboard.png";
import repoImg from "./assets/repo.png";

function App() {
  const [showSteps, setShowSteps] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [steps, setSteps] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");

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

  function addNewStep() {
    if (newTitle && newImage && newDescription) {
      const newStep = {
        title: newTitle,
        image: newImage,
        description: newDescription,
      };
      setSteps([...steps, newStep]);
      setNewTitle("");
      setNewImage("");
      setNewDescription("");
    } else {
      alert("please fill all fields");
    }
  }

  return (
    <div className=" min-h-screen bg-gray-100 p-6">
      {/* Navigation Buttons */}
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
            isEditor ? "bg-indigo-600 text-white" : "bg-gray-300 "
          }`}
          onClick={() => setIsEditor(true)}
        >
          Editor
        </button>
      </div>

      {/* Editor page */}
      {isEditor ? (
        <div className="space-y-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center">Editor Page</h2>
          <div className="mx-auto w-full max-w-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Step Title
            </label>
            <input
              type="text"
              placeholder="Enter step title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mx-auto w-full max-w-md mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="paste image URL here"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mx-auto w-full max-w-md mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              type="text"
              placeholder="write a short description..."
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded h-24"
            />
          </div>
          <button
            onClick={addNewStep}
            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Add Step
          </button>
          {steps.length > 0 && (
            <div className="mt-10 space-y-6">
              <h3 className="text-xl font-bold text-center">Live Preview</h3>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded shadow max-w-md mx-auto"
                >
                  <h4 className="font-semibold text-lg">{step.title}</h4>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-40 object-contain my-2"
                  />
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        // Home page
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
            <div className="mt-10 max-h-[80vh] overflow-y-auto space-y-8 p-2 flex flex-col items-center">
              {[...demoSteps, ...steps].map((step, index) => (
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
      )}
    </div>
  );
}

export default App;
