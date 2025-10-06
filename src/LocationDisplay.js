import React from 'react';

import { useLocation } from 'react-router-dom';

const LocationDisplay = () => {
    const location = useLocation();
    return (
        <div>
            <h2>Current Location</h2>
            <p><strong>Pathname:</strong>{location.pathname}</p>
            <p><strong>Search:</strong>{location.search}</p>
            <p><strong>Hash:</strong>{location.hash}</p>
            <p><strong>State:</strong>{JSON.stringify(location.state)}</p>
        </div>
    );
};
export default LocationDisplay;