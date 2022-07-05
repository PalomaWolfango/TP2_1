/*==============================================
                    POLYGON
================================================*/
var polygonData = L.geoJSON(polygonJson, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>Name: </b>` + feature.properties.category)
    },
    style: {
        fillColor: 'red',
        fillOpacity: 1,
        color: '#c0c0c0',
    }
}).addTo(map);