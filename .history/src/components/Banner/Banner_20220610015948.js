import React from 'react';
import BannerImg from "../../Assets/portfolio-img.png"
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={BannerImg} class="max-w-sm rounded-lg shadow-2xl" alt='Banner img' />
                    <div className='px-12'>
                        <h1 data-aos="fade-left" class="text-5xl font-bold">HI!</h1>
                        <h1 data-aos="fade-left" class="text-5xl font-bold">Iam Biplob Hossen</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-error text-lg text-white font-semibold">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
export default Banner;