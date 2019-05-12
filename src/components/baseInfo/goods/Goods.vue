<!--
 * @Author: Mr Bean
 * @Date: 2019-05-11 17:05:47
 * @LastEditors: Mr Bean
 * @LastEditTime: 2019-05-12 11:12:19
 * @Description: file content
 -->
<template>
  <div class="goods">
    <Card>
      <p slot="title">
        <Icon type="ios-boat"/>
        <span class="card-title">商品信息</span>
      </p>
      <Row :gutter="20">
        <Col span="6">
          <GoodsForm></GoodsForm>
        </Col>
        <Col span="18">
          <GoodsTable :isShowActionCol="showGoodsTableAction" @goodsEditInfo="getGoodsEditInfo"></GoodsTable>
        </Col>
      </Row>
    </Card>
  </div>
</template>
<script>
import GoodsTable from "./GoodsTable";
import GoodsForm from "./GoodsForm";
export default {
  name: "Goods",
  components: {
    GoodsTable,
    GoodsForm
  },
  data () {
    return {
      showGoodsTableAction: true, // 是否显示GoodsTable 表格 action 列
      goodsEditInfo: null, // 储存 子组件 GoodsTable 里的 Table 点击编辑按钮时的行信息
    }
  },
  watch: {
    goodsEditInfo: function () {
      // console.log(this.goodsEditInfo);
      this.test();
    }
  },
  methods: {
    getGoodsEditInfo: function (row) {
      /**
       * 获取 子组件 GoodsTable 里的 Table 点击编辑按钮时的行信息，并填充到GoodsForm
       * params:
       *  row: 行信息
       */
      this.goodsEditInfo = row;
    },
    test: function() {
      console.log('ajajajjaajjaja')
    }
  }
};
</script>
<style scoped>
</style>

