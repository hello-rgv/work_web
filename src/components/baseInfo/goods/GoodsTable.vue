<template>
  <div class="goods-table">
    <Input class="search-input" suffix="ios-search" v-model="searchValue" placeholder="输入查询参数..." />
    <Table border :columns="table_columns" :data="table_data" :highlight-row="false" :disabled-hover="false">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 15px" @click="action_edit(row)">编辑</Button>
      <Button type="error" size="small" @click="action_del(row, index)">删除</Button>
    </template>
    </Table>

    <!-- 对话框模块 -->
    <Modal
      v-model="editModal"
      title="编辑对话框"
      :mask-closable="false">
      <GoodsForm></GoodsForm>
    </Modal>
  </div>
</template>

<script>
import GoodsForm from "./GoodsForm";
export default {
  name: 'GoodsTable',
  props: {
    isShowActionCol: Boolean,
  },
  components: {
    GoodsForm
  },
  data () {
    return {
      table_columns: [
        {
          title: '#',
          type: 'index',
          align: 'center',
          width: 60
        },
        {
          title: '商品编号',
          key: 'id',
          align: 'center',
          width: 100
        },
        {
          title: '商品名称',
          slot: 'name',
          minWidth: 150
        },
        {
          title: '商品售价',
          key: 'prices',
          width: 150
        },
        {
          title: '规格',
          key: 'specs',
          align: 'center',
          width: 100
        },
        {
          title: '单位',
          key: 'unit',
          align: 'center',
          width: 80
        },
        {
          title: '类别',
          key: 'classify',
          align: 'center',
          width: 100
        }
      ],
      table_col_action: {
        title: '操作',
        slot: 'action',
        align: 'center',
        fixed: 'right',
        width: 150
      },
      table_data: [
        {
          id: '123456',
          name: 'goods name',
          prices: '12345.00',
          specs: '1*10',
          unit: '单位',
          classify: '类别',
        },
        {
          id: '123456',
          name: 'goods name',
          prices: '123456789.00',
          specs: '1*10',
          unit: '单位',
          classify: '类别'
        },
        {
          id: '123456',
          name: 'goods name',
          prices: '123456789.00',
          specs: '1*10',
          unit: '单位',
          classify: '类别'
        }
      ],
      pIsShowActionCol: this.isShowActionCol, // 获取 props isShowActionCol 从父组件传来的值
      searchValue: null,
      editModal: false

    }
  },
  watch: {
    searchValue: function () {
      this.pSearchValue = this.searchValue;
    }
  },
  mounted: function () {
    // this.test();
    this.is_show_action_col();
  },
  methods:{
    test: function () {
      console.log('test functiong run..');
      console.log(this.pIsShowActionCol);
    },
    is_show_action_col: function () {
      // 是否显示表格 action 列
      if (this.pIsShowActionCol) {
        this.table_columns.push(this.table_col_action);
      } else {
        this.table_columns.splice(7, 1);
      }
    },
    action_edit: function (row) {
      /**
       * 表格 action 列， 编辑按钮 click 事件
       * params:
       *  row: 返回 表格 行所有信息
       *  index: 返回 表格 行 索引值
       */
        this.editModal = true;
        this.$emit('goodsEditInfo', row); // 向父组件传送当前编辑行的信息
    },
    action_del: function (row, index) {
      /**
       * 表格 action 列， 删除按钮 click 事件
       * params:
       *  index: 返回 表格 行 索引值
       */
      
      console.log(index);
    }
  }
}
</script>
<style scoped>
  .search-input {
    margin-bottom: 20px;
  }
</style>



