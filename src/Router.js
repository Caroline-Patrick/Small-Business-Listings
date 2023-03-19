import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings';
import Details from './containers/Details'
import Login from './components/Login';
import LoggedInListings from './containers/LoggedInListings';




const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

  const ProtectedRoute = (props) => {
    const {component: Component, ...rest} = props;

    return (
        checkAuth() === true ?( <Component {...rest}/>) : (<Navigate to = '/login' />)
    );
};

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/loggedin" element={<ProtectedRoute component={LoggedInListings}/>}/>
            
        </Routes>
    );
};

export default Router;