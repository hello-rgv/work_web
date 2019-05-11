<template>
  <div class="home">
    <BaseInfo></BaseInfo>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import BaseInfo from "./BaseInfo"

export default {
  name: "home",
  components: {
    BaseInfo
  }
};
</script>
