import React from 'react'
import { Routes, Route } from 'react-router'
import Listings from './containers/Listings'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings/>} />
        </Routes>
    );
};

export default Router;