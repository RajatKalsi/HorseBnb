import React, { useEffect, useState, useRef } from 'react'
// import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
    width: '600px',
    height: '600px'
};

const center1 = {
    lat: 28.5937,
    lng: 78.9629
};
const left = {
    lat: 40.4521,
    lng: 50.7451
}

const left1 = {
    lat: 50.4521,
    lng: 60.7451
}


function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBWWqLNReiozUBS4KFeuqusi-xmo22Rz38",
        libraries: ["places"]
    })

    const [map, setMap] = React.useState(null)
    const [dircetion, setDirection] = useState(null);
    const [distance, setDistance] = useState("")
    const [duration, setDuration] = useState("")

    const originRef = useRef(null);
    const destinationRef = useRef(null)


    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center1);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])




    return (
        <div>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center1}
                zoom={5}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    // zoomControl: false,
                    // streetViewControl: false,
                    // mapTypeControl: false,
                    // fullscreenControl: false
                }}

            >
                <Marker position={center1} />
                <Marker position={left} />
                <Marker position={left1} />


                <input type="text" id="address" />
                df

                <></>
            </GoogleMap>
            <input type="text" id="searchTextField" />

            <button className='btn btn-success' onClick={() => { map.panTo(center1) }}>click</button>
            <br></br>
            <Autocomplete>
                <input
                    type="text"
                    placeholder="Enter your address"
                    id="pac-input"
                // ref={originRef}
                />
            </Autocomplete>
            <Autocomplete>
                <input
                    type="text"
                    placeholder="Enter Destination"
                    id="pac-input1"
                // ref={destinationRef}
                />
            </Autocomplete>
        </div>
    )
}

export default Map