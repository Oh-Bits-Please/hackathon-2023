import * as React from "react";
import Map, { Marker, GeolocateControl, Popup } from "react-map-gl";
import { useState } from "react";
// import * as storeData from "/src/data/wholefoods.json";

const MapBox = ({ product }) => {
  console.log(product.location);
  const [viewState, setViewState] = useState({
    longitude: -122,
    latitude: 47,
    zoom: 10,
    pitch: 50,
  });

  const [selectedStore, setSelectedStore] = useState(product);
  const [showPopUp, setShowPopup] = useState(true);

  return (
    <div>
      <Map
        {...viewState}
        onClick={(e) => {
          e.preventDefault();
          console.log("clicked");
        }}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 400, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={import.meta.env.VITE_TOKEN}
      >
        <div>
          <Marker
            key={product.zip}
            longitude={product.lng}
            latitude={product.lat}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedStore(product);
                setShowPopup(true);
              }}
            >
              <img src="/src/images/map-marker.png" width={50} height={50} />
            </button>
          </Marker>
        </div>

        {selectedStore && showPopUp ? (
          <Popup
            latitude={selectedStore.lat}
            longitude={selectedStore.lng}
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
          >
            <div>{selectedStore.location}</div>
          </Popup>
        ) : null}
        <GeolocateControl />
      </Map>
    </div>
  );
};

export default MapBox;
