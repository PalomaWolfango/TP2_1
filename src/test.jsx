import React, { Component } from "react";
import { Map, TileLayer, Circle, FeatureGroup } from "react-leaflet";
import L from "leaflet";
import { EditControl } from "react-leaflet-draw";

// work around broken icons when using webpack, see https://github.com/PaulLeCam/react-leaflet/issues/255

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png"
});

//

let polyline;

export default class test extends Component {
  // see http://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html#l-draw-event for leaflet-draw events doc

  _onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);

    this._onChange();
  };

  _onCreated = (e) => {
    let type = e.layerType;
    let layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    } else {
      console.log("_onCreated: something else created.3:", type, e);
    }
    // Do whatever else you need to. (save to db; etc)
		console.log("Geojson", layer.toGeoJSON());
		//console.log("coords", layer.getLatLngs());

    this._onChange();
  };

  _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);

    this._onChange();
  };

  _onMounted = (drawControl) => {
    console.log("_onMounted", drawControl);
  };

  _onEditStart = (e) => {
    console.log("_onEditStart", e);
  };

  _onEditStop = (e) => {
    console.log("_onEditStop", e);
  };

  _onDeleteStart = (e) => {
    console.log("_onDeleteStart", e);
  };

  _onDeleteStop = (e) => {
    console.log("_onDeleteStop", e);
  };

  render() {
    const mapConfig = {
      lat: 41.69541155762141,
      lng: -8.846955635438464,
      zoom: 17
    };

    return (
      <Map
        center={[mapConfig.lat, mapConfig.lng]}
        zoom={[mapConfig.zoom]}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup
          ref={(reactFGref) => {
            this._onFeatureGroupReady(reactFGref);
          }}
        >
          <EditControl
            position="topright"
            onEdited={this._onEdited}
            onCreated={this._onCreated}
            onDeleted={this._onDeleted}
            onMounted={this._onMounted}
            onEditStart={this._onEditStart}
            onEditStop={this._onEditStop}
            onDeleteStart={this._onDeleteStart}
            onDeleteStop={this._onDeleteStop}
            draw={{
              rectangle: false,
              circle: false,
              circlemarker: false
            }}
          />
        </FeatureGroup>
      </Map>
    );
  }

  _editableFG = null;

  _onFeatureGroupReady = (reactFGref) => {
    // populate the leaflet FeatureGroup with the geoJson layers

    let leafletGeoJSON = new L.GeoJSON(getPolygonGeoJson().filter(f => f.category == "Escolas" && f.geometry.type=="LineString"));
    let leafletFG = reactFGref.leafletElement;

    leafletGeoJSON.eachLayer((layer) => {
      leafletFG.addLayer(layer);
    });

    // store the ref for future access to content

    this._editableFG = reactFGref;
  };

  _onChange = () => {

    const { onChange } = this.props;

    if (!this._editableFG || !onChange) {
      return;
    }

    const geojsonData = this._editableFG.leafletElement.toGeoJSON();
    onChange(geojsonData);
  };
}

function getCircleGeoJson(){
  return {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [
            -8.848029,
            41.697438
        ]
    }
  };
}

function getPolygonGeoJson() {
  return [
    {
    "category": "Escolas",
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    -8.847332,
                    41.695411
                ],
                [
                    -8.847675,
                    41.695091
                ],
                [
                    -8.84774,
                    41.693993
                ],
                [
                    -8.847439,
                    41.693865
                ],
                [
                    -8.846442,
                    41.693761
                ],
                [
                    -8.846109,
                    41.694033
                ],
                [
                    -8.846045,
                    41.69489
                ],
                [
                    -8.846753,
                    41.695427
                ],
                [
                    -8.847332,
                    41.695411
                ]
            ]
        ]
    }
  },
  {
    
    "category": "Escolas",
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -8.844916,
            41.694819
          ],
          [
            -8.844444,
            41.695059
          ],
          [
            -8.843971,
            41.694587
          ],
          [
            -8.843971,
            41.694411
          ],
          [
            -8.843843,
            41.694291
          ],
          [
            -8.843832,
            41.694058
          ],
          [
            -8.844197,
            41.693994
          ],
          [
            -8.844755,
            41.694323
          ],
          [
            -8.844916,
            41.694819
          ]
        ]
      ]
    }
  },
  {
    "category": "Avenidas",
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [
        -8.847716,
        41.697903
      ]
    }
  },
  {
    "category": "Escolas",
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [
                -8.846281,
                41.6963
            ],
            [
                -8.844039,
                41.695331
            ]
        ]
    }
}
];
}
