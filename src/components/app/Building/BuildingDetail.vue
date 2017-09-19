<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Eigendom details</h1>
							<p>Hier kan je je eigendom bekijken.</p>
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
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">Details eigendom</h6>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Adres</div>
												<p>{{building.street}}, {{building.postal}} {{building.city}}</p>
											</div>
										</div>
									</div>
									
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" v-if="building.description">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Beschrijving</div>
												<p>{{building.description}}</p>
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
	import BuildingMenu from 'components/app/Building/BuildingMenu.vue';
	import BuildingSidebar from 'components/app/Building/BuildingSidebar.vue';

	export default {
		name: 'buildingdetail',
		components: {
			buildingmenu: BuildingMenu,
			buildingsidebar: BuildingSidebar,
	    Avatar
	  },
		data: function() {
			return {
				image: '',
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
						
						_this.image = _this.building.image;
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