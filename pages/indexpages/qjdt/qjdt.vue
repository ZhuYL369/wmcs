<template>
	<view>
		<map v-if="mapshow" :style="{width: mapwidth+'px', height: mapheight+'px'}" :latitude="latitude" :longitude="longitude" :scale="scale" :markers="markers" @markertap="marktap">
		</map>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				mapshow:false,
				mapwidth:0,
				mapheight:0,
				latitude:37.9282000000,
				longitude:102.6379700000,
				scale:13,
				markers:[{
					id:1,
					latitude: 37.92820,
					longitude: 102.63797,
					iconPath: '../../../static/index/biaoji.png'
				},
				{
					id:1,
					latitude: 37.93430,
					longitude: 102.653397,
					iconPath: '../../../static/index/biaoji.png',
					callout:{
						content:'点位名称:爱国主义教育基地\n点位类型:教育基地',
						display:'BYCLICK'
						
					}
				}
				]
			}
		},
		methods: {
			marktap(e){
				console.log(e);
				//打开高德地图导航
				let amap='androidamap://navi?sourceApplication=文明城市创建&poiname=fangheng&lat=37.9282&lon=102.63797&dev=1&style=2';
				//plus.runtime.openURL(amap);
				
			}
		},
		onLoad() {
			_self=this;
			
		},
		onShow() {
			//plus.screen.lockOrientation('landscape');
			const sysinfo=uni.getSystemInfoSync();
			_self.mapheight=sysinfo.windowHeight;
			_self.mapwidth=sysinfo.windowWidth;
			_self.mapshow=true;
		},
		onReady() {
			/*
			setTimeout(function(){
				plus.screen.lockOrientation('landscape');
				const sysinfo=uni.getSystemInfoSync();
				_self.mapheight=sysinfo.windowHeight;
				_self.mapwidth=sysinfo.windowWidth;
				_self.mapshow=true;
			},1000)
			*/
		},
		onHide() {
			
		},
		onUnload() {
			
		},
		onResize(){
			const sysinfo=uni.getSystemInfoSync();
			_self.mapheight=sysinfo.windowHeight;
			_self.mapwidth=sysinfo.windowWidth;
			//console.log(sysinfo);
		},
		onBackPress(e){
			/*
			setTimeout(function(){
				plus.screen.unlockOrientation(); //解除屏幕方向的锁定，但是不一定是竖屏；  
				plus.screen.lockOrientation('portrait'); //锁死屏幕方向为竖屏 
			},500);
			*/
		}
	}
</script>

<style>

</style>
