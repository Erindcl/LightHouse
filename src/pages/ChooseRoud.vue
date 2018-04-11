<template>
  <div>
    <div class="center_box">
      <div class="show_step">
        <div class="step_center_box">
          <div class="now_step"><span>1</span></div>
          <div class="other_step"><span>2</span></div>
          <div class="other_step"><span>3</span></div>
          <div class="other_step"><span>4</span></div>
        </div>
      </div>
      <div class="step_content">
        <div class="step_title">请选择学习类型</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>
<style scoped>
  .center_box{
    height: 500px;
    width: 1000px;
    margin: 0px auto;
  }
  .show_step{
    /* background: lightblue; */
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .step_center_box{
    height: 50px;
    width: 200px;
    /* background: rgb(231, 110, 195); */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .now_step{
    height: 25px;
    width: 25px;
    border: 2px solid #EA7C5A;
    color: #EA7C5A;
    line-height: 25px;
    text-align: center;
    border-radius: 50%;
  }
  .other_step{
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #EA7C5A;
    color: #EA7C5A;
    font-size: 5px;
    text-align: center;
  }
  .step_content{
    height: 500px;
    width: 100%;
    background: seashell;
  }
  .step_title{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
</style>
