<template>
  <div class="">
    <div id='map'></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  mounted() {
    this.createMap()
  },
  methods: {
    createMap: function () {
      mapboxgl.accessToken = 'pk.eyJ1IjoieWFyb3NsYXYtYXN1IiwiYSI6ImNsNjBheGMwNDFsZjEzZW5xbHJkM2hnejMifQ.CBh1a-ElYBGS_B6QL9ZeVQ'
      this.map = new mapboxgl.Map({
        container: 'map',
        options: {
          language: 'auto',
        },
        style: 'mapbox://styles/mapbox/streets-v11',
        minzoom: 1.3,
        center: [37.618423,55.751244],
        zoom: 16
      })
      // for (const feature of geojson.features) {
      //   // create a HTML element for each feature
      //   const el = document.createElement('div');
      //   el.className = 'marker';
      //
      //   // make a marker for each feature and add to the map
      //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(this.map);
      // }
    }
  }
}
</script>

<style>
#map{
  height: 500px;
  width: 500px;
}
/*.marker {*/
/*  background-color: red;*/
/*  width: 1%;*/
/*  height: 1%;*/
/*  border-radius: 50%;*/
/*  cursor: pointer;*/
/*}*/
</style>
