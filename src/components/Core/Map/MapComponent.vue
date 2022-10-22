<template>
  <div id="map" />
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

export default {
  async mounted() {
    this.createMap();
    await this.$nextTick();
    this.resize();
    this.addPopups();
    this.translateMap();
  },
  methods: {
    moveMap(coordinates){
      this.map.flyTo({
        center: coordinates.reverse(),
      })
    },
    updateContent(newContent){
      this.map.getSource('bike_stations').setData(newContent);
    },
    createMap() {
      mapboxgl.accessToken = "pk.eyJ1IjoieWFyb3NsYXYtYXN1IiwiYSI6ImNsNjBheGMwNDFsZjEzZW5xbHJkM2hnejMifQ.CBh1a-ElYBGS_B6QL9ZeVQ";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        minzoom: 1.3,
        center: [37.618423 + 0.635, 55.751244 - 0.07],
        zoom: 9.5
      });

      this.map.on("load", () => {
        this.map.addSource("bike_stations", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        });
        this.map.addLayer({
          id: "bike_stations",
          type: "circle",
          source: "bike_stations",
          minzoom: 9.5,
          paint: {
            "circle-color": 'rgb(178,24,43)',
            "circle-radius": 3,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#ffffff"
          }
        });
        this.map.addLayer(
          {
            'id': 'bike_stations-heat',
            'type': 'heatmap',
            'source': 'bike_stations',
            'maxzoom': 9.5,
            'paint': {
              'heatmap-weight': [
                'interpolate',
                ['linear'],
                ['get', 'Value'],
                0,
                0,
                1000000,
                220
              ],
              'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                1,
                9.5,
                3
              ],
              'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                1,
                'rgb(178,24,43)'
              ],
              'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                2,
                10,
                20
              ],
              'heatmap-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                7,
                1,
                20,
                0
              ]
            }
          },
          'waterway-label'
        );
      });
    },

    translateMap() {
      const language = new MapboxLanguage({
        supportedLanguages: ["ru", "en"]
      });
      this.map.addControl(language);
    },
    addPopups() {
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      this.map.on("mouseenter", "bike_stations", (e) => {
        this.map.getCanvas().style.cursor = "pointer";
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = `
            <p class="popup_title">${this.$t("map.popupTitle")}</p>
            <p>${this.$t("map.stationNumber")}: ${e.features[0].properties.Id}</p>
            <p>${this.$t("map.stationTakesCount")}: ${e.features[0].properties.Value}</p>
           `;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        popup.setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.map);
      });
      this.map.on("mouseleave", "bike_stations", () => {
        this.map.getCanvas().style.cursor = "";
        popup.remove();
      });
    },
    startResizing() {
      // this.resizingInterval = setInterval(() => {
      //   this.map.resize();
      // });
      // this.newCenter([37.618423 , 55.751244])
    },
    stopResizing() {
      // clearInterval(this.resizingInterval);
      // this.newCenter( [37.618423 + 0.635, 55.751244 - 0.07])
    },
    resize() {
      this.map.resize();
    },
    newCenter(coords){
      this.map.flyTo({
        center: coords
      });
    }
  },
  data() {
    return {
      geojsonData: null
    };
  }
};
</script>

<style lang="scss">
#map {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 10;
}
.mapboxgl-popup {
  max-width: 200px;
  border-radius: 7px;
  text-align: left;
}
.popup_title{
  font-size: 16px;
}
</style>
