<template>
  <CCategoryHeader>Exclusive Offer</CCategoryHeader>
  <br>
  <br>
  <br>
  <c-product-item product-name="test2"  />
</template>
<script>


import CCategoryHeader from "./cCategoryHeader.component.vue";
import CProductItem from "./cProductItem.component.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default{
  name: "CItemsCategory",
  components: {
    CProductItem,
    CCategoryHeader,
  },
  props: {
    products:{
      type: Object,
      required: true,
    },
  },
};

</script>