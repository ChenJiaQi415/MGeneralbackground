<template>
  <div id="app">
		
		<router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
	// 去除默认样式
	html,body,h3,p{
		margin: 0;
		padding: 0;
	}
</style>
