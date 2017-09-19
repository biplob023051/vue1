<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Berichten</h1>
							<p>Hier kan je alle berichten bekijken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<!-- Main Content Groups -->

		<div class="container">
			<div class="row">
				<div class="col-xl-9 push-xl-3 col-lg-9 push-lg-3 col-md-12 col-sm-12 col-xs-12 ohidden">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">Berichten</h6>
							<button class="btn btn-primary btn-sm pull-right" @click.prevent="newMessage">Nieuw bericht</button>
						</div>

						<div class="row">
							<div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12 padding-r-0">
								<ul class="notification-list chat-message">
									<li v-for="message in messages" :message="message" v-on:click="getMessageDetails(message)" class="pointer">
										<div class="author-thumb">
											<img :src="message.other_user.image" alt="sender photo"  v-if="message.other_user.image">
											<avatar :username="message.other_user.firstname" :size="40" :rounded="false" v-else></avatar>
										</div>
										<div class="notification-event">
											<span class="h6 notification-friend">{{message.other_user.firstname}} {{message.other_user.lastname}}</span>

											<span class="chat-message-item">{{message.message_short}}</span>
											<span class="notification-date"><time class="entry-date updated">{{ message.created_at | moment("from") }}</time></span>
										</div>
										<span class="notification-icon">
											<svg class="olymp-chat---messages-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-chat---messages-icon"></use></svg>
										</span>
									</li>
								</ul>
							</div>

							<div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 padding-l-0">
								<div class="chat-field">
									<div class="ui-block-title" v-if="message_selected.other_user">
										<h6 class="title">Bericht: {{message_selected.other_user.firstname}} {{message_selected.other_user.lastname}}</h6>
									</div>

									<div class="mCustomScrollbar" data-mcs-theme="dark">
										<ul class="notification-list chat-message chat-message-field">
											<li  v-for="message_detail in message_details" :message_detail="message_detail">
												<div class="author-thumb">
													<img :src="message_detail.user_sender.image" alt="sender photo"  v-if="message_detail.user_sender.image">
													<avatar :username="message_detail.user_sender.firstname" :size="40" :rounded="false" v-else></avatar>
												</div>
												<div class="notification-event" style="width: 100%">
													<a href="#" class="h6 notification-friend">{{message_detail.user_sender.firstname}} {{message_detail.user_sender.lastname}}</a>
													<span class="notification-date"><time class="entry-date updated">{{ message_detail.created_at | moment("from") }}</time></span>
													<span class="chat-message-item" style="width: 100%">{{message_detail.message}}</span>
												</div>
											</li>
										</ul>
									</div>

									<div class="ui-block-title react">
										<h6 class="title">Reageer</h6>
									</div>

									<form v-if="message_details.length">
										<div class="form-group label-floating">
											<label class="control-label">Reageer hier...</label>
											<textarea class="form-control" placeholder="" v-model="message.message"></textarea>
										</div>

										<div class="add-options-message">
											<button class="btn btn-primary btn-sm" @click.prevent="newReply">Post reactie</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<profilesidebar :notifications="notifications"></profilesidebar>
			</div>
		</div>



		<modal name="messageModal" class="messageModal" height="auto">
			<div class="modal-header">
				<h4 class="modal-title">Nieuw bericht</h4>
				<a href="#" class="close" @click.prevent="hideModalMessage"><span aria-hidden="true">&times;</span></a>
			</div>
			<div class="modal-body">
				<div class="form-group label-floating is-select select-custom" v-if="this.$auth.getUserType() == 1">
					<label for="email2" class="control-label">Gebouw:</label>
					<select class="form-control" v-model="building_select">
						<option value="">&nbsp;</option>
						<option  v-for="(building, index) in buildings" :key="index" :value="building.id">{{building.name}}</option>
					</select>
				</div>

				<div class="form-group label-floating is-select select-custom" v-if="this.$auth.getUserType() == 1">
					<label for="email2" class="control-label">Verdieping:</label>
					<select class="form-control" v-model="floor_select">
						<option value="">&nbsp;</option>
						<option  v-for="(floor, index) in floors" :key="index" :value="floor.building_floor">{{floor.building_floor_name}}</option>
					</select>
				</div>

				<div class="form-group label-floating is-select select-custom" v-if="this.$auth.getUserType() == 1">
					<label for="email2" class="control-label">Kamer:</label>
					<select class="form-control" v-model="room_select">
						<option value="">&nbsp;</option>
						<option  v-for="(room, index) in rooms" :key="index" :value="room.id">{{room.room}}</option>
					</select>
				</div>

				<div class="form-group label-floating is-select select-custom" v-if="this.$auth.getUserType() == 1">
					<label for="email2" class="control-label">Student:</label>
					<select class="form-control" v-model="student_select">
						<option value="">&nbsp;</option>
						<option  v-for="(student, index) in students" :key="index" :value="student.id">{{student.firstname}} {{student.lastname}}</option>
					</select>
				</div>

				<div class="form-group label-floating">
					<label class="control-label">Bericht</label>
					<textarea class="form-control" placeholder="" v-model="group.message"></textarea>
				</div>

					<button class="btn btn-primary pull-right" @click.prevent="sentMessagePopup">Verstuur bericht</button><br><br>
			</div><!-- .modal-footer -->
		</modal>
	</div>
