<template>
<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Verblijf toevoegen/bewerken</h1>
							<p>Hier kan je je verblijf toevoegen of bewerken.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<div class="container">
			<div class="row">

				<roomsidebar :room="room" v-if="room.id"></roomsidebar>
				
				<div v-bind:class="[room.id ? 'col-xl-8 col-lg-8' : 'col-xl-12 col-lg-12', 'col-md-12 col-sm-12 col-xs-12']">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title" v-if="!room.id">Verblijf aanmaken</h6>
							<h6 class="title"  v-else>Verblijf bewerken</h6>

							<div v-if="room.id">
								<button href="#" type="button" class="btn-small pull-right btn mw-md btn-danger full-width" @click="showModalRemove">Verwijderen</button>
							</div>
						</div>
						<div class="ui-block-content">
							<form>
								<div class="row">
									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('room') }">
											<label for="exampleTextInput1" class="control-label">Verblijf naam:</label>
											<input type="text" class="form-control" id="name" placeholder="" v-model="room.room" v-on:keyup="initialsCreate" name="room" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
										<div :class="{'form-group label-floating is-select': true, 'has-danger': errors.has('initials') }">
											<label for="exampleTextInput1" class="control-label">Afkorting:</label>
											<input type="text" class="form-control" id="initials" placeholder="" v-model="room.initials" maxlength="3" name="initials" v-validate="'required'">
										</div>
									</div>

									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select select-custom">
											<label for="email2" class="control-label">Type:</label>
											<select class="form-control" v-model="room.room_type">
												<option  v-for="(type, index) in types" :key="index" :value="type.id">{{type.property_type}}</option>
											</select>
										</div>
									</div>

									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select select-custom">
											<label for="email2" class="control-label">Bewoner:</label>
											<select class="form-control" v-model="room.visitor_id">
												<option value="0">&nbsp;</option>
												<option  v-for="(student, index) in students" :key="index" :value="student.id">
													{{student.firstname}} {{student.lastname}}<template v-if="student.room"> ({{student.building.name}} {{student.room.room}})</template>
												</option>
											</select>
										</div>
									</div>
								</div>
	
								<div class="row">
									<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="exampleTextInput1" class="control-label">Kamernummer:</label>
											<input type="text" class="form-control" id="number" placeholder="" v-model="room.number">
										</div>
									</div>

									<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="exampleTextInput1" class="control-label">Verdieping:</label>
											<input type="text" class="form-control" id="floor" placeholder="" v-model="room.floor">
										</div>
									</div>

									<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="exampleTextInput1" class="control-label">Oppervlakte:</label>
											<input type="text" class="form-control" id="opp" placeholder="" v-model="room.opp">
										</div>
									</div>

									<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="exampleTextInput1" class="control-label">Duur contract (maanden):</label>
											<input type="text" class="form-control" id="monthly_costs" placeholder="" v-model="room.contract">
										</div>
									</div>

									<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="exampleTextInput1" class="control-label">Verhuurprijs/maand:</label>
											<input type="text" class="form-control" id="rent_price" placeholder="" v-model="room.rent_price">
										</div>
									</div>

									<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label for="exampleTextInput1" class="control-label">Kosten/maand:</label>
											<input type="text" class="form-control" id="monthly_costs" placeholder="" v-model="room.monthly_costs">
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" id="cb-1" value="1" v-model="room.furnished">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Gemeubeld</div>
											</label>
										</div>
									</div>

									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
											  <input type="checkbox" id="cb-1" value="1" v-model="room.internet">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Internet</div>
											</label>
										</div>
									</div>

									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
												<input type="checkbox" id="cb-1" value="1" v-model="room.shower">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Badkamer</div>
											</label>
										</div>
									</div>

									<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="checkbox">
												<input type="checkbox" id="cb-1" value="1" v-model="room.kitchen">
											  <span class="checkbox__icon"></span>
											  <div class="h6">Keuken</div>
											</label>
										</div>
									</div>

									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="form-group label-floating is-select">
											<label class="control-label">Beschrijving</label>
											<textarea class="form-control" id="textarea1" placeholder="" v-model="room.room_detail"></textarea>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<label for="email2" class="control-label">Foto:</label>
										<div>
											<div v-if="!image">
												<avatar :username="room.room" :size="176" :rounded="false" :initials="room.initials"></avatar><br>
												<input type="file" class="form-control" id="picture" @change="onFileChange">
											</div>
											<div v-else>
												<img :src="image" width="176"/><br><br>
												<button @click="removeImage" class="btn btn-danger btn-outline mw-md btn-xs removeImage">Afbeelding verwijderen</button>
											</div>
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<a href="#" class="btn btn-secondary btn-lg full-width" @click.prevent="cancelForm">Annuleren</a>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<button class="btn btn-primary btn-lg full-width" v-if="!room.id" @click.prevent="publishRoom">Verblijf toevoegen</button>
										<button class="btn btn-primary btn-lg full-width" v-else @click.prevent="updateRoom">Verblijf aanpassen</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- delete item Modal -->
		<modal name="removeModal" height="auto">
			<div class="modal-header">
				<h4 class="modal-title">Verblijf verwijderen</h4>
				<a href="#" class="close" @click.prevent="hideModalRemove"><span aria-hidden="true">&times;</span></a>
			</div>
			<div class="modal-body">
				<p>Ben je zeker dat je dit verblijf wil verwijderen?</p>

				<a href="#" class="btn btn-primary" @click.prevent="hideModalRemove">Annuleren</a>
				<a href="#" class="btn btn-danger" @click.prevent="removeRoom">Verwijderen</a>
			</div><!-- .modal-footer -->
		</modal>
	</div><!-- .wrap -->
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	import Roomsidebar from 'components/app/Room/RoomSidebar.vue';

	export default {
		name: 'roomform',
		components: {
	    Avatar,
			roomsidebar: Roomsidebar
	  },
		data: function() {
			return {
				image: '',
				room: {
					visitor_id: "0",
					room: "",
					room_detail: "",
					room_type: "1",
					rent_price: "",
					monthly_costs: "",
					yearly_costs: "",
					number: "",
					floor: "",
					furnished: false,
					image: false
				},
				building: {
					name: "",
					description: "",
					street: "",
					postal: "",
					city: "",
					country: "",
					image: "",
				},
				buildingId: '',
				roomId: '',
				students: '',
				types: ''
			}
		},
	  created: function () {
			var _this = this;
			 
			if(_this.$auth.getUserType() != 1) {
				_this.$router.push('/dashboard');
			}

			_this.loadData();
		},
		watch: {
			'$route': 'reInitialize'
		},
		methods: {
			initialsCreate() {
				var initials = '';
				var title = this.room.room;
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

				this.room.initials = initials;
			},
			cancelForm () {
				this.$router.push('/building/detail/'+this.buildingId+'/rooms');
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
				_this.roomId = _this.$route.params.id;
				_this.buildingId = _this.$route.params.buildingId;

				this.axios.get('/types').then(function (response) {
					_this.types = response.data;
				}).catch(function (error) {})

				this.axios.get('/students').then(function (response) {
					_this.students = response.data;
				}).catch(function (error) {})

				if(_this.buildingId) {
					this.axios.get('/buildings/'+_this.buildingId).then(function (response) {
						_this.building = response.data.building;
						
						_this.building.image = _this.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
				
				if(_this.roomId) {
					this.axios.get('/buildings/'+_this.buildingId+'/rooms/'+_this.roomId).then(function (response) {
						_this.room = response.data.room;
						
						_this.image = _this.room.image;
						_this.room.image = _this.image.replace(/^data:image\/[a-z]+;base64,/, "");
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			removeRoom: function() {
				var _this = this;
				_this.roomId = _this.$route.params.id;
				
				if(_this.roomId) {
					this.axios.delete('/buildings/'+_this.buildingId+'/rooms/'+_this.roomId).then(function (response) {
						_this.$modal.hide('removeModal');
						
						alertify.success("Het verblijf werd succesvol verwijderd!");
						
						_this.$router.push('/building/detail/'+_this.buildingId+'/rooms');
					}).catch(function (error) {})
				}
			},
			updateRoom: function() {
				var _this = this;
				_this.roomId = _this.$route.params.id;
				
				_this.$validator.validateAll().then((result) => {
       		if (result) {
						if(_this.roomId) {
							this.axios.put('/buildings/'+_this.buildingId+'/rooms/'+_this.roomId, _this.room).then(function (response) {	
								alertify.success("Het verblijf werd succesvol aangepast!");
								
								_this.reinitVar();
								
								_this.$router.push('/building/detail/'+_this.buildingId+'/rooms');
							}).catch(function (error) {})
						}
					}
				})
			},
			publishRoom: function() {
				var _this = this;

				_this.$validator.validateAll().then((result) => {
       		if (result) {
						this.axios.post('/buildings/'+_this.buildingId+'/rooms', _this.room).then(function (response) {	
							alertify.success("Het verblijf werd succesvol toegevoegd!");
							
							_this.reinitVar();
							
							_this.$router.push('/building/detail/'+_this.buildingId+'/rooms');
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
					_this.room.image = e.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
				};
				reader.readAsDataURL(file);
			},
			removeImage: function (e) {
				var _this = this;
				
				_this.image = '';
				_this.room.image = '';
			},
			reinitVar: function(){
				var _this = this;
				
				_this.room.visitor_id = "0";
				_this.room.room = "";
				_this.room.room_detail = "";
				_this.room.room_type = "1";
				_this.room.furnished = false;
				_this.room.number = "";
				_this.room.image = '';
			}
		}
	}
</script>