<template>
  <c-location />
  <c-search-input/>
  <c-promo-banner/>
</template>

<script>
import CPromoBanner from "../components/cPromoBanner.component.vue";
import CSearchInput from "../components/cSearchInput.component.vue";
import CLocation from "../components/cLocation.component.vue";
export default {
  name: "vHomeScreenView",
  components: {
    CLocation,
    CSearchInput,
    CPromoBanner,
  },
}
</script>