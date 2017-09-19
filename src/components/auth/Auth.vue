<template>
	<div>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div><!-- .simple-page-wrap -->
</template>

<script>
	export default {
		name: "auth"
	}
</script>