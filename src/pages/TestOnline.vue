<template>
	<div class="test-online">
		<a href="#" class="back"><span class="trangle"></span>返回</a>
		<div class="test-wrapper">
			<div class="test-title">
				<span>HTML</span>
				<span v-if="startstatus" @click="toggleStatus">
					<span :class="status" ></span>
					开始测试
				</span>
				<span  v-if="!startstatus && !overFlag" @click="toggleOverStatus">
					<span class="pause">▐▐</span>
					测试中 
					<span> 10:00 </span>
				</span>
				<span v-if="overFlag">
					<span :class="status" ></span>
					已结束测试
				</span>
			</div>

			<div class="test-content">
				<ul>
					<li class="queslist" v-for="(item, index1) in testlist"> 
						<span class="ques-type">{{(index1+1) + ' ' +item.type}}</span>
						<span class="que-title">{{item.question}}</span>
						<ul>
							<li class="optionlist" v-for="(options, index) in item.options">
								<span class="radio" @click="showanswer(index1,index)">
									<span class="radio-content" 
									      v-show="titlenum === index1 && ansnum === index || ansArray[index1] === options.icon">

									</span>
								</span>
								<span class="radio-value">{{options.icon}}</span>
								<span class="list-content">{{options.contents}}</span>
							</li>
							<div class="correctAns"
								 v-show="overFlag && ansArray[index1] && correctArray[index1].icon !== ansArray[index1]">
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

			<div class="test-footer">
				<p><span>上一条</span> <a href="">无</a></p>
				<p><span>下一条</span> <a href="">HTML表单</a></p>
			</div>
		</div>
		<div class="cover"></div>
		<div class="tip"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			startstatus: true,
			overFlag:false,
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
			]
		}
	},
	computed: {
		status() {
			if (this.startstatus) {
				return 'trangle1'
			}
			if (this.overFlag) {
				return 'over'
			}
		}
	},
	methods: {
		toggleStatus() {
			this.startstatus = !this.startstatus
		},
		toggleOverStatus() {
			this.overFlag = true
			let len = this.testlist.length
			for(let i = 0;i < len;i++) {
				if(this.ansArray[i] == null) {
					this.ansArray[i] = -1
					console.log('还有试题没写完')
				}
			}
			console.log(this.ansArray)
		},
		showanswer (index1,index){
			// console.log(index1 , index)
			if(this.startstatus) {
				console.log('请点击开始按钮')
				return
			}
			if(this.overFlag) {
				console.log('已结束测试')
				return
			}
			this.titlenum = index1
			this.ansnum = index
			this.ansArray[index1] = this.testlist[index1].options[index].icon
		}
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
		left: 0px;
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
	.test-title span:last-child{
		float: right;
		color: gray;
		font-size: 15px;
	}
	.pause{
		color: #EA7E5c !important;
		font-size: 23px;
		position: absolute;
		right: 130px;
	}
	.over {
	    width: 24px;
	    height: 24px;
	    background-color: #EA7E5c;
	    position: absolute;
	    right: 120px;
	    top:22px;
	}
	.trangle1{
		content: '';
		width:0;
		height: 0;
		border-width: 18px;
		position: absolute;
		top:13px;
		right: 100px;
		border-style: solid;
		border-color: transparent transparent transparent #EA7E5c;
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
	.test-footer {
		padding: 40px;
	}
	.test-footer span {
		background-color: #EA7E5c;
		display: inline-block;
		color: white;
		padding:3px 10px;
		border-radius: 4px;
	}
	.test-footer a{
		display: inline-block;
		margin-left: 30px;
		color: black;
		text-decoration:none;
	}
</style>