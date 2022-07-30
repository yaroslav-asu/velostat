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
    createMap() {
      mapboxgl.accessToken = "pk.eyJ1IjoieWFyb3NsYXYtYXN1IiwiYSI6ImNsNjBheGMwNDFsZjEzZW5xbHJkM2hnejMifQ.CBh1a-ElYBGS_B6QL9ZeVQ";
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        minzoom: 1.3,
        center: [37.618423, 55.751244],
        zoom: 2
      });
      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [37.618423, 55.751244]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [38.618423, 55.751244]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-77.090372, 38.881189]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Ballston Arts & Crafts Market</strong><p>The Ballston Arts & Crafts Market sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-77.111561, 38.882342]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's Seersucker Social bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-77.052477, 38.943951]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Capital Pride Parade</strong><p>The annual Capital Pride Parade makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-77.043444, 38.909664]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist Muhsinah plays the Black Cat (1811 14th Street NW) tonight with Exit Clov and Gods’illa. 9:00 p.m. $12.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-77.031706, 38.914581]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>A Little Night Music</strong><p>The Arlington Players' production of Stephen Sondheim's <em>A Little Night Music</em> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-77.020945, 38.878241]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description":
                "<strong>Truckeroo</strong><p>Truckeroo brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-77.007481, 38.876516]
            }
          }
        ]
      };

      this.map.on("load", () => {
        this.map.addSource("bike_stations", {
          type: "geojson",
          data: geojson
        });
        this.map.addLayer({
          id: "bike_stations",
          type: "circle",
          source: "bike_stations",
          paint: {
            "circle-color": "#4264fb",
            "circle-radius": 6,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff"
          }
        });
      });


    },
    translateMap() {
      console.log(this.$q.lang.getLocale());
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
        const description = e.features[0].properties.description;
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
      this.resizingInterval = setInterval(() => {
        this.map.resize();
      });
    },
    stopResizing() {
      clearInterval(this.resizingInterval);
    },
    resize() {
      this.map.resize();
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 100%;
}

.marker {
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
}
.mapboxgl-popup {
  max-width: 200px;
  border-radius: 7px;

}

</style>
