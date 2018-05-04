<template>
	<div class="module_box">
    <div class="circle_chart_box">
      <div class="circle_chart" id="circle_contain"></div>
    </div>
    <div class="chapter_infor_box">
      <div class="one_infor_list">
        <span class="list_title">课&ensp;程&ensp;名：</span>
        <span class="list_value">{{lesson.title}}</span>
      </div>
      <div class="one_infor_list">
        <span class="list_title">章&ensp;节&ensp;名：</span>
        <span class="list_value">{{lesson.chapter.name}}</span>
      </div>
      <div class="one_infor_list">
        <span class="list_title">计划用时：</span>
        <span class="list_value">{{lesson.chapter.ctimeLength}} 天</span>
      </div>
      <div class="one_infor_list">
        <span class="list_title">已经用时：</span>
        <span class="list_value">{{lesson.chapter.ccompleted}} 天</span>
      </div>
      <div class="enter_btn">
        <a :href="chapterURL">进入学习</a>
      </div>
    </div>
  </div>
</template>
<script src="./static/js/echarts.common.min.js"></script>
<script>
  export default {
    props: {
      lesson: {
        default: {}
      }
    },
	  data() {
		  return {
        // lesson: {
        //   ltimeLength: 24,
        //   lcompleted: 11,
        //   title: 'HTML+CSS',
        //   chapter: {
        //     name: 'CSS基础',
        //     ctimeLength: 24,
        //     cc`.......................................................................................ompleted: 11,
        //   }
        // }
		  }
    },
    computed: {
		  chapterURL () {
		    return '#/comshow/studypage?name=' + this.lesson.chapter.name;
		  }
		},
    created () {
      // console.log('这里是个人中心的当前学习');
      // console.log(this.$parent.lesson);
      // this.lenson = this.$parent.lesson;
    },
	  methods: {
      initChart () {
        console.log('这是图表');
        console.log(this.lesson);
        let lesson = this.lesson
        console.log(lesson);
        console.log(lesson.lcompleted);
        console.log(lesson.ltimeLength);
        let data = [
          {value: this.lesson.lcompleted, name: parseInt(this.lesson.lcompleted / this.lesson.ltimeLength * 100) + '%'},
          {value: this.lesson.ltimeLength - this.lesson.lcompleted}
        ];
        console.log(data);
        let circleChart = echarts.init(document.getElementById('circle_contain'));
        let option = {
          series: [{
            legendHoverLink: false,
            hoverAnimation: false,
            hoverOffset: false,
            type:'pie',
            radius: ['78%', '90%'],
            color: ['#EA7C5A', '#E5E9F2'],
            avoidLabelOverlap: false, //使圆中间的标签居中
            label: {
              show: true,
              position: 'center',
              color: '#8a8a8a',
              fontSize: 30
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data
          }]
        };
        circleChart.setOption(option);
      }
	  },
	  mounted () {
      console.log(this.lesson);
      console.log(this.lesson.lcompleted);
      console.log(this.lesson.ltimeLength);
		  this.initChart(); // 放在created中无用
	  }
  }
</script>

<style scoped>
  .module_box{
    height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: -2px; */
    background: #fff;
  }
  .circle_chart_box, .chapter_infor_box{
    width: 450px;
    height: 260px;
    /* background: lightblue; */
  }
  .chapter_infor_box{
    margin-left: 30px;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .circle_chart{
    height: 260px;
    width: 260px;
    margin: 0px auto;
    /* background: salmon; */
  }
  .one_infor_list{
    height: 40px;
    line-height: 40px;
  }
  .list_title{
    color: #8a8a8a;
  }
  .list_value{
    font-weight: 600;
  }
  .enter_btn{
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #EA7C5A;
    text-align: center;
    border-radius: 3px;
    margin-top: 15px;
  }
  .enter_btn a{
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }
</style>