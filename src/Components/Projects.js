import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import IronEng from "../Images/IronEng.png";

function Projects() {
  return (
    <div>
      {/* Project 1*/}
      <div className=" pt-16 flex sm:flex-none md:flex-none">
        <div className="w-2/5 md:w-full sm:w-full">
          <p className=" font-bold text-xl text-blue-400 pb-3">Iron Engineering Webapp</p>
          <img src={IronEng} alt="ironEng" />
          <p className="text-blue-700 underline">
            Source Code <FontAwesomeIcon icon={faCodeBranch} />
            <p className="inline float-right underline"> Documentation</p>
          </p>
          <p className="font-bold text-l pt-3 text-blue-400"> Technologies Used:</p>

          <div className="flex sm:flex-none md:flex-none">
            <div className="w-2/5 ">
              <ul className="list-disc pl-8">
                <li> Spring Boot</li>
                <li> Spring MVC</li>
                <li> Bootstrap</li>
                <li> AWS RDS</li>
                <li> AWS EC2</li>
              </ul>
            </div>

            <div className>
              <ul className="list-disc pl-16  ">
                <li> mySQL</li>
                <li> JSP</li>
                <li> CSS</li>
                <li> Apache Tomcat</li>
                <li> oAuth Single-Sign On</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pl-10 w-3/5 ">
          <p className="font-bold text-l text-blue-400">Summary</p>
          <p>
            Iron Bronco Triathlon is an ironman triathlon that spans 2 weeks, held on the Santa
            Clara University campus every year to promote student health and school spirit.
            Participants can form groups of up to 3 people and collectively run 26.2 miles, bike 112
            miles and swim 2.4 miles. My team was tasked to create a website that allowed students
            and faculties to register for the competition, find teams, and log their progress along
            the way.
          </p>

          <p className="font-bold text-l pt-5 text-blue-400">Responsibilities</p>
        </div>
      </div>

      {/* Project 2*/}
      <div className="pt-16 flex">next project</div>
    </div>
  );
}

export default Projects;
