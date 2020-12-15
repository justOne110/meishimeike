<template>
	<div>
		<van-button type="primary" @click="add">立即登录</van-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			value:''
			};
		},
		created() {

		},
		mounted() {
			this.$axios.post('https://www.liulongbin.top:8888/api/private/v1/login',{username:'admin',password:'123456'}).then(res=>{
				console.log(res)
			})
		},
		methods: {
		add(){
			this.$toast.success('登录成功')
		}
		},
		computed: {

		}
	};
</script>

<style scoped>

</style>
