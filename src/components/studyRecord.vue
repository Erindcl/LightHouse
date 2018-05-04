<template>
	<div class="studyrecord-wrapper">
		 <ul class="studyrecord">
		 	<li class="list_wrapper" :key="index"
		 		v-for="(item, index) in recordlist">
		 		<div class="list_date" ref="listdate">
		 			{{item.date}}
		 		</div>
		 		<div class="list_content" ref="listcontent">
		 			<ul  ref="listdetail">
		 				<li class="record_content"
		 					ref="listli" :key="index"
		 					v-for="(record, index) in item.record">
		 					<div class="record_type"
		 						 ref="recordtype">
		 						<span :class="{bg_orange: record.type == '课程', bg_green: record.type == '资源'}">
		 							{{record.type}}
		 						</span>
		 					</div>
		 					<div>
		 						<ul  class="recordlist" ref="recordlist">
		 							<li  :key="index1" v-for="(list, index1) in record.list"
		 								>
		 								<span v-show="list.status === 0">正在学习</span>
		 								<span v-show="list.status === 1">已完成</span>
		 								<span>
		 									<a :href="list.path" >{{list.name}}</a>
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
			recordlist:[   //  学习记录数据
				{
					date: '2018-02-14',
					record: [
						{
							type: '课程',
							list: [ {
										name: '《html进阶》',
										status: 0,
										path: ''
									}, 
									{
										name: '《html进阶》',
										status: 1,
										path: ''
									}, 
									{
										name: '《html进阶》',
										status: 0,
										path: ''
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
										path: ''
									}, 
									{
										name: '《html进阶》',
										status: 1,
										path: ''
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
				date: '2018-04-14',
				record: [
					{
						type: '课程',
						list: [ {
									name: '《html进阶》',
									status: 1,
									path: ''
								}, 
								{
									name: '《html进阶》',
									status: 0,
									path: ''
								}, 
								{
									status: 1,
									name: '《html进阶》',
									path: ''
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
									path: ''
								}, 
								{
									status: 0,
									name: '《js入门》',
									path: ''
								} 
							]
					},
					{
						type: '资源',
						list: [ {
									status: 1,
									name: '《html进阶》',
									path: ''
								}, 
								{
									status: 0,
									name: '《js入门》',
									path: ''
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
		},
		initPath () {
			for (let i = 0; i < this.recordlist.length; i++) {
				for (let j = 0; j < this.recordlist[i].record.length; j++) {
					for (let k = 0; k < this.recordlist[i].record[j].list.length; k++) {
						if (this.recordlist[i].record[j].type == '课程') {
							this.recordlist[i].record[j].list[k].path = '#/comshow/studypage?name=' + this.recordlist[i].record[j].list[k].name;
						} else {
							this.recordlist[i].record[j].list[k].path = '#/comshow/oneresource?title=' + this.recordlist[i].record[j].list[k].name;
						}
					}
				}
			}
		}
	},
	mounted() {
		this.change();
		this.initPath();
	}
}
</script>

<style>
.studyrecord{
	padding: 30px;
}
.list_wrapper {
	background-color: white;
	/*clear: both;*/
}
.list_date{
	background-color: blue;
	float: left;
	width: 100px;
	position: relative;
	background: white;
	padding-right: 10px;
	color: #cccccc;
	border-right: 3px solid #e6e6e6
}
.list_date:after{
	content: '';
	width: 12px;
	height: 12px;
	position: absolute;
	right: -7px;
	top: 5px;
	border-radius: 50%;
	background-color: #e6e6e6;
}
.list_content{
	/*background-color: yellow;*/
	display: block;
}
.record_content{
	height: 30px;
	line-height: 30px;
}
.record_type{
	float: left;
	margin:0 20px 0 35px;
	width: 60px;
	background-color: white
}
.record_type span{
	color: white;
	font-size: 12px;
	display: inline-block;
	padding: 2px 10px;
	height: 20px;
	line-height: 20px;
	border-radius: 3px
}
.bg_orange{
	background-color: #EA7C5A;
}
.bg_green{
	background-color: #6ABA9C;
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