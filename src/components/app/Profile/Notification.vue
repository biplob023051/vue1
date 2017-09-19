<template>
	<li v-bind:class="[notification.read == 1 ? '':'un-read', 'linkbutton']">
		<div class="author-thumb dnone">
			<img src="static/v2/img/avatar1-sm.jpg" alt="author">
		</div>
		
		<div class="notification-event">
			<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 1">Nieuwe melding</router-link>
			<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 2">Melding update</router-link>
			<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 3">Melding gesloten</router-link><br>
			"{{notification.description}}"

			<span class="notification-date"><time class="entry-date updated">{{ notification.created_at | moment("from") }}</time></span>
		</div>
		
		<span class="notification-icon">
			<svg class="olymp-comments-post-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-comments-post-icon"></use></svg>
		</span>
	</li>
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	
	export default {
		name: 'notification',
		props: {notification: {}},
		components: {
	    Avatar
	  }
	}
</script>