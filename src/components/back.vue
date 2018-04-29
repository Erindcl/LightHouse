<template>
	<div class="back-wrapper">
		<div class="test-footer">
			<p><span>上一条</span> <a href="">无</a></p>
			<p><span>下一条</span> <a href="">HTML表单</a></p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
	  return {
	  }
	},
	props: {
	},
	methods:{
		handleClick() {
		}
	}
}	
</script>
<style>
	/*底部*/
	.test-footer {
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