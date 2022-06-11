import React from 'react';
import FrontEnd from '../../Assets/website.png';
import Backend from '../../Assets/storage.png';
import BackData from '../../Assets/database.png';
import Convert from '../../Assets/file.png'

const Serivces = () => {
    const serviceData = [
        {
            name: 'frontend Development',
            icon: FrontEnd,
            Desc: 'I provide effecient frontend development with clean code . Which is much easier to connect with server side and database with responsive design for pc , tablet and mobile .'
        },
        {
            name: 'Back-end Development',
            icon: Backend,
            Desc: "I provide cloud storage , server code , users file management, location service as well as many backend services. These services have thier own api's allowing them into integrated with application into ease."
        },
        {
            name: 'Database Integration',
            icon: BackData,
            Desc: "Storing websites data into a reliable way into database also keep user's data safe and secure . Work with cloud based data and integrating them into Application Programming Interfase to extract and transfer data. "
        },
        {
            name: 'PSD To Html',
            icon: Convert,
            Desc: "Converting photoshop, figma or XD design into html in a reliable and effecient way. Make them repsonsible for all devices with interactive design. Develop new features based with UI design."
        },
    ]
    return (
        <div className='mt-12'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-8 gap-5 bg-base-200'>
                {
                    serviceData.map(service =>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img className='w-2/6' src={service.icon} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Serivces;