<!--
 * @Author: Mr Bean
 * @Date: 2019-05-11 17:06:46
 * @LastEditors: Mr Bean
 * @LastEditTime: 2019-05-14 10:00:52
 * @Description: file content
 -->
<template>
  <div class="base-info">
    <Row>
      <Col span="24">
        <Goods></Goods>
      </Col>
    </Row>

    <Row :gutter="20">
      <Col span="12">
        <Unit></Unit>
      </Col>
      <Col span="12">
        <Classify></Classify>
      </Col>
    </Row>

    <Row>
      <Col span="24">
        <Customers></Customers>
      </Col>
    </Row>
  </div>
</template>
<script>
import Goods from "@/components/baseInfo/goods/Goods";
import Unit from "@/components/baseInfo/unit/Unit";
import Classify from "@/components/baseInfo/classify/Classify";
import Customers from "@/components/baseInfo/customers/Customers";

export default {
  name: "baseInfo",
  components: {
    Goods,
    Unit,
    Classify,
    Customers
  }
};
</script>
<style scoped>
.card-title {
  color: #2d8cf0;
  margin-left: 10px;
}
</style>

