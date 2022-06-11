import React from 'react';
import FrontEnd from '../../Assets/website.png';
import Backend from '../../Assets/storage.png';
import BackData from '../../Assets/database.png';
import Convert from '../../Assets/file.png'

const Serivces = () => {
    const serviceData = [
        {
            name: 'Frontend Development',
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
        <div className='pt-12 pb-8 bg-base-200'>
            <h2 className='text-4xl font-semibold text-center'>What I Do</h2>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8  gap-5   px-4 lg:px-12'>
                {
                    serviceData.map(service =>
                        <div data-aos = 'zoom-in-left' data-aos-duration="1500" class=" card w-96 bg-base-100 shadow-xl max-w-7xl mx-auto mt-10">
                            <figure class="px-10 pt-10">
                                <img style={{width:"150px"}} className='w-1/5' src={service.icon} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title font-semibold">{service.name}</h2>
                                <p>{service.Desc}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Serivces;