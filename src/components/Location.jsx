import React, { useState, useEffect } from "react";

const Location = () => {
    const [location, setLocation] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => setError(error.message)
        );
    }, []);

    return (
        <div>
            {error ? (
                <div>Error: {error}</div>
            ) : location.latitude ? (
                <div>
                    Latitude: {location.latitude}
                    Longitude: {location.longitude}
                </div>
            ) : (
                <div>
                    Please enable location services for this feature to work.
                </div>
            )}
        </div>
    );
};

export default Location;
