import React from 'react';
import bgimage from '../Images/sanfran.jpg';
import bootstraplogo from '../Images/bootstrap.svg'
import ec2logo from '../Images/ec2.svg'
import gitlogo from '../Images/git.svg'
import hibernatelogo from '../Images/hibernate.svg'
import springlogo from '../Images/spring.svg'
import tailwindlogo from '../Images/tailwind.svg'
import reactlogo from '../Images/react.svg'
import nodejslogo from '../Images/nodejs.svg'
import mysqllogo from '../Images/mysql.svg'
import IronEng from '../Images/IronEng.png'



function Home(){
return(
    <div>
        <div className=" w-full relative">
            <div className="bg-black">
                
                <img src={bgimage} alt="SanFran" className="m-0 block opacity-50"/>
            </div>
            
            <h1 className="font-bold text-2xl text-center absolute inset-0 top-30 text-white">
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
                <img src={gitlogo} alt="git" className="h-10 w-16 m-1 float-left"/> 
                <img src={bootstraplogo} alt="bootstrap" className="h-10 w-16 m-1 float-left"/>
                <img src={springlogo} alt="spring" className="h-10 w-24 m-1 float-left"/>
                <img src={tailwindlogo} alt="tailwind" className="h-10 w-12 m-1 float-left"/>
                <img src={reactlogo} alt="react" className="h-10 mt-1 float-left"/>
                <img src={ec2logo} alt="aws ec2" className="h-10 m-1 float-left"/>
                <img src={hibernatelogo} alt="hibernate" className="h-10 m-1 float-left"/>
                <img src={mysqllogo} alt="mysql" className="h-10 m-1 float-left"/>
                <img src={nodejslogo} alt="nodejs" className="h-10 m-1"/>
            </div>
        </div>
        <div className="text-2xl text-center pt-5 ">
            Projects
        </div>
        <div className="border-b-2 mx-64"></div>

        <div className=" pt-16 flex">
            <div className="w-2/5">
                <p className=" font-bold text-xl text-blue-400 pb-3">Iron Engineering Webapp</p>
                <img src={IronEng} alt="ironEng"/>
                <p className="font-bold text-l pt-3"> Technologies Used:</p>
                <ul className="list-disc pl-8">
                    <li> Spring Boot</li>
                    <li> Spring MVC</li>
                    <li> Bootstrap</li>
                </ul>
            </div>
            <div className="pl-10 w-3/5">
                <p className="font-bold text-l">Summary:</p>
                <p>
                Iron Bronco Triathlon is an ironman triathlon that spans 2 weeks, held on the Santa Clara University campus every year to
                promote student health and school spirit. Participants can form groups of up to 3 people and collectively run 26.2 miles,
                bike 112 miles and swim 2.4 miles. My team was tasked to create a website that allowed students and faculties to register
                for the competition, find teams, and log their progress along the way.
                </p>
            </div>
            
        </div>


    </div>
    
);
//changed
}
export default Home;