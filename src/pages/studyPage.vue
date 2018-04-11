<template>
	<div class="studypage">
		<p class="backtoup"><span class="trangleicon"></span> <a href="">返回</a></p>
		<div class="sp-content">
			<p><span class="title">html基础</span> <span class="timer">组件</span></p>
			<div class="content-list">
				<div class="list">
					<p><img src="">图片</p>
					<p><a href="">标题</a></p>
					<p><span>浏览量</span></p>
				</div>
			</div>
			<div class="content-list">
				<div class="list">
					<p><img src="">图片</p>
					<p><a href="">标题</a></p>
					<p><span>浏览量</span></p>
				</div>
			</div>
			<div class="content-list">
				<div class="list">
					<p><img src="">图片</p>
					<p><a href="">标题</a></p>
					<p><span>浏览量</span></p>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="content-footer">
				组件
			</div>
		</div>
	</div>
</template>

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
		background-color: red;
		float: left;
		width: 33.3%;
		border-right: 10px solid white;
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
</style>