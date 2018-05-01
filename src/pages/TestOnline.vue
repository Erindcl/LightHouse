<template>
	<div class="test-online">
		<div class="go_back" @click="goBack()">
      <div class="back_icon"><img src="../../static/icons/triangle.png" class="image_auto" alt=""/></div>
      <div class="back_text">返回</div>
    </div>
		<div class="test-wrapper">
			<div class="test-title">
				<span>HTML</span>
				<span class="timers"><timer :status="status"  @toggleStatus="toggleStatus"></timer></span>
			</div>

			<div class="test-content">
				<ul>
					<li class="queslist" v-for="(item, index) in testlist" :key="item.id">
						<span class="ques-type"> {{ item.testid + ' ' + item.type }} </span>
						<span class="que-title"> {{ item.title }} </span>
						<ul>
							<li class="optionlist">
								<span class="radio" data-id='A' @click="handleClick($event, item.testid - 1)">
									<span class="radio-content" v-show="ansArray[item.testid-1] == 'A'"></span>
								</span>
								<span class="radio-value">A</span>
								<span class="list-content">{{item.ansA}}</span>
							</li>
							<li class="optionlist">
								<span class="radio" data-id='B' @click="handleClick($event, item.testid - 1)">
									<span class="radio-content" v-show="ansArray[item.testid-1] == 'B'"></span>
								</span>
								<span class="radio-value">B</span>
								<span class="list-content">{{item.ansB}}</span>
							</li>
							<li class="optionlist">
								<span class="radio" data-id='C' @click="handleClick($event, item.testid - 1)">
									<span class="radio-content" v-show="ansArray[item.testid-1] == 'C'"></span>
								</span>
								<span class="radio-value">C</span>
								<span class="list-content">{{item.ansC}}</span>
							</li>
							<li class="optionlist">
								<span class="radio" data-id='D' @click="handleClick($event, item.testid - 1)">
									<span class="radio-content" v-show="ansArray[item.testid-1] == 'D'"></span>
								</span>
								<span class="radio-value">D</span>
								<span class="list-content">{{item.ansD}}</span>
							</li>

							<div class="correctAns" v-show="status === 2 && ansArray[item.testid-1] !== item.anstrue">
								 <div class="cor-content" >
									<span>你的答案: {{ansArray[item.testid-1] === -1 ? '' : ansArray[item.testid-1]}}</span>
									<span>正确答案：{{item.anstrue}}</span>
									<p><a>解析:</a> <b>{{item.analysis}}</b></p>
								 </div>
							</div>
						</ul>
					</li> 
				</ul>
			</div>
		</div>
		<div class="cover" v-show="showDialogs"></div>
		<div class="tip" v-show="showDialogs" ref="dialog">
			<dialog-block :message="message"  
						  :showDialogs="showDialogs"
						  @toggleStatusDialog="toggleStatusDialog">
			</dialog-block>
		</div>
	</div>
</template>

