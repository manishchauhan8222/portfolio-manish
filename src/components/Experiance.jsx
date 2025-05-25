import React from "react";
import almabetter from "../../public/almaCert.png";
import ds from "../../public/ds.jpeg";
import meta from "../../public/meta.jpeg";
import ibm from "../../public/ibm.jpeg";
import john from "../../public/john.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: almabetter,
      name: "Full Stack Web Development",
      verifyLink: "https://verified.sertifier.com/en/verify/97238020031838",
      issue: "Almabetter Edutech Pvt. Ltd.",
    },

    {
      id: 2,
      logo: ibm,
      name: "Introduction to Software Engineering",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/certificate/W5QDBBXVHJFM",
      issue: "IBM",
    },

    {
      id: 3,
      logo: meta,
      name: "Programming with JavaScript",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/certificate/KYKV9K2ZCUVC",
      issue: "META",
    },

    {
      id: 4,
      logo: ds,
      name: "Data Structures",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/certificate/RCVYXBNWGPA9",
      issue: "National Research University (Higher School of Economics)",
    },

    {
      id: 5,
      logo: john,
      name: "HTML, CSS, and JavaScript for Web Developers",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/certificate/L32AZFVSUYTK",
      issue: "The Johns Hopkins University",
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">Certifications</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cardItem.map(({ id, logo, name, verifyLink }) => (
          <div
            key={id}
            className="flex flex-col items-center border-[2px] rounded-xl shadow-md p-4 hover:scale-105 duration-300"
          >
            <img
              src={logo}
              alt={`${name} Certificate`}
              className="w-[120px] h-[120px] rounded-full mb-3"
            />
            <div className="text-center">
              <p className="font-semibold">{name}</p>
              <a
                href={verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mt-1 block"
              >
                Click to verify
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
