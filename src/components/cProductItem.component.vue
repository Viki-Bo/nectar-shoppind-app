<template>
 <div>test {{productName}}</div>
</template>

<script>
export default{
  name: "cProductItem",
  props:{
    productName:{
      type: String,
    },
  },
};
</script>
