<template>
	<div class="studypage">
		<p class="backtoup"><span class="trangleicon"></span> <a href="">返回</a></p>
		<div class="sp-content">
			<p><span class="title">html基础</span> 
				<span class="timer">
					<timer :status="status"></timer>
				</span>
  			</p>
			<div class="content-list" v-for="item in studyList">
				<div class="list">
					<p class="list-img"><img :src="item.imgUrl"></p>
					<p class="list-title"><a href="">{{item.title}}</a></p>
					<p class="list-watch"><span>浏览量:</span>{{item.watch}}</p>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="content-footer">
				<back></back>
			</div>
		</div>
	</div>
</template>
<script>
import Timer from '../components/timer'
import back from '../components/back'
export default {
	data() {
		return {
		  	studyList: [
		  		{
		  			imgUrl: '../../static/images/hp1.png',
		  			title: 'XXXXXX标题',
		  			watch: '80'
		  		},
		  		{
		  			imgUrl: '../../static/images/hp1.png',
		  			title: 'XXXXXX标题',
		  			watch: '80'
		  		},
		  		{
		  			imgUrl: '../../static/images/hp1.png',
		  			title: 'XXXXXX标题',
		  			watch: '80'
		  		}
		  	],
		  	status: 0
		}
	},
	components: {
		Timer,
		back
	},
	methods: {
		handleClick() {
			console.log(111)
			status = 0 ? status = 1 : status = 1 ?  2 : -1 
		}
	}
}
</script>
<style>
	.studypage{
		width: 1000px;
		margin: 0 auto;
		min-height: 700px;
		background-color: #f2f2f2;
	}
	.sp-content{
		background-color: white;
		width: 100%;
		min-height:550px;
	}
	.backtoup {
		position: relative;
		line-height: 35px;
		padding-left: 30px; 
	}
	.backtoup a{
		color: #EA7E5c;
		text-decoration: none;
	}
	.trangleicon{
		content: '';
		width:0;
		height: 0;
		border-width: 12px;
		position: absolute;
		top: 8px;
		left: -9px;
		border-style: solid;
		border-color: transparent #EA7E5c transparent transparent;
	}
	.sp-content{
		padding:20px 40px;
	}
	.title{
		font-size: 22px;
	}
	.timer{
		float: right;
	}
	.content-list {
		float: left;
		width: 33.3%;
		border-right: 30px solid white;
		box-sizing:border-box;
		text-align: center;
	}
	.clearfix:after{
		content: '';
		display: block;
		clear: both;
	}
	.clearfix{
		zoom:1;
	}
	.content-footer{
		margin-top: 40px;
	}
	.list-img {
		width: 100%;
		height: 200px;
		border: 10px solid #ccc;
		box-sizing:border-box;
	}
	.list-img img {
		width: 100%;
		height: 100%
	}
	.list-title,.list-watch {
		padding-left: 15px;
		text-align: left
	}






</style>