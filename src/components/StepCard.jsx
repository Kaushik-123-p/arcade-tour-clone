import React from "react";

function StepCard({ title, image, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-xl text-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <img
        src={image}
        alt={title}
        title={title}
        className="w-full h-48 object-contain mx-auto rounded mb-2"
      />
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default StepCard;
