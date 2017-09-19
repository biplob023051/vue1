<template>
	<div class="container">
		<div class="row display-flex">
			<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
				<div class="landing-content">
				</div>
			</div>

			<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
				<div class="logo-div">
					<router-link :to="{ name: 'login'}">
						<center><img src="static/v2/img/logo_big.png" width="250px"/></center>
					</router-link>
				</div>

				<div class="registration-login-form" data-mh="log-tab">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<router-link :to="{ name: 'login'}" class="nav-link active">
								<svg class="olymp-register-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-register-icon"></use></svg>
							</router-link>
						</li>
					</ul>

					<!-- Tab panes -->
					<div class="tab-content">
						<div class="tab-pane active" id="profile" role="tabpanel" data-mh="log-tab">
							<div class="title h6">Registreer</div>
							<form class="content">
								<div class="row">
									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="form-group label-floating">
											<label class="control-label">Naam</label>
											<input type="text" class="form-control m-b-15" placeholder="" v-model="user.name" v-on:keyup.13="register">
										</div>
										<div class="form-group label-floating">
											<label class="control-label">Email</label>
											<input type="text" class="form-control m-b-15" placeholder="" v-model="user.email" v-on:keyup.13="register">
										</div>
										<div class="form-group label-floating">
											<label class="control-label">Wachtwoord</label>
											<input type="password" class="form-control m-b-15" placeholder="" v-model="user.password" v-on:keyup.13="register">
										</div>
										<div class="form-group label-floating">
											<label class="control-label">Code</label>
											<input class="form-control m-b-15" placeholder="" type="text" v-model="user.code" v-on:keyup.13="register">
										</div>

										<a href="#" class="btn btn-lg btn-primary full-width" @click="register">Registreer</a>
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
	export default {
		name: "register",
		data: function() {
			return {
				user: {
					email: "",
					name: "",
					password: "",
					code: ""
				},
			}
		},
		mounted: function() {
			$('.container').closest('body').addClass('landing-page');
		},
		created: function () {
			var _this = this;

			_this.loadData();
		},
		methods: {
			loadData: function () {
				var _this = this;
				_this.user.code = _this.$route.params.code;
			},
			register: function() {
				var _this = this;
				
				this.axios.post('/auth/signup', this.user).then(function (response) {
					alertify.success("Succesvol geregistreerd.");
					
					_this.$router.push('/auth/login');
				}).catch(function (error) {})
			}
		}
	}
</script>