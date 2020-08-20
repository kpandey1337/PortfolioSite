import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

import IronEng from "../Images/IronEng.png";
import WayPoint from "../Images/secondpart.mov";

function NewProjects() {
  return (
    <div>
      {/*Project 1 */}
      <div className="flex-none md:flex">
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <div className="flex-none ">
            <p className=" font-bold text-xl text-blue-400 pb-3">Iron Engineering Webapp</p>
            <img src={IronEng} alt="ironEng" />
            <p className=" text-left text-blue-700 underline">
              <a href="https://github.com/kpandey1337/IronEngineerWebsite/tree/master/IronEngineerMaven-master">
                <a className="transition duration-500 ease-in-out hover:text-green-500">
                  Source Code <FontAwesomeIcon icon={faCodeBranch} />
                </a>
              </a>
              <p className="inline float-right underline transition duration-500 ease-in-out hover:text-green-500">
                {" "}
                Documentation
              </p>
            </p>
            <p className="font-bold text-l pt-3 text-blue-400"> Technologies Used:</p>
          </div>
          <div className="flex">
            <div className="flex-1 text-gray-700 text-center py-2 m-2">
              <ul className="list-disc px-1 text-left">
                <li> Spring Boot</li>
                <li> Spring MVC</li>
                <li> Bootstrap</li>
                <li> AWS RDS</li>
                <li> AWS EC2</li>
              </ul>
            </div>
            <div className="flex-1 text-gray-700 text-center  py-2 m-2">
              <ul className="list-disc pl-16 text-left">
                <li> mySQL</li>
                <li> JSP</li>
                <li> CSS</li>
                <li> Apache Tomcat</li>
                <li> oAuth 2.0</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 text-gray-700 px-4 py-2 m-2 my-auto">
          <p className="font-bold text-blue-400">Summary</p>
          <p>
            Iron Bronco Triathlon is an ironman triathlon that spans 2 weeks, held on the Santa
            Clara University campus every year to promote student health and school spirit.
            Participants can form groups of up to 3 people and collectively run 26.2 miles, bike 112
            miles and swim 2.4 miles. My team was tasked to create a website that allowed students
            and faculties to register for the competition, find teams, and log their progress along
            the way.
          </p>

          <p className="font-bold pt-5 text-blue-400">Responsibilities</p>
          <p>
            <ul className="list-disc">
              <li>
                Integrated oAuth API on Spring boot MVC framework web application to allow for
                Google Single Sign On.
              </li>
              <li>
                Set up mySQL tables for storing competitors’ information, teams they belong to, and
                logs for each competitor.
              </li>
              <li>Set up communication between AWS RDS and the Spring application.</li>
              <li>
                Developed administrative functionality on the website, which allowed administrators
                to approve teams, approve participant log activity, and remove participants from the
                competition.
              </li>
              <li>Deployed completed website on AWS EC2.</li>
            </ul>
          </p>
        </div>
      </div>

      {/*Project 2 */}
      <div className="flex-none md:flex mt-24">
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <div className="flex-none">
            <p className=" font-bold text-xl text-blue-400 pb-3">
              Senior Design Project - WayPoint AR
            </p>
            <video className="block ml-auto mr-auto" width="400" height="300" controls autoplay>
              <source src={WayPoint} type="video/mp4" />
            </video>

            <p className=" text-left text-blue-700 underline">
              <a href="https://github.com/kpandey1337/WayPointAR">
                <a className="transition duration-500 ease-in-out hover:text-green-500">
                  Source Code <FontAwesomeIcon icon={faCodeBranch} />
                </a>
              </a>
              <p className="inline float-right underline transition duration-500 ease-in-out hover:text-green-500">
                {" "}
                Documentation
              </p>
            </p>
            <p className="font-bold text-l pt-3 text-blue-400"> Technologies Used:</p>
          </div>
          <div className="flex">
            <div className="flex-1 text-gray-700 text-center py-2 m-2">
              <ul className="list-disc px-1 text-left">
                <li> Swift</li>
                <li> Swift-UIkit</li>
                <li> Swift-ARkit</li>
                <li> Swift-CoreLocation</li>
                <li> Swift-Mapkit</li>
              </ul>
            </div>
            <div className="flex-1 text-gray-700 text-center  py-2 m-2">
              <ul className="list-disc pl-16 text-left">
                <li> Project Dent</li>
                <li> AR+CL Framework</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 text-gray-700 px-4 py-2 m-2 my-auto">
          <p className="font-bold text-blue-400">Summary</p>
          <p>
            Developed an augmented reality application aiming to remove the need of looking at a map
            or going to a directory on Santa Clara University Campus. Inspired by the navigation
            assist system in a video game called Dead Space, the mobile application highlights
            horizontal pathways in the direction of the desired building as long as the user is
            within campus grounds.
          </p>

          <p className="font-bold pt-5 text-blue-400">Responsibilities</p>
          <p>
            <ul className="list-disc">
              <li>Outline the design and technologies needed for the project.</li>
              <li>Determine architectural framework along with what technologies to use.</li>
              <li>
                Develop authorization functionality to authenticate camera and location services for
                a given user.
              </li>
              <li>
                Develop the functionality that will highlight pathways by using the CoreLocation
                framework, providing directions to the destination building.
              </li>
              <li className="font-bold">
                Won first place at the Senior Design Convocation at Santa Clara University.
              </li>
            </ul>
          </p>
        </div>
      </div>
      {/*Project3 */}
      <div className="flex-none md:flex mt-24">
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <div className="flex-none">
            <p className=" font-bold text-xl text-blue-400 pb-3">Mage's Quarters</p>
            <div>
              <ReactPlayer
                className="block ml-auto mr-auto"
                url="https://www.youtube.com/watch?v=FHyDb20UhgM"
              />
            </div>

            <p className=" text-left text-blue-700 underline">
              <a href="https://sites.google.com/scu.edu/mages-quarters2/home?authuser=1">
                <a className="transition duration-500 ease-in-out hover:text-green-500">
                  Project Site
                </a>
              </a>
              <a
                className="inline float-right underline transition duration-500 ease-in-out hover:text-green-500"
                href="https:sketchfab.com/3d-models/witches-hut-ad1ef49e77cf4fde93bc3ed0eb458c3e"
              >
                Sketchfab Model
              </a>
            </p>
            <p className="font-bold text-l pt-3 text-blue-400"> Technologies Used:</p>
          </div>
          <div className="flex">
            <div className="flex-1 text-gray-700 text-center py-2 m-2">
              <ul className="list-disc px-1 text-left">
                <li> AutoDesk Maya</li>
                <li> Adobe Premiere</li>
              </ul>
            </div>
            <div className="flex-1 text-gray-700 text-center  py-2 m-2">
              <ul className="list-disc pl-16 text-left"></ul>
            </div>
          </div>
        </div>
        <div className="flex-1 text-gray-700 px-4 py-2 m-2 my-auto">
          <p className="font-bold text-blue-400">Summary</p>
          <p>
            The Mage's Quarters showcases a small portion of a wizard's home during medieval times.
            Objects such as candles and crooked wooden furniture were used to create an environment
            where imperfect craftmenship was commonplace. Inspired by Gandalf from Lord of the
            Rings, the mage is shown to own both a sword and a staff. This project was completed
            during a 3D modeling course taken at Santa Clara University. I used many transform
            scripts to help with the animation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewProjects;
