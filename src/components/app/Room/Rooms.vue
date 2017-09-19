<template>
	<div class="wrap">
		<section class="app-content">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<div class="mail-toolbar m-b-lg">
								<div class="btn-group" role="group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gebouwen <span class="caret"></span></button>
									<ul class="dropdown-menu">
										<li>
											<router-link :to="{ name: 'rooms' }">Alle gebouwen</router-link>
										</li>
										<li v-for="building in buildings">
											<router-link :to="{ name: 'buildingrooms', params: { buildingId: building.id }}">{{building.name}}</router-link>
										</li>
									</ul>
								</div>
								<!--<a href="#" class="btn btn-default"><i class="fa fa-refresh"></i></a>
	
								<div class="btn-group pull-right" role="group">
									<a href="#" class="btn btn-default"><i class="fa fa-chevron-left"></i></a>
									<a href="#" class="btn btn-default"><i class="fa fa-chevron-right"></i></a>
								</div>-->
							</div>
						</div>
					</div>
					
					<div class="table-responsive">
						<table class="table mail-list">
							<tr>
								<td>
									<room v-for="room in rooms" :room="room"></room>
								</td>
							</tr>
						</table>
					</div>
				</div><!-- END column -->
			</div><!-- .row -->
		</section><!-- .app-content -->
	</div><!-- .wrap -->
</template>

<script>
	import Room from 'components/app/Room/Room.vue';
	
	export default {
		name: 'Rooms',
		components: {
			room: Room,
		},
		created: function () {
			var _this = this;
			 
			if(_this.$auth.getUserType() != 1) {
				_this.$router.push('/dashboard');
			}

			_this.rooms = [];
			_this.buildings = [];
			_this.loadData();
			
			// this.interval = setInterval(function () {
			// 	this.loadData();
			// }.bind(this), 60000); 
		},
		data: function () {
			return {
				rooms: [],
				buildings: []
			}
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
				_this.reinitVar();
				
				if(_this.$route.name == 'buildingrooms') {
					var url = '/buildings/'+_this.$route.params.buildingId+'/rooms';
				} else {
					var url = '/rooms';
				}
				
				this.axios.get('/buildings').then(function (response) {
					_this.buildings = response.data;
				}).catch(function (error) {})
				
				this.axios.get(url).then(function (response) {
					_this.rooms = response.data;
				}).catch(function (error) {})
			},
			reinitVar: function(){
				var _this = this;
				
				_this.rooms = [];
				_this.buildings = [];
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>