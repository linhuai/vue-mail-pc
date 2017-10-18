<template>
	<div class="mod">
		<div class="w">
			<modhead></modhead>
			<div class="mod-body">
				<div class="mod-pic">

				</div>
				<ul class="mod-list">
					<li class="mod-item">
						<router-link to="/">
							1
						</router-link>
					</li>
					<li class="mod-item">
						<router-link to="/">
							1
						</router-link>
					</li>
					<li class="mod-item">
						<router-link to="/">
							1
						</router-link>
					</li>
					<li class="mod-item">
						<router-link to="/">
							1
						</router-link>
					</li>
					<li class="mod-item">
						<router-link to="/">
							1
						</router-link>
					</li>
				</ul>
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