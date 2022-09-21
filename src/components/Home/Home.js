import React from 'react';
import Banner from '../Banner/Banner';
import LiveCameras from '../LiveCameras/LiveCameras';
import Weather from '../Weather/Weather';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Weather></Weather>
            <LiveCameras></LiveCameras>
        </div>
    );
};

export default Home;