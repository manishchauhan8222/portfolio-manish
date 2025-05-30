import React from "react";

import iphone from "../../public/iphone.png";
import flash from "../../public/flash.webp";
import born from "../../public/born.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: iphone,
      name: "Phone Landing Page",
      live: "https://iphone-landing-page-manish.netlify.app/",
      source: "https://github.com/manishchauhan8222/3d-iphone-main",
    },
    {
      id: 2,
      logo: flash,
      name: "Flashcard Generator App",
      live: "https://flashcard-generator-manish.netlify.app/",
      source: "https://github.com/manishchauhan8222/flashcardgenerator",
    },
    {
      id: 3,
      logo: born,
      name: "Born Fitness",
      live: "https://born-fitness.netlify.app/",
      source: "https://github.com/manishchauhan8222/Born-Fitness-Clone",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
      <p className="underline font-semibold text-lg mb-4">Featured Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardItem.map(({ id, logo, name, live, source }) => (
          <div
            key={id}
            className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300"
          >
            <img
              src={logo}
              alt={`${name} Logo`}
              className="w-28 h-28 mx-auto rounded-full border-[2px] mb-4"
            />
            <div className="text-center">
              <h2 className="font-bold text-xl mb-2">{name}</h2>
              <p className="text-gray-600 text-sm mb-3">
                A full-stack web project built using the MERN stack.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Live
                </a>
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
