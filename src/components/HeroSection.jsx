"use client"
import React from "react";
//import res from "../../public/resume/DerekMeduriResume.pdf"
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
 

const HeroSection = () => {
    return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left lg:justify-self-start">
                 <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-600 to-red-600">Welcome, I'm </span><br></br>
                 <TypeAnimation
                    sequence={[
                     'Derek Meduri', 
                      1000, 
                       'a Software Developer',
                       1000, 
                       'a Product Developer', 
                       1000,
                      'your next Candidate',
                         1000,
                         ]}
                     speed={50}
                      wrapper="span"
                      repeat={Infinity}
                        />
                   </h1>
              <p className="text-white text-base mb-6 sm:text-lg  lg:text-xl">
                      Located in Columbus, Ohio.
              </p>
                      <div> 
                    <Link
                    href="/#contact"
                     className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-800 via-teal-600 to-red-600 text-white hover:text-red-600">Hire Me</Link>
                    <Link 
                    href="."
                   
                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-teal-800 via-teal-600 to-red-600 text:white hover:text-red-600 mt-3">
                      <span className="block bg-black rounded-full px-5 py-2">
                      Download CV</span></Link>
                      </div>  
            </div>

            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                 <Image
                 src="/images/dmeduri.jpg" 
                alt="derek meduri image"
                className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]" 
                width={300}
                height={300}
            
                />
                </div>
            </div>
            </div>
         </section>
    );
    
};

export default HeroSection;