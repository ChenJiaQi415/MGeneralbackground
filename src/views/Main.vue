<template>
	<div>
		<el-container>
			<el-aside width="auto">
				<!-- 引入 components中创建的 CommonAside组件 -->
				<common-aside />
			</el-aside>
			<el-container>
				<el-header>
					<!-- 引入 components中创建的 CommonHeader组件 -->
					<common-header />
				</el-header>
				<el-main>
					<!-- 路由出口 -->
					<!-- 路由匹配到的组件将渲染这里 -->
					<router-view> </router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import CommonAside from '../components/CommonAside.vue'
	import CommonHeader from '../components/CommonHeader.vue'
	export default {
		data() {
			return {}
		},
		components: {
			CommonAside,
			CommonHeader
		}
	}
</script>

<style scoped>
	.el-header {
		padding: 0;
	}
</style>