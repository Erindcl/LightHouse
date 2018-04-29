<template>
	<div class="test-online">
		<a href="#" class="back"><span class="trangle"></span>返回</a>
		<div class="test-wrapper">
			<div class="test-title">
				<span>HTML</span>
				<span class="timers"><timer :status="status"  @toggleStatus="toggleStatus"></timer></span>
			</div>

			<div class="test-content">
				<ul>
					<li class="queslist" v-for="(item, index1) in testlist" :key="item.id"> 
						<span class="ques-type">{{(index1+1) + ' ' +item.type}}</span>
						<span class="que-title">{{item.question}}</span>
						<ul>
							<li class="optionlist" v-for="(options, index) in item.options" :key="options.id">
								<span class="radio" @click="showanswer(index1,index)">
									<span class="radio-content" 
									      v-show="titlenum === index1 && ansnum === index || ansArray[index1] === options.icon">

									</span>
								</span>
								<span class="radio-value">{{options.icon}}</span>
								<span class="list-content">{{options.contents}}</span>
							</li>
							<div class="correctAns"
								 v-show="status===2 && ansArray[index1] && correctArray[index1].icon !== ansArray[index1]">
								 <div class="cor-content">
									<span>你的答案: {{ansArray[index1] === -1 ? '' : ansArray[index1]}}</span>
									<span>正确答案：{{correctArray[index1].icon}}</span>
									<p><a>解析:</a> <b>{{correctArray[index1].reason}}</b></p>
								 </div>
							</div>
						</ul>
					</li>
				</ul>
			</div>

		<div style="padding:40px">
			<back></back>
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
import Back from '../components/back'
import Timer from '../components/timer'
export default {
	data() {
		return {
      		screenWidth:document.body.clientWidth,
			status: 0,
			testlist:[
				{
					type: '选择题',
					question: 'aaahioewhiofaaahioewhiaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofaaahioewhiofofaaahioewhiofaaahioewhiofaaahioewhiof',
					options: [
						{
							icon: 'A',
							contents: 'dwhide'
						},
						{
							icon: 'B',
							contents: 'dwhide'
						},
						{
							icon: 'C',
							contents: 'dwhide'
						},
						{
							icon: 'D',
							contents: 'dwhide'
						}
					]
				},
				{
					type: '选择题',
					question: 'aaahioewhiof',
					options: [
						{
							icon: 'A',
							contents: 'dwhide'
						},
						{
							icon: 'B',
							contents: 'dwhide'
						},
						{
							icon: 'C',
							contents: 'dwhide'
						},
						{
							icon: 'D',
							contents: 'dwhide'
						}
					]
				}
			],
			titlenum: -1,
			ansnum: -1,
			ansArray: [],
			correctArray:[
				{
					icon: 'B',
					reason: 'dhoweiofjpsdjoiqwjfpo'
				},
				{
					icon: 'D',
					reason: 'dhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpodhoweiofjpsdjoiqwjfpo'
				}
			],
			showDialogs: false,
			message:''
		}
	},
	components: {
		DialogBlock,
		Back,
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
		showanswer (index1,index){
			// console.log(index1 , index)
			if(this.status === 0) {
				this.message = '请点击开始按钮'
				this.showDialogItem()
				return
			}
			if(this.status === 2) {
				console.log('已结束测试')
				return
			}
			this.titlenum = index1
			this.ansnum = index
			this.ansArray[index1] = this.testlist[index1].options[index].icon
		},
		showDialogItem () {
			this.showDialogs = true;
			document.documentElement.style.overflow ='hidden'
			document.documentElement.style.paddingRight = 17 + 'px'
			this.$refs.dialog.style.left = (this.screenWidth/2 - 200)+'px'
			console.log(this.message)
		}
	},
	mounted() {
	}
}
</script>
<style>
	.back {
		display: inline-block;
		position: relative;
		height: 50px;
		line-height: 50px;
		padding:0 35px;
		color: #EA7E5c;
		font-weight: bold;
		text-decoration: none;
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