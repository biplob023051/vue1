<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Bewoner details</h1>
							<p>Hier kan je de details van de bewoner bekijken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<studentmenu :student="student"></studentmenu>

		<div class="container">
			<div class="row">
				<studentsidebar :student="student"></studentsidebar>
				
				<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">Details bewoner</h6>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="building">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Gebouw</div>
												<p>{{building.name}}</p>
											</div>
										</div>
									</div>
									
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="building">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Adres</div>
												<p>{{building.street}}, {{building.postal}} {{building.city}}</p>
											</div>
										</div>
									</div>
									
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="description-toggle">
											<div class="description-toggle-content">
												<div class="h6">Opmerking</div>
												<p>{{student.remark}}</p>
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
	import StudentMenu from 'components/app/Student/StudentMenu.vue';
	import StudentSidebar from 'components/app/Student/StudentSidebar.vue';

	export default {
		name: 'studentdetail',
		components: {
	    Avatar,
			studentmenu: StudentMenu,
			studentsidebar: StudentSidebar
	  },
		data: function() {
			return {
				image: '',
				student: {
					firstname: "",
					lastname: "",
					email: "",
					phone: "",
					image: "",
				},
				building: {
					street: "",
					postal: "",
					city: "",
					country: "",
					name: "",
				},
				studentId: ''
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
				_this.studentId = _this.$route.params.studentId;
				
				if(_this.studentId) {
					this.axios.get('/students/'+_this.studentId).then(function (response) {
						_this.student = response.data.student;
						
						_this.image = _this.student.image;
						_this.student.image = _this.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})


					this.axios.get('/students/'+_this.studentId+'/building').then(function (response) {
						_this.building = response.data.building;
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;

				_this.student.firstname = '';
				_this.student.lastname = '';
				_this.student.email = '';
				_this.student.phone = '';
				_this.student.image = '';

				_this.building.street = '';
				_this.building.postal = '';
				_this.building.city = '';
				_this.building.country = '';
				_this.building.name = '';
			}
		}
	}
</script>