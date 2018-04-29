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
        <!-- <div :class="{content_box_hidden: resultShowStatus[index] == 'close', content_box_spread: resultShowStatus[index] == 'open'}"> -->
        <div class="content_box_hidden">
          <div class="text_contain">{{oneResult.textDescribe}}</div>
          <div class="githubsrc_contain">源码传送门： <a :href="oneResult.githubSrc" target="_blank">{{oneResult.githubSrc}}</a></div>
          <!-- 演示视频 -->
          <div class="video_contain" v-show="oneResult.presentationType == 'video'">
            <video @click="showOneModel(index)" :src="oneResult.videosrc" height="100%">
            </video>
          </div>
          <!-- 演示图片 -->
          <div class="images_contain" v-show="oneResult.presentationType == 'image'">
            <img @click="showOneModel(index)" style="height: 100%;" :src="oneResult.imagesrc[0]" alt="">
          </div>

        </div>
        <div class="property_box">
          <div class="property_left">
            <span>{{oneResult.date}}</span>
            <span>浏览量： {{oneResult.browsings}}</span>
          </div>
          <div class="btn background_green" @click="changeShow()">查看全文</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 演示文件详情展示模态框 -->
  <div class="model_box" v-show="showModel" :style="{ width: this.windowClient.width + 'px', height: this.windowClient.height + 'px' }">
    <div class="center_box">
      <div @click="closeModel" class="close_btn">
        <img src="../../static/icons/close.png" class="image_auto" alt="">
      </div>
      <div class="contain_image" v-show="showImgMoudel">
        <div class="pre_next_img">
          <div class="pre_picture" @click="changeNowPic(-1)" id="pre_pic">< 上一张</div>
          <div class="next_picture" @click="changeNowPic(1)" id="next_pic">下一张 ></div>
        </div>
        <div class="just_image">
          <img :src="modulInfor.nowImgSrc" style="height: 100%" alt="">
        </div>
      </div>
      <div class="contain_video" v-show="!showImgMoudel">
        <video :src="modulInfor.videoSrc" height="100%" controls>
          <!-- <source :src="modulInfor.videoSrc"  type="video/mp4"> -->
        </video>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios'
   import qs from 'qs'
  export default {
    data () {
      return {
        windowClient: {},
        showModel: false,
        showImgMoudel: true,
        modulInfor: {
          videoSrc: '',
          imgSrc: [],
          nowImgSrc: '',
          nowImgIndex: 0
        },
        projectTitle: '项目名称项目名称成果展示',
        results: [{
          userName: '1moumoumou Miss',
          userHp: '../../static/images/hp2.png',
          userInfor: '时间很长，没有尽头，只有路口。。。',
          textDescribe: '好与不好都走了，幸与不幸都过了。真正的梦想，永远在实现之中，更在坚持之中。累了，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，痛彻心菲也是精彩。选择一条道路，就选择一种人生一种无悔。阴霾终会荡尽，狞笑终是无聊卑鄙终会沉寂。',
          githubSrc: 'https://www.baidu.com/',
          presentationType: 'video', // image
          videosrc: '../../static/videos/videodemo.mp4',
          imagesrc: [],
          date: '2018-03-19',
          browsings: 38
        },{
          userName: '2moumoumou Miss',
          userHp: '../../static/images/hp1.png',
          userInfor: '时间很长，没有尽头，只有路口。。。',
          textDescribe: '好与不好都走了，幸与不幸都过了。真正的梦想，永远在实现之中，更在坚持之中。累了，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，痛彻心菲也是精彩。选择一条道路，就选择一种人生一种无悔。阴霾终会荡尽，狞笑终是无聊卑鄙终会沉寂。',
          githubSrc: 'http://xxxx//xx/xx//x',
          presentationType: 'image', // image
          imagesrc: ['../../static/images/test1.jpg', '../../static/images/test2.jpg', '../../static/images/test3.jpg'],
          videosrc: '',
          date: '2018-03-19',
          browsings: 38
        }]
      }
    },
    created () {
      // this.getAllProjects();
      this.menun();
    },
    methods: {
      menun () {
        window.scrollTo(0, 0);
      },
      // 通过URL中ID信息来获取该项目的所有成果
      getAllProjects () {
        const self = this;
        axios.post('http://192.168.5.101:8080/goc/project/projectShow', qs.stringify({id: self.GetQueryString('id')}), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
          console.log('项目成果展示 服务器连接成果');
          self.projectTitle = res.data.projectname + '成果展示';
          self.results = res.data.results;
        })
        .catch(function (err) {
          console.log('项目成果展示 服务器连接错误，原因：' + err);
        })
      },
      goBack () {
        window.history.go(-1);
      },
      // 列表展开还是收起控制
      changeShow () {
        let oParent = event.target.parentNode;
        let changedDiv = oParent.previousSibling.previousSibling;
        if (event.target.innerHTML == '查看全文') {
          event.target.innerHTML = '收起全文';
          changedDiv.className = 'content_box_spread';
        } else {
          event.target.innerHTML = '查看全文';
          changedDiv.className = 'content_box_hidden';
        }
      },
      closeModel () {
        this.showModel = false;
      },
      // 点击图片或视频在模态框中展示
        // 如果是图片模态框 需要设置当前显示的图片是图片数组中的第一个
      showOneModel (index) {
        let prePicBtn = document.getElementById('pre_pic');
        if (this.results[index].presentationType == 'video') {
          this.showImgMoudel = false;
          this.modulInfor.videoSrc = this.results[index].videosrc;
        } else {
          this.showImgMoudel = true;
          this.modulInfor.imgSrc = this.results[index].imagesrc;
          this.modulInfor.nowImgSrc = this.modulInfor.imgSrc[0];
          this.modulInfor.nowImgIndex = 0;
          prePicBtn.style.cursor = 'not-allowed';
          prePicBtn.style.background = '#77849573';
        }
        this.showModel = true;
      },
      // 图片演示文件在模态框中翻页
      changeNowPic (num) {
        let prePicBtn = document.getElementById('pre_pic');
        let nextPicBtn = document.getElementById('next_pic');
        if (this.modulInfor.nowImgIndex == 0) {
          if (num == -1) {
            this.modulInfor.nowImgIndex = 0;
          } else {
            this.modulInfor.nowImgIndex += 1;
            prePicBtn.style.cursor = 'pointer';
            prePicBtn.style.background = '#6ABA9C';
          }
        } else if (this.modulInfor.nowImgIndex != 0 && this.modulInfor.nowImgIndex < (this.modulInfor.imgSrc.length - 1)) {
          this.modulInfor.nowImgIndex += num;
        } else {
          if (num == -1) {
            this.modulInfor.nowImgIndex -= 1;
            nextPicBtn.style.cursor = 'pointer';
            nextPicBtn.style.background = '#6ABA9C';
          } else {
            this.modulInfor.nowImgIndex = this.modulInfor.imgSrc.length - 1;
          }
        }
        if (this.modulInfor.nowImgIndex == 0){
          prePicBtn.style.cursor = 'not-allowed';
          prePicBtn.style.background = '#77849573';
        }
        if (this.modulInfor.nowImgIndex == this.modulInfor.imgSrc.length - 1){
          nextPicBtn.style.cursor = 'not-allowed';
          nextPicBtn.style.background = '#77849573';
        }
        this.modulInfor.nowImgSrc = this.modulInfor.imgSrc[this.modulInfor.nowImgIndex];
      },
      GetQueryString(name) {
        let reg = new RegExp('(\\\\?|\\\\&)' + name + '=([^\\\\&]+)');
        let reg2 = new RegExp('([^=]+)$');
        let r = window.location.href.match(reg);
        if (r != null) {
          return r[0].match(reg2)[0];
        } else {
          return null;
        }
      },
      client () {
        if (window.innerHeight !== undefined) {
          return {
            "width": window.innerWidth,
            "height": window.innerHeight
          }
        } else if (document.compatMode === "CSS1Compat") {
          return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
          }
        } else {
          return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
          }
        }
      }
    },
    mounted () {
      this.windowClient = this.client();
      window.addEventListener('scroll', this.menu);
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
  .githubsrc_contain{
    width: 100%;
    line-height: 30px;
    font-size: 15px;
  }
  .githubsrc_contain a{
    color: #6ABA9C;
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
    height: 250px;
    display: flex;
    margin: 20px auto;
    justify-content: center;
    flex-wrap: wrap;
    /* background: rgb(68, 48, 90); */
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
  /* 弹框 */
    .model_box{
      background: rgba(0,0,0,0.7);
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top:0px;
      left: 0px;
      z-index: 10;
    }
  /* .center_box{ */
    /* width: 400px; */
    /* height: 200px; */
    /* background: #fff; */
  /* } */
  .close_btn{
    float: right;
    margin: -30px -30px 0px 0px;
    width: 30px;
    height: 30px;
    /* background: #EA7C5A; */
    cursor: pointer;
  }
  .contain_video{
    height: 500px;
    /* width: 400px; */
    /* background: rgba(0,0,0,0.7); */
  }
  /* .contain_image{ */
    /* height: 500px; */
    /* width: 600px; */
    /* background: #6ABA9C; */
  /* } */
  .pre_next_img{
    width: 184px;
    height: 40px;
    margin: -30px auto 0px;
    /* background: #6ABA9C; */
    display: flex;
    justify-content: space-between;
  }
  .pre_picture, .next_picture{
    padding: 0px 15px;
    text-align: center;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    height: 30px;
    line-height: 35px;
    font-weight: 600;
    
    user-select: none;
  }
  .pre_picture{
    background: #77849573;
    cursor: not-allowed;
  }
  .next_picture{
    background: #6ABA9C;
    cursor: pointer;
  }
  .just_image{
    height: 450px;
  }
</style>
