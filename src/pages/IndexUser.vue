<template>
  <div>
    <div class="main">
      <!-- 日历 -->
      <div class="calendar_box">
        <div class="summary">
          <div class="summary_icon_box image_auto">
            <img src="../../static/icons/note.png" alt="">
          </div>
          <div class="summary_descr">近期总结</div>
        </div>
        <div class="one_day" :key="index" v-for="(oneS, index) in summary" @click="changeShowDN(index)">
          <div class="on_date">
            {{datenums[4-index]}}
          </div>
          <div class="sign_in" v-show="isSignIn[index] == '1'">
            <img src="../../static/icons/signIn.png" alt="" class="image_auto">
          </div>
          <div class="not_sign" v-show="index == 4 && isSignIn[index] == '0'" @click="changeSign(index)">
            签到
          </div>
        </div>
        <!-- <div class="one_day">
          <div class="on_date">
            3月25日
          </div>
          <div class="sign_in image_auto">
            <img src="../../static/icons/signIn.png" alt="">
          </div>
        </div> -->
        <div class="more_calendar">
          <div class="more_icon_box image_auto">
            <img src="../../static/icons/more.png" alt="">
          </div>
          <div class="more_descr"><router-link to="/comshow/personal">更 多</router-link></div>
        </div>
      </div>
      <!-- 三角形 -->
      <div class="now_pointer">
        <div class="triangle_box" :style="{ marginLeft: triangleLeft + 'px' }">
          <img src="../../static/icons/triangle.png" alt="" class="image_auto">
        </div>
      </div>
      <!-- 小结内容 -->
      <div class="one_summary_box">
        <div class="center_content" v-show="showdaysummaryType == 'some'">
          <div><div class="green_box">自我评分</div><span>{{showscore}}.0</span> 分</div>
          <div style="margin-top: 10px;"><div class="green_box">个人小结</div>{{showdaysummary}}</div>
        </div>
        <div class="center_content" v-show="showdaysummaryType == 'todo'">
          <span style="color:rgba(119,132,149,0.8);">今天还未做总结哦<br>快去个人中心做总结吧!</span>
        </div>
        <div class="center_content" v-show="showdaysummaryType == 'nothing'">
          <span style="color:rgba(119,132,149,0.8);">这天的你可能太忙，忘记写下你的记忆了</span>
        </div>
      </div>
      <!-- 当前学习 -->
      <div class="module_title">
        <div class="title_box">当前学习</div>
      </div>
      <div class="module_box" style="height: 350px;">
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
      <!-- 热门资源 -->
      <div class="module_title">
        <div class="title_box">热门资源</div>
      </div>
      <div class="module_box" style="margin-bottom: 80px;">
        <div class="box_center">
          <div class="one_article" :key="index1" v-for="(oneArt, index1) in articles">
            <div class="art_title"><a :href="oneArt.source" @mouseover="showThisArt(index1)" @mouseout="notShowThisArt(index1)">{{oneArt.title}}</a></div>
            <div class="horizontal_line" :style="{ width: horizontalLineWid + 'px' }" v-show="nowOverArt == index1"></div>
            <div class="horizontal_line" style="background: rgba(0,0,0,0);width: 3px;" v-show="nowOverArt != index1"></div>
            <div class="art_infor type_infor">
              类别:
              <span :key="index2" v-for="(oneType, index2) in oneArt.category">{{oneType}}</span>
            </div>
            <div class="art_infor other_infor">
              发布时间： {{oneArt.date}}
              <span>浏览量： {{oneArt.browsings}}</span>
              <span>赞： {{oneArt.fabulous}}</span>
            </div>
          </div>
          <div class="more_box">
            <div class="more_about">
              <router-link to="/comshow/resources">更多</router-link>
              <span><img src="../../static/icons/triangle.png" alt="" class="image_auto"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./static/js/echarts.common.min.js"></script>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        isSignIn: ['0','1','1','1','0'],
        datenums: ["2018-04-22","2018-04-21","2018-04-20","2018-04-19","2018-04-18"],
        summary: [null,
          {
            date: '3月25日',
            score: '9',
            daysummary: '浏览器和W3C组织推出的如h1~h6、thead、ul、ol的HTML标签，用于在Web页面中组织对应的内容，如网页标题、表头、无序、有序列表，以达到更方便的协作及传播互联网内容。搜索引擎很好的利用了这些语义化标签抓取内容，又鉴于搜索引擎的巨大流量推荐，Web前端不得不考虑SEO，从而两者实现有益的循环，共同推进着语义化标签的使用'
          },null,
          {
            date: '3月27日',
            score: '9',
            daysummary: 'L标签的id和class属性，进一步对HTML标签进行描述，如对页脚HTML标签添加如id="footer"或者class="footer"的属性（值），以“无声”的方式在不同的前端程序员或者前后端程序员间实现交流。'
          },
          {
            date: '3月28日',
            score: '7',
            daysummary: '但Web的发展超乎想象，起初定义的HTML语义化标签，不足以实现对Web页面各个部分的功能或位置描述，所以Web前端人员利用HTML标签的id和class属性，进一步对HTML标签进行描述，如对页脚HTML标签添加如id="footer"或者class="footer"的属性（值），以“无ass属性，进一步对HTML标签进行描述，如对页脚HTML标签添加如id="footer"或者class="footer"的属性（值），以“无声”的方式在不同的前端程序员或者前后端程序员间实现交流。'
          }
        ],
        // 207  348  489  （+141） 
        triangleLeft: 630,
        showdaysummary: '',
        showdaysummaryType: 'some',
        showscore: 0,
        lastTime: 80,
        userLastTime: 31,
        lesson: {
          ltimeLength: 24,
          lcompleted: 11,
          title: 'HTML+CSS',
          chapter: {
            name: 'CSS基础',
            ctimeLength: 24,
            ccompleted: 11
          }
        },
        articles: [
          {
            title: '1标题标题标题标题',
            category: ['js', '前端', '大数据'],
            date: '2018-03-22',
            browsings: 147,
            fabulous: 57,
            source: '#5'
          },
          {
            title: '2标题标题标题标题',
            category: ['js', '前端', '大数据'],
            date: '2018-03-22',
            browsings: 147,
            fabulous: 57,
            source: '#5'
          },
          {
            title: '3标题标题标题标题',
            category: ['js', '前端', '大数据'],
            date: '2018-03-22',
            browsings: 147,
            fabulous: 57,
            source: '#5'
          },
          {
            title: '4标题标题标题标题',
            category: ['js', '前端', '大数据'],
            date: '2018-03-22',
            browsings: 147,
            fabulous: 57,
            source: '#5'
          },
          {
            title: '5标题标题标题标题',
            category: ['js', '前端', '大数据'],
            date: '2018-03-22',
            browsings: 147,
            fabulous: 57,
            source: '#5'
          }
        ],
        nowOverArt: -1,
        horizontalLineWid: 2
      }
    },
    computed: {
		  chapterURL () {
		    return '#/comshow/studypage?name=' + this.lesson.chapter.name;
		  }
		},
    created () {
      this.getAllData();
      this.menun();
      // this.initFunc();
    },
    methods: {
      // 首页获取 签到小结 当前学习课程 资源
      getAllData () {
        const self = this;
        axios.post('http://192.168.5.101:8080/goc/home/gethome', {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
          console.log()
          console.log('用户个人首页 服务器连接成功');
          self.isSignIn = res.data.das;
          self.datenums = res.data.datenums;
          self.summary = res.data.daysums;
          self.articles = res.data.hotrs;
          console.log(self.articles);
          
          self.lesson.ltimeLength = res.data.ltimeLength; 
          self.lesson.lcompleted = res.data.lcompleted; 
          self.lesson.title = res.data.studying.tcoursename; 
          self.lesson.chapter.name = res.data.studying.coursename; 
          self.lesson.chapter.ctimeLength = res.data.studying.studydate; 
          self.lesson.chapter.ccompleted = res.data.ccompleted; 
          self.initFunc();
        })
        .catch(function (err) {
          console.log('用户个人首页 服务器连接错误，原因：' + err);
        })
      },
      changeSign (index) { //将用户签到了的状态提交给后台
        this.isSignIn[index] = '1';
        axios.post('http://192.168.5.101:8080/goc/home/addsign', {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
          console.log('签到 服务器连接成功');
        })
        .catch(function (err) {
          console.log('签到 服务器连接错误，原因：' + err);
        })
      },
      // 根据日期显示当前小结
      changeShowDN (index) {
        // let nowIndex= event.currentTarget.getAttribute('myindex'); 通过自定义属性和事件对象获取当前触发元素的索引
        if (this.summary[4-index] == null) {
          if (index == 4) {
            this.showdaysummaryType = 'todo';
          } else {
            this.showdaysummaryType = 'nothing';
          }
        } else {
          this.showdaysummaryType = 'some';
          this.showdaysummary = this.summary[4-index].daysummary;
          this.showscore = this.summary[4-index].score;
        }
          let targetDis = 207 + 141*index;
          let timer = setInterval (() => {
            let speed = parseInt((targetDis - this.triangleLeft) / 6);
            if (Math.abs(targetDis - this.triangleLeft) < 10) {
              this.triangleLeft = targetDis;
              clearInterval(timer);
            } else {
              this.triangleLeft += speed;
            }
          },5);
      },
      showThisArt (index) {
        this.nowOverArt = index;
        clearInterval(timer);
        let timer = setInterval(()=>{
          if (this.horizontalLineWid < 30) {
            this.horizontalLineWid += 2;
          } else {
            this.horizontalLineWid = 30;
            clearInterval(timer);
          }
        },10)
      },
      notShowThisArt (index) {
        clearInterval(timer);
        let timer = setInterval(()=>{
          if (this.horizontalLineWid > 2) {
            this.horizontalLineWid -= 2;
          } else {
            this.horizontalLineWid = 2;
            this.nowOverArt = -1;
            clearInterval(timer);
          }
        },10)
      },
      menun () {
        window.scrollTo(0, 0);
      },
      initFunc () {
        if (this.summary[1] == null) {
          this.showdaysummaryType = 'nothing';
        } else {
          this.showdaysummaryType = 'some';
          this.showdaysummary = this.summary[1].daysummary;
          this.showscore = this.summary[1].score;
        }
        for (let i = 0; i < this.articles.length; i++) {
          this.articles[i].source = '#/comshow/oneresource?title=' + this.articles[i].title;
          this.articles[i].category = this.articles[i].category.split(";");
        }
      },
      initChart () {
        let data = [
          {value: this.lesson.lcompleted, name: parseInt(this.lesson.lcompleted / this.lesson.ltimeLength * 100) + '%'},
          {value: this.lesson.ltimeLength - this.lesson.lcompleted}
        ];
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
      window.addEventListener('scroll', this.menu);
      this.initChart(); // 放在created中无用
    }
  }