</template>

<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	import Profilesidebar from 'components/app/Profile/ProfileSidebar.vue';
	
	export default {
		name: 'MessagesList',
		components: {
			profilesidebar: Profilesidebar,
	    Avatar
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
				messages: [],
				message_details: [],
				message: {
					current_group: "0",
					receiver_id: "",
					temp_receiver_id: "",
					message: ""
				},
				message_selected: [],
				group: {
					building: [],
					floor: [],
					room: [],
					student: [],
					message: ''
				},
				buildings: [],
				floors: [],
				rooms: [],
				students: [],
				building_select: '',
				floor_select: '',
				room_select: '',
				student_select: ''
			}
		},
		methods: {
			loadData: function () {
				var _this = this;

				this.axios.get('/notifications').then(function (response) {
					_this.notifications = response.data;
				}).catch(function (error) {})
				
				this.axios.get('/messages/show').then(function (response) {
					_this.messages = response.data;

					if(_this.messages.length){
						_this.getMessageDetails(_this.messages[0]);
					}
				}).catch(function (error) {})

				/* Get select lists */
				this.axios.get('/buildings/floors').then(function (response) {
					_this.floors = response.data;
				}).catch(function (error) {})

				this.axios.get('/buildings').then(function (response) {
					_this.buildings = response.data;
				}).catch(function (error) {})

				this.axios.get('/rooms').then(function (response) {
					_this.rooms = response.data;
				}).catch(function (error) {})

				this.axios.get('/students').then(function (response) {
					_this.students = response.data;
				}).catch(function (error) {})
			},
			getMessageDetails: function(message) {
				var _this = this;

				_this.message.current_group = message.group;
				_this.message_selected = message;

				_this.axios.get('/messages/'+message.group).then(function (response) {
					_this.message_details = response.data;

					if(_this.message_details[0].other_user.linked_user_id === null) {
						_this.message.receiver_id = '';
						_this.message.temp_receiver_id = _this.message_details[0].other_user.id; //Is student name so temp
					} else {
						// Get other user ID
						if(_this.$auth.getProfile().id != _this.message_details[0].sender_id) {
							_this.message.receiver_id = _this.message_details[0].sender_id;
							_this.message.temp_receiver_id = '';
						} else {
							_this.message.receiver_id = _this.message_details[0].receiver_id;
							_this.message.temp_receiver_id = '';
						}

						// if(_this.message_details[0].other_user.linked_user_id) {
						// 	_this.message.receiver_id = _this.message_details[0].other_user.linked_user_id; //
						// 	_this.message.temp_receiver_id = '';
						// } else {
						// 	_this.message.receiver_id = _this.message_details[0].other_user.user_id;
						// 	_this.message.temp_receiver_id = '';
						// }
					}
				}).catch(function (error) {})
			},
			newReply: function() {
				var _this = this;

				_this.axios.post('/messages', _this.message).then(function (response) {	
					alertify.success("Het bericht werd succesvol verstuurd!");
					
					_this.getMessageDetails(_this.message);

					_this.message.message = '';

					_this.axios.get('/messages/show').then(function (response) {
						_this.messages = response.data;

						if(_this.messages.length){
							_this.getMessageDetails(_this.messages[0]);
						}
					}).catch(function (error) {})
				}).catch(function (error) {})
			},
			newMessage: function() {
				this.showModalMessage();
			},
			showModalMessage () {
				this.$modal.show('messageModal');
			},
			hideModalMessage () {
				this.$modal.hide('messageModal');
			},
			sentMessagePopup() {
				var _this = this;

				if(_this.building_select) {
					_this.group.building = [];
					_this.group.building.push(_this.building_select);
				}

				if(_this.floor_select) {
					_this.group.floor = [];
					_this.group.floor.push(_this.floor_select);
				}

				if(_this.room_select) {
					_this.group.room = [];
					_this.group.room.push(_this.room_select);
				}

				if(_this.student_select) {
					_this.group.student = [];
					_this.group.student.push(_this.student_select);
				}

				console.log(_this.group);

				_this.axios.post('/messages', _this.group).then(function (response) {	
					alertify.success("Het bericht werd succesvol verstuurd!");
					
					_this.building_select = '';
					_this.floor_select = '';
					_this.room_select = '';
					_this.student_select = '';
					_this.group.message = '';

					_this.axios.get('/messages/show').then(function (response) {
						_this.messages = response.data;

						if(_this.messages.length){
							_this.getMessageDetails(_this.messages[0]);
						}
					}).catch(function (error) {})

					_this.loadData();
					_this.hideModalMessage();
				}).catch(function (error) {})
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>