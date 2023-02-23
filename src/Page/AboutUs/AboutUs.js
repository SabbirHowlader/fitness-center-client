import React from 'react';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import Schedules from '../Home/Schedules/Schedules';

const AboutUs = () => {
    useTitle('AboutUs')
    return (
        <div>
            <Schedules></Schedules>
        </div>
    );
};

export default AboutUs;