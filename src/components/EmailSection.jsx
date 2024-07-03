"use client";
import React from "react";
import FbIcon from "../../public/fb.png"
import GithubIcon from "../../public/github.png"
import IgIcon from "../../public/ig.png"
import LinkedinIcon from "../../public/linkedin.png"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const EmailSection = () => {
    const [emailSubmmited, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch (endpoint, options);
        const resData = await response.json();
       

        if (response.status === 200) {
            console.log("message sent.");
            setEmailSubmitted(true);
        }

    };

    return <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-white mb-4 max-w-md">
                {" "}
                If you would like to discuss a project or a job opportunity please fill out the form and I will take it from there! I Look forward to bringing your visions to life. 
            </p>
            <div className="flex flex-row gap-2">
                <Link href="github.com">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                 <Link href="linkedin.com/in/derekmeduri">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
                <Link href="facebook.com">
                 <Image src={FbIcon} alt="Facebook Icon" />
                </Link>
                 <Link href="instagram.com">
                    <Image src={IgIcon} alt="Instagram Icon" />
                </Link>
                </div>
        </div>
        <div>
            {emailSubmmited ? ( <p className="text-green-500 text-sm mt-2">Email Sent!</p>) : ( 
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                <label htmlFor="email" type='email' className="text-white block mb-2 text-sm font-medium ">Email</label>
                <input type="email"
                name="email" 
                id="email" 
                requried="true"
                className="bg-black border border-slate-900 placeholder-slate-400 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@email.com"/>
                </div>
                <div className="mb-6">
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium ">Subject</label>
                <input type="text"
                name="subject" 
                id="subject" 
                requried="true"
                className="bg-black border border-slate-900 placeholder-slate-400 text-sm rounded-lg block w-full p-2.5"
                placeholder="A new opportunity"/>
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="message" 
                    className="text-white block mb-2 text-sm font-medium">
                    Message
                    </label>
                    <textarea 
                    name="message" 
                    id="message" 
                    className="bg-black border border-slate-900 placeholder-slate-400 text-sm rounded-lg block w-full p-2.5" 
                    placeholder="I would like to discuss.." />
                </div>
                <button 
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"> Send Message</button>

               
                
            </form>
            )}
        </div>
    </section>
}

export default EmailSection;