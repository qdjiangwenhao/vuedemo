<template>
  <div></div>
</template>

<script>
export default {
  name: "axios",
  data() {
    return {};
  },
 
  methods:{
    test(){
      this.$axios.get("https://mock.yonyoucloud.com/mock/19040/techen/getName")
    }
  },
   created () {
    this.test();
  },

};
</script>

<style>

</style>