<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Eigendom aanmaken/bewerken</h1>
							<p>Hier kan je je eigendom aanmaken of bewerken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<div class="container">
			<div class="row">

				<buildingsidebar :building="building" v-if="building.id"></buildingsidebar>
				
				<div v-bind:class="[building.id ? 'col-xl-8 col-lg-8' : 'col-xl-12 col-lg-12', 'col-md-12 col-sm-12 col-xs-12']">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title" v-if="!building.id">Eigendom aanmaken</h6>
							<h6 class="title"  v-else>Eigendom bewerken</h6>

							<div v-if="building.id">
								<button href="#" type="button" class="btn-small pull-right btn mw-md btn-danger full-width" @click="showModalRemove">Verwijderen</button>
							</div>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('name') }">
											<label for="exampleTextInput1" class="control-label">Gebouw naam:</label>
											<input type="text" class="form-control" id="name" v-model="building.name" v-on:keyup="initialsCreate" name="name" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('initials') }">
											<label for="exampleTextInput1" class="control-label">Afkorting:</label>
											<input type="text" class="form-control" id="initials" placeholder="" v-model="building.initials" maxlength="3" name="initials" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('street') }">
											<label for="email2" class="control-label">Adres:</label>
											<input type="text" class="form-control" id="street" placeholder="" v-model="building.street" name="street" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('city') }">
											<label for="email2" class="control-label">Stad:</label>
											<input type="text" class="form-control" id="city" placeholder="" v-model="building.city" name="city" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('postal') }">
											<label for="email2" class="control-label">Postcode:</label>
											<input type="text" class="form-control" id="postal" placeholder="" v-model="building.postal" name="postal" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div class="form-group label-floating select-custom">
											<label for="email2" class="control-label">Country:</label>
											<select class="form-control" v-model="building.country">
												<option value="België">België</option>
												<option value="Nederland">Nederland</option>
												<option value="Luxemburg">Luxemburg</option>
												<option value="Duitsland">Duitsland</option>
											</select>
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating">
											<label class="control-label">Details</label>
											<textarea class="form-control" id="textarea1" placeholder="" v-model="building.description"></textarea>
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<label for="email2" class="control-label">Foto:</label>
										<div>
											<div v-if="!image">
												<avatar :username="building.name" :size="176" :rounded="false" :initials="building.initials"></avatar><br>
												<input type="file" class="form-control" id="picture" @change="onFileChange">
											</div>
											<div v-else>
												<img :src="image" width="176"/><br>
												<button @click="removeImage" class="btn btn-danger btn-outline mw-md btn-xs removeImage">Afbeelding verwijderen</button>
											</div>
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<a href="#" class="btn btn-secondary btn-lg full-width" @click.prevent="cancelForm">Annuleren</a>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<button class="btn btn-primary btn-lg full-width" v-if="!building.id" @click.prevent="publishBuilding">Eigendom toevoegen</button>
										<button class="btn btn-primary btn-lg full-width" v-else @click.prevent="updateBuilding">Eigendom aanpassen</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<modal name="removeModal" height="auto">
			<div class="modal-header">
				<h4 class="modal-title">Eigendom verwijderen</h4>
				<a href="#" class="close" @click.prevent="hideModalRemove"><span aria-hidden="true">&times;</span></a>
			</div>
			<div class="modal-body">
				<p>Ben je zeker dat je deze eigendom wil verwijderen?</p>

				<a href="#" class="btn btn-primary" @click.prevent="hideModalRemove">Annuleren</a>
				<a href="#" class="btn btn-danger" @click.prevent="removeBuilding">Verwijderen</a>
			</div><!-- .modal-footer -->
		</modal>
	</div><!-- .wrap -->
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	import BuildingSidebar from 'components/app/Building/BuildingSidebar.vue';

	export default {
		name: 'buildingform',
		components: {
			buildingsidebar: BuildingSidebar,
	    Avatar
	  },
		data: function() {
			return {
				image: '',
	      active2: false,
				building: {
					name: "",
					description: "",
					street: "",
					postal: "",
					city: "",
					country: "België",
					image: ""
				},
				buildingId: '',
				places: ''
			}
		},
		created: function () {
			var _this = this;
			 
			if(_this.$auth.getUserType() != 1) {
				_this.$router.push('/buildings');
			}

			_this.loadData();
		},
		watch: {
			'$route': 'reInitialize'
		},
		methods: {
			initialsCreate() {
				var initials = '';
				var title = this.building.name;
				var words = title.split(' ');
				var amountwords = words.length;
				
				for(var i = 0; i < amountwords; i++) {
					initials += words[i].charAt(0).toUpperCase();
				}

				if(amountwords == 2 && !isNaN(words[1])) {
					initials = '';
					initials += words[0].charAt(0).toUpperCase();
					initials += words[1].substring(0, 2);
				}

				this.building.initials = initials;
			},
			cancelForm () {
				this.$router.push('/buildings');
			},
			showModalRemove () {
				this.$modal.show('removeModal');
			},
			hideModalRemove () {
				this.$modal.hide('removeModal');
			},
			reInitialize: function() {
				var _this = this;
				_this.loadData();
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
				} else {
					_this.reinitVar();
				}
			},
			removeBuilding: function() {
				var _this = this;
				_this.buildingId = _this.$route.params.buildingId;
				
				if(_this.buildingId) {
					this.axios.delete('/buildings/'+_this.buildingId).then(function (response) {
						_this.$modal.hide('removeModal');
						
						alertify.success("Het gebouw werd succesvol verwijderd!");
						
						_this.$router.push('/buildings');
					}).catch(function (error) {})
				}
			},
			updateBuilding: function() {
				var _this = this;
				_this.buildingId = _this.$route.params.buildingId;
				
				_this.$validator.validateAll().then((result) => {
       		if (result) {
						if(_this.buildingId) {
							this.axios.put('/buildings/'+_this.buildingId, _this.building).then(function (response) {	
								alertify.success("Het gebouw werd succesvol aangepast!");
								
								_this.reinitVar();
								
								_this.$router.push('/buildings');
							}).catch(function (error) {})
						}
					}
				})
			},
			publishBuilding: function() {
				var _this = this;
				
				_this.$validator.validateAll().then((result) => {
       		if (result) {
						this.axios.post('/buildings', _this.building).then(function (response) {	
							alertify.success("Het gebouw werd succesvol toegevoegd!");
							
							_this.reinitVar();
							
							_this.$router.push('/buildings');
						}).catch(function (error) {})
					}
				})
			},
			onFileChange(e) {
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length)
				  return;
				this.createImage(files[0]);
			},
			createImage(file) {
				var _this = this;
				
				var image = new Image();
				var reader = new FileReader();
				var vm = this;
		
				reader.onload = (e) => {
					vm.image = e.target.result;
					_this.building.image = e.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
				};
				reader.readAsDataURL(file);
			},
			removeImage: function (e) {
				var _this = this;
				
				_this.image = '';
				_this.building.image = '';
			},
			reinitVar: function(){
				var _this = this;
				
				_this.building.name = '';
				_this.building.description = '';
				_this.building.street = '';
				_this.building.postal = '';
				_this.building.city = '';
				_this.building.country = 'België';
				_this.building.image = '';
				_this.places = '';
			}
		}
	}
</script>