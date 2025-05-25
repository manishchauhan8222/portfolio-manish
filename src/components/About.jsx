import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hi, I'm Manish, an MCA student with a strong passion for building
          modern, responsive, and user-focused web applications. I specialize in
          full-stack web development using the MERN stack (MongoDB, Express.js,
          React.js, Node.js).
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-2">Education</h1>
        <div className="space-y-1">
          <p className="font-semibold">
            South Point Institute of Technology and Management, Haryana
          </p>
          <p className="text-sm text-gray-600">
            Master of Computer Application (Aug 2024 – July 2026)
          </p>
        </div>
        <br />
        <div className="space-y-1">
          <p className="font-semibold">SRM University Delhi-NCR</p>
          <p className="text-sm text-gray-600">
            Bachelor of Computer Application (Oct 2020 – July 2023)
          </p>
        </div>
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-2">
          Skills & Expertise
        </h1>
        <div className="text-sm text-gray-700 leading-relaxed space-y-1">
          <p>
            <span className="font-semibold">Frontend:</span> HTML5, CSS3,
            JavaScript (ES6+), React.js, Redux, Tailwind CSS
          </p>
          <p>
            <span className="font-semibold">Backend:</span> Node.js, Express.js,
            JWT Authentication
          </p>
          <p>
            <span className="font-semibold">Database:</span> MongoDB, Mongoose,
            MySQL
          </p>
          <p>
            <span className="font-semibold">Version Control:</span> Git, GitHub
          </p>
          <p>
            <span className="font-semibold">Tools & Platforms:</span> Postman,
            VS Code, NPM
          </p>
          <p>
            <span className="font-semibold">Deployment:</span> Netlify, Vercel
          </p>
          <p>
            <span className="font-semibold">Other Skills:</span> Responsive Web
            Design, API Integration, SDLC, Teamwork, Problem Solving,
            Communication
          </p>
        </div>

        <br />

        <h1 className="text-green-600 font-semibold text-xl mb-2">
          Professional Experience
        </h1>

        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          {/* Almabetter Experience */}
          <div>
            <p className="font-semibold">
              Full Stack Web Developer (Trainee) — Almabetter Edutech Pvt. Ltd
              (Remote)
            </p>
            <p className="text-gray-600">Dec 2023 – Aug 2024</p>
            <ul className="list-disc list-inside pl-2">
              <li>
                Completed a 07-month intensive MERN Stack training program
                focused on full-stack development.
              </li>
              <li>
                Built and deployed 5+ real-world full-stack applications
                including a blog platform, e-commerce site, and user
                authentication system.
              </li>
              <li>
                Implemented key features like RESTful APIs, JWT authentication,
                and responsive UI using React.js and Tailwind CSS.
              </li>
            </ul>
          </div>

          {/* Sparks Foundation Experience */}
          <div>
            <p className="font-semibold">
              Web Developer (Intern) — The Sparks Foundation (Remote)
            </p>
            <p className="text-gray-600">Sep 2022 – Dec 2022</p>
            <ul className="list-disc list-inside pl-2">
              <li>
                Developed an online Banking System using React.js and Node.js
                during a 3-month internship.
              </li>
              <li>
                Successfully implemented and deployed the project, earning a
                Completion Certificate and Letter of Recommendation for
                outstanding performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
