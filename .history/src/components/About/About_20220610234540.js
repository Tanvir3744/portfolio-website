import React from 'react';
import AboutImg from '../../Assets/3372240.jpg'
const About = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 rounded">
                <div class="max-w-7xl mx-auto  hero-content flex-col lg:flex-row-reverse px-12">
                    <img src={AboutImg} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">About Me</h1>
                        <p class="py-6"> I'm a proffessional frontend website developer with innovative mindset. I work with todays most popular Javascript library React Js for frontend developement. I always </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;