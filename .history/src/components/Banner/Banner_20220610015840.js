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
                        <button class="btn btn-accent text-xl text-white font-semibold">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;