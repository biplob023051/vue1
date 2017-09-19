<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Gebouwen</h1>
							<p>Hier kan je je gebouwen bekijken, een nieuw gebouw aanmaken of snel naar een specifiek verblijf doorklikken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<!-- Main Content Groups -->

		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6" v-if="this.$auth.getUserType() == 1">
					<div class="friend-item friend-groups create-group" data-mh="friend-groups-item" style="height: calc(100% - 20px);">
						<div class="content">
							<router-link :to="{ name: 'buildingcreate' }" class="btn btn-control bg-blue">
								<svg class="olymp-plus-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
							</router-link>

							<div class="author-content">
								<router-link :to="{ name: 'buildingcreate' }" class="h5 author-name">Gebouw toevoegen</router-link>
								<div class="country">Nieuw gebouw aanmaken</div>
							</div>
						</div>
					</div>
				</div>

				<building v-for="building in buildings" :building="building"></building>
			</div>
		</div>
		<!-- ... end Main Content Groups -->
	</div>
</template>

<script>
	import Building from 'components/app/Building/Building.vue';
	
	export default {
		name: 'BuildingList',
		components: {
			building: Building,
		},
		created: function () {
			this.buildings = [];
			this.loadData();
			
			this.interval = setInterval(function () {
				this.loadData();
			}.bind(this), 60000); 
		},
		data: function () {
			return {
				buildings: []
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				
				this.axios.get('/buildings').then(function (response) {
					_this.buildings = response.data;
				}).catch(function (error) {})
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>