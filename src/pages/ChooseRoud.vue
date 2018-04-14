<template>
  <div>
    <div class="bgimg_box"><img class="imgauto" src="../../static/images/roadBg.jpg" alt=""></div>
    <div class="choose_roud_title">路线参数选择</div>
    <div class="show_step">
      <div class="step_center_box">
        <div class="step_style bgcolor_green">1</div>
        <div class="step_line bgcolor_grey"></div>
        <div class="step_style bgcolor_grey">2</div>
        <div class="step_line bgcolor_grey"></div>
        <div class="step_style bgcolor_grey">3</div>
      </div>
      <div class="step_text_desc">
        <span class="color_green">选择路线类别</span>
        <span class="color_grey">选择已学知识</span>
        <span class="color_grey">选择想学知识</span>
      </div>
    </div>
    <div class="step_content">
      <!-- 第一步 -->
      <div class="content_center_box" v-show="nowStepNum == 1">
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习类别</div>
        </div>
        <div class="learn_classes">
          <div class="one_learn_class bgcolor_grey color_white">
            <div class="one_class_name">前端开发</div>
            <div class="one_class_descr">前端开发，是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，现在最新的高级版本HTML5、CSS3，以及SVG等。</div>
          </div>
          <div class="one_learn_class color_grey">
            <div class="one_class_name">后台开发</div>
            <div class="one_class_descr">后台开发，后台就是通过一个做好的页面程序可以填加更新网站内容，在网站的页面上(也就是前台)显示。</div>
          </div>
          <div class="one_learn_class color_grey">
            <div class="one_class_name">移动端开发</div>
            <div class="one_class_descr">移动端开发，是指与服务器相对应，为客户提供本地服务的程序。一般安装在普通的客户机上，需要与服务端互相配合运行。</div>
          </div>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习方向</div>
        </div>
        <div class="learn_direct">
          <div class="one_learn_direct bgcolor_grey color_white">
            <div class="one_direct_name">Web前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
          <div style="margin-top: 20px;" class="one_learn_direct color_grey">
            <div class="one_direct_name">移动前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
          <div style="margin-top: 20px;" class="one_learn_direct color_grey">
            <div class="one_direct_name">全栈前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
        </div>
      </div>
      <!-- 第二步 -->
      <div class="content_center_box" v-show="nowStepNum == 2">
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习类别</div>
        </div>
        <div class="knowledge_list">
          <span class="color_white bgcolor_grey">文本标签</span>
          <span class="color_white bgcolor_grey">文本标签</span>
          <span class="color_white bgcolor_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_white bgcolor_grey">文本标签</span>
          <span class="color_white bgcolor_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
          <span class="color_grey">文本标签</span>
        </div>
      </div>
    </div>
    <!-- 往前一步（后） -->
    <div class="page_btn_contain">
      <div class="page_btn_center">
        <div class="next_step_btn bgcolor_orange">
          <div class="btn_icon_box">
            <img class="imgauto" src="../../static/icons/right.png" alt="">
          </div>
        </div>
        <div class="pre_step_btn bgcolor_greyness">
          <div class="btn_icon_box">
            <img class="imgauto" src="../../static/icons/left.png" alt="">
          </div>
        </div>
      </div>
    </div>
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
        nowStepNum: 2
      }
    },
    methods: {
      
    }
  }
</script>
<style scoped>
  .imgauto{
    width: 100%;
    height: 100%;
  }
  .bgimg_box{
    height: 200px;
    width: 100%;
  }
  .choose_roud_title{
    width: 1000px;
    height: 70px;
    text-align: center;
    color: #778495;
    font-weight: 600;
    font-size: 22px;
    margin: -70px auto 0px;
  }
  .show_step{
    background: #fff;
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .step_text_desc{
    width: 450px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .step_center_box{
    height: 45px;
    display: flex;
  }
  .step_style{
    height: 35px;
    width: 35px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    border-radius: 50%;
    font-weight: 600;
  }
  .step_line{
    width: 150px;
    height: 3px;
    margin: 16px 0px 0px;
  }
  .bgcolor_grey{
    background: #778495;
  }
  .bgcolor_green{
    background: #6ABA9C;
  }
  .color_grey{
    color: #778495;
  }
  .color_green{
    color: #6ABA9C;
  }
  .color_white{
    color: #fff;
  }
  .step_content{
    /* height: 500px; */
    width: 100%;
    background: #f2f2f2;
  }
  .step_title{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
  .content_center_box{
    width: 1000px;
    margin: 0px auto;
    /* height: 500px; */
    /* display: flex; */
    padding: 30px 0px;
    /* background: skyblue; */
  }
  .infor_title{
    height: 20px;
    line-height: 20px;
    width: 300px;
    display: flex;
    font-size: 18px;
    color: #778495;
    /* background: lightgray; */
  }
  .vertical_line{
    height: 20px;
    width: 3px;
    background: #EA7C5A;
    margin-right: 10px;
  }
  .learn_classes{
    /* height: 200px; */
    width: 100%;
    margin: 30px 0px;
    /* background: lightblue; */
    display: flex;
    justify-content: space-around;
  }
  .one_learn_class{
    height: 280px;
    width: 250px;
    border-radius: 4px;
  }
  .one_class_name{
    height: 100px;
    width: 100%;
    line-height: 120px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  .one_class_descr{
    /* height: 200px; */
    width: 80%;
    margin: 0px auto;
    font-size: 14px;
    line-height: 26px;
  }
  .learn_direct{
    width: 100%;
    margin: 30px 0px;
    /* background: lightblue; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .one_learn_direct{
    /* height: 200px; */
    width: 91.5%;
    border-radius: 4px;
    display: flex;
    padding: 30px 0px;
    justify-content: center;
    align-items: center;
  }
  .one_direct_name{
    height: 20px;
    line-height: 20px;
    font-size: 17px;
    font-weight: 600;
  }
  .one_direct_descr{
    font-size: 14px;
    line-height: 26px;
    width: 600px;
    margin-left: 60px;
  }

  /* 下一步上一步按钮 */
  .page_btn_contain{
    width: 100%;
    height: 180px;
    background: #fff;
  }
  .page_btn_center{
    width: 1000px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .pre_step_btn, .next_step_btn{
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .pre_step_btn{
    margin-right: 20px;
  }
  .next_step_btn{
    margin-right: 45px;
  }
  .btn_icon_box{
    width: 20px;
    height: 20px;
  }
  .bgcolor_greyness{
    background: #7784957a;
  }
  .bgcolor_orange{
    background: #EA7C5A;
  }
  /* 第二步 */
  .knowledge_list{
    width: 96%;
    margin: 20px auto;
    height: 100px;
    /* background: #6ABA9C; */
  }
  .knowledge_list span{
    display: inline-block;
    padding: 6px 10px;
    font-size: 14px;
    margin: 0px 10px 10px 0px;
    /* background: #778495; */
    border-radius: 3px;
    cursor: pointer;
    /* font-weight: 300; */
  }













  /* 底部样式 */
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
