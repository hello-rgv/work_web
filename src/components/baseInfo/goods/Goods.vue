<template>
  <div class="goods">
    <Card>
      <p slot="title">
        <Icon type="ios-boat"/>
        <span class="card-title">商品信息</span>
      </p>
      <Row>
        <!-- <Col span="6"></Col> -->
        <!-- <Col span="18"> -->
          <GoodsTable :isShowActionCol="showGoodsTableAction" @goodsEditInfo="getGoodsEditInfo" :searchValue="goodsSearchValue"></GoodsTable>
        <!-- </Col> -->
      </Row>
    </Card>
  </div>
</template>
<script>
import GoodsTable from "./GoodsTable";
export default {
  name: "Goods",
  components: {
    GoodsTable
  },
  data () {
    return {
      showGoodsTableAction: true, // 是否显示GoodsTable 表格 action 列
      goodsEditInfo: null, // 储存 子组件 GoodsTable 里的 Table 点击编辑按钮时的行信息
      goodsSearchValue: null, 
    }
  },
  watch: {
    goodsEditInfo: function () {
      console.log(this.goodsEditInfo);
    }
  },
  methods: {
    getGoodsEditInfo: function (row) {
      /**
       * 获取 子组件 GoodsTable 里的 Table 点击编辑按钮时的行信息
       * params:
       *  row: 行信息
       */
      this.goodsEditInfo = row;
    },
  }
};
</script>
<style scoped>
</style>

