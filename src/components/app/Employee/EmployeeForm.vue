<template>
	<div class="wrap">
		<section class="app-content">
			<div class="row">
				<div class="col-md-8">
					<div class="widget">
						<header class="widget-header">
							<h4 class="widget-title" v-if="!employee.id">Werknemer toevoegen</h4>
							<h4 class="widget-title"  v-else>Werknemer bewerken</h4>
						</header><!-- .widget-header -->
						<hr class="widget-separator">
						<div class="widget-body">
							<div class="m-b-lg">
								<small>
								</small>
							</div>
							<form class="form-horizontal" action="?page=employees">
								<div class="form-group">
									<label for="exampleTextInput1" class="col-sm-3 control-label">Voornaam:</label>
									<div class="col-sm-9">
										<input type="text" class="form-control" id="firstname" placeholder="Voornaam" v-model="employee.firstname">
									</div>
								</div>
								<div class="form-group">
									<label for="email2" class="col-sm-3 control-label">Achternaam:</label>
									<div class="col-sm-9">
										<input type="text" class="form-control" id="lastname" placeholder="Achternaam" v-model="employee.lastname">
									</div>
								</div>
								<div class="form-group" :class="{'has-error': errors.has('email') }">
									<label for="email2" class="col-sm-3 control-label">Email:</label>
									<div class="col-sm-9">
										<input type="text" class="form-control" id="email" name="email" placeholder="Email" v-model="employee.email" v-validate="{ rules: { required: true, email: true } }">
										<span v-show="errors.has('email')">{{ errors.first('email') }}</span>
									</div>
								</div>
								<div class="form-group">
									<label for="email2" class="col-sm-3 control-label">GSM:</label>
									<div class="col-sm-9">
										<input type="text" class="form-control" id="phone" placeholder="Gsm" v-model="employee.phone">
									</div>
								</div>

								<div class="form-group">
									<label for="textarea1" class="col-sm-3 control-label">Categorieën:</label>
									<div class="col-sm-9">
										<div class="row no-gutter">
											<div class="col-xs-4">
												<div class="checkbox checkbox-primary">
													<input type="checkbox" id="cb-1" value="1" v-model="employee.categories">
													<label for="cb-1">Water</label>
												</div>
												<div class="checkbox checkbox-info">
													<input type="checkbox" id="cb-2" value="2" v-model="employee.categories">
													<label for="cb-2">Meubels</label>
												</div>
												<div class="checkbox checkbox-success">
													<input type="checkbox" id="cb-3" value="3" v-model="employee.categories">
													<label for="cb-3">Tuin</label>
												</div>
												<div class="checkbox checkbox-warning">
													<input type="checkbox" id="cb-4" value="4" v-model="employee.categories">
													<label for="cb-4">Elektriciteit</label>
												</div>
												<div class="checkbox checkbox-danger">
													<input type="checkbox" id="cb-5" value="5" v-model="employee.categories">
													<label for="cb-5">Verwarming</label>
												</div>
											</div>
											<div class="col-xs-4">
												<div class="checkbox checkbox-pink">
													<input type="checkbox" id="cb-6" value="6" v-model="employee.categories">
													<label for="cb-6">Internet/Telefonie</label>
												</div>
												<div class="checkbox checkbox-purple">
													<input type="checkbox" id="cb-7" value="7" v-model="employee.categories">
													<label for="cb-7">Glasschade</label>
												</div>
												<div class="checkbox checkbox-inverse">
													<input type="checkbox" id="cb-8" value="8" v-model="employee.categories">
													<label for="cb-8">Overige</label>
												</div>
											</div><!-- .col -->
										</div><!-- .row -->
									</div><!-- .col -->
								</div>

								<div class="form-group">
									<label for="textarea1" class="col-sm-3 control-label">Gebouwen:</label>
									<div class="col-sm-9">
										<div class="row no-gutter">
											<div class="col-xs-4">
												<div class="checkbox checkbox-primary" v-for="building in buildings">
													<input type="checkbox" :id="building.id" :value="building.id" v-model="employee.buildings">
													<label :for="building.id">{{building.name}}</label>
												</div>
											</div><!-- .col -->
										</div><!-- .row -->
									</div><!-- .col -->
								</div>
								
								<div class="row">
									<div class="col-sm-9 col-sm-offset-3">
										<span class="btn btn-success" v-if="!employee.id" @click.prevent="publishEmployee">Werknemer toevoegen</span>
										<span class="btn btn-success" v-else @click.prevent="updateEmployee">Werknemer bewerken</span>
									</div>
								</div>
							</form>
						</div><!-- .widget-body -->
					</div><!-- .widget -->
				</div><!-- END column -->
				
				
				<div class="col-md-4" v-if="employee.firstname">
					<div class="widget">
						<header class="widget-header">
							<center>
								<h4 class="widget-title center">{{employee.firstname}} {{employee.lastname}}</h4>
							</center>
						</header><!-- .widget-header -->
						<hr class="widget-separator">
						<div class="widget-body">
							<p>
								{{employee.email}} - {{employee.phone}}
							</p>
						</div><!-- .widget-body -->
					</div><!-- .widget -->
					
					<div v-if="employee.id">
						<a href="#" type="button" data-toggle="modal" data-target="#deleteItemModal" class="btn mw-md btn-danger full-width">Verwijderen</a>
					</div>
					
					<!-- delete item Modal -->
					<div id="deleteItemModal" class="modal fade" tabindex="-1" role="dialog">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									<h4 class="modal-title">Werknemer verwijderen</h4>
								</div>
								<div class="modal-body">
									<h5>Ben je zeker dat je dit werknemer wil verwijderen?</h5>
								</div><!-- .modal-body -->
								<div class="modal-footer">
									<a href="#" class="btn btn-danger" @click.prevent="removeEmployee">Verwijderen</a>
								</div><!-- .modal-footer -->
							</div><!-- /.modal-content -->
						</div><!-- /.modal-dialog -->
					</div><!-- /.modal -->
				</div><!-- END column -->
			</div><!-- .row -->
		</section><!-- #dash-content -->
	</div><!-- .wrap -->
