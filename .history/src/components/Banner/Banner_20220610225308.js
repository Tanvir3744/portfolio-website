import React from 'react';
import BannerImg from "../../Assets/portfolio-img.png";
import { DownloadIcon } from '@heroicons/react/outline'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right" data-aos-duration= "2000" >
                        <img src={BannerImg} class="max-w-sm rounded-lg shadow-2xl" alt='Banner img' />
                    </div>
                    <div className='px-12'>
                        <h1 data-aos="fade-left" data-aos-duration='2000' class="text-5xl font-bold">HI!</h1>
                        <h1 data-aos="fade-left" data-aos-duration='2000' class="text-5xl font-bold">Iam Biplob Hossen</h1>
                        <p data-aos='fade-left' data-aos-duration='2100' class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos="" class="btn btn-error text-lg text-white font-semibold">
                            Download CV
                            <DownloadIcon height="24" className='ml-3' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;