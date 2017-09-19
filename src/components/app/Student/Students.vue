<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Bewoners</h1>
							<p>Hier kan je alle bewoners bekijken, gelinkt met een van je eigendommen.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<!-- Main Content Groups -->

		<div class="container">
			<div class="row">
				<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
					<div class="friend-item friend-groups create-group" data-mh="friend-groups-item" style="height: calc(100% - 20px);">
						<div class="content">
							<router-link :to="{ name: 'studentcreate' }" class="btn btn-control bg-blue">
								<svg class="olymp-plus-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
							</router-link>

							<div class="author-content">
								<router-link :to="{ name: 'studentcreate' }" class="h5 author-name">Bewoner toevoegen</router-link>
								<div class="country">Bewoner aanmaken</div>
							</div>
						</div>
					</div>
				</div>

				<student v-for="student in students" :student="student"></student>
			</div>
		</div>
		<!-- ... end Main Content Groups -->
	</div>
</template>

<script>
	import Student from 'components/app/Student/Student.vue';
	
	export default {
		name: 'StudentList',
		components: {
			student: Student,
		},
		created: function () {
			var _this = this;
			_this.students = [];
			 
			if(_this.$auth.getUserType() != 1) {
				_this.$router.push('/dashboard');
			}

			_this.loadData();
			
			// this.interval = setInterval(function () {
			// 	this.loadData();
			// }.bind(this), 60000); 
		},
		data: function () {
			return {
				students: []
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				
				this.axios.get('/students').then(function (response) {
					_this.students = response.data;
				}).catch(function (error) {})
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>