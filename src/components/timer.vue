<template>
	<div class="timer-wrapper"  @click="handleClick">
		<div class="start" v-if="statuses === 0" >
			<img src="../../static/icons/start.png">
			<span style="width:80px;text-align:center;">开始学习</span>
		</div>
		<div class="ing" v-if="statuses === 1" >
			<img src="../../static/icons/stopIcon.png">
			<span style="width:80px;text-align:right">正在学习中</span>
			<span class="spinner">
			  <div class="rect1"></div>
			  <div class="rect2"></div>
			  <div class="rect3"></div>
			</span>
		</div>
		<div class="over" v-if="statuses === 2" >
			<img src="../../static/icons/over.png">
			<span style="width:200px;text-align:right">已结束学习 用时 {{formatDuring}}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
	  return {
	  	statuses: this.status,
	  	startTime: '',
	  	endTime: '',
	  	time: ''
	  }
	},
	props: {
	  status: {
	  	type: Number,
	  	default: 0
	  }
	},
	computed: {
		formatDuring () {
			// let days = parseInt(mss / (1000 * 60 * 60 * 24));
    	let hours = parseInt((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	let minutes = parseInt((this.time % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = (this.time % (1000 * 60)) / 1000;
			if (hours < 10) {
				hours = '0' + hours;
			}
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			if (seconds < 10) {
				seconds = '0' + seconds;
			}
    	return hours + " : " + minutes + " : " + seconds;
		}
	},
	methods:{
		handleClick() {
			if(this.statuses === 0) {
				this.statuses = 1
				let status = this.statuses
				this.startTime = Date.parse(new Date())
				console.log(this.startTime)
				this.$emit('toggleStatus', status)
				return
			}
			if(this.statuses === 1) {
				this.statuses = 2
				// console.log('c', this.status)
				let status = this.statuses
				this.endTime = Date.parse(new Date())
				this.time = this.endTime - this.startTime
				this.$emit('toggleStatus', status, this.time)
				return
			}
		}
	}
}	
</script>
<style>
	.timer-wrapper {
		padding-right: 30px
	}
	.start,.ing,.over,.start span,.ing span,.over span{
		height: 32px;
		line-height: 32px;
		display: inline-block;
		vertical-align: top;
		font-size: 14px
	}
	.spinner {
	  margin: 2px 0;
	  /*width: 50px;*/
	  height: 5px !important ;
	  text-align: center;
	  font-size: 5px;
	}
	 
	.spinner > div {
	  background-color: #67CF22;
	  height: 100%;
	  width: 2px;
	  display: inline-block;
	  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
	  animation: stretchdelay 1.2s infinite ease-in-out;
	}
	 
	.spinner .rect2 {
	  -webkit-animation-delay: -1.1s;
	  animation-delay: -1.1s;
	}
	 
	.spinner .rect3 {
	  -webkit-animation-delay: -1.0s;
	  animation-delay: -1.0s;
	}
	 
/*	.spinner .rect4 {
	  -webkit-animation-delay: -0.9s;
	  animation-delay: -0.9s;
	}
	 
	.spinner .rect5 {
	  -webkit-animation-delay: -0.8s;
	  animation-delay: -0.8s;
	}*/
	 
	@-webkit-keyframes stretchdelay {
	  0%, 40%, 100% { -webkit-transform: scaleY(0.2) } 
	  20% { -webkit-transform: scaleY(1.0) }
	}
	 
	@keyframes stretchdelay {
	  0%, 40%, 100% {
	    transform: scaleY(0.2);
	    -webkit-transform: scaleY(0.4);
	    /*transfrom: translateY(10px);*/
	  }  20% {
	    transform: scaleY(1.0);
	    -webkit-transform: scaleY(1.0);
	    /*transform: translateY(0px);*/
	  }
	}
	
</style>