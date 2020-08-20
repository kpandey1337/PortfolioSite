import React from "react";
import bgimage from "../Images/techabstract2.png";
import wip from "../Images/wip.gif";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ContactMe() {
  return (
    <div>
      <div className="flex-none md:flex">
        <div className=" flex-none w-full md:w-6/12 relative">
          <div className="bg-black">
            <img src={bgimage} alt="SanFran" className="m-0 block opacity-50" />
          </div>

          <h1 className="font-bold text-2xl text-center md:text-right pr-4 absolute inset-0 text-white top-20 sm:top-30">
            Kunal Pandey
            <p className="text-xl font-normal">
              Kpandey@alumni.scu.edu
              <br />
              (510)778-2609
              <br />
              <a
                href="https://www.linkedin.com/in/kunal-pandey-868026106/"
                className="transition duration-500 ease-in-out hover:text-green-500"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/kpandey1337"
                className="ml-3 transition duration-500 ease-in-out hover:text-green-500"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
          </h1>
        </div>

        <div className=" pt-8 md:pl-8 md:pt-0 text-xl">
          <p className="text-center text-xl font-bold">Contact Me!</p>
          <p>Contact form in progress</p>
          <img src={wip} alt="machinegif" className="w-6/12 content-center" />
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
