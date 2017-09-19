<template>
	<div class="wrapgroup">
		<div class="wrap">
			<div class="profile-header">
				<div class="profile-cover">
					<div class="avatar avatar-xxl avatar-circle pull-left margin-right-20">
						<div v-if="!image">
							<avatar :username="employee.firstname" :size="100" :rounded="false"></avatar>
						</div>
						<div v-else>
							<img class="stream-img" :src="image"/>
						</div>
					</div>
					
					<h1 class="mail-item-title title-color">{{employee.firstname}} {{employee.lastname}}</h1>
					<!--<a href="#"><span class="label label-success">Meubels</span></a>
					<a href="#"><span class="label label-primary">Tuin</span></a>-->
													
					<p>{{employee.email}} - {{employee.phone}}</p>
				</div><!-- .profile-cover -->
			
				<div class="promo-footer">
					<div class="row no-gutter">
						<div class="col-sm-2 col-sm-offset-3 col-xs-6 promo-tab">
							<div class="text-center">
							</div>
						</div>
						<div class="col-sm-2 col-xs-6 promo-tab">
							<div class="text-center">
							</div>
						</div>
						<div class="col-sm-2 col-xs-12 promo-tab">
							<div class="text-center">
								<div class="m-t-xs">
									<router-link :to="{ name: 'employeeupdate', params: { employeeId: employee.id }}" class="btn btn-outline mw-md btn-primary btn-md pull-right">Bewerken</router-link>
								</div>
							</div>
						</div>
					</div>
				</div><!-- .promo-footer -->
			</div><!-- .profile-header -->
		</div>
	</div>
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';

	export default {
		name: 'employeedetail',
		components: {
	    Avatar
	  },
		data: function() {
			return {
				image: '',
				employee: {
					firstname: "",
					lastname: "",
					email: "",
					phone: "",
					image: "",
				},
				employeeId: ''
			}
		},
		created: function () {
			var _this = this;
			_this.loadData();
			
			_this.interval = setInterval(function () {
				_this.loadData();
			}.bind(this), 60000);
		},
		watch: {
			'$route': 'reInitialize'
		},
		methods: {
			reInitialize: function() {
				var _this = this;
				_this.loadData();
				
				_this.interval = setInterval(function () {
					_this.loadData();
				}.bind(this), 60000);
			},
			loadData: function () {
				var _this = this;
				_this.employeeId = _this.$route.params.employeeId;
				
				if(_this.employeeId) {
					this.axios.get('/employees/'+_this.employeeId).then(function (response) {
						_this.employee = response.data.employee;
						
						_this.image = _this.employee.image;
						_this.employee.image = _this.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;
				
				_this.rooms = [];
				_this.employee.firstname = '';
				_this.employee.lastname = '';
				_this.employee.email = '';
				_this.employee.phone = '';
				_this.employee.image = '';
			}
		}
	}
</script>