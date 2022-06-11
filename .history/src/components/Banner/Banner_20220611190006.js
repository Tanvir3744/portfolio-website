import React from 'react';
import BannerImg from "../../Assets/portfolio-img.png";
import { DownloadIcon } from '@heroicons/react/outline'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='avatar'>
                        <div data-aos="fade-right" data-aos-duration="2000" className='w-90 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' >
                            <img src={BannerImg} class="max-w-sm rounded-lg shadow-2xl" alt='Banner img' />
                        </div>
                    </div>
                    <div className='px-4'>
                        <h1 data-aos="fade-left" data-aos-duration='2000' class="text-5xl font-bold">HI!</h1>
                        <h1 data-aos="fade-left" data-aos-duration='2000' class="text-5xl font-bold">Iam Biplob Hossen</h1>
                        <p data-aos='fade-left' data-aos-duration='2100' class="py-6">Innovative, task driven professional with various technologies . I love to explore new technologies of web development. Consistently providing technological needs companies ingenious inovation. </p>
                        <button data-aos="fade-right" data-aos-easing="linear" data-aos-duration='2000' class="btn btn-error text-lg text-white font-semibold">
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