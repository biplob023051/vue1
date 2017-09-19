<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Eigendom verblijven</h1>
							<p>Hier kan je verblijven bekijken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<buildingmenu :building="building"></buildingmenu>

		<div class="container">
			<div class="row">
				<buildingsidebar :building="building"></buildingsidebar>
				
				<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div class="row">
						<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<div class="friend-item friend-groups create-group" data-mh="friend-groups-item" style="height: calc(100% - 20px);">
								<div class="content">
									<router-link :to="{ name: 'roomcreate', params: { buildingId: buildingId }}" class="btn btn-control bg-blue">
										<svg class="olymp-plus-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
									</router-link>
				
									<div class="author-content">
										<router-link :to="{ name: 'roomcreate', params: { buildingId: buildingId }}" class="h5 author-name">
											Verblijf toevoegen
										</router-link>
										<div class="country">Nieuw verblijf aanmaken</div>
									</div>
				
								</div>
				
							</div>
				
						</div>
				
						<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6" v-for="room in rooms">
							<div class="ui-block" data-mh="friend-groups-item">
								<div class="friend-item friend-groups">
									<div class="friend-item-content">
										<div class="more">
											<svg class="olymp-three-dots-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-three-dots-icon"></use></svg>
											<ul class="more-dropdown">
												<li>
													<router-link :to="{ name: 'roomdetail', params: { buildingId: buildingId, id: room.id }}">
														Details
													</router-link>
												</li>
												<li v-if="room.visitor_details">
													<router-link :to="{ name: 'studentdetail', params: { studentId: room.visitor_details.id }}">
														Bewoner details
													</router-link>
												</li>
												<li v-else>
													<router-link :to="{ name: 'roomupdate', params: { buildingId: buildingId, id: room.id }}">
														Bewoner linken
													</router-link>
												</li>
												<li>
													<router-link :to="{ name: 'roomupdate', params: { buildingId: buildingId, id: room.id }}">
														Bewerken
													</router-link>
												</li>
											</ul>
										</div>
										<div class="friend-avatar">
											<div class="author-thumb">
												<router-link :to="{ name: 'roomdetail', params: { buildingId: buildingId, id: room.id }}">
													<img :src="room.image" alt="sender photo"  v-if="room.image" width="140px">
													<avatar :username="room.room" :size="120" :rounded="false" :initials="room.initials" v-else></avatar>
												</router-link>
											</div>
											<div class="author-content">
												<router-link :to="{ name: 'roomdetail', params: { buildingId: buildingId, id: room.id }}" class="h5 author-name">
													{{room.room}}
												</router-link>
												<div class="country" v-if="room.visitor_details">{{room.visitor_details.firstname}} {{room.visitor_details.lastname}}</div>
												<div class="country" v-else>&nbsp;</div>
											</div>
										</div>
				
										<div class="control-block-button">
											<router-link :to="{ name: 'roomdetail', params: { buildingId: buildingId, id: room.id }}" class="btn btn-control btn-grey-lighter">
												<svg class="olymp-settings-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-settings-icon"></use></svg>
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	import BuildingMenu from 'components/app/Building/BuildingMenu.vue';
	import BuildingSidebar from 'components/app/Building/BuildingSidebar.vue';

	export default {
		name: 'buildingrooms',
		components: {
			buildingmenu: BuildingMenu,
			buildingsidebar: BuildingSidebar,
	    Avatar
	  },
		data: function() {
			return {image: '',
				building: {
					name: "",
					description: "",
					street: "",
					postal: "",
					city: "",
					country: "",
					image: "",
					gmapsimage: "",
				},
				rooms: [],
				buildingId: ''
			}
		},
		created: function () {
			var _this = this;
			 
			if(_this.$auth.getUserType() != 1) {
				_this.$router.push('/buildings');
			}

			_this.loadData();
			
			// _this.interval = setInterval(function () {
			// 	_this.loadData();
			// }.bind(this), 60000);
		},
		watch: {
			'$route': 'reInitialize'
		},
		methods: {
			reInitialize: function() {
				var _this = this;
				_this.loadData();
				
				// _this.interval = setInterval(function () {
				// 	_this.loadData();
				// }.bind(this), 60000);
			},
			loadData: function () {
				var _this = this;
				_this.buildingId = _this.$route.params.buildingId;
				
				if(_this.buildingId) {
					this.axios.get('/buildings/'+_this.buildingId).then(function (response) {
						_this.building = response.data.building;
						
						_this.image = _this.building.image;
						_this.building.image = _this.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})

					this.axios.get('/buildings/'+_this.buildingId+'/rooms').then(function (response) {
						_this.rooms = response.data;
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;
				
				_this.rooms = [];
				_this.building.name = '';
				_this.building.description = '';
				_this.building.street = '';
				_this.building.postal = '';
				_this.building.city = '';
				_this.building.country = '';
				_this.building.image = '';
				_this.building.gmapsimage = '';
			}
		}
	}
</script>