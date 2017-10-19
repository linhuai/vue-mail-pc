<template>
	<div class="mod mod-2">
		<div class="w">
			<modhead></modhead>
			<div class="mod-body">
				<modleft></modleft>
				<div class="mod-center">
					<ul class="list">
						<li v-for="(item,index) in list" v-if="index<6" class="item">
							<img :src="item.img">
							<div class="tagitem title">名称：{{item.title}}</div>
							<div class="tagitem price">价格：￥<i>{{item.price}}</i>元</div>
						</li>
					</ul>
				</div>
				<div class="mod-right">
					<h4>销售排行榜</h4>
					<ul class="list">
						<li class="item" v-for="(item,index) in list" v-if="index<6">
							<div class="fl">
								产品名称：{{item.title}}<br>价格：￥{{item.price}}
							</div>
							<div class="fr"><img :src="item.img" ></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import modhead from '../module-head.vue'
	import modleft from '../module-left.vue'
	export default {
		props: ['list'],
		data () {
			return {

			}
		},
		components: {
			modhead,
			modleft
		}
	}
</script>

<style lang="less" scoped>
@import './module-2.less';
</style>