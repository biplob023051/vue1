<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Gebouw details</h1>
							<p>Hier kan je je dashboard bekijken, alle meldingen die je nog moet behandelen en die in behandeling zijn.</p>
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
						<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12" v-for="tennant in tennants">
							<div class="ui-block">
								<div class="birthday-item inline-items">
									<div class="author-thumb" v-if="tennant.name">
										<img :src="tennant.image" alt="sender photo"  v-if="tennant.image" width="50px">
										<avatar :username="tennant.name" :size="40" :rounded="false" v-else></avatar>
									</div>
									<div class="author-thumb" v-else>
										<img :src="tennant.image" alt="sender photo"  v-if="tennant.image" width="50px">
										<avatar :username="tennant.firstname" :size="40" :rounded="false" v-else></avatar>
									</div>

									<div class="birthday-author-name">
										<router-link :to="{ name: 'studentdetail', params: { studentId: tennant.id }}" class="h6 author-name">
											{{tennant.firstname}} {{tennant.lastname}}
										</router-link>
										<div class="birthday-date">{{tennant.room}}</div>
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
		name: 'buildingtennants',
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
				tennants: [],
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

					this.axios.get('/buildings/'+_this.buildingId+'/tennants').then(function (response) {
						_this.tennants = response.data;
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;
				
				_this.tennants = [];
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