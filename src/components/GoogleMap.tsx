import React from 'react'
// import { center: {lat: 30, lng: -110}, zoom: 8, mapId: '1234' } as google.maps.MapOptions from "google-map-react"

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

function InitMap(): any {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });
  return(
    <div id="map"></div>
  )
}

{/* function GoogleMap() {
  
    <div>let map: google.maps.Map;
    const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
    
    function initMap(): void {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center,
        zoom: 8
      });
    }
    
  )
} */}

export default InitMap;