<template>
	<div>
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
          <div :class="{one_learn_class: true, bgcolor_grey: fsQO == '前端', color_white: fsQO == '前端',color_grey: fsQO != '前端'}" @click="saveparameter(1,1,'前端')">
            <div class="one_class_name">前端开发</div>
            <div class="one_class_descr">前端开发，是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，现在最新的高级版本HTML5、CSS3，以及SVG等。</div>
          </div>
          <div :class="{one_learn_class: true, bgcolor_grey: fsQO == '后台', color_white: fsQO == '后台',color_grey: fsQO != '后台'}" @click="saveparameter(1,1,'后台')">
            <div class="one_class_name">后台开发</div>
            <div class="one_class_descr">后台开发，后台就是通过一个做好的页面程序可以填加更新网站内容，在网站的页面上(也就是前台)显示。</div>
          </div>
          <div :class="{one_learn_class: true, bgcolor_grey: fsQO == '移动', color_white: fsQO == '移动',color_grey: fsQO != '移动'}" @click="saveparameter(1,1,'移动')">
            <div class="one_class_name">移动端开发</div>
            <div class="one_class_descr">移动端开发，是指与服务器相对应，为客户提供本地服务的程序。一般安装在普通的客户机上，需要与服务端互相配合运行。</div>
          </div>
        </div>
        <div class="infor_title" v-show="fsQO == '前端'">
          <div class="vertical_line"></div>
          <div>学习方向</div>
        </div>
        <div class="learn_direct" v-show="fsQO == '前端'">
          <div :class="{one_learn_direct: true, bgcolor_grey: fsQT == 'web前端', color_white: fsQT == 'web前端',color_grey: fsQT != 'web前端'}" @click="saveparameter(1,2,'web前端')">
            <div class="one_direct_name">Web前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
          <div style="margin-top: 20px;" :class="{one_learn_direct: true, bgcolor_grey: fsQT == '移动前端', color_white: fsQT == '移动前端',color_grey: fsQT != '移动前端'}" @click="saveparameter(1,2,'移动前端')">
            <div class="one_direct_name">移动前端</div>
            <div class="one_direct_descr">Web前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/Flash等各种Web技术进行客户端产品的开发。完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。</div>
          </div>
          <div style="margin-top: 20px;" :class="{one_learn_direct: true, bgcolor_grey: fsQT == '全栈前端', color_white: fsQT == '全栈前端',color_grey: fsQT != '全栈前端'}" @click="saveparameter(1,2,'全栈前端')">
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
          <span :class="{color_white: ssQO == '轻松', bgcolor_grey: ssQO == '轻松', color_grey: ssQO != '轻松'}" @click="saveparameter(2,1,'轻松')">轻松</span>
          <span :class="{color_white: ssQO == '不困难', bgcolor_grey: ssQO == '不困难', color_grey: ssQO != '不困难'}" @click="saveparameter(2,1,'不困难')">不困难</span>
          <span :class="{color_white: ssQO == '较困难', bgcolor_grey: ssQO == '较困难', color_grey: ssQO != '较困难'}" @click="saveparameter(2,1,'较困难')">较困难</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>目前的编程水平？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQT == '没有了解过编程', bgcolor_grey: ssQT == '没有了解过编程', color_grey: ssQT != '没有了解过编程'}" @click="saveparameter(2,2,'没有了解过编程')">没有了解过编程</span>
          <span :class="{color_white: ssQT == '有编程基础', bgcolor_grey: ssQT == '有编程基础', color_grey: ssQT != '有编程基础'}" @click="saveparameter(2,2,'有编程基础')">有编程基础</span>
          <span :class="{color_white: ssQT == '有过大量实践', bgcolor_grey: ssQT == '有过大量实践', color_grey: ssQT != '有过大量实践'}" @click="saveparameter(2,2,'有过大量实践')">有过大量实践</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>一小时内专注学习占比？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQR == '100%-80%', bgcolor_grey: ssQR == '100%-80%', color_grey: ssQR != '100%-80%'}" @click="saveparameter(2,3,'100%-80%')">100%-80%</span>
          <span :class="{color_white: ssQR == '80%-60%', bgcolor_grey: ssQR == '80%-60%', color_grey: ssQR != '80%-60%'}" @click="saveparameter(2,3,'80%-60%')">80%-60%</span>
          <span :class="{color_white: ssQR == '60%-40%', bgcolor_grey: ssQR == '60%-40%', color_grey: ssQR != '60%-40%'}" @click="saveparameter(2,3,'60%-40%')">60%-40%</span>
          <span :class="{color_white: ssQR == '40%以下', bgcolor_grey: ssQR == '40%以下', color_grey: ssQR != '40%以下'}" @click="saveparameter(2,3,'40%以下')">40%以下</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>对新知识的理解能力？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQF == '较强', bgcolor_grey: ssQF == '较强', color_grey: ssQF != '较强'}" @click="saveparameter(2,4,'较强')">较强</span>
          <span :class="{color_white: ssQF == '一般', bgcolor_grey: ssQF == '一般', color_grey: ssQF != '一般'}" @click="saveparameter(2,4,'一般')">一般</span>
          <span :class="{color_white: ssQF == '较差', bgcolor_grey: ssQF == '较差', color_grey: ssQF != '较差'}" @click="saveparameter(2,4,'较差')">较差</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>对新知识的运用？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: ssQV == '较强', bgcolor_grey: ssQV == '较强', color_grey: ssQV != '较强'}" @click="saveparameter(2,5,'较强')">较强</span>
          <span :class="{color_white: ssQV == '一般', bgcolor_grey: ssQV == '一般', color_grey: ssQV != '一般'}" @click="saveparameter(2,5,'一般')">一般</span>
          <span :class="{color_white: ssQV == '较差', bgcolor_grey: ssQV == '较差', color_grey: ssQV != '较差'}" @click="saveparameter(2,5,'较差')">较差</span>
        </div>
      </div>
      <!-- 第三步 -->
      <div class="content_center_box" v-show="nowStepNum == 2">
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习这门技术的原因？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQO == '感兴趣，简单了解一下', bgcolor_grey: tsQO == '感兴趣，简单了解一下', color_grey: tsQO != '感兴趣，简单了解一下'}" @click="saveparameter(3,1,'感兴趣，简单了解一下')">感兴趣，简单了解一下</span>
          <span :class="{color_white: tsQO == '就业需要', bgcolor_grey: tsQO == '就业需要', color_grey: tsQO != '就业需要'}" @click="saveparameter(3,1,'就业需要')">就业需要</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习内容要求？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQT == '主流技术', bgcolor_grey: tsQT == '主流技术', color_grey: tsQT != '主流技术'}" @click="saveparameter(3,2,'主流技术')">主流技术</span>
          <span :class="{color_white: tsQT == '基础技术', bgcolor_grey: tsQT == '基础技术', color_grey: tsQT != '基础技术'}" @click="saveparameter(3,2,'基础技术')">基础技术</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>学习形式的偏好？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQR == '看视频', bgcolor_grey: tsQR == '看视频', color_grey: tsQR != '看视频'}" @click="saveparameter(3,3,'看视频')">看视频</span>
          <span :class="{color_white: tsQR == '看文档', bgcolor_grey: tsQR == '看文档', color_grey: tsQR != '看文档'}" @click="saveparameter(3,3,'看文档')">看文档</span>
          <span :class="{color_white: tsQR == '做实例', bgcolor_grey: tsQR == '做实例', color_grey: tsQR != '做实例'}" @click="saveparameter(3,3,'做实例')">做实例</span>
        </div>
        <div class="infor_title">
          <div class="vertical_line"></div>
          <div>每天可用学习时长？</div>
        </div>
        <div class="knowledge_list">
          <span :class="{color_white: tsQF == '7小时以上', bgcolor_grey: tsQF == '7小时以上', color_grey: tsQF != '7小时以上'}" @click="saveparameter(3,4,'7小时以上')">7小时以上</span>
          <span :class="{color_white: tsQF == '7-5小时', bgcolor_grey: tsQF == '7-5小时', color_grey: tsQF != '7-5小时'}" @click="saveparameter(3,4,'7-5小时')">7-5小时</span>
          <span :class="{color_white: tsQF == '5-3小时', bgcolor_grey: tsQF == '5-3小时', color_grey: tsQF != '5-3小时'}" @click="saveparameter(3,4,'5-3小时')">5-3小时</span>
          <span :class="{color_white: tsQF == '3小时以下', bgcolor_grey: tsQF == '3小时以下', color_grey: tsQF != '3小时以下'}" @click="saveparameter(3,4,'3小时以下')">3小时以下</span>
        </div>
        <div class="submit_all_btn" @click="changeRoud()">提交修改</div>
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
  </div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    props: {
      fsQO: {
        default: ''
      },
      fsQT: {
        default: ''
      },
      ssQO: {
        default: ''
      },
      ssQT: {
        default: ''
      },
      ssQR: {
        default: ''
      },
      ssQF: {
        default: ''
      },
      ssQV: {
        default: ''
      },
      tsQO: {
        default: ''
      },
      tsQT: {
        default: ''
      },
      tsQR: {
        default: ''
      },
      tsQF: {
        default: ''
      },
      firstStep: {
        default: []
      },
      secondStep: {
        default: []
      },
      thirdStep: {
        default: []
      }
    },
	  data() {
		  return {
				nowStepNum: 0,
        // // 第一步当前选择
        // fsQO: '前端',
        // fsQT: 'web前端',
        // // 第二步当前选择
        // ssQO: '轻松',
        // ssQT: '没有了解过编程',
        // ssQR: '40%以下',
        // ssQF: '较差',
        // ssQV: '较差',
        // // 第三步当前选择
        // tsQO: '就业需要',
        // tsQT: '主流技术',
        // tsQR: '看视频',
				// tsQF: '7小时以上',
        // firstStep: [],
        // secondStep: [],
        // thirdStep: [],
        newInfor: {}
		  }
	  },
    created () {
      this.menun(0);
      // this.fsQO = this.$parent.fsQO;
      // this.fsQT = this.$parent.fsQT;
      // this.ssQO = this.$parent.ssQO;
      // this.ssQT = this.$parent.ssQT;
      // this.ssQR = this.$parent.ssQR;
      // this.ssQF = this.$parent.ssQF;
      // this.ssQV = this.$parent.ssQV;

      // this.tsQO = this.$parent.tsQO;
      // this.tsQT = this.$parent.tsQT;
      // this.tsQR = this.$parent.tsQR;
      // this.tsQF = this.$parent.tsQF;

      // this.firstStep = this.$parent.firstStep;
      // this.secondStep = this.$parent.secondStep;
      // this.thirdStep = this.$parent.thirdStep;
    },
	  methods: {
		  // 用户的选择进行存储
      saveparameter (stepNo, quesNo, value) {
        switch (stepNo) {
          case 1:
            switch (quesNo) {
              case 1:
                this.fsQO = value;
                break;
              default:
                this.fsQT = value;
            }
            break;
          case 2:
            switch (quesNo) {
              case 1:
                this.ssQO = value;
                break;
              case 2:
                this.ssQT = value;
                break;
              case 3:
                this.ssQR = value;
                break;
              case 4:
                this.ssQF = value;
                break;
              default:
                this.ssQV = value;
            }
            break;
          default:
            switch (quesNo) {
              case 1:
                this.tsQO = value;
                break;
              case 2:
                this.tsQT = value;
                break;
              case 3:
                this.tsQR = value;
                break;
              default:
                this.tsQF = value;
            }
        }
        
			},
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
        this.menun(750);
			},
			changeRoud () {
        
        this.firstStep.push(this.fsQO);
        this.firstStep.push(this.fsQT);

        this.secondStep.push(this.ssQO);
        this.secondStep.push(this.ssQT);
        this.secondStep.push(this.ssQR);
        this.secondStep.push(this.ssQF);
        this.secondStep.push(this.ssQV);

        this.thirdStep.push(this.tsQO);
        this.thirdStep.push(this.tsQT);
        this.thirdStep.push(this.tsQR);
        this.thirdStep.push(this.tsQF);

        let sendData = {
          firstStep: this.firstStep.join(';'),
          secondStep: this.secondStep.join(';'),
          thirdStep: this.thirdStep.join(';'),
        }
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
        this.nowStepNum = 0;
        let preStepBtn = document.getElementById('pre_step_bt');
        let nextStepBtn = document.getElementById('next_step_bt');
        preStepBtn.style.cursor = 'not-allowed';
        preStepBtn.style.background = '#7784957a';
        nextStepBtn.style.cursor = 'pointer';
        nextStepBtn.style.background = '#EA7C5A';
        this.menun(750);
        this.putNewInfor();
      },
			menun (num) {
				window.scrollTo(0, num);
      },
      // 将新的数据传递给父组件
      putNewInfor () {
        this.newInfor = {
          fsQO: this.fsQO,
          fsQT: this.fsQT,
          ssQO: this.ssQO,
          ssQT: this.ssQT,
          ssQR: this.ssQR,
          ssQF: this.ssQF,
          ssQV: this.ssQV,
          tsQO: this.tsQO,
          tsQT: this.tsQT,
          tsQR: this.tsQR,
          tsQF: this.tsQF,
          firstStep: this.firstStep,
          secondStep: this.secondStep,
          thirdStep: this.thirdStep
        };
        this.$emit('updateRoudInfor', this.newInfor);
      }
	  },
	  mounted () {
			window.addEventListener('scroll', this.menu);
      
	  }
  }
</script>

<style scoped>
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
    background: #fff;
  }
  .step_title{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
  .content_center_box{
    width: 850px;
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
    width: 70px;
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
  .imgauto{
    width: 100%;
    height: 100%;
  }
</style>