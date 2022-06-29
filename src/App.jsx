import React, { Fragment } from "react";
import { Map, TileLayer } from "react-leaflet";
import EditLayerComponent from "./EditLayerComponent";
// import CategoriesMenuComponent from "./CategoriesMenuComponent";
import CategoriesMenuComponentCopy from "./CategoriesMenuComponent_copy";
import FullscreenControl from "react-leaflet-fullscreen";
import $ from "jquery";

const App = () => {
  const mapConfig = {
    lat: 41.69541155762141,
    lng: -8.846955635438464,
    zoom: 17
  };

  return (
    <Fragment>
      {/* <GlobalStateProvider> */}
      <div id="map-wrapper">
        <Map center={[mapConfig.lat, mapConfig.lng]} zoom={mapConfig.zoom}>
          <FullscreenControl position="topleft" />
          {/* <DrawTools /> */}
          <EditLayerComponent />
          <TileLayer
            attribution="Tiles &copy; Carto"
            // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
      {/* </GlobalStateProvider> */}
    </Fragment>
  );
};

export default App;
