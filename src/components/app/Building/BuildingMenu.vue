<template>
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="ui-block responsive-flex">
					<div class="ui-block-title">
						<ul class="nav nav-tabs calendar-events-tabs" role="tablist">
							<li class="nav-item">
								<router-link :to="{ name: 'buildingdetail', params: { id: building.id }}" class="nav-link">
									Overzicht
								</router-link>
							</li>

							<li class="nav-item">
								<router-link :to="{ name: 'buildingproblems', params: { id: building.id }}" class="nav-link">
									Meldingen <span class="items-round-little bg-primary" v-if="problems.length > 0">{{problems.length}}</span>
								</router-link>
							</li>

							<li class="nav-item" v-if="this.$auth.getUserType() == 1">
								<router-link :to="{ name: 'buildingrooms', params: { id: building.id }}" class="nav-link">
									Verblijven
								</router-link>
							</li>

							<li class="nav-item" v-if="this.$auth.getUserType() == 1">
								<router-link :to="{ name: 'buildingtennants', params: { id: building.id }}" class="nav-link">
									Bewoners
								</router-link>
							</li>

							<li class="nav-item dnone" v-if="this.$auth.getUserType() == 1">
								<a class="nav-link" href="#">
									Statistieken
								</a>
							</li>

							<li class="nav-item dnone" v-if="this.$auth.getUserType() == 1">
								<a class="nav-link" href="#">
									Kalender
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'buildingmenu',
		props: {building: {}},
		data: function() {
			return {
				problems: []
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
					this.axios.get('/buildings/'+_this.buildingId+'/problems/status/0').then(function (response) {
						_this.problems = response.data;
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;
				
				_this.problems = [];
			}
		}
	}
</script>