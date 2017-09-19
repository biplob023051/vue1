<template>
	<div>
		<!-- Fixed Sidebar Left -->
		<div class="fixed-sidebar">
			
			<div class="fixed-sidebar-left sidebar--small" id="sidebar-left">
				<a href="#" class="logo">
					<img src="static/v2/img/logo.png" alt="Naamloos" width="35px">
				</a>

				<div class="mCustomScrollbar" data-mcs-theme="dark">
					<ul class="left-menu">
						<li>
							<a href="#" class="js-sidebar-open">
								<svg class="olymp-menu-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-menu-icon"></use></svg>
							</a>
						</li>
						<li>
							<router-link :to="{ name: 'dashboard'}">
								<svg class="olymp-badge-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-badge-icon"></use></svg>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'problems'}">
								<svg class="olymp-newsfeed-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-blog-icon"></use></svg>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'buildings'}">
								<i class="fa fa-building-o" aria-hidden="true"></i>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'students'}" v-if="this.$auth.getUserType() == 1">
								<svg class="olymp-happy-faces-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-happy-faces-icon"></use></svg>
							</router-link>
						</li>
						<li>
							&nbsp;
						</li>
						<li>
							<router-link :to="{ name: 'problemcreate'}">
								<svg class="olymp-happy-faces-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
							</router-link>
						</li>
					</ul>
				</div>
			</div>

			<div class="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
				<a href="#" class="logo">
					<img src="static/v2/img/logo.png" alt="Naamloos" width="35px">
					<h6 class="logo-title">Ownnr</h6>
				</a>

				<div class="mCustomScrollbar" data-mcs-theme="dark">
					<ul class="left-menu">
						<li>
							<a href="#" class="js-sidebar-open">
								<svg class="olymp-close-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-close-icon"></use></svg>
								<span class="left-menu-title">Menu Sluiten</span>
							</a>
						</li>
						<li>
							<router-link :to="{ name: 'dashboard'}">
								<svg class="olymp-badge-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-badge-icon"></use></svg>
								<span class="left-menu-title">Dashboard</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'problems'}">
								<svg class="olymp-badge-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-blog-icon"></use></svg>
								<span class="left-menu-title">Meldingen</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'buildings'}">
								<i class="fa fa-building-o" aria-hidden="true"></i>
								<span class="left-menu-title">Gebouwen</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'students'}" v-if="this.$auth.getUserType() == 1">
								<svg class="olymp-happy-faces-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-happy-faces-icon"></use></svg>
								<span class="left-menu-title">Bewoners</span>
							</router-link>
						</li>
						<li>
							&nbsp;
						</li>
						<li>
							<router-link :to="{ name: 'problemcreate'}">
								<svg class="olymp-happy-faces-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
								<span class="left-menu-title">Nieuwe melding</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- ... end Fixed Sidebar Left -->

		<!-- Fixed Sidebar Left -->

		<div class="fixed-sidebar fixed-sidebar-responsive">

			<div class="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
				<a href="#" class="logo js-sidebar-open">
					<img src="static/v2/img/logo.png" alt="Naamloos" width="35px">
				</a>

			</div>

			<div class="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
				<a href="#" class="logo">
					<img src="static/v2/img/logo.png" alt="Naamloos" width="35px">
					<h6 class="logo-title">Ownnr</h6>
				</a>

				<div class="mCustomScrollbar" data-mcs-theme="dark">

					<div class="control-block dnone">
						<div class="author-page author vcard inline-items">
							<div class="author-thumb">
								<img alt="author" src="static/v2/img/author-page.jpg" class="avatar">
							</div>
							<a href="#" class="author-name fn">
								<div class="author-title">
									Naam Loos <svg class="olymp-dropdown-arrow-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
								</div>
								<span class="author-subtitle">EIGENAAR</span>
							</a>
						</div>
					</div>

					<div class="ui-block-title ui-block-title-small dnone">
						<h6 class="title">MENU</h6>
					</div>

					<ul class="left-menu">
						<li>
							<a href="#" class="js-sidebar-open">
								<svg class="olymp-close-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-close-icon"></use></svg>
								<span class="left-menu-title">Menu Sluiten</span>
							</a>
						</li>
						<li>
							<router-link :to="{ name: 'dashboard'}">
								<svg class="olymp-badge-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-badge-icon"></use></svg>
								<span class="left-menu-title">Dashboard</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'problems'}">
								<svg class="olymp-newsfeed-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-blog-icon"></use></svg>
								<span class="left-menu-title">Meldingen</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'buildings'}">
								<i class="fa fa-building-o" aria-hidden="true"></i>
								<span class="left-menu-title">Gebouwen</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'students'}" v-if="this.$auth.getUserType() == 1">
								<svg class="olymp-happy-faces-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-happy-faces-icon"></use></svg>
								<span class="left-menu-title">Bewoners</span>
							</router-link>
						</li>
						<li>
							&nbsp;
						</li>
						<li>
							<router-link :to="{ name: 'problemcreate'}">
								<svg class="olymp-happy-faces-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
								<span class="left-menu-title">Nieuwe melding</span>
							</router-link>
						</li>
					</ul>

					<div class="ui-block-title ui-block-title-small">
						<h6 class="title">ACCOUNT</h6>
					</div>

					<ul class="account-settings">
						<li>
							<router-link :to="{ name: 'personalinfo'}">
								<svg class="olymp-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-menu-icon"></use></svg>
								<span>Profiel</span>
							</router-link>
						</li>
						<li class="dnone">
							<a href="#">

								<svg class="olymp-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-menu-icon"></use></svg>

								<span>Instellingen</span>
							</a>
						</li>
						<li  style="margin-bottom: 30px;">
							<a href="#" @click.prevent="logout">
								<svg class="olymp-logout-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-logout-icon"></use></svg>

								<span>Log Out</span>
							</a>
						</li>
					</ul>

					<div class="ui-block-title ui-block-title-small dnone">
						<h6 class="title">Over Naamloos</h6>
					</div>

					<ul class="about-olympus dnone">
						<li>
							<a href="#">
								<span>Algemene voorwaarden</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Privacy</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>FAQ</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Contact</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Header -->
		<header class="header" id="site-header">
			<div class="page-title">
				<h6>{{ this.$route.meta.title }}</h6>
			</div>

			<div class="header-content-wrapper">
				<form class="search-bar w-search notification-list friend-requests dnone">
					<div class="form-group with-button">
						<input class="form-control js-user-search" placeholder="Zoek hier naar contacten, gebouwen, ..." type="text">
						<button>
							<svg class="olymp-magnifying-glass-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-magnifying-glass-icon"></use></svg>
						</button>
					</div>
				</form>
				
				<div class="control-block">
					<div class="control-icon more has-items">
						<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
						<div class="label-avatar bg-blue" v-if="messages_unread">{{messages_unread}}</div>

						<div class="more-dropdown more-with-triangle triangle-top-center">
							<div class="ui-block-title ui-block-title-small">
								<h6 class="title">Berichten</h6>
								<a href="#" @click.prevent="setMessagesAsRead" class="mark-as-read">Markeren als gelezen</a>
							</div>

							<div class="mCustomScrollbar" data-mcs-theme="dark">
								<ul class="notification-list chat-message">
									<li class="message-unread" v-for="message in messages_array" v-if="messages_array.length">
										<div class="author-thumb dnone">
											<img src="static/v2/img/avatar59-sm.jpg" alt="author">
										</div>
										<div class="notification-event">
											<router-link :to="{ name: 'messages'}" class="h6 notification-friend">{{message.other_user.firstname}} {{message.other_user.lastname}}</router-link>
											<span class="chat-message-item">{{message.message_short}}</span>
											<span class="notification-date"><time class="entry-date updated">{{ message.created_at | moment("from") }}</time></span>
										</div>
										<span class="notification-icon">
											<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
										</span>
									</li>

									<li class="message-read" v-if="messages_array.length == 0">
										<div class="author-thumb dnone">
											<img src="static/v2/img/avatar59-sm.jpg" alt="author">
										</div>
										<div class="notification-event">
											<span class="h6 notification-friend">Geen berichten<br></span>
										</div>
										<span class="notification-icon">
											<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
										</span>
									</li>
								</ul>
							</div>

							<router-link :to="{ name: 'messages'}" class="view-all bg-primary">Bekijk alle berichten</router-link>
						</div>
					</div>

					<div class="control-icon more has-items">
						<svg class="olymp-thunder-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-thunder-icon"></use></svg>

						<div class="label-avatar bg-primary" v-if="notifications_unread">{{notifications_unread}}</div>

						<div class="more-dropdown more-with-triangle triangle-top-center">
							<div class="ui-block-title ui-block-title-small">
								<h6 class="title">Notificaties</h6>
								<a href="#" @click.prevent="setAsRead" class="mark-as-read">Markeren als gelezen</a>
							</div>

							<div class="mCustomScrollbar" data-mcs-theme="dark">
								<ul class="notification-list">
									<li v-for="notification in notifications" v-bind:class="[notification.read == 1 ? '':'un-read', 'test']"  v-if="notifications.length">
										<div class="author-thumb dnone">
											<img src="static/v2/img/avatar62-sm.jpg" alt="author">
										</div>
										<div class="notification-event">
											<div>
												<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 1">Nieuwe melding</router-link>
												<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 2">Melding update</router-link>
												<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 3">Melding gesloten</router-link><br>

												<router-link :to="notification.url" class="notification-link">"{{notification.description}}"</router-link></div>
											<span class="notification-date"><time class="entry-date updated">{{ notification.created_at | moment("from") }}</time></span>
										</div>
										<span class="notification-icon">
											<svg class="olymp-comments-post-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-comments-post-icon"></use></svg>
										</span>
									</li>

									<li v-if="notifications.length == 0">
										<div class="author-thumb dnone">
											<img src="static/v2/img/avatar62-sm.jpg" alt="author">
										</div>
										<div class="notification-event">
											<div>
												<span class="h6 notification-friend">sGeen notificaties<br></span>
											</div>
										</div>
										<span class="notification-icon">
											<svg class="olymp-comments-post-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-comments-post-icon"></use></svg>
										</span>
									</li>
								</ul>
							</div>

							<router-link :to="{ name: 'notifications'}" class="view-all bg-primary">Alle notificaties bekijken</router-link>
						</div>
					</div>

					<div class="author-page author vcard inline-items more">
						<div class="author-thumb">
							<img alt="author" :src="user.image" class="avatar" v-if="user.image">
							<avatar :username="user.name" :size="36" :rounded="false" v-else></avatar>

							<div class="more-dropdown more-with-triangle">
								<div class="ui-block-title ui-block-title-small">
									<h6 class="title">Account</h6>
								</div>

								<ul class="account-settings">
									<li>
										<router-link :to="{ name: 'personalinfo'}">
											<svg class="olymp-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-menu-icon"></use></svg>
											<span>Profiel</span>
										</router-link>
									</li>
									<li>
										<a href="" @click.prevent="logout">
											<svg class="olymp-logout-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-logout-icon"></use></svg>

											<span>Log Out</span>
										</a>
									</li>
								</ul>

								<div class="ui-block-title ui-block-title-small dnone">
									<h6 class="title">Over Naamloos</h6>
								</div>

								<ul class="dnone">
									<li>
										<a href="#">
											<span>Algemene voorwaarden</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Privacy</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>FAQ</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>Contact</span>
										</a>
									</li>
								</ul>

							</div>
						</div>
						<a href="#" class="author-name fn">
							<div class="author-title">
								{{ user.name }} <svg class="olymp-dropdown-arrow-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
							</div>
							<span class="author-subtitle"></span>
						</a>
					</div>

				</div>
			</div>

		</header>

		<!-- ... end Header -->


		<!-- Responsive Header -->

		<header class="header header-responsive" id="site-header-responsive">
			<div class="header-content-wrapper">
				<ul class="nav nav-tabs mobile-app-tabs" role="tablist">
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#chat" role="tab">
							<div class="control-icon has-items">
								<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
								<div class="label-avatar bg-blue" v-if="messages_unread">{{messages_unread}}</div>
							</div>
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#notification" role="tab">
							<div class="control-icon has-items">
								<svg class="olymp-thunder-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-thunder-icon"></use></svg>
								<div class="label-avatar bg-primary" v-if="notifications_unread">{{notifications_unread}}</div>
							</div>
						</a>
					</li>
				</ul>
			</div>

			<!-- Tab panes -->
			<div class="tab-content tab-content-responsive">
				<div class="tab-pane " id="chat" role="tabpanel">

					<div class="mCustomScrollbar" data-mcs-theme="dark">
						<div class="closeTopbar bg-danger" @click.prevent="closeTopbar">Sluiten</div>

						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">Berichten</h6>
							<a href="#" @click.prevent="setMessagesAsRead" class="mark-as-read">Markeren als gelezen</a>
						</div>

						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list chat-message">
								<li class="message-unread" v-for="message in messages_array" v-if="messages_array.length">
									<div class="author-thumb dnone">
										<img src="static/v2/img/avatar59-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<router-link :to="{ name: 'messages'}" class="h6 notification-friend">{{message.other_user.firstname}} {{message.other_user.lastname}}</router-link>
										<span class="chat-message-item">{{message.message_short}}</span>
										<span class="notification-date"><time class="entry-date updated">{{ message.created_at | moment("from") }}</time></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
									</span>
								</li>

								<li class="message-read" v-if="messages_array.length == 0">
									<div class="author-thumb dnone">
										<img src="static/v2/img/avatar59-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<span class="h6 notification-friend"><br>Geen berichten<br></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
									</span>
								</li>
							</ul>
						</div>

						<router-link :to="{ name: 'messages'}" class="view-all bg-primary">Bekijk alle berichten</router-link>
					</div>

				</div>

				<div class="tab-pane " id="notification" role="tabpanel">

					<div class="mCustomScrollbar" data-mcs-theme="dark">
						<div class="closeTopbar bg-danger" @click.prevent="closeTopbar">Sluiten</div>

						<div class="ui-block-title ui-block-title-small">
							<h6 class="title">Notificaties</h6>
							<a href="#" @click.prevent="setAsRead" class="mark-as-read">Markeren als gelezen</a>
						</div>

						<div class="mCustomScrollbar" data-mcs-theme="dark">
							<ul class="notification-list">
								<li v-for="notification in notifications" v-bind:class="[notification.read == 1 ? '':'un-read', 'test']" v-if="notifications.length">
									<div class="author-thumb dnone">
										<img src="static/v2/img/avatar62-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<div>
											<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 1">Nieuwe melding</router-link>
											<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 2">Melding update</router-link>
											<router-link :to="notification.url" class="h6 notification-friend" v-if="notification.category_id == 3">Melding gesloten</router-link><br>

											<router-link :to="notification.url" class="notification-link">"{{notification.description}}"</router-link></div>
										<span class="notification-date"><time class="entry-date updated">{{ notification.created_at | moment("from") }}</time></span>
									</div>
									<span class="notification-icon">
										<svg class="olymp-comments-post-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-comments-post-icon"></use></svg>
									</span>
								</li>

								<li v-if="notifications.length == 0">
									<div class="author-thumb dnone">
										<img src="static/v2/img/avatar62-sm.jpg" alt="author">
									</div>
									<div class="notification-event">
										<div>
											<span class="h6 notification-friend"><br>Geen notificaties<br></span>
										</div>
									</div>
									<span class="notification-icon">
										<svg class="olymp-comments-post-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-comments-post-icon"></use></svg>
									</span>
								</li>
							</ul>
						</div>
						
						<router-link :to="{ name: 'notifications'}" class="view-all bg-primary">Alle notificaties bekijken</router-link>
					</div>
				</div>
			</div>
			<!-- ... end  Tab panes -->

		</header>

		<div class="floating-problem">
			<router-link :to="{ name: 'problemcreate'}">
				<svg class="olymp-happy-faces-icon left-menu-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
				<span class="details">Probleem melden</span>
			</router-link>
		</div>

		<!-- ... end Responsive Header -->
	</div>
