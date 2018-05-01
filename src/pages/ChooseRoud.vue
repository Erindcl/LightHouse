<template>
  <div>
    <div class="bgimg_box"><img class="imgauto" src="../../static/images/roadBg.jpg" alt=""></div>
    <div class="choose_roud_title">路线参数选择</div>
    <div class="show_step">
      <div class="step_center_box">
        <div class="step_style bgcolor_green">1</div>
        <div :class="{step_line: true, bgcolor_grey: nowStepNum == 0, bgcolor_green: nowStepNum != 0}"></div>
        <div :class="{step_style: true, bgcolor_grey: nowStepNum == 0, bgcolor_green: nowStepNum != 0}">2</div>
        <div :class="{step_line: true, bgcolor_grey: nowStepNum != 2, bgcolor_green: nowStepNum == 2}"></div>
        <div :class="{step_style: true, bgcolor_grey: nowStepNum 
        != 2, bgcolor_green: nowStepNum == 2}">3</div>
      </div>
      <div class="step_text_desc">
        <span class="color_green">选择路线类别</span>
        <span :class="{color_grey: nowStepNum == 0, color_green: nowStepNum != 0}">编程基础和学习能力评估</span>
        <span :class="{color_grey: nowStepNum != 2, color_green: nowStepNum == 2}">学习意向定义</span>
      </div>
    </div>
    <div class="step_content">
      <!-- 第一步 -->
      <div class="content_center_box" v-show="nowStepNum == 0">
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习类别</div>
        </div>
        <div class="learn_classes">
          <div :class="{one_learn_class: true, bgcolor_grey: fsQ1 == '前端', color_white: fsQ1 == '前端',color_grey: fsQ1 != '前端'}" @click="saveparameter(1,1,'前端')">
            <div class="one_class_name">前端开发</div>
            <div class="one_class_descr">前端开发，是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，现在最新的高级版本HTML5、CSS3，以及SVG等。</div>
          </div>
          <div :class="{one_learn_class: true, bgcolor_grey: fsQ1 == '后台', color_white: fsQ1 == '后台',color_grey: fsQ1 != '后台'}" @click="saveparameter(1,1,'后台')">
            <div class="one_class_name">后台开发</div>
            <div class="one_class_descr">后台开发，后台就是通过一个做好的页面程序可以填加更新网站内容，在网站的页面上(也就是前台)显示。</div>
          </div>
          <div :class="{one_learn_class: true, bgcolor_grey: fsQ1 == '移动', color_white: fsQ1 == '移动',color_grey: fsQ1 != '移动'}" @click="saveparameter(1,1,'移动')">
            <div class="one_class_name">移动端开发</div>
            <div class="one_class_descr">移动端开发，是指与服务器相对应，为客户提供本地服务的程序。一般安装在普通的客户机上，需要与服务端互相配合运行。</div>
          </div>
        </div>
        <div class="infor_title" v-show="fsQ1 == '前端'">
          <div class="vertical_line"></div>
          <div>学习方向</div>
        </div>
        <div class="learn_direct" v-show="fsQ1 == '前端'">
          <div :class="{one_learn_direct: true, bgcolor_grey: fsQ2 == 'web前端', color_white: fsQ2 == 'web前端',color_grey: fsQ2 != 'web前端'}" @click="saveparameter(1,2,'web前端')">
            <div class="one_direct_name">Web前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
          <div style="margin-top: 20px;" :class="{one_learn_direct: true, bgcolor_grey: fsQ2 == '移动前端', color_white: fsQ2 == '移动前端',color_grey: fsQ2 != '移动前端'}" @click="saveparameter(1,2,'移动前端')">
            <div class="one_direct_name">移动前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
          <div style="margin-top: 20px;" :class="{one_learn_direct: true, bgcolor_grey: fsQ2 == '全栈前端', color_white: fsQ2 == '全栈前端',color_grey: fsQ2 != '全栈前端'}" @click="saveparameter(1,2,'全栈前端')">
            <div class="one_direct_name">全栈前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
        </div>
      </div>
      <!-- 第二步 -->
      <div class="content_center_box" v-show="nowStepNum == 1">
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>对编程语言学习感到？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQ1 == '轻松', bgcolor_grey: ssQ1 == '轻松', color_grey: ssQ1 != '轻松'}" @click="saveparameter(2,1,'轻松')">轻松</span>
          <span :class="{color_white: ssQ1 == '不困难', bgcolor_grey: ssQ1 == '不困难', color_grey: ssQ1 != '不困难'}" @click="saveparameter(2,1,'不困难')">不困难</span>
          <span :class="{color_white: ssQ1 == '较困难', bgcolor_grey: ssQ1 == '较困难', color_grey: ssQ1 != '较困难'}" @click="saveparameter(2,1,'较困难')">较困难</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>目前的编程水平？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQ2 == '没有了解过编程', bgcolor_grey: ssQ2 == '没有了解过编程', color_grey: ssQ2 != '没有了解过编程'}" @click="saveparameter(2,2,'没有了解过编程')">没有了解过编程</span>
          <span :class="{color_white: ssQ2 == '有编程基础', bgcolor_grey: ssQ2 == '有编程基础', color_grey: ssQ2 != '有编程基础'}" @click="saveparameter(2,2,'有编程基础')">有编程基础</span>
          <span :class="{color_white: ssQ2 == '有过大量实践', bgcolor_grey: ssQ2 == '有过大量实践', color_grey: ssQ2 != '有过大量实践'}" @click="saveparameter(2,2,'有过大量实践')">有过大量实践</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>一小时内专注学习占比？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQ3 == '100%-80%', bgcolor_grey: ssQ3 == '100%-80%', color_grey: ssQ3 != '100%-80%'}" @click="saveparameter(2,3,'100%-80%')">100%-80%</span>
          <span :class="{color_white: ssQ3 == '80%-60%', bgcolor_grey: ssQ3 == '80%-60%', color_grey: ssQ3 != '80%-60%'}" @click="saveparameter(2,3,'80%-60%')">80%-60%</span>
          <span :class="{color_white: ssQ3 == '60%-40%', bgcolor_grey: ssQ3 == '60%-40%', color_grey: ssQ3 != '60%-40%'}" @click="saveparameter(2,3,'60%-40%')">60%-40%</span>
          <span :class="{color_white: ssQ3 == '40%以下', bgcolor_grey: ssQ3 == '40%以下', color_grey: ssQ3 != '40%以下'}" @click="saveparameter(2,3,'40%以下')">40%以下</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>对新知识的理解能力？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQ4 == '较强', bgcolor_grey: ssQ4 == '较强', color_grey: ssQ4 != '较强'}" @click="saveparameter(2,4,'较强')">较强</span>
          <span :class="{color_white: ssQ4 == '一般', bgcolor_grey: ssQ4 == '一般', color_grey: ssQ4 != '一般'}" @click="saveparameter(2,4,'一般')">一般</span>
          <span :class="{color_white: ssQ4 == '较差', bgcolor_grey: ssQ4 == '较差', color_grey: ssQ4 != '较差'}" @click="saveparameter(2,4,'较差')">较差</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>对新知识的运用？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQ5 == '较强', bgcolor_grey: ssQ5 == '较强', color_grey: ssQ5 != '较强'}" @click="saveparameter(2,5,'较强')">较强</span>
          <span :class="{color_white: ssQ5 == '一般', bgcolor_grey: ssQ5 == '一般', color_grey: ssQ5 != '一般'}" @click="saveparameter(2,5,'一般')">一般</span>
          <span :class="{color_white: ssQ5 == '较差', bgcolor_grey: ssQ5 == '较差', color_grey: ssQ5 != '较差'}" @click="saveparameter(2,5,'较差')">较差</span>
        </div>
      </div>
      <!-- 第三步 -->
      <div class="content_center_box" v-show="nowStepNum == 2">
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习这门技术的原因？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQ1 == '感兴趣，简单了解一下', bgcolor_grey: tsQ1 == '感兴趣，简单了解一下', color_grey: tsQ1 != '感兴趣，简单了解一下'}" @click="saveparameter(3,1,'感兴趣，简单了解一下')">感兴趣，简单了解一下</span>
          <span :class="{color_white: tsQ1 == '就业需要', bgcolor_grey: tsQ1 == '就业需要', color_grey: tsQ1 != '就业需要'}" @click="saveparameter(3,1,'就业需要')">就业需要</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习内容要求？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQ2 == '主流技术', bgcolor_grey: tsQ2 == '主流技术', color_grey: tsQ2 != '主流技术'}" @click="saveparameter(3,2,'主流技术')">主流技术</span>
          <span :class="{color_white: tsQ2 == '基础技术', bgcolor_grey: tsQ2 == '基础技术', color_grey: tsQ2 != '基础技术'}" @click="saveparameter(3,2,'基础技术')">基础技术</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习形式的偏好？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQ3 == '看视频', bgcolor_grey: tsQ3 == '看视频', color_grey: tsQ3 != '看视频'}" @click="saveparameter(3,3,'看视频')">看视频</span>
          <span :class="{color_white: tsQ3 == '看文档', bgcolor_grey: tsQ3 == '看文档', color_grey: tsQ3 != '看文档'}" @click="saveparameter(3,3,'看文档')">看文档</span>
          <span :class="{color_white: tsQ3 == '做实例', bgcolor_grey: tsQ3 == '做实例', color_grey: tsQ3 != '做实例'}" @click="saveparameter(3,3,'做实例')">做实例</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>每天可用学习时长？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQ4 == '7小时以上', bgcolor_grey: tsQ4 == '7小时以上', color_grey: tsQ4 != '7小时以上'}" @click="saveparameter(3,4,'7小时以上')">7小时以上</span>
          <span :class="{color_white: tsQ4 == '7-5小时', bgcolor_grey: tsQ4 == '7-5小时', color_grey: tsQ4 != '7-5小时'}" @click="saveparameter(3,4,'7-5小时')">7-5小时</span>
          <span :class="{color_white: tsQ4 == '5-3小时', bgcolor_grey: tsQ4 == '5-3小时', color_grey: tsQ4 != '5-3小时'}" @click="saveparameter(3,4,'5-3小时')">5-3小时</span>
          <span :class="{color_white: tsQ4 == '3小时以下', bgcolor_grey: tsQ4 == '3小时以下', color_grey: tsQ4 != '3小时以下'}" @click="saveparameter(3,4,'3小时以下')">3小时以下</span>
        </div>
        <div class="submit_all_btn" @click="changeModulStatus(true)">提交</div>
      </div>
    </div>
    <!-- 往前一步（后） -->
    <div class="page_btn_contain">
      <div class="page_btn_center">
        <div class="next_step_btn bgcolor_orange" id="next_step_bt">
          <div class="btn_icon_box" @click="changeStep(1)">
            <img class="imgauto" src="../../static/icons/right.png" alt="">
          </div>
        </div>
        <div class="pre_step_btn bgcolor_greyness" id="pre_step_bt">
          <div class="btn_icon_box" @click="changeStep(-1)">
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
    <!-- 提示弹框 -->
    <div class="alert_box" v-show="showAlert" :style="{ width: this.windowClient.width + 'px', height: this.windowClient.height + 'px' }">
      <div class="center_box">
        <div class="notice_text">{{alertInfor}}</div>
        <div class="ok_btn">
          <a :href="aHref" @click="changeModulStatus(false)">确 认</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import qs from 'qs';
  export default {
    data () {
      return {
        showAlert: false,
        alertInfor: '提交成功！！！',
        aHref: '#/comshow/indexuser',
        nowStepNum: 0,
        // 第一步当前选择
        fsQ1: '前端',
        fsQ2: '',
        // 第二步当前选择
        ssQ1: '',
        ssQ2: '',
        ssQ3: '',
        ssQ4: '',
        ssQ5: '',
        // 第三步当前选择
        tsQ1: '',
        tsQ2: '',
        tsQ3: '',
        tsQ4: '',
        firstStep: [],
        secondStep: [],
        thirdStep: [],
        windowClient: {}
      }
    },
    created () {
      this.menun()
    },
    methods: {
      // 点击进行下或上一步
      changeStep (num) {
        let preStepBtn = document.getElementById('pre_step_bt');
        let nextStepBtn = document.getElementById('next_step_bt');
        if (this.nowStepNum == 0) {
          if (num == -1) {
            this.nowStepNum = 0;
          } else {
            this.nowStepNum += 1;
            preStepBtn.style.cursor = 'pointer';
            preStepBtn.style.background = '#EA7C5A';
          }
        } else if (this.nowStepNum == 1) {
          this.nowStepNum += num;
        } else {
          if (num == -1) {
            this.nowStepNum -= 1;
            nextStepBtn.style.cursor = 'pointer';
            nextStepBtn.style.background = '#EA7C5A';
          } else {
            this.nowStepNum = 2;
          }
        }
        if (this.nowStepNum == 0){
          preStepBtn.style.cursor = 'not-allowed';
          preStepBtn.style.background = '#7784957a';
        }
        if (this.nowStepNum == 2){
          nextStepBtn.style.cursor = 'not-allowed';
          nextStepBtn.style.background = '#7784957a';
        }
        this.menun();
      },
      // 提交用户的选择
      changeModulStatus (str) {
        
        this.firstStep.push(this.fsQ1);
        this.firstStep.push(this.fsQ2);

        this.secondStep.push(this.ssQ1);
        this.secondStep.push(this.ssQ2);
        this.secondStep.push(this.ssQ3);
        this.secondStep.push(this.ssQ4);
        this.secondStep.push(this.ssQ5);

        this.thirdStep.push(this.tsQ1);
        this.thirdStep.push(this.tsQ2);
        this.thirdStep.push(this.tsQ3);
        this.thirdStep.push(this.tsQ4);

        if (str == true) {
          let sendData = {
            firstStep: this.firstStep.join(';'),
            secondStep: this.secondStep.join(';'),
            thirdStep: this.thirdStep.join(';'),
          }
          // console.log(sendData);
          const self = this;
          axios.post('http://192.168.5.101:8080/goc/route/addRoute', qs.stringify(sendData), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }).then(function (data) {
            console.log('路线制定 服务器连接成功');
          })
          .catch(function (err) {
            console.log('路线制定 服务器连接错误，原因：' + err);
          })
        }

        this.showAlert = str;
      },
      menun () {
        window.scrollTo(0, 0);
      },
      // 用户的选择进行存储
      saveparameter (stepNo, quesNo, value) {
        switch (stepNo) {
          case 1:
            switch (quesNo) {
              case 1:
                this.fsQ1 = value;
                break;
              default:
                this.fsQ2 = value;
            }
            break;
          case 2:
            switch (quesNo) {
              case 1:
                this.ssQ1 = value;
                break;
              case 2:
                this.ssQ2 = value;
                break;
              case 3:
                this.ssQ3 = value;
                break;
              case 4:
                this.ssQ4 = value;
                break;
              default:
                this.ssQ5 = value;
            }
            break;
          default:
            switch (quesNo) {
              case 1:
                this.tsQ1 = value;
                break;
              case 2:
                this.tsQ2 = value;
                break;
              case 3:
                this.tsQ3 = value;
                break;
              default:
                this.tsQ4 = value;
            }
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
      window.addEventListener('scroll', this.menu);
      this.windowClient = this.client();
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
    cursor: pointer;
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
    cursor: pointer;
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
  }
  .pre_step_btn{
    cursor: not-allowed;
    margin-right: 20px;
  }
  .next_step_btn{
    cursor: pointer;
    margin-right: 45px;
  }
  .btn_icon_box{
    width: 20px;
    height: 20px;
    -moz-user-select: none;
    -webkit-user-select: none;   
    -ms-user-select: none; 
    user-select: none; 
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
    height: 50px;
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
  .submit_all_btn{
    width: 50px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding: 0px 15px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 auto;
    background: #EA7C5A;
    text-align: center;
    -moz-user-select:none;
    -webkit-user-select: none;   
    -ms-user-select: none; 
    user-select: none;
  }
  /* 弹框样式 */
.center_box{
  width: 300px;
  height: 121px;
  background: #fff;
}
.alert_box{
  background: rgba(0,0,0,0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top:0px;
  left: 0px;
  z-index: 10;
}
.notice_text{
  width: 100%;
  text-align: center;
  line-height: 70px;
  height: 70px;
  font-size: 17px;
}
.ok_btn{
  height: 50px;
  width: 100%;
  border-top: 2px solid rgb(231, 231, 231);
  text-align: center;
  line-height: 50px;
}
.ok_btn a{
  color: #ea7c5a;
  font-weight: 600;
  text-decoration: none;
}
.ok_btn:hover{
  background: #ea7c5a;
}
.ok_btn a:hover{
  color: #fff;
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
