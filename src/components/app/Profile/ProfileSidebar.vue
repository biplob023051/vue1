<template>
	<div class="col-xl-3 pull-xl-9 col-lg-3 pull-lg-9 col-md-12 col-sm-12 col-xs-12">
		<div class="ui-block">
			<div class="your-profile">
				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">Profiel</h6>
				</div>

				<div id="accordion" role="tablist" aria-multiselectable="true">
					<div class="card">
						<div class="card-header" role="tab" id="headingOne">
							<h6 class="mb-0">
								<a href="#">
									Profiel Instellingen
									<svg class="olymp-dropdown-arrow-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
								</a>
							</h6>
						</div>

						<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
							<ul class="your-profile-menu">
								<li>
									<router-link :to="{ name: 'personalinfo' }">Persoonlijke informatie</router-link>
								</li>
								<li v-if="user.user_type == 3" class="dnone">
									<a href="profile_study.php">Studies</a>
								</li>
								<li>
									<a href="profile_application.php" class="dnone">Applicatie instellingen</a>
								</li>
								<li>
									<a href="profile_password.php" class="dnone">Wachtwoord aanpassen</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="ui-block-title">
					<router-link :to="{ name: 'notifications' }" class="h6 title">Notificaties</router-link>
					<router-link :to="{ name: 'notifications' }" class="items-round-little bg-primary">{{notifications_unread}}</router-link>
				</div>
				<div class="ui-block-title">
					<router-link :to="{ name: 'messages' }" class="h6 title">Berichten</router-link>
					<router-link :to="{ name: 'messages' }" class="items-round-little bg-primary">{{messages_unread}}</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Avatar from 'vue-avatar/dist/Avatar';

	export default {
		name: 'profilesidebar',
		components: {
	    Avatar
		},
		created: function () {
			this.notifications_unread = 0;
			this.loadData();
			
			// this.interval = setInterval(function () {
			// 	this.loadData();
			// }.bind(this), 60000); 
		},
		data: function () {
			return {
				notifications_unread: 0,
				messages_unread: 0,
				unread: [],
				notifications: [],
				user: []
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				
				this.axios.get('/user').then(function (response) {
					_this.user = response.data.user;
				}).catch(function (error) {})

				this.axios.get('/notifications').then(function (response) {
					_this.notifications = response.data;

					_this.notifications_unread = 0
					for (var i = 0, len = _this.notifications.length; i < len; i++) {
					  if(_this.notifications[i].read == 0) {
					  	_this.notifications_unread++;
					  }
					}
				}).catch(function (error) {})

				this.axios.get('/messages/unread').then(function (response) {
					_this.unread = response.data;

					_this.messages_unread = _this.unread.length
				}).catch(function (error) {})
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>