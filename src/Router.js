import React from 'react'
import { Routes, Route } from 'react-router'
import Listings from './containers/Listings';
import Details from './containers/Details'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings/>} />
            <Route path="/details/:id" element={<Details/>} />
        </Routes>
    );
};

export default Router;