<script>
import DialogBlock from '../components/Dialog'
import Timer from '../components/timer'
import qs from 'qs'
import axios from 'axios'
export default {
	data() {
		return {
      		screenWidth:document.body.clientWidth,
			status: 0,
			testlist:[
				{
					analysis: 'ass',
					ansA: 'ass',
					ansB: 'ass',
					ansC: 'ass',
					ansD: 'ass',
					anstrue: 'B',
					type: '选择题',
					belong: '1',
					testid: '1',
					title: 'aswfevdf'
				},{
					analysis: 'ass',
					ansA: 'ass',
					ansB: 'ass',
					ansC: 'ass',
					ansD: 'ass',
					anstrue: 'A',
					type: '选择题',
					belong: '1',
					testid: '2',
					title: 'aswfevdf'
				},{
					analysis: 'ass',
					ansA: 'ass',
					ansB: 'ass',
					ansC: 'ass',
					ansD: 'ass',
					anstrue: 'D',
					type: '选择题',
					belong: '1',
					testid: '3',
					title: 'aswfevdf'
				},{
					analysis: 'ass',
					ansA: 'ass',
					ansB: 'ass',
					ansC: 'ass',
					ansD: 'ass',
					anstrue: 'A',
					type: '选择题',
					belong: '1',
					testid: '4',
					title: 'aswfevdf'
				}
			],
			ansArray: [],
			showDialogs: false,
			message:''
		}
	},
	components: {
		DialogBlock,
		Timer
	},
	computed: {
	},
	methods: {
		toggleOverStatus() {
		},
		toggleStatusDialog(status) {
			this.showDialogs = status
			document.documentElement.style.overflow ='scroll'
			document.documentElement.style.paddingRight = 0 + 'px'
		},
		toggleStatus (status) {
			this.status = status
			if(this.status === 2){
				let len = this.testlist.length
				for(let i = 0;i < len;i++) {
					if(this.ansArray[i] == null) {
						this.ansArray[i] = -1
						this.message = '还有试题没写完'
						this.status = 1
						this.showDialogItem()
						return
					}
				}
			}
		},
		showDialogItem () {
			this.showDialogs = true;
			document.documentElement.style.overflow ='hidden'
			document.documentElement.style.paddingRight = 17 + 'px'
			this.$refs.dialog.style.left = (this.screenWidth/2 - 200)+'px'
			console.log(this.message)
		},
		// 获取题目
		getTestList(){
			axios.post('http://192.168.5.101:8080/goc/tests/tsDetailed', qs.stringify({
				'belong': '1'
			}))
			.then(res => {
				console.log(res.data)
				let _data = res.data
				this.testlist = _data
			})
			.catch(err => {
				console.log(err)
			})
		},
		handleClick(e,belong) {
			if(this.status === 0) {
				this.message = '请点击开始按钮'
				this.showDialogItem()
				return
			}
			if(this.status === 2) {
				console.log('已结束测试')
				return
			}
			this.$set(this.ansArray, belong, e.currentTarget.getAttribute('data-id'));
		},
		// 返回上一页函数
		goBack () {
      window.history.go(-1);
    }
	},
	computed: {
	},
	watch: {
	},
	mounted() {
		this.getTestList()
	}
}
</script>
<style>
  .image_auto{
    width: 100%;
    height: 100%;
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
  .back_icon img, .study_stutas_icon img{
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
	.trangle{
		content: '';
		width:0;
		height: 0;
		border-width: 12px;
		position: absolute;
		top: 13px;
		left: -9px;
		border-style: solid;
		border-color: transparent #EA7E5c transparent transparent;
	}
	.test-online {
		width: 1000px;
		margin: 0 auto;
		min-height: 800px;
	}
	.test-wrapper{
		background-color: white;
		width: 100%;
		min-height: 800px;
	}
	.test-title{
		height: 50px;
		position: relative;
		line-height: 50px;
		padding: 10px 40px;
	}
	.test-title span:first-child{
		font-size: 28px
	}

	.timers{
		float: right;
		line-height: 50px;
		height: 50px;
		padding-top: 10px;
		display: inline-block;
	}

	/*question*/
	.test-content {
		padding: 10px 35px
	}
	.queslist {
		background-color: #f2f3f5;
		min-height: 130px;
		margin-bottom: 35px;
		padding: 10px;
		position: relative;
	}
	.ques-type{
		height: 100%;
		display: inline-block;
		/*background-color: red;*/
		width: 70px;
		color: green;
		vertical-align: top
	}
	.que-title {
		width: 800px;
		padding-left: 5px;
		padding-bottom: 10px;
		line-height: 25px;
		display: inline-block;
		word-wrap:break-word;
	}
	.optionlist{
		height: 30px;
		line-height: 30px;
		margin-left: 70px;
	}
	.radio{
		width: 12px;
		height: 12px;
		line-height: 12px;
		display: inline-block;
		background: transparent;
		margin:7px 7px 7px 7px;
		border-radius: 50%;
		border: 2px solid #ccc
	}
	.radio-content{
		display: inline-block;
		width: 6px;
		height: 6px;
		line-height: 6px;
		margin: 3px 3px;
		border-radius: 50%;
		background-color: #ccc
	}
	.list-content,.radio-value{
		height: 30px;
		line-height: 30px;
		display: inline-block;
		margin:0 5px;
		/*background-color: green;*/
		vertical-align: top;
	}
	/*正确答案*/
	.correctAns{
		margin: 10px 0 0 75px;
		border-top: 2px solid #ccc;
	}
	.correctAns span {
		padding: 5px 150px 0 0;
	}
	.cor-content {
		padding-top: 20px;
	}
	.cor-content b {
		width: 750px;
		font-weight: normal;
		line-height: 25px;
		word-wrap: break-word;
		display: inline-block;
	}
	.cor-content a{
		display: inline-block;
		padding-right: 10px;
		font-weight: bold;
		float: left;
	}


	/*底部*/

	.tip{
		width: 400px;
		height: 200px;
		background-color: white;
		position: absolute;
		top:50%;
		margin-top: -100px;
		left:50%;
		z-index: 100;
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