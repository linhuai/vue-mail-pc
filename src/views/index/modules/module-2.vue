<template>
	<div class="mod">
		<div class="w">
			<modhead></modhead>
			<div class="mod-body">
				<div class="mod-left">
					Left
				</div>
				<div class="mod-center">
					<ul class="list">
						<li class="item">
							<router-link to="/"></router-link>
						</li>
					</ul>
				</div>
				<div class="mod-right">
					<h4>销售排行榜</h4>
					<ul>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import modhead from './module-head.vue'
	export default {
		data () {
			return {

			}
		},
		components: {
			modhead
		}
	}
</script>