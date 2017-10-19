<template>
	<div class="mod">
		<div class="w">
			<modhead></modhead>
			<div class="mod-body">
				<modleft></modleft>
				<ul class="mod-list">
					<li v-for="(item,index) in list" v-if="index<4" class="mod-item">
						<router-link to="/"><img :src="item.img"></router-link>
						<div class="tagitem title"><span>名称：</span>{{item.title}}</div>
						<div class="tagitem price">价格：<i>￥{{item.price}}</i>元</div>
						<div class="tagitem desc"><b>介绍：</b>{{item.desc | substr(20)}}...</div>
						<div class="btn-group">

							<router-link class="btn" to="/">立即购买</router-link>

							<router-link class="btn" to="/">加入购物车</router-link>
						</div>
					</li>
				</ul>
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

<style lang="less">
@import './module-1.less';
</style>