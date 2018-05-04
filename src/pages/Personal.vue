<template>
  <div class="personal">
  	<div class="personal_top">
  		<div class="user-bg">
  			<input type="button" value="上传封面图片" @click="changeModelStatus(true,false)">
  			<img :src="images.url"> 
  		</div>
  		<div class="user-info">
  			<div class="user-head">
  				<img :src="images.url">
  			</div>
  			<div class="infomation">
  				<p><span class="username">{{userinfo.username}}</span><span>{{userinfo.direction}}</span></p>
  				<p><span class="userinfo">{{userinfo.introduce}}</span></p>
  			</div>
  			<div class="editbtn">
  				<input type="button" @click="changeModelStatus(true,true)" value="编辑个人资料">
  			</div>
  		</div>
  	</div>

  	<div class="personal-mid">
  		<div class="mid mid-left">
  		 <calendar :endDate="endDate"
  		 		   @date-click="OndateClick"></calendar>
  		</div>
  		<div class="mid mid-middle">
  			<div class="triangle">
  			</div>
  		</div>
  		<div class="mid mid-right">
  			<div class="nosummary" v-if="!currentSummary&&!editsummary">
          <p>今天，你还没有总结哦~</p>
	  			<p>你没有总结哦~</p>
	  			<button class="sumbtn" @click="editsum">小结</button>
  			</div>
  			<div class="editsummary" v-if="editsummary&&!currentSummary">
  				<p><span class="s-tit">自我评分</span>
  					<span><input type="text" v-model="score"></span>
  					<span class="ps">注：请填写1-10的整数</span>
  				</p>
  				<p>
  					<span class="s-tit">个人小结</span>
  					<textarea v-model="detail"></textarea>
  				</p>
  				<button class="confirmbtn" @click="addsummary">确认</button>
  			</div>
  			<div class="hasSummary" v-if="currentSummary">
  				<p>
					<span class="s-tit">自我评分</span>
  					<span class="score">{{currentSummary.score}}</span>分
  				</p>
  				<p>
  					<span class="s-tit">个人小结</span>
  					<div class="detail">{{currentSummary.daysummary}}</div>
			    </p>
  			</div>
  		</div>
  	</div>

  	<div class="personal-bottom">
  		<ul class="tab-title">
  			<li v-for="(item, index) in personalTab" 
			  	  :key="item"
  				  :class="{active: currentIndex === index}" 
  				  @click="toggleTab(index)">{{item}}</li>
  		</ul>
  		<div class="tab-content" >
  			<div v-show="currentIndex === 0">
          <now-learning :lesson='lesson'></now-learning>
        </div>
  			<div v-show="currentIndex === 1">
  				<study-record></study-record>
  			</div>
  			<div v-show="currentIndex === 2">
         <do-roud :fsQO='fsQO' :fsQT='fsQT' :ssQO='ssQO' :ssQT='ssQT' :ssQR='ssQR' :ssQF='ssQF' :ssQV='ssQV' :tsQO='tsQO' :tsQT='tsQT' :tsQR='tsQR' :tsQF='tsQF' :firstStep='firstStep' :secondStep='secondStep' :thirdStep='thirdStep' @updateRoudInfor="updateRoud"></do-roud>
        </div>
  			<div v-show="currentIndex === 3">
          <study-plan :lesson='lesson' :lessons='lessons' :res='res'></study-plan>   
        </div>
  			<div v-show="currentIndex === 4">
  				<system-message></system-message>
  			</div>
  		</div>
  	</div>
  	<div class="cover" v-if="showDialog||showImgDialog">
  	</div>

		<!-- 项目上传模态框 -->
  <div class="upload_model" v-show="showModel" :style="{ width: this.windowClient.width + 'px', height: this.windowClient.height + 'px' }">
    <div class="center_box">
			<div class="img-dia-content" v-show="!modelShowUserInfor">
        <div class="img-dia-head">
          <input type="file" class="upload" @change="uploadCover" accept="application/mim">
          <span>选择上传的图片</span>
        </div>
        <div class="img-show">
          <img :src="images.url">
        </div>
      </div>
			<div class="dia-content" v-show="modelShowUserInfor">
        <div class="dia-head">
          <img class="user_hp" :src="images.url">
					<div class="upload_hp_box">
						<div class="upload_hp_img">
              <img src="../../static/icons/camera.png" class="image_auto" alt="">
            </div>
            <span>修改头像</span>
					</div>
          <!-- <span><input type="file"></span> -->
        </div>
        <div class="dia-info">
          <p><label>用户名</label> <input type="text" v-model="userinfocopy.username"></p>
          <p><label>手机号</label> <span>{{userinfocopy.phone}}</span></p>
          <p><label>学习方向</label> <span>{{userinfocopy.direction}}</span></p>
          <p><label>性别</label> 
              <select name="text" @change="selectSex"> <!--Supplement an id here instead of using 'text'-->
                <option value="男">男</option> 
                <option value="女">女</option>
              </select>
          </p>
          <p><label>简介</label> <textarea type="select" v-model="userinfocopy.introduce"></textarea></p>
        </div>
      </div>
      <div class="level_box" style="justify-content: center;height: 68px;">
        <div class="close_btn" @click="changeModelStatus(false,true)">取 消</div>
        <div class="submit_btn" style="margin-left: 50px;" @click="changeUserInfo">上 传</div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import Calendar from '../components/calendar'
  import studyRecord from '../components/studyRecord'
  import systemMessage from '../components/systemMessage'
  import nowLearning from '../components/nowLearning'
  import studyPlan from '../components/studyPlan'
  import doRoud from '../components/doRoud'
  import axios from 'axios'
  import qs from 'qs'
  export default {
    data () {
      return {
      	currentIndex: 0,
        showDialog:false,
      	showImgDialog:false,
      	editsummary:false,
      	score: 0,
      	detail: '',
      	screenWidth:document.body.clientWidth,
      	images:{
      		url:'./../../static/images/bg.jpg'
      	},
      	userinfo: {
      		username:'username',
      		direction: 1,
          phone: 123456,
      		introduce:'个人资料',
          head:'',//头像图片路径
          cover: ''//封面图片路径
      	},
        userinfocopy: {},
        currentSummary:{},
      	endDate:{
      		year: new Date().getFullYear(),
      		month: new Date().getMonth()+ 1,
      		day: new Date().getDate(),
          date: new Date().getFullYear() + '-' + (new Date().getMonth()+ 1) + '-' + new Date().getDate()
      	},
        dateClick:{
      		year: new Date().getFullYear(),
      		month: new Date().getMonth()+ 1,
      		day: new Date().getDate()
      	},
        todaySum:{},
      	DaySummary: false,
      	DaySummaryArrays:[],
      	personalTab:['当前学习','学习记录','路线制定','培养计划','系统小结'],
        myCover: new window.FormData(),
			// 当前学习模块的数据  培养计划也有使用到这块数据
				lesson: {
          ltimeLength: 111,
          lcompleted: 0,
          title: 'HTML+CSS',
          chapter: {
            name: 'CSS基础',
            ctimeLength: 10,
            ccompleted: 2,
          }
				},
			// 培养计划模块数据
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
        ],
        res: {
          data: {
            course: [{
			          tcourseid: 1,
			          tcoursename: "HTML+CSS"
		          },[
              {
			          courseid: 1,
			          level: 1,
			          coursename: "HTML基础",
			          label: "基础",
			          klabel: "HTML基础用法",
			          astudydate: 7,
			          bstudydate: 5
		          },{
			          courseid: 2,
			          level: 1,
			          coursename: "CSS基础",
			          label: "其他",
			          klabel: "CSS基础用法",
			          astudydate: 7,
			          bstudydate: 5
              },{
			          courseid: 2,
			          level: 1,
			          coursename: "CSS基础",
			          label: "其他",
			          klabel: "CSS基础用法",
			          astudydate: 7,
			          bstudydate: 5
              }],{
			          tcourseid: 1,
			          tcoursename: "JS"
		          },[
              {
			          courseid: 1,
			          level: 1,
			          coursename: "HTML基础",
			          label: "基础",
			          klabel: "HTML基础用法",
			          astudydate: 7,
			          bstudydate: 5
		          },{
			          courseid: 2,
			          level: 1,
			          coursename: "CSS基础",
			          label: "其他",
			          klabel: "CSS基础用法",
			          astudydate: 7,
			          bstudydate: 5
              },{
			          courseid: 2,
			          level: 1,
			          coursename: "CSS基础",
			          label: "其他",
			          klabel: "CSS基础用法",
			          astudydate: 7,
			          bstudydate: 5
              }],{
			          tcourseid: 1,
			          tcoursename: "vue element"
		          },[
              {
			          courseid: 1,
			          level: 1,
			          coursename: "HTML基础",
			          label: "基础",
			          klabel: "HTML基础用法",
			          astudydate: 7,
			          bstudydate: 5
		          },{
			          courseid: 2,
			          level: 1,
			          coursename: "CSS基础",
			          label: "其他",
			          klabel: "CSS基础用法",
			          astudydate: 7,
			          bstudydate: 5
              },{
			          courseid: 2,
			          level: 1,
			          coursename: "CSS基础",
			          label: "其他",
			          klabel: "CSS基础用法",
			          astudydate: 7,
			          bstudydate: 5
              }]
            ],
            studycourses: [{
		            userid: 111,
		            courseid: 1,
		            tcourseid: 1,
		            datenum: 5,
		            startdate: "四月 21, 2018",
		            enddate: "四月 26, 2018"
	            }, {
		            userid: 111,
		            courseid: 2,
		            tcourseid: 1,
		            datenum: 6,
		            startdate: "四月 16, 2018",
		            enddate: "四月 23, 2018"
	            }
            ],
            countstunus: [21, 17, 13]
          }
				},
			// 路线制定模块数据
        // 第一步当前选择
        fsQO: '前端',
        fsQT: 'web前端',
        // 第二步当前选择
        ssQO: '轻松',
        ssQT: '没有了解过编程',
        ssQR: '40%以下',
        ssQF: '较差',
        ssQV: '较差',
        // 第三步当前选择
        tsQO: '就业需要',
        tsQT: '主流技术',
        tsQR: '看视频',
				tsQF: '7小时以上',
        firstStep: [],
        secondStep: [],
        thirdStep: [],
			// 弹框数据
			  windowClient: {},
				showModel: false,   // 弹框是否显示
				modelShowUserInfor: true
      }
    },
    components: {
    	Calendar,
    	studyRecord,
    	systemMessage,
      studyPlan,
      nowLearning,
      doRoud
    },
    computed: {
    	todaySummary() {
	      	this.summary.forEach(item => {
	      		if(item.year === this.endDate.year) {
	      			if(item.month[this.endDate.month - 1].summarys[this.endDate.day -1]){
	      				return false
	      			}
	      		}
	      	})
	      	return true
    	},
      hasSum(){
      }
		},
		created () {
      this.getUserInfo();
			this.getSummary();
			this.studyPlanGetData();
		},
    methods: {
			// 个人中心切换模块
      toggleTab (index) {
				// document.documentElement.style.overflow='hidden';
				switch (index) {
					case 0:
						console.log('当前学习模块');
						break;
					case 1:
						console.log('学习记录模块');
						break;
					case 2:
						console.log('路线制定模块');
						this.getRoudInfor();
						break;
					case 3:
					  console.log('培养计划模块');
						// this.studyPlanGetData();
						break;
					default:
						console.log('系统小结模块');
				}
      	this.currentIndex = index;
      },
      //点击日期
      OndateClick(dateClick){
        console.log(dateClick)
      	// this.dateClick = dateClick
        if(dateClick!==null){
          this.currentSummary = dateClick
          console.log(this.currentSummary)
          console.log(dateClick.score)
          console.log(dateClick.daysummary)
        }else{
          this.currentSummary = null
          console.log('null')
        }
      },
      //编辑总结
      editsum() {
      	this.editsummary = true
      },
      addsummary() {
      	this.editsummary = false
      	this.DaySummary = true
      	let sum = {
	      	 score:this.score,
	      	 daysummary:this.detail
      	}
        axios.post('http://192.168.5.101:8080/goc/center/addDaySummary', qs.stringify(sum))
        .then(res=> {
          console.log(res)
        })
      },
      // 获取个人信息  刚进个人中心
      getUserInfo() {
				const self = this;
        axios.post('http://192.168.5.101:8080/goc/center/firstPage', {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
					console.log('个人中心信息 服务器连接成功');
					console.log(res.data);
					let _data = res.data.user
          self.userinfo.username = _data.username
          self.userinfo.direction =  _data.direction
          self.userinfo.introduce = _data.introduce
          self.userinfo.phone = _data.phone
					self.userinfocopy = self.userinfo;

					self.lesson.ltimeLength = res.data.ltimeLength; 
          self.lesson.lcompleted = res.data.lcompleted; 
          self.lesson.title = res.data.studying.tcoursename; 
          self.lesson.chapter.ctimeLength = res.data.studying.studydate; 
          self.lesson.chapter.ccompleted = res.data.ccompleted;
					console.log(self.lesson);
        })
        .catch(function (err) {
          console.log('个人中心信息 服务器连接错误，原因：' + err);
				})
      },
      // 修改个人信息
      changeUserInfo() {
        this.changeModelStatus(false,true);
        let person = {
          'name': this.userinfocopy.username,
          'head': '123.png',
          'sex': this.userinfocopy.sex,
          'contact': '110@qq.com',
          'introduce': this.userinfocopy.introduce,
          'age': '12'
        }
        axios.post('http://192.168.5.101:8080/goc/center/changeUser',qs.stringify(person))
        .then((response) => {
          console.log(response)
          this.getUserInfo()
        })
      },
      getSummary() {
        axios.post('http://192.168.5.101:8080/goc/center/seldaysum', qs.stringify({
          'date': this.endDate.date
        }))
        .then(res => {
          console.log(res.data)
          let _data = res.data
          this.currentSummary = _data
        })
      },
      // 上传图片
      uploadCover(e) {
        let cover = e.target.files[0]
        let CoverType = e.target.files[0].type.split('/')[0]
        console.log(e.target.files[0])
        if(CoverType === 'image') {
          this.myCover.append('image' , cover)
        }else {
          //something
        }
      },
      //点击上传
      handleUpload() {
        let self = this
        axios.post('http://192.168.5.101:8080/goc/center/changeCover', self.myCover, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log('success')
          this.hideImgDialog()
        })
        .catch(err => {
          console.log(err)
        })
      },
      selectSex(e){
        this.userinfocopy.sex = e.target.value
			},
			// 从后台获取当前学习模块信息  此函数与获取个人信息重合了
			getLearningData () {
				const self = this;
        axios.post('http://192.168.5.101:8080/goc/home/gethome', {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
          console.log('获取当前学习信息 服务器连接成功');
          self.lesson.ltimeLength = res.data.ltimeLength; 
          self.lesson.lcompleted = res.data.lcompleted; 
          self.lesson.title = res.data.studying.tcoursename; 
          self.lesson.chapter.ctimeLength = res.data.studying.studydate; 
          self.lesson.chapter.ccompleted = res.data.ccompleted; 
        })
        .catch(function (err) {
          console.log('获取当前学习信息 服务器连接错误，原因：' + err);
        })
			},
			// 从后台获取培养计划的信息
			// 培养计划axios  此函数中的信息用到了当前学习模块中的信息
      studyPlanGetData () {
        const self = this;
        axios.post('http://192.168.5.101:8080/goc/course/showTc', {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
          console.log('培养计划 服务器连接成功');
          self.dealData(res.data.course);  // lessons.lessonName lessons.chapters.cName  lessons.chapters.tipType  lessons.chapters.ctimeLength  
          console.log('调用完第一个函数');
          for (let i = 0; i < self.lessons.length; i++) {
            self.lessons[i].ltimeLength = res.data.countstunus[i];
          }  // lessons.ltimeLength
          console.log('执行完一个循环');
          self.setChapterInfor(res.data.studycourses);  // lessons.chapters.learnState  lessons.chapters.ccompleted   lessons.lcompleted
          console.log('调用完第二个函数');
          for (let i = 0; i < self.lessons.length; i++) {
            self.lessons[i].completedPercent = parseInt(self.lessons[i].lcompleted / self.lessons[i].ltimeLength * 100) + '%';
            for (let j = 0; j < self.lessons[i].chapters.length; j++) {
							self.lessons[i].chapters[j].cHref = '#/comshow/studypage?name=' + self.lessons[i].chapters[j].cName;
            }
					}  // lessons.completedPercent  lessons.chapters.cHref
					console.log('后台加载来的培养计划');
					console.log(self.lessons);
					console.log(self.res);
        })
        .catch(function (err) {
          console.log('培养计划 服务器连接错误，原因：' + err);
        })
      },
      // 章节状态设置以及已学天数设置  以及学习的课程的学习时长设置lessons.lcompleted
      setChapterInfor (learnedChap) {
				console.log(learnedChap.length);
        let cLength = learnedChap.length;
        let count = 0;
				let lessonNo = 0;  // 计算第几个课程是学过的 从第0个开始计算
				this.lessons[0].lcompleted = this.lesson.lcompleted;
        for (let i = 0; i < this.lessons.length; i++) {
          this.lessons[i].lcompleted = this.lessons[i].ltimeLength;
          let remainNum = cLength - count; // 剩余未算的章节数
          if (remainNum > 0) {
            if (remainNum < this.lessons[i].chapters.length) {
              for (let j = 0; j < remainNum; j++) {
                this.lessons[i].chapters[j].learnState = 'did';
                this.lessons[i].chapters[j].ccompleted = learnedChap[j + count].datenum;
              }
              this.lessons[i].chapters[remainNum].learnState = 'doing';
              this.lessons[i].chapters[remainNum].ccompleted = this.lesson.chapter.ccompleted;
              break;
            } else if (remainNum == this.lessons[i].chapters.length) {
              for (let j = 0; j < remainNum; j++) {
                this.lessons[i].chapters[j].learnState = 'did';
                this.lessons[i].chapters[j].ccompleted = learnedChap[j + count].datenum;
              }
              this.lessons[i + 1].chapters[0].learnState = 'doing';
							this.lessons[i + 1].chapters[0].ccompleted = this.lesson.chapter.ccompleted;
							lessonNo += 1;
              break;
            } else {
              for (let j = 0; j < this.lessons[i].chapters.length; j++) {
                this.lessons[i].chapters[j].learnState = 'did';
                this.lessons[i].chapters[j].ccompleted = learnedChap[j + count].datenum;
              }
							count += this.lessons[i].chapters.length;
							lessonNo += 1;
            }
          }
        }
        this.lessons[lessonNo].lcompleted = this.lesson.lcompleted;
      },
      // 处理培养计划中全部课程的数据
      dealData (courses) {
        this.lessons = [];
        for (let i = 0; i < courses.length / 2; i++) {
          let temJson = {};
          temJson.lessonName = courses[i*2].tcoursename;
          temJson.lcompleted = 0;
          temJson.chapters = [];
          for (let j = 0; j < courses[i*2 + 1].length; j++) {
            let oneChapter = courses[i*2 + 1][j];
            let myCharpter = {};
            myCharpter.cName = oneChapter.coursename;
            myCharpter.ctimeLength = oneChapter.astudydate;
            myCharpter.tipType = oneChapter.label;
            myCharpter.learnState = 'notdo';
            myCharpter.ccompleted = 0;
            temJson.chapters.push(myCharpter);
          }
          this.lessons.push(temJson);
        }
			},
			// 从后台获取路线制定模块的信息
      getRoudInfor () {
				const self = this;
        axios.post('http://192.168.5.101:8080/goc/route/showRoute', {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
					console.log('路线参数获取 服务器连接成功');
					self.firstStep = res.data.direct.split(';');
					self.secondStep = res.data.questiontwo.split(';');
					self.thirdStep = res.data.questionthree.split(';');
					self.fsQO = self.firstStep[0];
        	self.fsQT = self.firstStep[1];
        	self.ssQO = self.secondStep[0];
        	self.ssQT = self.secondStep[1];
        	self.ssQR = self.secondStep[2];
        	self.ssQF = self.secondStep[3];
        	self.ssQV = self.secondStep[4];
        	self.tsQO = self.thirdStep[0];
        	self.tsQT = self.thirdStep[1];
        	self.tsQR = self.thirdStep[2];
        	self.tsQF = self.thirdStep[3];
        })
        .catch(function (err) {
          console.log('路线参数获取 服务器连接错误，原因：' + err);
				})
			},
			updateRoud (val) {
        this.fsQO = val.fsQO;
      	this.fsQT = val.fsQT;
      	this.ssQO = val.ssQO;
      	this.ssQT = val.ssQT;
      	this.ssQR = val.ssQR;
      	this.ssQF = val.ssQF;
      	this.ssQV = val.ssQV;

      	this.tsQO = val.tsQO;
      	this.tsQT = val.tsQT;
      	this.tsQR = val.tsQR;
      	this.tsQF = val.tsQF;

      	this.firstStep = val.firstStep;
      	this.secondStep = val.secondStep;
      	this.thirdStep = val.thirdStep;
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
      },
			changeModelStatus (model,content) {
        this.showModel = model;  // 表示是否展示模态框
        this.modelShowUserInfor = content;  // 表示展示内容为背景图片还是个人信息
      }
    },
    mounted () {
			this.windowClient = this.client();
    	var that = this
    	window.onresize = () => {
    		return (() => {
    			window.screenWidth = document.body.clientWidth
    			that.screenWidth = window.screenWidth
    		})()
			}
    },
    watch: {
    	screenWidth (val) {
    		this.screenWidth = val
    		if(this.showDialog === true){
    			this.showDialogItem()
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
	.personal{
		width:1000px;
		min-height:800px;
		margin:0 auto;
		padding-top:30px;
	}
	/*顶部样式*/
	.personal_top{
		height:280px;
		padding:2px;
		background:white
	}
	.user-bg{
		box-sizing:border-box;
		position:relative;
		width:100%;
		height:140px;
		overflow:hidden
	}
	.user-bg input{
		position:absolute;
		right:15px;
		top:15px;
		background:transparent;
		border:1px solid lightgray;
		color:lightgray;
		border-radius:3px;
		padding:7px 12px;
		font-family:"微软雅黑";
	}
	.user-head{
		float:left;
		position:relative;
		width:120px;
		height:120px;
		border:5px solid white;
		margin:-60px 40px 0 40px;
	}
	.user-head img{
		width:100%;
		height:100%;
	}
	.infomation{
		float:left;
	}
	.infomation span {
		padding-right:20px;
	}
	.infomation .username{
		font-weight:bold
	}
	.infomation .userinfo {
		color:#797979;
		font-size:14px
	}
	.editbtn {
		float:right;
		margin:50px 15px 0 0;
	}
	.editbtn input{
		background:transparent;
		border:1px solid #EA7C5A;
		color:#EA7C5A;
		font-family:"微软雅黑";
		border-radius:3px;
		padding:7px 12px
	}
	/*中间样式*/
	.personal-mid{
		width:100%;
		height:340px;
		margin-top:30px;
	}
	.mid{
		height:100%;
		float:left;
	}
	.mid-left{
		width:350px;
	}
	.mid-middle{
		width:100px;
	}
	.triangle{
		margin:130px auto;
		width: 0px;
		height: 0px;
		border-width: 16px;
		border-style: solid;
		border-color: transparent transparent transparent #EA7C5A;
	}
	.mid-right{
		position:relative;
		width:550px;
	}
	.nosummary {
		width:200px;
		height:100px;
		color:#797979;
		font-size:14px;
		margin:110px auto;
		text-align:center
	}
	.sumbtn,.confirmbtn{
		font-family:"微软雅黑";
		background:transparent;
		border:1px solid #EA7C5A;
		color:#EA7C5A;
		font-weight:bold;
		border-radius:5px;
		margin-top:5px;
	}
	.sumbtn {
		display:inline-block;
		padding:3px 30px;
	}
	.confirmbtn {
		display:block;
		width:80px;
		height:25px;
		margin:0 auto;
	}
	.hasSummary, .editsummary {
		padding:20px 40px;
		position:relative
	}
	.hasSummary p:first-child,.editsummary p:first-child{
		padding-bottom:10px
	}
	.hasSummary span,.editsummary span{
		margin-right:10px;
	}
	.hasSummary .score{
		color:#EA7C5A;
		font-weight:bold
	}
	.hasSummary .detail{
		width:350px;
		float:left;
		word-wrap:break-word;
	}
	.editsummary textarea {
		width: 320px;
		height: 100px;
		border-radius:3px;
		font-family:"微软雅黑";
		border:1px solid gray;
		resize: none;
	}
	.editsummary input {
		width:50px;
		height:20px;
		border:transparent;
		border:1px solid gray;
		border-radius:3px
	}
	.s-tit{
		font-size:14px;
		vertical-align:top;
		background:#6ABA9C;
		float:left;
		color:white;
		padding:2px 5px;
		display:inline-block;
		border-radius:3px;
	}
	.ps{
		color:#797979;
		font-size:13px
	}
	.mid-left,.mid-right {
		background:white
	}

	/*底部样式*/
	.personal-bottom{
		width:100%;
		margin:30px 0;
	}
	.tab-title li{
		display:inline-block;
		margin-right:25px;
		height:50px;
		line-height:50px;
		cursor:pointer;
	}
	.active{
		border-bottom:3px solid #6ABA9C;
	}
	.tab-content{
		background:white;
		min-height: 350px;
	}

	/*对话框*/
	.dialog{
		position:absolute;
    padding-top: 30px;
		top:300px;
		left:650px;
		width:600px;
		height:400px;
		z-index:100;
		background:white;
	}
  .img-dialog{
    position:absolute;
    top:350px;
    left:650px;
    width:400px;
    height:350px;
    z-index:100;
    background:white;
  }
	.cover{
		position:absolute;
		width:100%;
		height:100%;
		background:black;
		z-index:50;
		top:0;
		left:0;
		opacity:0.7;
	}
  .dia-head{
    width: 180px;
    height: 100px;
    display: inline-block;
    vertical-align: top;
		position: relative;
  }
  .user_hp{
    width: 100px;
    height: 100px;
    margin: 20px 40px;
  }
	.upload_hp_box{
		width: 100px;
		height: 100px;
		position: absolute;
		background: rgba(0,0,0,0.7);
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 10;
		top: 20px;
		left: 40px;
    color: #fff;
    font-size: 10px;
		justify-content: center;
    cursor: pointer;
	}
  .upload_hp_img{
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }
  .dia-info{
    display: inline-block;
  }
  .dia-info p{
    line-height: 30px;
  }
  .dia-info label{
    width: 75px;
    display: inline-block;
    vertical-align: top
  }
  .dia-info input {
    height: 30px;
    width: 200px;
    border-radius: 4px;
    border: 1px solid #999;
    text-indent: 10px;
  }
  .dia-info select {
    height: 30px;
    width: 100px;
    border-radius: 4px;
    border: 1px solid #999;
    text-indent: 10px;
  }
  .dia-info textarea {
    height: 60px;
    width: 200px;
    font-family: "微软雅黑";
    border-radius: 4px;
    border: 1px solid #999;
    text-indent: 10px;
    resize:none;
  }
  .dia-footer{
    width: 280px;
    height: 60px;
    margin: 20px auto;
  }

  .dia-footer span{
    display: inline-block;
    font-size: 12px;
    padding:5px 30px;
    margin-right:50px; 
    background-color: #EA7C5A;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  .img-show {
    width: 100%;
    height: 200px;
    padding: 0 30px;
    box-sizing:border-box;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .img-show img{
    width: 100%;
  }
  .img-dia-head {
    height: 50px;
    padding: 0px 30px;
    margin-bottom: 30px;
  }
  .upload{
    position: absolute;
    opacity: 0;
    width: 160px;
    height: 30px;
    vertical-align: top;
  }
  .img-dia-head span{
    display: inline-block;
    padding:6px 15px;
    background-color: #EA7C5A;
    color: white;
    font-size: 14px;
    border-radius: 3px;
    z-index: 100;
  }
  .img-dia-footer {
    width: 210px;
    height: 60px;
    margin: 20px auto;
  }
  .img-dia-footer span {
    display: inline-block;
    padding:5px 25px;
    background-color: #EA7C5A;
    color: white;
    border-radius: 4px;
    margin-right: 20px;
  }
	/* 模态框样式 */
  .upload_model{
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center_box{
    height: 400px;
    width: 650px;
    background: #fff;
    overflow-y: auto;
		padding-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* padding: 15px 0px; */
  }
  .level_box{
    width: 90%;
    /* height: 100px; */
    /* background: #6ABA9C; */
    margin: 20px auto 0px;
    display: flex;
    justify-content: space-between;
  }
  .close_btn, .submit_btn{
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding: 0px 15px;
    background: #EA7C5A;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
</style>


