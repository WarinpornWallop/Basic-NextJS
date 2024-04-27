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

function Education() {
 
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
          Education
        </p>
      </div>

      <div className="content px-8 pt-8">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2000 - 2016</time>
              <div className="text-lg font-black">
                Science and Mathematics Program
              </div>
              <div className="text-sm text-error font-black">
                St. Joseph Thiphawan School
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2016 - 2020</time>
              <div className="text-lg font-black">
                Bachelor of Electronics and Telecommunication Engineering
              </div>
              <div className="text-sm text-error font-black">AppliCAD PCL</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2020 - 2021</time>
              <div className="text-lg font-black">
                Security Engineer (Business Representative)
              </div>
              <div className="text-sm text-error font-black">
                Datapro Computer Systems
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <time className="font-mono italic">2021 - Present</time>
              <div className="text-lg font-black">Web Developer</div>
              <div className="text-sm text-error font-black">AppliCAD PCL</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;