<template>
	<li>
		<div class="author-thumb">
			<img src="static/v2/img/avatar8-sm.jpg" alt="author">
		</div>
		<div class="notification-event">
			<router-link :to="{ name: 'message'}" class="h6 notification-friend">Diana Jameson</router-link>
			<span class="chat-message-item">Beste Diana, gelieve morgen om 18u op de afspraak te zijn zodat ik de sleutel...</span>
			<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">4 uur geleden</time></span>
		</div>
		<span class="notification-icon">
			<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
		</span>
	</li>
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	
	export default {
		name: 'message',
		props: {message: {}},
		components: {
	    Avatar
	  }
	}
</script>