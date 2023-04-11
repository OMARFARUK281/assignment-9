import React, { useEffect, useState } from 'react';
import './Body.css'
import Section from '../Section/Section';

const Body = () => {
    const [JobApplys, setJobApplys] = useState([]);

    useEffect( () => {
        fetch('JobApplys.json')
        .then(res => res.json())
        .then(data => setJobApplys(data))
    }, [])

    return (
        <div>
            {
                JobApplys.map(JobApply => <Section
                key={JobApply.id}
                JobApply={JobApply}
                ></Section> )
            }
        </div>
    );
};

export default Body;