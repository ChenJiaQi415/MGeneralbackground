import Mock from 'mockjs'
import homeApi from './mockServerData/home'

//定义mock请求拦截
Mock.mock('/api/home/getData','get',homeApi.getStatisticalData)

// function(){
// 	//拦截到请求后的处理逻辑
// 	console.log('拦截到了');
// 	// return [];
// 	// return 1;