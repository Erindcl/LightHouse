<template>
	<div class="system_message" >
		<div class="messgea-wrapper">
			<ul>
				<li class="message_detail" :key="index" v-for="(item, index) in message">
					<div class="message_date">{{item.date}}</div>
					<div class="message_detail_right">
						<div class="triangle_box"><img src="../../static/icons/triangle_ff.png" alt=""></div>
						<div class="message_content">{{item.content}}</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message:[   // 系统消息提醒数据
				{
					date: '2018-02-10',
					content: '由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置'
				},
				{
					date: '2018-02-10',
					content: '由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置'
				},
				{
					date: '2018-02-10',
					content: '由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置'
				},
				{
					date: '2018-02-10',
					content: '由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置由于vue是SPA开发，所以当多次跳转到统一个页面时，页面在可是窗口显示的是上一次查看的地方，此时需要设置：在生命周期钩子函数中设置'
				}
			]
		}
	},
	methods: {
		
	},
	mounted () {
		
	}
}
</script>
<style scoped>
.system_message {
	padding: 40px 50px;
}
.message_detail{
	/* min-height: 140px; */
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.message_detail_right{
	display: flex;
	height: 100%;
	align-items: center;
}
.message_content{
	line-height: 20px;
	width: 700px;
	background: #F2F2F2;
	padding: 20px 25px;
	border-radius: 3px
}
.message_date{
	height: 20px;
	line-height: 20px;
	color: #696868;
}
.triangle_box{
	width: 30px;
	height: 30px;
	transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
	margin-right: -8px;
}
</style>