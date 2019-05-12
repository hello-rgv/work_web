<!--
 * @Author: Mr Bean
 * @Date: 2019-05-11 17:06:46
 * @LastEditors: Mr Bean
 * @LastEditTime: 2019-05-11 17:06:46
 * @Description: file content
 -->
<template>
  <div class="base-info">
    <Goods></Goods>
    <Unit></Unit>
  </div>
</template>
<script>
import Goods from "@/components/baseInfo/goods/Goods";
import Unit from "@/components/baseInfo/unit/Unit";

export default {
  name: "baseInfo",
  components: {
    Goods,
    Unit
  }
};
</script>
<style scoped>
.card-title {
  color: #2d8cf0;
  margin-left: 10px;
}
</style>

