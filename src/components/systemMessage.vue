<template>
	<div class="system-message" >
		<div class="messgea-wrapper">
			<ul>
				<li class="message-detail" v-for="item in message">
					<div class="message-date">{{item.date}}</div>
					<div class="message-content" ref="msgcontent">{{item.content}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message:[
				{
					date: '2018-2-10',
					content: 'shwoiudhiowhdoi2'
				},
				{
					date: '2018-2-10',
					content: 'shwoiudhiowhdoi2'
				},
				{
					date: '2018-2-10',
					content: 'shwoiudhiowhdoi2'
				}
			]
		}
	},
	methods: {
		change() {
			console.log(111)
		}
	},
	mounted () {
		this.change()
	}
}
</script>

<style>
.system-message {
	padding: 30px
}
.message-detail{
	min-height: 140px;
	margin-bottom: 20px
}
.message-date{
	min-height:120px;
	line-height: 120px;
	float: left ;
}
.message-content {
	float: left;
	margin-left: 40px;
	min-height: 90px;
	width: 600px;
	border: 4px solid #e6e6e6;
	padding: 20px;
	position: relative;
	border-radius: 3px
}
.message-content:before{
	content: '';
	width: 0px;
	height: 0px;
	border-width: 18px;
	border-style: solid;
	border-color: transparent #e6e6e6 transparent transparent ;
	position: absolute;
	left: -36px;
	top: 40px;
}
</style>