</script>
<style scoped>
  .image_auto{
    width: 100%;
    height: 100%;
  }
  .main{
    width: 1000px;
    /* height:800px; */
    margin: 0px auto;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
  }
  .calendar_box{
    height: 180px;
    width: 100%;
    /* background: lightgray; */
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .summary{
    width: 150px;
    height: 150px;
    background: #EA7C5A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .one_day, .more_calendar{
    height: 150px;
    width: 139px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .one_day{
    border-right: 3px solid rgba(119,132,149,0.2);
  }
  .more_calendar{
    justify-content: center;
  }
  .summary_icon_box, .more_icon_box{
    width: 60px;
    height: 60px;
    /* background: seagreen; */
  }
  .summary_descr, .more_descr{
    width: 200px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 18px;
  }
  .summary_descr{
    color: #FFF;
  }
  .more_descr a{
    color: #EA7C5A;
    text-decoration: none;
  }
  .on_date{
    height: 70px;
    line-height: 70px;
    color: #EA7C5A;
    font-weight: 600;
  }
  .sign_in{
    width: 35px;
    height: 35px;
    /* background: lightblue; */
    /* margin-top: 10px; */
  }
  .not_sign{
    height: 50px;
    line-height: 50px;
    color: #778495;
    cursor: pointer;
  }
  .now_pointer{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .triangle_box{
    height: 30px;
    width: 30px;
    /* background: salmon; */
  }
  .one_summary_box{
    /* height: 100px; */
    width: 996px;
    border: 2px solid #EA7C5A;
    border-radius: 5px;
    background: #fff;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
  .center_content{
    width: 920px;
    line-height: 30px;
    /* background: chartreuse; */
    padding: 20px 0px;
  }
  .center_content div span{
    font-size: 18px;
    color: #EA7C5A;
  }
  .green_box{
    height: 30px;
    width: 84px;
    background: #6ABA9C;
    line-height: 30px;
    display: inline-block;
    margin-right: 15px;
    color: #fff;
    text-align: center;
    border-radius: 3px;
  }
  .module_title{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content:center;
    align-items: flex-end;
    /* background: darkcyan; */
  }
  .title_box{
    height: 35px;
    border-bottom: 3px solid #EA7C5A;
    font-size: 20px;
    color: #EA7C5A;
    font-weight: bold;
  }

  .module_box{
    /* height: 350px; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2px;
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
  .box_center{
    width: 880px;
    /* height: 400px; */
    margin: 0 auto;
    /* padding: 50px 0px; */
    /* background: skyblue; */
  }
  .one_article{
    width: 100%;
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(223, 222, 222);
  }
  .art_title{
    height: 50px;
    line-height: 50px;
    width: 100%;
  }
  .art_title a{
    font-size: 18px;
    text-decoration: none;
    color: #000;
  }
  .horizontal_line{
    height: 3px;
    background: #EA7C5A;
  }
  .art_infor{
    height: 30px;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
    color: rgb(155, 155, 155);
  }
  .type_infor span{
    margin-left: 20px;
  }
  .other_infor span{
    margin-left: 25px;
  }
  .more_box{
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .more_about{
    height: 25px;
    width: 75px;
    line-height: 25px;
    /* background: #999999; */
  }
  .more_about a{
    color: #EA7C5A;
    text-decoration: none;
  }
  .more_about span{
    display: inline-block;
    height: 25px;
    width: 25px;
    margin-left: 10px;
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
  }
  .more_about span img{
    vertical-align: middle;
  }
</style>
