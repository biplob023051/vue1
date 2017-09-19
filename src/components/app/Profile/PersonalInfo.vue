<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Persoonlijke informatie</h1>
							<p>Hier kan je je persoonlijke info bekijken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xl-9 push-xl-3 col-lg-9 push-lg-3 col-md-12 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">Profiel bewerken</h6>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('firstname') }">
											<label class="control-label">Voornaam</label>
											<input type="text" name="firstname" v-model="profileinfo.firstname" v-validate="'required'">
										</div>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('lastname') }">
											<label class="control-label">Achternaam</label>
											<input name="lastname" type="text" v-model="profileinfo.lastname" v-validate="'required'">
										</div>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('email') }">
											<label class="control-label">Email</label>
											<input name="email" type="email" v-model="profileinfo.email" v-validate="{ rules: { required: true, email: true } }">
										</div>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('phone') }">
											<label class="control-label">GSM nummer</label>
											<input name="phone" type="text" v-model="profileinfo.phone" v-validate="'required'">
										</div>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-if="user.user_type == 3">
										<div class="form-group label-floating is-select">
											<label class="control-label">Geboortedatum</label>
											<input name="datetimepicker" v-model="profileinfo.birthdate"/>
											<span class="input-group-addon">
												<svg class="olymp-month-calendar-icon icon"><use xlink:href="static/v2/icns/icons.svg#olymp-month-calendar-icon"></use></svg>
											</span>
										</div>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-if="user.user_type == 3">
										<div class="form-group label-floating is-select">
											<label class="control-label">Geboorteplaats</label>
											<input class="form-control" placeholder="" type="text" v-model="profileinfo.birthplace">
										</div>
									</div>
								</div>
								
								<div class="row">
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('street') }">
											<label class="control-label">Straat</label>
											<input name="street" placeholder="" type="text" v-model="profileinfo.street" v-validate="'required'">
										</div>
									</div>
									<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('number') }">
											<label class="control-label">Nummer</label>
											<input name="number" placeholder="" type="text" v-model="profileinfo.number" v-validate="'required'">
										</div>
									</div>
									<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="control-label">Bus</label>
											<input class="form-control" placeholder="" type="text" v-model="profileinfo.bus">
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('postal') }">
											<label class="control-label">Postcode</label>
											<input name="postal" placeholder="" type="text" v-model="profileinfo.postal" v-validate="'required'">
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('city') }">
											<label class="control-label">Stad</label>
											<input name="city" placeholder="" type="text" v-model="profileinfo.city" v-validate="'required'">
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div class="form-group label-floating select-custom">
											<label class="control-label">Land</label>
											<select class="form-control" v-model="profileinfo.country">
												<option value="België">België</option>
												<option value="Nederland">Nederland</option>
												<option value="Luxemburg">Luxemburg</option>
												<option value="Duitsland">Duitsland</option>
											</select>
										</div>
									</div>
								</div>
								
								<div class="row">
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										&nbsp;
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<button class="btn btn-primary btn-lg full-width" @click.prevent="updateProfile">Wijzigingen opslaan</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<profilesidebar></profilesidebar>
			</div>
		</div>
	</div><!-- .wrap -->
</template>



<script>
	import ProfileSidebar from 'components/app/Profile/ProfileSidebar.vue';

	export default {
		name: 'personalinfo',
		components: {
			profilesidebar: ProfileSidebar
	  },
		data: function() {
			return {
				profileinfo: {
					country: "België"
				},
				user: []
			}
		},
		created: function () {
			var _this = this;
			_this.loadData();
		},
		watch: {
			'$route': 'reInitialize'
		},
		methods: {
			reInitialize: function() {
				var _this = this;
				_this.loadData();
			},
			loadData: function () {
				var _this = this;

				this.axios.get('/user/profile').then(function (response) {
					_this.profileinfo = response.data;
				}).catch(function (error) {})

				this.axios.get('/user').then(function (response) {
					_this.user = response.data.user;
				}).catch(function (error) {})
			},
			updateProfile: function() {
				var _this = this;

				_this.$validator.validateAll().then((result) => {
       		if (result) {
						_this.axios.put('/user/profile', _this.profileinfo).then(function (response) {	
							alertify.success("Het profiel werd succesvol aangepast!");
						}).catch(function (error) {})

						_this.loadData();
					}
				})
			}
		}
	}
</script>