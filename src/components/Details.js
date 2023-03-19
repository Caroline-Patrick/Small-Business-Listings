import React, {useEffect, useRef} from 'react';
import {useRoutes, useParams} from 'react-router-dom';

const Details =(props)=> {
    const {id }= useParams();
    const business = props.businesses.find(b => b.id == id);
    const mapRef = useRef(null);

    useEffect(()=> {
        const google =window.google;
        const map = new google.maps.Map(mapRef.current, {
            center: {lat: business.lat, lng: business.lng},
            zoom: 12,
        });
        new google.maps.Marker({
            position: {lat: business.lat, lng: business.lng},
            map: map,
            titile: business.name
        });
    }, [business]);
    

    if(!business) {
        return <h2>Business not found</h2>
    }

    return (
        <div>
        <h1>{business.name}</h1>
        <p>{business.address}</p>
        <p>{business.hours}</p>
        <p>{business.description}</p>
        <div style={{ height: '400px', width: '100%' }} ref={mapRef} />
      </div>
    )
};

export default Details;