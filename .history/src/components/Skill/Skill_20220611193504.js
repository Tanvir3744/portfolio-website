import React from 'react';

const Skill = () => {
    const skills = [
        { name: "HTML 5", progress: 90 },
        { name: "CSS 3", progress: 83 },
        { name: "Javascript", progress: 80, },
        { name: "React js", progress: 75, },
        { name: "Node js (Express js )", progress: 56, },
        { name: "MongoDB", progress: 60, },
        { name: "Git and Github", progress: 70 }
    ]
    return (
        <div className='max-w-7xl mx-auto mt-4'>
            {
                skills.map(skill =>
                    <div>
                        <label className='uppercase text-xl font-semibold '>{skill.name}</label>
                        <progress class="progress progress-primary w-2/5 mx-4" value={skill.progress} max="100"></progress>
                    </div>)
            }
        </div>
    );
};

export default Skill;