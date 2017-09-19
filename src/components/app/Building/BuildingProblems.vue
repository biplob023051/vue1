<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Meldingen eigendom</h1>
							<p>Hier kan je meldingen bekijken.</p>
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
							<h6 class="title">Meldingen</h6>
						</div>

						<ul class="notification-list">
							<li v-bind:class="[problem.problem_status == 0 ? 'un-read' : '', 'linkbutton']" data-href="" v-for="problem in problems">
								<div class="author-thumb">
									<img :src="problem.studentimage" alt="sender photo"  v-if="problem.studentimage" width="50px">
									<avatar :username="problem.username" :size="40" :rounded="false" v-else></avatar>
								</div>

								<div class="notification-event">
									<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}" class="h6 notification-friend">{{problem.username}}</router-link> {{problem.problem}}
									<span class="notification-date"><time class="entry-date updated">{{ problem.updated_at | moment("from") }}</time></span>
								</div>
								
								<span class="notification-icon">
									<svg class="olymp-comments-post-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-comments-post-icon"></use></svg>
								</span>
							</li>
						</ul>
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
		name: 'buildingproblems',
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
				problems: [],
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

					this.axios.get('/buildings/'+_this.buildingId+'/problems').then(function (response) {
						_this.problems = response.data;
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;
				
				_this.problems = [];
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