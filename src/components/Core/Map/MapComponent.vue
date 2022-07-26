<template>
  <div id="map" />
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  mounted() {
    this.createMap();
  },
  methods: {
    createMap: function() {
      mapboxgl.accessToken = "pk.eyJ1IjoieWFyb3NsYXYtYXN1IiwiYSI6ImNsNjBheGMwNDFsZjEzZW5xbHJkM2hnejMifQ.CBh1a-ElYBGS_B6QL9ZeVQ";
      this.map = new mapboxgl.Map({
        container: "map",
        options: {
          language: "auto"
        },
        style: "mapbox://styles/mapbox/streets-v11",
        minzoom: 1.3,
        center: [37.618423, 55.751244],
        zoom: 5
      });
      const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.032, 38.913]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.414, 37.776]
            },
            properties: {
              title: 'Mapbox',
              description: 'San Francisco, California'
            }
          }
        ]
      };
      for (const feature of geojson.features) {
        // create a HTML element for each feature
        // const el = h('div')

        const el = document.createElement('div');
        // console.log(el)
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(this.map);
      }
    }
  },
  data(){
    return {

    }
  }
};
</script>

<style lang="scss">
#map{
  width: 100vw;
  height: 100vh;
}

.marker {
  background-color: blue;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background-color: red;
   }
}
</style>