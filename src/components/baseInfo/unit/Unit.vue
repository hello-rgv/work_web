<!--
 * @Author: Mr Bean
 * @Date: 2019-05-12 11:23:20
 * @LastEditors: Mr Bean
 * @LastEditTime: 2019-05-14 09:12:49
 * @Description: file content
 -->
<template>
  <div class="unit">
    <Card>
      <p slot="title">
        <Icon type="ios-analytics"/>
        <span>商品单位信息</span>
      </p>

      <Form class="form" inline ref="formUnit" :model="formUnit" :rules="ruleUnit">
        <FormItem class="search-item" prop="name">
          <Input clearable prefix="ios-analytics" v-model="formUnit.name" placeholder="输入商品单位..."/>
        </FormItem>
        <FormItem>
          <Button :type="btn_save_type" icon="md-checkmark" @click="btn_save('formUnit')">保 存</Button>
        </FormItem>
        <FormItem>
          <Button icon="md-close" @click="btn_cancel('formUnit')">取 消</Button>
        </FormItem>
      </Form>
      <Divider dashed size="small"/>
      <Input
        class="search-input"
        suffix="ios-search"
        v-model="searchValue"
        @on-change="db_search"
        placeholder="输入查询参数..."
      />
      <Divider dashed size="small"/>
      <Table
        border
        :columns="table_columns"
        :data="table_data"
        :highlight-row="false"
        :disabled-hover="false"
      >
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 15px"
            @click="action_edit(row)"
          >编辑</Button>
          <Poptip
            confirm
            :title="del_tip_conetnt"
            :transfer="true"
            placement="left"
            @on-ok="table_del_ok(row, index)"
            @on-cancel="table_del_cancel"
          >
            <Button type="error" size="small" @click="action_del(row, index)">删除</Button>
          </Poptip>
        </template>
      </Table>
    </Card>
  </div>
</template>
<script>
var rule_unit = {
  name: [{ required: true, message: "商品单位名称不能空", trigger: "blur" }]
};
export default {
  name: "Unit",
  data() {
    return {
      table_columns: [
        {
          title: "#",
          type: "index",
          align: "center",
          width: 60
        },
        {
          title: "ID",
          key: "id",
          align: "center",
          width: 100
        },
        {
          title: "单位名称",
          slot: "name",
          minWidth: 150
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
          fixed: "right",
          width: 150
        }
      ],
      table_data: [],
      formUnit: {
        id: "",
        name: ""
      },
      ruleUnit: rule_unit,
      searchValue: null,
      del_tip_conetnt: null, 
      is_db_edit: false, // 判断当前状态是 编辑 还是 添加
      btn_save_type: 'primary',
    };
  },
  methods: {
    btn_save: function(form_name) {
      // 提交 数据
      this.$refs[form_name].validate(valid => {
        if (valid) {
          // this.$Message.success('表单验证成功!');
          if (this.is_db_edit) {
            // this.$Message.success('edit');
            this.db_update();
          } else {
            // this.$Message.success('add');
            this.db_add();
          }
          this.is_db_edit = false;
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    },
    btn_cancel: function(form_name) {
      // 清空 form 数据
      this.$refs[form_name].resetFields();
      this.is_db_edit = false;
      this.btn_save_type = 'primary';
    },
    db_add: function() {
      let rqs_data = { name: this.formUnit.name };
      this.axios
        .post(this.Common.API_UNIT_URL + "add", rqs_data)
        .then(response => {
          let status = response["data"]["status"];
          if ((status = "success")) {
            this.$Message.success("数据添加操作成功!");
            this.btn_cancel("formUnit");
          } else {
            let rsp_error_msg = response["data"]["msg"];
            this.$Message.error("数据添加操作失败! \n" + rsp_error_msg);
          }
        })
        .catch(error => {
          this.$Message.error("向服务器请求失败!");
        });
    },
    db_delete: function(unit_id) {
      let rqs_data = {id: unit_id}

      this.axios.post(this.Common.API_UNIT_URL + 'delete', rqs_data)
      .then(response => {
         if (response['data']['status'] = 'success') {
          this.$Message.success("数据删除操作成功!");
          return 'success'
        } else {
            let rsp_error_msg = response["data"]["msg"];
            this.$Message.error("数据删除操作失败! \n" + rsp_error_msg);
            return 'error'
        }
      })
      .catch (error => {
        console.log(error);
        this.$Message.error("向服务器请求失败!");
        return 'error'
      })
    },
    db_update: function() {
      let rqs_data = {
        update_data: this.formUnit
      }

      this.axios.post(this.Common.API_UNIT_URL + 'update', rqs_data)
      .then (response => {
        if (response['data']['status'] = 'success') {

          this.btn_save_type = 'primary';
          this.btn_cancel('formUnit');
          this.$Message.success("数据更新操作成功!");
        } else {
            let rsp_error_msg = response["data"]["msg"];
            this.$Message.error("数据更新操作失败! \n" + rsp_error_msg);
        }
      })
      .catch (error => {
        console.log(error);
        this.$Message.error("向服务器请求失败!");
      })
    },
    db_search: function() {
      let rqs_data = { value: this.searchValue };
      this.axios
        .post(this.Common.API_UNIT_URL + "search", rqs_data)
        .then(response => {
          let status = response["data"]["status"];
          let rsp_data = response["data"]["rsp_data"];
          let tmp_array = null;
          if ((status = "success")) {
            this.table_data.length = 0;
            for (var item in rsp_data) {
              tmp_array = {
                id: rsp_data[item]["id"],
                name: rsp_data[item]["name"]
              };
              this.table_data.push(tmp_array);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    action_del: function(row, index) {
      // table 删除按钮 事件
      // let span = '<span style="color: red;">' + row['name'] + '</span>'
      this.del_tip_conetnt =
        "确定要删除商品单位为 [ " + row["name"] + " ] 的数据吗?";
    },
    action_edit: function(row) {
      this.is_db_edit = true;
      this.btn_save_type = 'warning';
      this.formUnit.id = row['id'];
      this.formUnit.name = row['name'];
    },
    table_del_ok: function(row, index) {
      // table 删除 询问 框 确定 按钮事件
      status = this.db_delete(row['id']);
      if (status = 'success') {
        this.table_data.splice(index, 1);
      }
    },
    table_del_cancel: function() {
      // table 删除 询问 框 取消 按钮事件
    }
  }
};
</script>
<style scoped>
.unit {
  margin-top: 10px;
}
.form {
  margin-top: 30px;
  padding: 0px;
  margin-right: 10px;
}
.search-item {
  width: 50%;
}
</style>


