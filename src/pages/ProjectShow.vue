<template>
<div>
  <div class="box_center">
    <!-- 返回按钮 -->
    <div class="go_back" @click="goBack()">
      <div class="back_icon"><img src="../../static/icons/triangle.png" class="image_auto" alt=""/></div>
      <div class="back_text">返回</div>
    </div>
    <div class="project_box">
      <div class="project_title">{{projectTitle}}</div>
      <div class="one_result" :key="index" v-for="(oneResult, index) in results">
        <div class="user_infor">
          <div class="user_hp">
            <img :src="oneResult.userHp" class="image_auto" alt="">
          </div>
          <div class="user_name">{{oneResult.userName}}</div>
          <div class="user_intro">{{oneResult.userInfor}}</div>
        </div>
        <div :class="{content_box_hidden: resultShowStatus[index] == 'close', content_box_spread: resultShowStatus[index] == 'open'}">
        <!-- <div class="content_box_spread"> -->
          <div class="text_contain">{{oneResult.textDescribe}}</div>
          <!-- 演示视频 -->
          <div class="video_contain" v-show="oneResult.presentationType == 'video'">
            <video height="100%" controls>
                <source :src="oneResult.videosrc"  type="video/mp4">
            </video>
          </div>
          <!-- 演示图片 -->
          <div class="images_contain" v-show="oneResult.presentationType == 'image'">
            <img class="one_img" :src="oneResult.imagesrc[0]" alt="">
          </div>
        </div>
        <div class="property_box">
          <div class="property_left">
            <span>{{oneResult.time}}</span>
            <span>浏览量： {{oneResult.watcher}}</span>
          </div>
          <div class="btn background_green" @click="changeShow('open',index)" v-show="resultShowStatus[index] == 'close'">查看全文</div>
          <div class="btn background_green" @click="changeShow('close',index)" v-show="resultShowStatus[index] == 'open'">收起全文</div>
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
        projectTitle: '项目名称项目名称成果展示',
        results: [{
          userName: '1moumoumou Miss',
          userHp: '../../static/images/hp2.png',
          userInfor: '时间很长，没有尽头，只有路口。。。',
          textDescribe: '好与不好都走了，幸与不幸都过了。真正的梦想，永远在实现之中，更在坚持之中。累了，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，痛彻心菲也是精彩。选择一条道路，就选择一种人生一种无悔。阴霾终会荡尽，狞笑终是无聊卑鄙终会沉寂。',
          presentationType: 'video', // image
          videosrc: '../../static/videos/videodemo.mp4',
          imagesrc: [],
          time: '2018-03-19',
          watcher: 38
        },{
          userName: '2moumoumou Miss',
          userHp: '../../static/images/hp1.png',
          userInfor: '时间很长，没有尽头，只有路口。。。',
          textDescribe: '好与不好都走了，幸与不幸都过了。真正的梦想，永远在实现之中，更在坚持之中。累了，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，痛彻心菲也是精彩。选择一条道路，就选择一种人生一种无悔。阴霾终会荡尽，狞笑终是无聊卑鄙终会沉寂。',
          presentationType: 'image', // image
          imagesrc: ['../../static/images/hp2.png', '../../static/images/hp1.png'],
          videosrc: '',
          time: '2018-03-19',
          watcher: 38
        }],
        resultShowStatus: []
      }
    },
    methods: {
      goBack () {
        window.history.go(-1);
      },
      changeShow (str, index) {
        console.log(this.resultShowStatus);
        this.resultShowStatus[index] = str;
        console.log('jjhhj');
        console.log(this.resultShowStatus);
      }
    },
    mounted () {
      this.clientHeight = `${window.screen.availHeight}`;
      this.clientWidth = `${window.screen.availWidth}`;
      for (let i = 0; i < this.results.length; i++) {
        this.resultShowStatus.push('open');
      }
    }
  }
</script>
<style scoped>
  .image_auto{
    width: 100%;
    height: 100%;
  }
  .box_center{
    /* height: 800px; */
    width: 1000px;
    /* background: skyblue; */
    margin: 0 auto 60px;
  }
  .go_back{
    height: 60px;
    width: 100px;
    /* background: lawngreen; */
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .back_icon{
    height: 25px;
    width: 25px;
    /* background: crimson; */
  }
  .back_icon img{
    transform:rotate(-90deg);
    -ms-transform:rotate(-90deg); 	/* IE 9 */
    -moz-transform:rotate(-90deg); 	/* Firefox */
    -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
    -o-transform:rotate(-90deg); 	/* Opera */
  }
  .back_text{
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    color: #EA7C5A;
  }
  .project_box{
    /* height: 800px; */
    width: 1000px;
    background: #fff;
    padding: 0px 0px 10px;
  }
  .project_title{
    height: 100px;
    width: 90%;
    line-height: 100px;
    margin: 0 auto;
    font-size: 18px;
    /* background: saddlebrown; */
  }
  .one_result{
    /* height: 400px; */
    width: 90%;
    margin: 0px auto 30px;
    background: #F2F2F2;
    padding: 20px 20px;
  }
  .user_infor{
    height: 50px;
    width: 800px;
    /* background: #EA7C5A; */
    display: flex;
    align-items: flex-end;
  }
  .user_hp{
    height: 50px;
    width: 50px;
    margin-right: 15px;
  }
  .user_hp img{
    border-radius: 5px;
  }
  .user_name{
    margin-right: 15px;
    height: 30px;
    line-height: 30px;
    font-weight: 600;
  }
  .user_intro{
    height: 30px;
    line-height: 30px;
    width: 400px;
    /* background: skyblue; */
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    /* color: #bfbfbf; */
  }
  .content_box_hidden{
    height: 90px;
    overflow: hidden;
    margin: 10px 0px;
    position: relative;
  }
  .content_box_hidden::after {
    content:"......";
    font-weight:bold;
    position:absolute;
    bottom:4px;
    right:0;
    padding: 0px 30px 0px 2px;
    background: #F2F2F2;
  }
  .text_contain{
    font-size: 15px;
    line-height: 30px;
  }
  .content_box_spread{
    margin-top: 10px;
  }
  .video_contain{
    height: 250px;
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    /* background: #EA7C5A; */
  }
  .images_contain{
    width: 80%;
    height: 200px;
    display: flex;
    margin: 20px auto;
    justify-content: center;
    flex-wrap: wrap;
    background: rgb(68, 48, 90);
  }
  .one_img{
    height: 200px;
    /* width: 300px; */
    margin-left: 10px;
  }
  .property_box{
    height: 30px;
    line-height: 30px;
    width: 100%;
    /* background: #EA7C5A; */
    display: flex;
    justify-content: space-between;
  }
  .property_left span{
    margin-right: 10px;
    font-size: 14px;
    color: #adadad;
  }
  .btn{
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding: 0px 15px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
  .background_green{
    background: #6ABA9C;
  }
  .background_orange{
    background: #EA7C5A;
  }
</style>
