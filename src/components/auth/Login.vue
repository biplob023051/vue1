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
								<svg class="olymp-login-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-login-icon"></use></svg>
							</router-link>
						</li>
					</ul>

					<!-- Tab panes -->
					<div class="tab-content">
						<div class="tab-pane active" id="profile" role="tabpanel" data-mh="log-tab">
							<div class="title h6">Login</div>
							<form class="content">
								<div class="row">
									<div class="col-xl-12 col-lg-12 col-md-12">
										<div class="form-group label-floating">
											<label class="control-label">Email</label>
											<input class="form-control" placeholder="" type="email" v-model="user.email" v-on:keyup.13="login">
										</div>
										<div class="form-group label-floating">
											<label class="control-label">Wachtwoord</label>
											<input class="form-control" placeholder="" type="password" v-model="user.password" v-on:keyup.13="login">
										</div>

										<div class="remember dnone">
											<a href="#" class="forgot">Wachtwoord vergeten?</a>
										</div>

										<a href="#" class="btn btn-lg btn-primary full-width" @click="login">Login</a>
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
		name: "login",
		data: function() {
			return {
				user: {
					email: "",
					password: ""
				}
			}
		},
		mounted: function() {
			$('.container').closest('body').addClass('landing-page');
		},
		methods: {
			login: function() {
				var _this = this;
				
				this.axios.post('/auth/login', _this.user).then(function (response) {
					/* Set user info (set on 2 places) */
					_this.$auth.setToken(response.data.token, Date.now() + 14400000 ); // + 4 hours
					_this.$auth.setUserType(response.data.user.user_type);
					_this.$auth.setProfile(response.data.user);

					$('body').removeClass('landing-page');

					_this.$router.push('/dashboard');
				}).catch(function (error) {
					alertify.error("Er was een probleem bij het inloggen");
				})
			}
		}
	}
</script>

<style lang="css" scoped>
	@import "/static/css/misc-pages.css";
</style>
