<template>
  <div>
  123123
  </div>
</template>
<script>
  import store from 'src/stores/OrderStore';
  export default {
    route: {
      data (transition) {
        this.$parent.selected = '1';
        store.testAjax().then(response=>{

        }).catch((ex)=>{
          alert("数据异常", JSON.stringify(ex.statusText))
        }).finally(()=>{
        });
      }
    },
    methods: {
    }
  }
</script>
