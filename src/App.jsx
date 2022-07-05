import React, { Fragment, useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import FullscreenControl from "react-leaflet-fullscreen";
import Categories from "./components/Categories";
import DrawTools from "./components/DrawTools";
import AssociateCategoryDialog from "./components/AssociateCategoryDialog"
import AddCategoryDialog from "./components/AddCategoryDialog"

const App = () => {

  const mapConfig = {
    lat: 41.69541155762141,
    lng: -8.846955635438464,
    zoom: 17,
    zoomControl: false
  };

  const [isAssociateCategoryOpen, setIsAssociateCategoryOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  //const [refresh, doRefresh] = useState(0);

  const handleAssociateCategoryOpen = () => {
    setIsAssociateCategoryOpen(!isAssociateCategoryOpen);
  };

  const handleAddCategoryOpen = () => {
    console.log("handleAddCategoryOpen");
    setIsAddCategoryOpen(!isAddCategoryOpen);
  };

  return (
    <Fragment>
      {/* <GlobalStateProvider> */}
      <div id="map-wrapper">
        <Map center={[mapConfig.lat, mapConfig.lng]} zoom={mapConfig.zoom} zoomControl={[mapConfig.zoomControl]}>
          <FullscreenControl position="topleft" />
          <DrawTools />
          <Categories 
            handleAddCategoryOpen={isAssociateCategoryOpen}
            handleCloseDialog={() => setIsAddCategoryOpen(false)}
             />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
      <AssociateCategoryDialog
        isDialogOpened={isAddCategoryOpen}
        handleCloseDialog={() => setIsAddCategoryOpen(false)}
      />
      <AddCategoryDialog
        isDialogOpened={isAddCategoryOpen}
        handleCloseDialog={() => setIsAddCategoryOpen(false)}
      />
      <button onClick={() => handleAssociateCategoryOpen()}>Open "Associate Category" Dialog</button>
      <button onClick={() => handleAddCategoryOpen()}>Open "Add Category" Dialog</button>
      {/* </GlobalStateProvider> */}
    </Fragment>
  );
};

export default App;
