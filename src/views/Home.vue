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
      let tf = this.Common.test_fun(ss);
      console.log(tf);
    }
  }
};
</script>
