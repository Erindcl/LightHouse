<template>
  <div>
    <div class="nav">
      <div class="nav_center">
        <div class="image_box">
          <img src="../../static/icons/logo.png" alt="" class="image_auto">
        </div>
        <div class="nav_text">
          <div class="link_box_left">
            <div :class="{one_link: true, border_none: !isShowIndex, border_color: isShowIndex}" @click="changeShowIndex('index')">
              <router-link to="/comshow/indexuser">首页</router-link>
            </div>
            <div :class="{one_link: true, border_none: !isShowResource, border_color: isShowResource}" @click="changeShowIndex('resources')">
              <router-link to="/comshow/resources">资源区</router-link>
            </div>
          </div>
          <div class="link_box_right">
            <div class="one_link" style="width: 40px; height:40px; border: 4px solid rgba(0,0,0,0);">
              <router-link to="##">
                <img src="../../static/icons/phoneBig.png" alt="" class="image_auto">
              </router-link>
            </div>
            <div class="one_link" style="width: 50px; height:50px; border: 4px solid rgba(0,0,0,0);">
              <router-link to="/comshow/personal">
                <img :src="userHp" alt="用户头像" class="image_auto" style="border-radius: 25px;" @click="changeShowIndex('person')">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="footer_center">
        <div class="fc_left">
          联系我们：
        </div>
        <div class="fc_right">
          <div class="one_contact">
            <img src="../../static/icons/qq.png" alt="">
            <span>985718715</span>
          </div>
          <div class="one_contact">
            <img src="../../static/icons/weixin.png" alt="">
            <span>zhixinta2018</span>
          </div>
          <div class="one_contact">
            <img src="../../static/icons/email.png" alt="">
            <span>zhxinta2018@163.com</span>
          </div>
          <div class="one_contact">
            <img src="../../static/icons/weibo.png" alt="">
            <span>zhixintaguanbo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userHp: '../../static/images/hp1.png',
        isShowIndex: true,
        isShowResource: false
      }
    },
    methods: {
      changeShowIndex (str) {
        if (str == 'index') {
          this.isShowIndex = true;
          this.isShowResource = false;
        } else if (str == 'resources') {
          this.isShowIndex = false;
          this.isShowResource = true;
        } else {
          this.isShowIndex = false;
          this.isShowResource = false;
        }
      }
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
    justify-content: space-between;
  }
  .image_box{
    width: 45px;
    height: 45px;
  }
  .nav_text{
    width: 930px;
    height: 100%;
    /* background: salmon; */
    display: flex;
    justify-content: space-between;
  }
  .link_box_left{
    width: 300px;
    height: 100%;
    /* background: rgb(199, 188, 31); */
    display: flex;
  }
  .link_box_right{
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .one_link{
    height: 52px;
    line-height: 52px;
    margin: 0px 20px 0px 0px;
  }
  .border_none{
    border: 4px solid rgba(0,0,0,0);
  }
  .border_color{
    border-top: 4px solid #EA7C5A;
    border-left: 4px solid rgba(0,0,0,0);
    border-right: 4px solid rgba(0,0,0,0);
    border-bottom: 4px solid rgba(0,0,0,0);
  }
  .one_link a{
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
  .footer{
    width: 100%;
    height: 150px;
    background: #778495;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer_center{
    width: 1000px;
    height: 100px;
    display: flex;
    justify-content: space-between;
  }
  .fc_left{
    /* background: salmon; */
    font-size: 18px;
    color: #fff;
    width: 100px;
    height: 50px;
    font-weight: bold;
    line-height: 50px;
  }
  .fc_right{
    width: 850px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .one_contact{
    width: 400px;
    height: 50px;
    line-height: 50px;
  }
  .one_contact img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .one_contact span{
    color: #fff;
    margin-left: 10px;
  }
</style>
