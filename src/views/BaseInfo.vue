<template>
  <div class="base-info">
    <Goods></Goods>
  </div>
</template>
<script>
import Goods from "@/components/baseInfo/goods/Goods";
export default {
  name: "baseInfo",
  components: {
    Goods
  }
};
</script>
<style scoped>
.card-title {
  color: #2d8cf0;
  margin-left: 10px;
}
</style>

