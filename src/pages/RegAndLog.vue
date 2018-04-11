<template>
  <div>
    <div class="nav">
      <div class="nav_center">
        <div class="image_box">
          <img src="../../static/icons/logo.png" alt="" class="image_auto">
        </div>
        <div class="vertical_line"></div>
        <div class="text_disc">
          <router-link to="/indexintro">智学塔</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
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
  .image_auto{
    width: 100%;
    height: 100%;
  }
  .nav{
    height: 60px;
    width: 100%;
    background: #778495;
  }
  .nav_center{
    width: 1000px;
    height: 100%;
    line-height: 60px;
    /* background: salmon; */
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .image_box{
    width: 45px;
    height: 45px;
  }
  .vertical_line{
    width: 2px;
    height: 10px;
    background: #CCCCCC;
    margin: 0px 15px;
    border-radius: 1px;
  }
  .text_disc a{
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
</style>
