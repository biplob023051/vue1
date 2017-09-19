<template>
	<div>
		<heading></heading>
		
		<main id="app-main" class="app-main">
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</main>
		
		<footing></footing>
	</div>
</template>

<script>
	import Heading from 'components/app/Heading.vue';
	import Footer from 'components/app/Footer.vue';
	
	export default {
		name: "app",
		components: {
			heading: Heading,
			footing: Footer
		}
	}
</script>