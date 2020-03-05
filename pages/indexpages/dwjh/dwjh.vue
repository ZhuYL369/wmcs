<template>
	<view style="padding: 2px 6px;">
		<phone-directory :phones="phones" @paramClick="paramClick"></phone-directory>
	</view>
</template>

<script>
	import phoneDirectory from '@/components/phone-directory/phone-directory.vue'
	export default {
		name:"phones",
        components:{
            phoneDirectory
        },
		data() {
			return {
				 phones:{
					 "A":[{
                        "id":1,
                        "spell": "W112",
                        "name": "爱国主义教育基地"
                    }],
					"B":[{
						"id":2,
						"spell": "W13",
						"name": "宾馆饭店"
					}],
					"C":[{
						"id":3,
						"spell": "W7",
						"name": "城市社区、社区综合文化服务中心"
					},
					{
						"id":4,
						"spell": "W19",
						"name": "出入境办证大厅"
					},
					{
						"id":5,
						"spell": "W14",
						"name": "城市规划馆、文化馆、纪念馆、科技馆、少年宫"
					},
					{
						"id":12,
						"spell": "W17",
						"name": "长途汽车客运站"
					}],
					"D":[{
						"id":6,
						"spell": "W24",
						"name": "大型超市、商场"
					},
					{
						"id":7,
						"spell": "W43",
						"name": "大学"
					}],
					"H":[{
						"id":8,
						"spell": "W16",
						"name": "火车站"
					}],
					"J":[{
						"id":9,
						"spell": "W21",
						"name": "景点景区、公园"
					}],
					"Y":[{
						"id":10,
						"spell": "W29",
						"name": "医院"
					}],
					"Z":[{
						"id":11,
						"spell": "W11",
						"name": "中学、小学"
					}]
				 }
			}
		},
		methods: {
			paramClick (e) {
                console.log(e)
            }
		}
	}
</script>

<style>
.list-item-title{
	height: 40px;
	font-size: 14px;
	color: #2A62FF;
}
</style>
