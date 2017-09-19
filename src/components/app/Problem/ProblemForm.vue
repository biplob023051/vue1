<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Nieuw probleem</h1>
							<p>Hier kan je een nieuw probleem toevoegen.</p>
						</div>
					</div>
				</div>
			</div>

				<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>
		<div class="container">
			<div class="row">
				<!-- Main Content -->
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title" v-if="!problem.id">Nieuwe melding</h6>
							<h6 class="title"  v-else>Melding bewerken</h6>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('problem') }">
											<label for="exampleTextInput1" class="control-label">Melding:</label>
											<input type="text" name="problem" id="problem" placeholder="" v-model="problem.problem" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="textarea1" class="control-label">Details:</label>
											<textarea class="form-control" name="description" id="textarea1" placeholder="" v-model="problem.description"></textarea>
										</div>
									</div>

									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select select-custom">
											<label for="email2" class="control-label">Gebouw:</label>
											<select class="form-control" v-model="problem.building_id" @change="getRooms">
												<option v-for="(building, index) in buildings" :key="index" :value="building.id">{{ building.name }}</option>
											</select>
										</div>
									</div>

									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12" v-if="rooms.length >= 1">
										<div class="form-group label-floating is-select select-custom">
											<label for="email2" class="control-label">Verblijf:</label>
											<select class="form-control" v-model="problem.room_id">
												<option value=""></option>
												<option v-for="(room, index) in rooms" :key="index" :value="room.id">{{ room.room }}</option>
											</select>
										</div>
									</div>

									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="1" v-model="problem.categories" v-validate="'required'">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Water</div>
											</label>
										</div>

										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="4" v-model="problem.categories" v-validate="'required'">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Meubels</div>
											</label>
										</div>
									</div>

									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="2" v-model="problem.categories" v-validate="'required'">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Elektriciteit</div>
											</label>
										</div>

										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="7" v-model="problem.categories">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Internet/Telefonie</div>
											</label>
										</div>
									</div>

									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="5" v-model="problem.categories">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Verwarming</div>
											</label>
										</div>

										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="6" v-model="problem.categories">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Tuin</div>
											</label>
										</div>
									</div>

									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="3" v-model="problem.categories">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Glasschade</div>
											</label>
										</div>

										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" value="8" v-model="problem.categories">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Overige</div>
											</label>
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="drop">
									    <output id="list">
									    	<div class="photoUpload" v-for="(photo, index) in photos">
													<img :src="photo" class="photo">
													<span class="removePhoto" @click.prevent="removePhoto(index)">x</span>
												</div>
									    </output>

									    <div class="cont">
									      <i class="fa fa-cloud-upload"></i>
									      <div class="tit">
									        Upload foto's
									      </div>
									      <div class="desc">
									        Klik hier, of sleep de foto's naar hier
									      </div>
									    </div>

									    <input id="files" multiple="multiple" name="files[]" @change="onFileChange" type="file" />
									  </div>
									</div>

									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<button class="btn btn-primary btn-lg full-width" v-if="!problem.id" @click.prevent="publishProblem">Nieuwe melding</button>
										<button class="btn btn-primary btn-lg full-width" v-else @click.prevent="updateProbleem">Melding bewerken</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div><!-- .wrap -->
</template>



<script>
	export default {
		name: 'problemform',
		data: function() {
			return {
				image: '',
				problem: {
					problem: "",
					description: "",
					building_id: "",
					room_id: "0",
					categories: [],
					photos: []
				},
				problemId: '',
				buildings: [],
				rooms: [],
				photos: [],
				user: this.$auth.getProfile()
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
				_this.problemId = _this.$route.params.problemId;

				this.axios.get('/buildings').then(function (response) {
					_this.buildings = response.data;

					if(_this.buildings.length >= 1) {
						_this.problem.building_id = _this.buildings[0].id;
					}
				}).catch(function (error) {})
				
				if(_this.problemId) {
					this.axios.get('/problems/'+_this.problemId).then(function (response) {
						_this.problem = response.data.problem;
						
						_this.image = _this.problem.image;
						_this.problem.image = _this.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			getRooms: function() {
				var _this = this;
				
				if(_this.problem.building_id) {
					this.axios.get('/buildings/'+_this.problem.building_id+'/rooms').then(function (response) {
						_this.rooms = response.data;
					}).catch(function (error) {})
				}
			},
			removeProblem: function() {
				var _this = this;
				_this.problemId = _this.$route.params.problemId;
				
				if(_this.problemId) {
					this.axios.delete('/problems/'+_this.problemId).then(function (response) {
						$('#deleteItemModal').modal('hide');
						
						alertify.success("De melding werd succesvol verwijderd!");
						
						_this.$router.push('/problems');
					}).catch(function (error) {})
				}
			},
			updateProblem: function() {
				var _this = this;
				_this.problemId = _this.$route.params.problemId;
				
				_this.$validator.validateAll().then((result) => {
       		if (result) {
						if(_this.problemId) {
							this.axios.put('/problems/'+_this.problemId, _this.problem).then(function (response) {	
								alertify.success("De melding werd succesvol aangepast!");
								
								_this.reinitVar();
								
								_this.$router.push('/problems');
							}).catch(function (error) {})
						}
					}
				})
			},
			publishProblem: function() {
				var _this = this;

				_this.$validator.validateAll().then((result) => {
       		if (result) {
						_this.axios.post('/problems', _this.problem).then(function (response) {	
							alertify.success("De melding werd succesvol toegevoegd!");
							
							_this.reinitVar();
							
							_this.$router.push('/problems');
						}).catch(function (error) {})
					}
				})
			},
			onFileChange(e) {
				var _this = this;

				//_this.photos = [];
				//_this.problem.photos = [];
				
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length)
				  return;

				for (var index = 0; index < files.length; ++index) {
				    this.createImage(files[index]);
				}
			},
			createImage(file) {
				var _this = this;
				
				var image = new Image();
				var reader = new FileReader();
				var vm = this;
		
				reader.onload = (e) => {
					
					vm.photos.push(e.target.result);
					_this.problem.photos.push(e.target.result.replace(/^data:image\/[a-z]+;base64,/, ""));
				};
				reader.readAsDataURL(file);
			},
			removePhoto: function (index) {
				var _this = this;

				delete _this.problem.photos.splice(index, 1);
				delete _this.photos.splice(index, 1);
			},
			removeImages: function (e) {
				var _this = this;
				
				_this.problem.photos = [];
				_this.photos = [];
			},
			reinitVar: function(){
				var _this = this;
				
				_this.problem.problem = '';
				_this.problem.description = '';
				_this.problem.building_id = '';
				_this.problem.room_id = '0';
				_this.problem.categories = [];
				_this.problem.photos = [];
				_this.buildings = [];
				_this.photos = [];
			}
		}
	}
</script>