</template>

<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	
	export default {
		name: "heading",
		components: {
			Avatar
		},
		data: function() {
			return {
				userType: this.$auth.getUserType(),
				user: this.$auth.getProfile(),
				notifications: [],
				notifications_count: [],
				notifications_unread: 0,
				messages_array: [],
				messages_unread: 0
			}
		},
		created: function () {
			var _this = this;

			_this.loadData();
			//_this.setSelectize();
			
			//_this.interval = setInterval(function () {
			// 		_this.loadData();
			//}.bind(this), 60000);
		},
		mounted: function() {
			var _this = this;

			//_this.setSelectize();
		},
		methods: {
			logout: function() {
				this.$auth.destroyToken();
				this.$router.push('/auth/login');
			},
			reInitialize: function() {
				var _this = this;
				_this.loadData();
				
				//_this.interval = setInterval(function () {
				// 	_this.loadData();
				//}.bind(this), 60000);
			},
			loadData: function () {
				var _this = this;

				this.axios.get('/notifications/show').then(function (response) {
					_this.notifications = response.data;
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
					_this.messages_array = response.data;

					_this.messages_unread = _this.messages_array.length
				}).catch(function (error) {})
			},
			setSelectize: function() {
				$('.js-user-search').selectize({
					valueField: 'url',
					labelField: 'name',
					searchField: ['name', 'description', 'street', 'city'],
					create: false,
					render: {
						option: function(item, escape) {
							return '<div class="inline-items">' +
								'<div class="notification-event">' +
									'<a href="/dashboard">' +
									(item.name ? '<span class="h6 notification-friend"></a>' + escape(item.name) + '</span><br>' : '') +
									(item.description ? '<span class="chat-message-item">' + escape(item.description) + '</span>' : '') +
									'</a>' +
								'</div>'+
							'</div>';
						},
						item: function(item, escape) {
							var label = item.name;
							return '<div>' +
								'<span class="label">' + escape(label) + '</span>' +
								'</div>';
						}
					},
					onChange: function(value) {
						this.destroy();
						this.clear();
						_this.$router.push(value);
						setSelectize();
					},
					load: function(query, callback) {
						if (!query.length) return callback();
						$.ajax({
							url: process.env.API+'/search/' + encodeURIComponent(query) + '?token=' + _this.$auth.getToken(),
							type: 'GET',
							error: function() {
								callback();
							},
							success: function(res) {
								callback(res.slice(0, 10));
							}
						});
					}
				});
			},
			setAsRead: function() {
				var _this = this;

				this.axios.get('/notifications/read').then(function (response) {
					_this.notifications = response.data;

					_this.notifications_unread = 0
					for (var i = 0, len = _this.notifications.length; i < len; i++) {
					  if(_this.notifications[i].read == 0) {
					  	_this.notifications_unread++;
					  }
					}
				}).catch(function (error) {})
			},
			setMessagesAsRead: function() {
				var _this = this;

				this.axios.get('/messages/read').then(function (response) {
					_this.messages_array = response.data;
				}).catch(function (error) {})

				this.axios.get('/messages/unread').then(function (response) {
					_this.messages_array = response.data;

					_this.messages_unread = _this.messages_array.length
				}).catch(function (error) {})
			},
			closeTopbar: function() {
				$('.nav-item.active').removeClass('active');
				$('.tab-pane.active').removeClass('active');
			},
			reinitVar: function(){
				var _this = this;
				
				_this.notifications = []
			}
		}
	}
</script>
