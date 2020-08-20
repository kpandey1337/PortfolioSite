import React from "react";
import bgimage from "../Images/sanfran.jpg";
import bootstraplogo from "../Images/bootstrap.svg";
import ec2logo from "../Images/ec2.svg";
import gitlogo from "../Images/git.svg";
import hibernatelogo from "../Images/hibernate.svg";
import springlogo from "../Images/spring.svg";
import tailwindlogo from "../Images/tailwind.svg";
import reactlogo from "../Images/react.svg";
import nodejslogo from "../Images/nodejs.svg";
import mysqllogo from "../Images/mysql.svg";
import Projects from "../Components/Projects";
import NewProjects from "../Components/NewProjects";

function Home() {
  return (
    <div>
      <div className=" w-full relative">
        <div className="bg-black">
          <img src={bgimage} alt="SanFran" className="m-0 block opacity-50" />
        </div>

        <h1 className="font-bold text-2xl text-center absolute inset-0 text-white top-20 sm:top-30">
          Kunal Pandey
          <p className="text-xl font-normal">
            BS in Computer Science and Engineering
            <br />
            Software Developer
          </p>
        </h1>
      </div>
      <div className=" text-center border-b-2 shadow">
        <div className="inline-block">
          <img src={gitlogo} alt="git" className="h-10 w-16 m-1 float-left" />
          <img src={bootstraplogo} alt="bootstrap" className="h-10 w-16 m-1 float-left" />
          <img src={springlogo} alt="spring" className="h-10 w-24 m-1 float-left" />
          <img src={tailwindlogo} alt="tailwind" className="h-10 w-12 m-1 float-left" />
          <img src={reactlogo} alt="react" className="h-10 mt-1 float-left" />
          <img src={ec2logo} alt="aws ec2" className="h-10 m-1 float-left" />
          <img src={hibernatelogo} alt="hibernate" className="h-10 m-1 float-left" />
          <img src={mysqllogo} alt="mysql" className="h-10 m-1 float-left" />
          <img src={nodejslogo} alt="nodejs" className="h-10 m-1" />
        </div>
      </div>
      <div className="text-2xl text-center pt-5 ">Projects</div>
      <div className="border-b-2 mx-64"></div>

      <NewProjects />
    </div>
  );
  //changed
}
export default Home;
