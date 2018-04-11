<template>
	<div class="studyrecord-wrapper">
		 <ul class="studyrecord">
		 	<li class="list-wrapper"
		 		v-for="(item, index) in recordlist">
		 		<div class="list-date" ref="listdate">
		 			{{item.date}}
		 		</div>
		 		<div class="list-content" ref="listcontent">
		 			<ul  ref="listdetail">
		 				<li class="record-content"
		 					ref="listli"
		 					v-for="(record, index) in item.record">
		 					<div class="record-type"
		 						 ref="recordtype">
		 						<span>
		 							{{record.type}}
		 						</span>
		 					</div>
		 					<div>
		 						<ul  class="recordlist" ref="recordlist">
		 							<li v-for="list in record.list"
		 								>
		 								<span v-show="list.status === 0">正在学习</span>
		 								<span v-show="list.status === 1">已完成</span>
		 								<span v-show="!list.path">{{list.name}}</span>
		 								<span v-show="list.path">
		 									<a href="item.path" >{{list.name}}</a>
		 								</span>
		 							</li>
		 						</ul>
		 					</div>
		 				</li>
		 			</ul>
		 		</div>
		 		<div class="clearfix"></div>
		 	</li>
		 </ul>	
	</div> 
</template>

<script>
const liHeight = 35
export default {
	data() {
		return {
			recordlist:[
				{
					date: '2018-2-14',
					record: [
						{
							type: '课程',
							list: [ {
										name: '《html进阶》',
										status: 0,
										path: 'http://www.baidu.com'
									}, 
									{
										name: '《html进阶》',
										status: 1,
										path: 'http://www.baidu.com'
									}, 
									{
										name: '《html进阶》',
										status: 0,
										path: 'http://www.baidu.com'
									}, 
									{
										status: 0,
										name: '《html进阶》',
									} 
								  ]
						},
						{
							type: '资源',
							list: [ {
										name: '《html进阶》',
										status: 0,
										path: 'http://www.baidu.com'
									}, 
									{
										name: '《html进阶》',
										status: 1,
										path: 'http://www.baidu.com'
									}, 
									{
										status: 0,
										name: '《html进阶》',
									} 
								  ]
						}
					]
				},
				{
				date: '2018-4-14',
				record: [
					{
						type: '课程',
						list: [ {
									name: '《html进阶》',
									status: 1,
									path: 'http://www.baidu.com'
								}, 
								{
									name: '《html进阶》',
									status: 0,
									path: 'http://www.baidu.com'
								}, 
								{
									status: 1,
									name: '《html进阶》',
									path: 'http://www.baidu.com'
								}, 
								{
									status: 0,
									name: '《html进阶》',
								} 
							  ]
					},
					{
						type: '资源',
						list: [ {
									status: 1,
									name: '《html进阶》',
									path: 'http://www.baidu.com'
								}, 
								{
									status: 0,
									name: '《js入门》',
								} 
							  ]
					}
				]
				}
			]
		}
	},
	methods: {
		change() {
			let len = []
			for(let i = 1;i <= this.$refs.listcontent.length;i++){
				len[0] = 0
				len.push(this.$refs.listdetail[i-1].childNodes.length + len[i-1])
				let sum = 0
				for(let j = len[i-1];j < len[i];j++) {
					let len1 = this.$refs.recordlist[j].childNodes.length
					this.$refs.recordlist[j].style.height = (liHeight * len1) +'px'
					this.$refs.recordtype[j].style.height = (liHeight * len1) +'px'
					this.$refs.listli[j].style.height = (liHeight * len1 ) + 'px'
					sum += liHeight * len1
				}
				this.$refs.listcontent[i-1].style.height = (sum) +'px'
				this.$refs.listdate[i-1].style.height = sum +'px'
			}
		}
	},
	mounted() {
		this.change()
	}
}
</script>

<style>
.studyrecord{
	padding: 30px;
}
.list-wrapper {
	background-color: white;
	/*clear: both;*/
}
.list-date{
	background-color: blue;
	float: left;
	width: 90px;
	position: relative;
	background: white;
	padding-right: 10px;
	color: #cccccc;
	border-right: 4px solid #e6e6e6
}
.list-date:after{
	content: '';
	width: 14px;
	height: 14px;
	position: absolute;
	right: -9px;
	border-radius: 50%;
	background-color: #e6e6e6;
}
.list-content{
	/*background-color: yellow;*/
	display: block;
}
.record-content{
	height: 30px;
	line-height: 30px;
}
.record-type{
	float: left;
	margin:0 20px 0 35px;
	width: 60px;
	background-color: white
}
.record-type span{
	background-color: #EA7C5A;
	color: white;
	display: inline-block;
	padding: 2px 10px;
	height: 20px;
	line-height: 20px;
	border-radius: 3px
}
.recordlist span {
	padding: 0 10px;
	display: inline-block;
}
.recordlist a{
	text-decoration: none;
	color: gray
}
/*清除浮动*/
.clearfix{
	zoom:1;
}
.clearfix:after{
	content: '';
	display: block;
	clear: both;
}

</style>