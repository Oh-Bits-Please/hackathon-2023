import * as React from "react";
import Map, { Marker, GeolocateControl, Popup } from "react-map-gl";
import { useState } from "react";
import * as storeData from "/src/data/wholefoods.json";

const MapBox = () => {
  const [viewState, setViewState] = useState({
    longitude: -122,
    latitude: 47,
    zoom: 10,
    pitch: 50,
  });

  // const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 400, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={import.meta.env.VITE_TOKEN}
      >
        {storeData.default.map((store) => {
          return (
            <div>
              <Marker
                key={store.zip}
                longitude={store.lng}
                latitude={store.lat}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedStore(store);
                    // console.log(selectedStore);
                  }}
                >
                  <img
                    src="/src/images/map-marker.png"
                    width={50}
                    height={50}
                  />
                </button>
              </Marker>
            </div>
          );
        })}
        {/* <Popup latitude={47} longitude={-122}>
          <div>{selectedStore?.name || "test"}</div>
        </Popup> */}

        <GeolocateControl />
      </Map>
    </div>
  );
};

export default MapBox;
