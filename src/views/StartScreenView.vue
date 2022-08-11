<template>
  <div>
    <c-logo-name />
  </div>
</template>

<script>
import cLogoName from "../components/cLogoName.component.vue";
import { useRouter } from "vue-router/dist/vue-router";

export default {
  name: "vStartScreenView",
  components: {
    cLogoName,
  },
  setup() {
    const { push } = useRouter();

    const changeView = () => {
      setTimeout(() => {
        push("/home");
      }, 2000);
    };

    changeView();
  },
}


</script>