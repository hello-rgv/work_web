<!--
 * @Author: Mr Bean
 * @Date: 2019-05-11 16:43:17
 * @LastEditors: Mr Bean
 * @LastEditTime: 2019-05-12 10:36:32
 * @Description: file content
 -->
<template>
  <div class="home">
    <h1>Page Home</h1>
    <button @click="test">click</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    test: function () {
      console.log(this.Common.BASE_URL);
      console.log(this.Common.API_GOODS_URL);
      let ss = 'ajajajaja';
      // this.axios.get(this.Common.BASE_URL)
      // .then(function (response) {
      //   console.log(response)
      // })
    }
  }
};
</script>