</template>



<script>
	export default {
		name: 'employeeform',
		data: function() {
			return {
				image: '',
				employee: {
					firstname: "",
					lastname: "",
					email: "",
					phone: "",
					categories: []
				},
				employeeId: '',
				buildings: ''
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
				_this.employeeId = _this.$route.params.employeeId;

				this.axios.get('/buildings').then(function (response) {
					_this.buildings = response.data;
				}).catch(function (error) {});
				
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
			removeEmployee: function() {
				var _this = this;
				_this.employeeId = _this.$route.params.employeeId;
				
				if(_this.employeeId) {
					this.axios.delete('/employees/'+_this.employeeId).then(function (response) {
						$('#deleteItemModal').modal('hide');
						
						alertify.success("De werknemer werd succesvol verwijderd!");
						
						_this.$router.push('/employees');
					}).catch(function (error) {})
				}
			},
			updateEmployee: function() {
				var _this = this;
				_this.employeeId = _this.$route.params.employeeId;
				
				if(_this.employeeId) {
					this.axios.put('/employees/'+_this.employeeId, _this.employee).then(function (response) {	
						alertify.success("De werknemer werd succesvol aangepast!");
						
						_this.reinitVar();
						
						_this.$router.push('/employees');
					}).catch(function (error) {})
				}
			},
			publishEmployee: function() {
				var _this = this;
				
				this.axios.post('/employees', _this.employee).then(function (response) {	
					alertify.success("De werknemer werd succesvol toegevoegd!");
					
					_this.reinitVar();
					
					_this.$router.push('/employees');
				}).catch(function (error) {})
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
					_this.employee.image = e.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
				};
				reader.readAsDataURL(file);
			},
			removeImage: function (e) {
				var _this = this;
				
				_this.image = '';
				_this.employee.image = '';
			},
			reinitVar: function(){
				var _this = this;
				
				_this.employee.firstname = '';
				_this.employee.lastname = '';
				_this.employee.email = '';
				_this.employee.phone = '';
				_this.employee.image = '';
				_this.employee.categories = [];
				_this.employee.buildings = [];
			}
		}
	}
</script>