import React, { useState } from "react";
import StepCard from "./StepCard";

function StepEditor({ steps, setSteps }) {
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addNewStep = () => {
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
      alert("Please fill all fields");
    }
  };

  return (
    <div className="space-y-6 flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-center">Editor Page</h2>

      <div className="w-full max-w-md">
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

      <div className="w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <input
          type="text"
          placeholder="Paste image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          placeholder="Write a short description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded h-24"
        />
      </div>

      <button
        onClick={addNewStep}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Add Step
      </button>

      {steps.length > 0 && (
        <div className="mt-10 space-y-4 w-full max-w-xl">
          <h3 className="text-xl font-bold text-center">Live Preview</h3>
          {steps.map((step, index) => (
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

export default StepEditor;
