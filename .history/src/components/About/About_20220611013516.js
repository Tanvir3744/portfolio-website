import React from 'react';
import AboutImg from '../../Assets/undraw_profile_details_re_ch9r.svg'
const About = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 rounded">
                <div class="max-w-7xl mx-auto  hero-content flex-col lg:flex-row-reverse px-12">
                    <img src={AboutImg} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-6'>
                        <h1 class="text-5xl font-bold">About Me</h1>
                        <p class="py-6 "> I'm a proffessional frontend website developer with innovative mindset. I work with todays most popular Javascript library React Js for frontend developement. I love to explore various technologies and curious about them. </p>
                        <p class="py-1 ">Passionate about implementing and launching new project. I have enough ability to translate business requirements in to technical solution. Looking for start career as a frontend developer with a reputed firm with driven technology.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;