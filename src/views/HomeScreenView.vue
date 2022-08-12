<template>
  <c-items-category :products="getExclusiveOfferData"/>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import CItemsCategory from "../components/cItemsCategory.component.vue";

export default {
  name: "vHomeScreenView",
  components: {
    CItemsCategory,
  },

  setup(){
    const store = useStore();
    const getExclusiveOfferData = computed( () => store.state.ExclusiveOfferData);

    onMounted(() => {
      store.dispatch("fetchData");
    });

    return{
      getExclusiveOfferData,
    }
  },
};
</script>