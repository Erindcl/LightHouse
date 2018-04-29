<template>
	<div class="module_box">
    <div class="usetime_advice">
    </div>
    <div class="knowledge" :key="index1" v-for="(oneLesson, index1) in lessons" >
      <div class="chapter_name">{{oneLesson.lessonName}}</div>
      <div class="belong_to">
        <img src="../../static/icons/triangle.png" class="image_auto" alt="">
      </div>
      <div class="section_box">
        <div class="progress_status_box">
          <!-- 进度条显示 -->
          <div class="progress_line_box" style="display: none;">
            <div class="progress_line">
              <div class="now_progress_percent"></div>
            </div>
            <span>{{oneLesson.completedPercent}}</span>
          </div>
          <!-- 未学时显示 -->
          <div class="show_learn_time">计划用时： {{oneLesson.ltimeLength}} 天</div>
        </div>
        <div class="one_section" :key="index2" v-for="(oneSection, index2) in oneLesson.chapters">
          <div class="section_infor_left">
            <span>{{oneSection.cName}}</span>
            <span :class="{tips_style: true, bgc_green: oneSection.tipType == '基础', bgc_blue: oneSection.tipType == '巩固', bgc_orange: oneSection.tipType == '企业', bgc_gray: oneSection.tipType == '其他'}">{{oneSection.tipType}}</span>
          </div>
          <div class="section_infor_right">
            <div class="progress_box">{{oneSection.ccompleted}}/{{oneSection.ctimeLength}}</div>
            <div class="enter_btn" v-show="oneSection.learnState == 'notdo'">
              <a :href="oneSection.cHref">进入学习</a>
            </div>
            <div class="enter_btn" v-show="oneSection.learnState == 'doing'">
              <a :href="oneSection.cHref">学习中 ···</a>
            </div>
            <div class="enter_btn" style="background: #ccc;" v-show="oneSection.learnState == 'did'">
              <a :href="oneSection.cHref">已学过</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
	  data() {
		  return {
        lessons: [
          {
            lessonName: 'html',
            ltimeLength: 24,
            lcompleted: 11,
            completedPercent: '',
            chapters: [
              {
                cName: 'html基础',
                cId: 1,
                cHref: '#1',
                learnState: 'did',
                ctimeLength: 24,
                ccompleted: 11,
                tipType: '巩固'
              },
              {
                cName: 'html列表',
                cId: 2,
                cHref: '#2',
                learnState: 'doing',
                ctimeLength: 24,
                ccompleted: 11,
                tipType: '基础'
              },
              {
                cName: 'html基础',
                cId: 3,
                cHref: '#3',
                learnState: 'notdo',
                ctimeLength: 24,
                ccompleted: 11,
                tipType: '其他'
              }
            ]
          },
          {
            lessonName: 'html',
            ltimeLength: 24,
            lcompleted: 17,
            completedPercent: '',
            chapters: [
              {
                cName: 'html基础',
                cId: 4,
                cHref: '#1',
                learnState: 'notdo',
                ctimeLength: 24,
                ccompleted: 11,
                tipType: '巩固'
              },
              {
                cName: 'html列表',
                cId: 5,
                cHref: '#2',
                learnState: 'notdo',
                ctimeLength: 24,
                ccompleted: 11,
                tipType: '企业'
              },
              {
                cName: 'html基础',
                cId: 6,
                cHref: '#3',
                learnState: 'notdo',
                ctimeLength: 24,
                ccompleted: 11,
                tipType: '巩固'
              },
              {
                cName: 'html基础',
                cId: 7,
                cHref: '#3',
                learnState: 'notdo',
                ctimeLength: 24,
                ccompleted: 11,
                tipType: '巩固'
              }
            ]
          }
        ]
		  }
	  },
	  methods: {
		
	  },
	  mounted () {
		  for (let i = 0; i < this.lessons.length; i++) {
        this.lessons[i].completedPercent = parseInt(this.lessons[i].lcompleted / this.lessons[i].ltimeLength * 100) + '%';
        document.getElementsByClassName('now_progress_percent')[i].style.width = this.lessons[i].completedPercent;
        for (let j = 0; j < this.lessons[i].chapters.length; j++) {
          this.lessons[i].chapters[j].cHref = '#/comshow/studypage?id=' + this.lessons[i].chapters[j].cId;
        }
      }
	  }
  }
</script>

<style scoped>
  .module_box{
    /* height: 500px; */
    width: 100%;
    /* display: flex; */
    /* justify-content: center; */
    margin-top: -2px;
    background: #fff;
  }
  .usetime_advice{
    height: 50px;
    width: 100%;
    /* background: seagreen; */
  }
  .knowledge{
    /* height: 300px; */
    width: 880px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 40px;
    /* background: salmon; */
  }
  .chapter_name{
    height: 40px;
    line-height: 40px;
    width: 190px;
    font-size: 18px;
    font-weight: bold;
    /* background: seagreen; */
  }
  .belong_to{
    width: 24px;
    height: 24px;
    margin: 10px 0px 0px;
    transform:rotate(-90deg);
    -ms-transform:rotate(-90deg); 	/* IE 9 */
    -moz-transform:rotate(-90deg); 	/* Firefox */
    -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
    -o-transform:rotate(-90deg); 	/* Opera */
  }
  .section_box{
    width: 550px;
    /* background: #999999; */
    margin-left: 50px;
  }
  .one_section{
    height: 40px;
    width: 100%;
    padding-left: 50px;
    border-left: 3px solid #EA7C5A;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .enter_btn{
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #EA7C5A;
    text-align: center;
    border-radius: 5px;
  }
  .enter_btn a{
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }
  .section_infor_left, .section_infor_right{
    height: 100%;
    display: flex;
    align-items: center;
  }
  .tips_style{
    display: inline-block;
    height: 25px;
    line-height: 25px;
    padding: 0px 8px;
    color: #fff; 
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;
  }
  .bgc_green{
    background: #6ABA9C;
  }
  .bgc_blue{
    background: #0099CC;
  }
  .bgc_orange{
    background: #EA7C5A;
  }
  .bgc_gray{
    background: #778495;
  }
  .progress_box{
    color: #8a8a8a;
    font-size: 14px;
    margin-right: 20px;
  }
  /* 进度条 */
  .progress_status_box{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-left: 3px solid #EA7C5A;
    padding-left: 50px;
  }
  .progress_line_box{
    width: 100%;
    display: flex;
    align-items: center;
    height: 20px;
    justify-content: space-between;
    color: #8a8a8a;
  }
  .progress_line{
    width: 480px;
    height: 8px;
    border-radius: 3px;
    background: #E5E9F2;
  }
  .now_progress_percent{
    height: 100%;
    background: #EA7C5A;
    border-radius: 3px;
  }
  .show_learn_time{
    color: #8a8a8a;
  }

</style>