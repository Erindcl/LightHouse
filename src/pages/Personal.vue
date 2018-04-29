<template>
  <div class="personal">
  	<div class="personal_top">
  		<div class="user-bg">
  			<input type="button" value="上传封面图片" @click="showDialogItem">
  			<img :src="images.url"> 
  		</div>
  		<div class="user-info">
  			<div class="user-head">
  				<img :src="images.url">
  			</div>
  			<div class="infomation">
  				<p><span class="username">{{userinfo.name}}</span><span>{{userinfo.job}}</span></p>
  				<p><span class="userinfo">{{userinfo.info}}</span></p>
  			</div>
  			<div class="editbtn">
  				<input type="button" @click="showDialogItem" value="编辑个人资料">
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
  			<div class="nosummary" v-if="!editsummary && todaySummary && !DaySummary">
	  			<p >你还没有总结哦~</p>
	  			<button class="sumbtn" @click="editsum">小结</button>
  			</div>
  			<div class="editsummary" v-if="editsummary">
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
  			<div class="hasSummary" v-if="DaySummary">
  				<p>
					<span class="s-tit">自我评分</span>
  					<span class="score">{{DaySummaryArrays[dateClick.month-1].summarys[dateClick.day-1].score}}</span>分
  				</p>
  				<p>
  					<span class="s-tit">个人小结</span>
  					<div class="detail">{{DaySummaryArrays[dateClick.month-1].summarys[dateClick.day-1].detail}}</div>
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
					<now-learning></now-learning>
				</div>
  			<div v-show="currentIndex === 1">
  				<study-record></study-record>
  			</div>
  			<div v-show="currentIndex === 2">
					<do-roud></do-roud>
				</div>
  			<div v-show="currentIndex === 3">
					<study-plan></study-plan>
				</div>
  			<div v-show="currentIndex === 4">
  				<system-message></system-message>
  			</div>
  		</div>
  	</div>
  	<div class="dialog" ref="dialog1" v-show="showDialog">
  		<div @click="hideDialog">X</div>
  	</div>
  	<div class="cover" v-if="showDialog">
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
export default {
    data () {
      return {
      	currentIndex: 0,
      	showDialog:false,
      	editsummary:false,
      	score: 0,
      	detail: '',
      	screenWidth:document.body.clientWidth,
      	images:{
      		url:'./../static/images/bg.jpg'
      	},
      	userinfo: {
      		name:'username',
      		job:'前端',
      		info:'个人资料'
      	},
      	endDate:{
      		year: new Date().getFullYear(),
      		month: new Date().getMonth()+ 1,
      		day: new Date().getDate()
      	},
      	summary:[{
      		year: 2018,
      		month: [
      			{
      				summarys:[
      				'111',
      				'444'
      				]
      			},
      			{
      				summarys:[
      				'111',
      				]
      			},
      			{
      				summarys:[
      				'111',
      				'222',
      				]
      			},
      			{
      				summarys:[
      					{
      						score:'1',
      						detail:'111'
      					},
      					{
      						score:'2',
      						detail:'222'
      					},
      					{
      						score:'3',
      						detail:'333'
      					},
      					{}
      				]
      			}
      		]
      	}],
      	dateClick:{
      		year: new Date().getFullYear(),
      		month: new Date().getMonth()+ 1,
      		day: new Date().getDate()
      	},
      	DaySummary: false,
      	DaySummaryArrays:[],
      	personalTab:['当前学习','学习记录','路线制定','培养计划','系统小结']
      }
    },
    components: {
    	Calendar,
    	studyRecord,
			systemMessage,
			nowLearning,
			studyPlan,
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
    	}
    },
    methods: {
      toggleTab (index) {
      	this.currentIndex = index;
      	// document.documentElement.style.overflow='hidden';
      },
      OndateClick(dateClick){
    	  this.DaySummaryArray()
      	// console.log(this.DaySummary)
      	this.dateClick = dateClick
      	this.summary.forEach(item => {
      		if(item.year === this.dateClick.year) {
      			if(item.month[this.dateClick.month - 1].summarys[this.dateClick.day -1].score){
      				console.log(item.month[this.dateClick.month - 1].summarys[this.dateClick.day -1])
      				this.DaySummary = true
      			}else {
      				this.DaySummary = false
      			}
      		}
      	})
      },
      showDialogItem () {
      	this.showDialog = true;
      	document.documentElement.style.overflow ='hidden'
      	document.documentElement.style.paddingRight = 17 + 'px'
      	this.$refs.dialog1.style.left = (this.screenWidth/2 - 300)+'px'
      },
      hideDialog () {
      	this.showDialog = false;
      	document.documentElement.style.paddingRight = 0
      	document.documentElement.style.overflow ='scroll'
      },
      editsum() {
      	this.editsummary = true
      },
      addsummary() {
    	  this.DaySummaryArray()
      	this.editsummary = false
      	this.DaySummary = true
      	let a = {
	      	 score:this.score,
	      	 detail:this.detail
      	}
      	this.summary.forEach(item => {
      		if(item.year === this.dateClick.year) {
      			item.month[this.dateClick.month - 1].summarys[this.dateClick.day -1] = a
      			console.log(item.month[this.dateClick.month - 1].summarys[this.dateClick.day -1])
      		}
      	})
      	// console.log(this.summary)
      },
      DaySummaryArray() {
      	this.summary.forEach(item => {
      		if(item.year === this.dateClick.year) {
      			// console.log(item.month)
      			this.DaySummaryArrays = item.month
      			// console.log(this.DaySummaryArrays)
      		}
      	})
      }
    },
    mounted () {
    	var that = this
    	window.onresize = () => {
    		return (() => {
    			window.screenWidth = document.body.clientWidth
    			that.screenWidth = window.screenWidth
    		})()
    	},
    	this.DaySummaryArray()
      console.log("11" + this.DaySummary)
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
		height:320px;
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
		min-height:350px;
	}

	/*对话框*/
	.dialog{
		position:absolute;
		top:300px;
		left:650px;
		width:600px;
		height:400px;
		z-index:100;
		background:white;
	}
	.cover{
		position:absolute;
		width:100%;
		height:100%;
		background:gray;
		z-index:50;
		top:0;
		left:0;
		opacity:0.5;
	}
</style>


