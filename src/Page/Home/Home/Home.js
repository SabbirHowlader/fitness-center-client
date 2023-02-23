import React from 'react';
import useTitle from '../../../Hooks/UseTitle/UseTitle';
import Card from '../Card/Card';
import Contract from '../Contract/Contract';
import Hitpart from '../Hitpart/Hitpart';
import Schedules from '../Schedules/Schedules';
import Slider from '../Slider/Slider';
import Start from '../Start/Start';
import Strongman from '../Strongman/Strongman';
import Team from '../Team/Team';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Card></Card>
            <Start></Start>
            <Schedules></Schedules>
            <Hitpart></Hitpart>
            <Strongman></Strongman>
            <Team></Team>
            <Contract></Contract>
        </div>
    );
};

export default Home;