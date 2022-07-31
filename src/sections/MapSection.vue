<template>
  <section class="site_section flex justify-between" id="map_section">
    <div class="limiter flex justify-between">
      <div class="half_wrapper site_section__half_wrapper">
        <ResizableComponent
          class="half_wrapper__resizable_component"
          :resizable-styles="{borderRadius: '20px'}"
          @startResizing="$refs.mapComponent.startResizing()"
          @endResizing="$refs.mapComponent.stopResizing()"
          v-model="isMapFullscreen"
        >
          <MapComponent ref="mapComponent"/>
          <MapMenu
            class="resizable_component__map_menu"

            v-if="isMapFullscreen"
          />
        </ResizableComponent>
      </div>
      <div class="half_wrapper site_section__half_wrapper">
        <h2 class="highlight">
          {{ $t("mapSection.title") }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import MapComponent from "components/Core/Map/MapComponent";
import ResizableComponent from "components/Core/Resizable/ResizableComponent";
import MapMenu from "components/Core/MapMenu/MapMenu";

export default {
  name: "MapSection",
  components: {
    ResizableComponent,
    MapComponent,
    MapMenu
  },
  methods: {
    startMapResizing(){
      console.log('a')
    }
  },
  data(){
    return {
      isMapFullscreen: false,
    }
  },
};
</script>

<style lang="scss" scoped>
.site_section__half_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
}

.half_wrapper__resizable_component {
  max-width: 560px;
  max-height: 686px;
}

.resizable_component__map_menu {
  bottom: 35px;
  left: 8px;
}
</style>
