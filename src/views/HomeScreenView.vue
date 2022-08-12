<template>
  <c-location />
  <c-search-input/>
</template>

<script>

import CSearchInput from "../components/cSearchInput.component.vue";

import CLocation from "../components/cLocation.component.vue";
export default {
  name: "vHomeScreenView",
  components: {
    CLocation,
    CSearchInput,
  },
}
</script>