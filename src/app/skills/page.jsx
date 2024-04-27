import React from 'react'
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Image from 'next/image';
import tonnam2 from "../../../public/IMG_3197.jpg";

export const metadata = {
  title: "About Page",
  description: "About Page",
  keywords: "futureskill,nextjs",
};

function Skills() {
 
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };
  return (
    <div>
      {/* <Header />
      <Nav /> */}
      <div className="bg-primary">
        <p className="text-6xl text-white font-bold py-16 px-8 h-60 grid content-center">
          Skills
        </p>
      </div>

      <div className="content px-8 pt-8">
        <div className="mockup-browser border border-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300">My skills</div>
          </div>
          <hr className="border-base-300" />
          <div className="grid grid-cols-4 gap-4 p-4 w-full bg-base-100">
            <div>
              <p className="font-bold">Front-end Technologies</p>
              <div>
                <ul class="list-disc ps-4">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>CSS Preprocessors (Sass, Less)</li>
                  <li>Front-end Frameworks (Bootstrap, Tailwind)</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-bold">Back-end Technologies</p>
              <div>
                <ul class="list-disc ps-4">
                  <li>C#</li>
                  <li>.NET Framework</li>
                  <li>.NET Core</li>
                  <li>ASP.NET MVC </li>
                  <li>Node.js</li>
                  <li>Golang</li>
                  <li>RESTFul API</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-bold">Database Technologies</p>
              <div>
                <ul class="list-disc ps-4">
                  <li>Microsoft SQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-bold">Other</p>
              <ul class="list-disc ps-4">
                <li>
                  Version Control Systems (Team Foundation Version Control, Git)
                </li>
                <li>Postman API Platform</li>
                <li>VHDL</li>
                <li>Matlab & Simulink and Simscape</li>
                <li>Command Line (Linux)</li>
                <li>MATLAB & Simulink</li>
                <li>Microsoft Office Suite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;