<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Notificaties</h1>
							<p>Hier kan je alle notificaties bekijken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<!-- Main Content Groups -->

		<div class="container">
			<div class="row">
				<div class="col-xl-9 push-xl-3 col-lg-9 push-lg-3 col-md-12 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">Notificaties</h6>
						</div>

						<ul class="notification-list">
							<notification v-for="notification in notifications" :notification="notification"></notification>
						</ul>
					</div>
				</div>

				<profilesidebar :notifications="notifications"></profilesidebar>
			</div>
		</div>
	</div>
</template>

<script>
	import Notification from 'components/app/Profile/Notification.vue';
	import Profilesidebar from 'components/app/Profile/ProfileSidebar.vue';
	
	export default {
		name: 'NoticicationList',
		components: {
			notification: Notification,
			profilesidebar: Profilesidebar,
		},
		created: function () {
			this.notifications = [];
			this.loadData();
			
			// this.interval = setInterval(function () {
			// 	this.loadData();
			// }.bind(this), 60000); 
		},
		data: function () {
			return {
				notifications: []
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				
				this.axios.get('/notifications').then(function (response) {
					_this.notifications = response.data;
				}).catch(function (error) {})
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>