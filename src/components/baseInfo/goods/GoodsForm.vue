<template>
  <div class="goods-form">
    <Form ref="formGoods" :model="formGoods" :rules="ruleGoods">
      <FormItem label="商品编号" prop="id">
        <Input v-model="formGoods.id" placeholder="商品编号.."/>
      </FormItem>

      <FormItem label="商品名称" prop="name">
        <Input v-model="formGoods.name" placeholder="商品名称.."/>
      </FormItem>

      <FormItem label="商品规格" prop="specs">
        <Input v-model="formGoods.specs" placeholder="商品规格.."/>
      </FormItem>

      <FormItem label="商品售价" prop="prices">
        <Input v-model="formGoods.prices" placeholder="商品售价.."/>
      </FormItem>

      <FormItem label="销售单位" prop="unit">
        <Select v-model="formGoods.unit">
          <Option value="条">条</Option>
          <Option value="件">件</Option>
        </Select>
      </FormItem>

      <FormItem label="商品分类" prop="classify">
        <Select v-model="formGoods.classify">
          <Option value="香烟">香烟</Option>
          <Option value="饮料">饮料</Option>
        </Select>
      </FormItem>

      <FormItem>
        <Row type="flex" justify="end">
          <Col span="12">
            <Button type="primary" icon="md-checkmark" @click="btn_save('formGoods')">保 存</Button>
          </Col>
          <Col span="12">
            <Button icon="md-close" @click="form_reset('formGoods')">取 消</Button>
          </Col>
        </Row>
      </FormItem>
    </Form>
  </div>
</template>
<script>
var rule_goods = {
  id: [{ required: true, message: "商品编号不能空", trigger: "blur" }],
  name: [{ required: true, message: "商品名称不能空", trigger: "blur" }],
  specs: [{ required: true, message: "规格不能空", trigger: "blur" }],
  prices: [
    { required: true, message: "售价不能空", trigger: "blur" },
    {
      message: "只能输入是数字或带小数点的数字",
      pattern: /^[1-9]\d*\,\d*|[1-9]\d*$/,
      trigger: "change"
    }
  ],
  unit: [{ required: true, message: "还没有选择单位", trigger: "change" }],
  classify: [{ required: true, message: "还没有选择类型", trigger: "change" }]
};
export default {
  name: "GoodsForm",
  data() {
    return {
      formGoods: {
        id: "",
        name: "",
        specs: "",
        prices: "",
        unit: "",
        classify: ""
      },
      ruleGoods: rule_goods
    };
  }
};
</script>

