import React from 'react';

const Skill = () => {
    const skills = [
        { name: "HTML 5", progress: 90 },
        { name: "CSS 3", progress: 83 },
        { name: "Javascript", progress: 80, },
        { name: "React js", progress: 75, },
        { name: "Node js (Express js )", progress: 56, },
        { name: "MongoDB", progress: 60, },
        { name: "Git and Github", progress: 70 },
        { name: "Rest Api", progress: 78 }
    ]
    return (
        <div className='overflow-x-hidden text-center mt-8 mb-6'>
            <h3 data-aos="fade-in" data-aos-duration ="2000" className='text-4xl font-semibold text-center px-10 lg:px-0'>My Skills</h3>
            <div className='max-w-7xl mx-auto mt-4 grid sm:grid-cols-1 md:grid-cols2 lg:grid-cols-2'>
                {
                    skills.map(skill =>
                        <div  data-aos="fade-left" data-aos-durtation="1500"  className='pt-3 grid grid-cols-1 place-items-left'>
                            <span className='uppercase font-semibold mb-2'>{skill.name}</span>
                            <progress class="progress progress-primary w-5/6 mx-4" value={skill.progress} max="100"></progress>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Skill;