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
    ]
    return (
        <div>
            
        </div>
    );
};

export default Serivces;