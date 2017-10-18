<template>
	<div class="mod">
		<div class="w">
			<modhead></modhead>
			<div class="mod-body">
				<div class="mod-pic">
				</div>
				<ul class="mod-list">
					<li v-for="item in list" class="mod-item">
						<router-link to="/">
							<img :src="item.img">
							<div>{{item.title}}</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import modhead from '../module-head.vue'
export default {
	props: ['list'],
	data () {
		return {

		}
	},
	components: {
		modhead
	}
}
</script>

<style lang="less">
@import './module-1.less';
</style>