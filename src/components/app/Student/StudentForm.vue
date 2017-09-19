<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Gebouw details</h1>
							<p>Hier kan je je dashboard bekijken, alle meldingen die je nog moet behandelen en die in behandeling zijn.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<div class="container">
			<div class="row">
				
				<div v-bind:class="[student.id ? 'col-xl-8 col-lg-8' : 'col-xl-12 col-lg-12', 'col-md-12 col-sm-12 col-xs-12']">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title" v-if="!student.id">Student uitnodigen</h6>
							<h6 class="title"  v-else>Student bewerken</h6>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('firstname') }">
											<label for="exampleTextInput1" class="control-label">Voornaam:</label>
											<input type="text" class="form-control" id="firstname" placeholder="" v-model="student.firstname" name="firstname" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('lastname') }">
											<label for="email2" class="control-label">Achternaam:</label>
											<input type="text" class="form-control" id="lastname" placeholder="" v-model="student.lastname" name="lastname" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('email') }">
											<label for="email2" class="control-label">Email:</label>
											<input type="text" class="form-control" id="email" name="email" placeholder="" v-model="student.email" v-validate="{ rules: { required: true, email: true } }">
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="email2" class="control-label">GSM:</label>
											<input type="text" class="form-control" id="phone" placeholder="" v-model="student.phone">
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="control-label">Opmerking</label>
											<textarea class="form-control" id="textarea1" placeholder="" v-model="student.remark"></textarea>
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<a href="#" class="btn btn-secondary btn-lg full-width" @click.prevent="cancelForm">Annuleren</a>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<button class="btn btn-primary btn-lg full-width" v-if="!student.id" @click.prevent="publishStudent">Student toevoegen</button>
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
		name: 'studentform',
		data: function() {
			return {
				image: '',
				student: {
					firstname: "",
					lastname: "",
					email: "",
					phone: "",
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
			cancelForm () {
				this.$router.push('/students');
			},
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
				} else {
					_this.reinitVar();
				}
			},
			removeStudent: function() {
				var _this = this;
				_this.studentId = _this.$route.params.studentId;
				
				if(_this.studentId) {
					this.axios.delete('/students/'+_this.studentId).then(function (response) {
						$('#deleteItemModal').modal('hide');
						
						alertify.success("De student werd succesvol verwijderd!");
						
						_this.$router.push('/students');
					}).catch(function (error) {})
				}
			},
			updateStudent: function() {
				var _this = this;
				_this.studentId = _this.$route.params.studentId;
				
				_this.$validator.validateAll().then((result) => {
       		if (result) {
						if(_this.studentId) {
							this.axios.put('/students/'+_this.studentId, _this.student).then(function (response) {	
								alertify.success("De student werd succesvol aangepast!");
								
								_this.reinitVar();
								
								_this.$router.push('/students');
							}).catch(function (error) {})
						}
					}
				})
			},
			publishStudent: function() {
				var _this = this;

				_this.$validator.validateAll().then((result) => {
       		if (result) {
						this.axios.post('/students', _this.student).then(function (response) {	
							alertify.success("De student werd succesvol toegevoegd!");
							
							_this.reinitVar();
							
							_this.$router.push('/students');
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
					_this.student.image = e.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
				};
				reader.readAsDataURL(file);
			},
			removeImage: function (e) {
				var _this = this;
				
				_this.image = '';
				_this.student.image = '';
			},
			reinitVar: function(){
				var _this = this;
				
				_this.student.firstname = '';
				_this.student.lastname = '';
				_this.student.email = '';
				_this.student.phone = '';
				_this.student.image = '';
			}
		}
	}
</script>