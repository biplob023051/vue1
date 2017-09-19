<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Verblijf details</h1>
							<p>Hier kan je verblijf bekijken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<roommenu :room="room"></roommenu>

		<div class="container">
			<div class="row">
				<roomsidebar :room="room"></roomsidebar>
				
				<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">Details verblijf</h6>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Verblijf</div>
												<p>{{room.room}}</p>
											</div>
										</div>
									</div>
									
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Adres</div>
												<p>{{building.street}}, {{building.postal}} {{building.city}}</p>
											</div>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Verhuurprijs/maand</div>
												<p>&euro;{{room.rent_price}}</p>
											</div>
										</div>
									</div>

									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Kosten/maand</div>
												<p>&euro;{{room.monthly_costs}}</p>
											</div>
										</div>
									</div>

									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Kosten/jaar</div>
												<p>&euro;{{room.yearly_costs}}</p>
											</div>
										</div>
									</div>

									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="room.opp">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Oppervlakte</div>
												<p>{{room.opp}}m²</p>
											</div>
										</div>
									</div>

									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="room.contract">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Duur contract</div>
												<p>{{room.contract}} maanden</p>
											</div>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Gemeubeld</div>
												<p>
													<span v-if="room.furnished == 1">Ja</span>
													<span v-if="room.furnished == null">Nee</span>
												</p>
											</div>
										</div>
									</div>

									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Internet</div>
												<p>
													<span v-if="room.internet == 1">Ja</span>
													<span v-if="room.internet == null">Nee</span>
												</p>
											</div>
										</div>
									</div>
									
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Badkamer</div>
												<p>
													<span v-if="room.shower == 1">Ja</span>
													<span v-if="room.shower == null">Nee</span>
												</p>
											</div>
										</div>
									</div>
									
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Keuken</div>
												<p>
													<span v-if="room.kitchen == 1">Ja</span>
													<span v-if="room.kitchen == null">Nee</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="room.room_detail">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Details</div>
												<p>{{room.room_detail}}</p>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	import RoomMenu from 'components/app/Room/RoomMenu.vue';
	import RoomSidebar from 'components/app/Room/RoomSidebar.vue';
	
	export default {
		name: 'roomdetail',
		components: {
	    Avatar,
			roomsidebar: RoomSidebar,
			roommenu: RoomMenu
	  },
		data: function() {
			return {
				image: '',
				room: {
					room: "",
					room_detail: "",
					building_id: "",
					image: "",
				},
				roomId: '',
				building: ''
			}
		},
		created: function () {
			var _this = this;
			 
			if(_this.$auth.getUserType() != 1) {
				_this.$router.push('/dashboard');
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
				_this.roomId = _this.$route.params.id;
				_this.buildingId = _this.$route.params.buildingId;

				if(_this.buildingId) {
					this.axios.get('buildings/'+_this.buildingId).then(function (response) {
						_this.building = response.data.building;
						
						_this.building.image = _this.building.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
				
				if(_this.roomId) {
					this.axios.get('buildings/'+_this.buildingId+'/rooms/'+_this.roomId).then(function (response) {
						_this.room = response.data.room;
						
						_this.image = _this.room.image;
						_this.room.image = _this.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;
				
				_this.room.room = '';
				_this.room.room_detail = '';
				_this.room.building_id = '';
				_this.room.image = '';
			}
		}
	}
</script>