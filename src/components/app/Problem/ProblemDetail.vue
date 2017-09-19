<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h3>{{ problem.problem }}</h3>
						</div>
					</div>
				</div>
			</div>

				<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>
		<div class="container">
			<div class="row">

				<!-- Left Sidebar -->

				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="today-events calendar">
							<div class="today-events-thumb coloroverlay" v-bind:style="{ 'background-image': 'url('+ photos[0].src +')' }" v-if="photos.length != 0">
								<div class="date">
									<div class="day-number">&nbsp;</div>
									<div class="day-week">{{ problem.problem }}</div>
									<div class="month-year">{{ problem.description }}</div>
								</div>
							</div>

							<div class="today-events-thumb coloroverlay" v-else>
								<div class="date">
									<div class="day-number">&nbsp;</div>
									<div class="day-week">{{ problem.problem }}</div>
									<div class="month-year">{{ problem.description }}</div>
								</div>
							</div>

							<div class="list">
								<div id="accordion-1">
									<div class="card">
										<div class="card-header">
											<div>
												Melder
											</div>
											<h5 class="mb-0 title">
												{{ problem.username }}
											</h5>
										</div>
										<div class="card-header">
											<div class="">
												Melding
											</div>
											<h5 class="mb-0 title">
												{{ problem.created_at | moment("from") }}
											</h5>
										</div>
										<div class="card-header">
											<div class="">
												Status
											</div>
											<h5 class="mb-0 title" v-if="problem.problem_status == 0">Openstaand</h5>
											<h5 class="mb-0 title" v-if="problem.problem_status == 1">In behandeling</h5>
											<h5 class="mb-0 title" v-if="problem.problem_status == 2">Gesloten</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- ... end Left Sidebar -->
				
				<!-- Main Content -->

				<div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
					

					<div class="ui-block">
						<div class="news-feed-form">
							<!-- Tab panes -->
							<div class="tab-content" v-if="problem.problem_status != 2">
								<div class="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
									<form>
										<div class="author-thumb">
											<img alt="author" :src="this.$auth.getProfile().image" class="avatar" v-if="this.$auth.getProfile().image">
											<avatar :username="this.$auth.getProfile().name" :size="36" :rounded="false" v-else></avatar>
										</div>
										<div class="form-group with-icon label-floating">
											<label class="control-label">Geef ons een update van de melding...</label>
											<textarea name="status_update_content" class="form-control" id="status-update-content" cols="30" rows="5" v-model="message.description"></textarea>
										</div>
										<div class="add-options-message">
											<a href="#" class="options-message dnone" data-toggle="modal" data-target="#update-header-photo" data-placement="top" title="" data-original-title="ADD PHOTOS">
												<svg class="olymp-camera-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-camera-icon"></use></svg>
											</a>

											<button class="btn btn-primary btn-md-2" @click.prevent="publishMessage">Update melding</button>
											<button   class="btn btn-md-2 btn-border-think btn-transparent c-grey" @click.prevent="publishMessageClose">Sluit melding</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div id="newsfeed-items-grid">
						<div class="ui-block" v-for="message in messages" :message="message">
							<article class="hentry post video">
								<div class="post__author author vcard inline-items">
									<img :src="message.user_image" alt="sender photo"  v-if="message.user_image">
									<avatar :username="message.name" :size="36" :rounded="false" v-else></avatar>

									<div class="author-date">
										<a class="h6 post__author-name fn" href="#">{{ message.name }}</a>
										<div class="post__date">
											<time class="published" datetime="2017-06-24T18:18">
												{{ message.created_at | moment("from") }}
											</time>
										</div>
									</div>
								</div>

								<p>{{ message.description }}</p>
							</article>
						</div>

						<div class="ui-block">
							<article class="hentry post video">
								<div class="post__author author vcard inline-items">
									<img :src="problem.user_image" alt="sender photo"  v-if="problem.user_image">
									<avatar :username="problem.username" :size="36" :rounded="false" v-else></avatar>

									<div class="author-date">
										<a class="h6 post__author-name fn" href="#">{{ problem.username }}</a>
										<div class="post__date">
											<time class="published" datetime="2017-06-24T18:18">
												{{ problem.created_at | moment("from") }}
											</time>
										</div>
									</div>
								</div>

								<p>{{ problem.description }}</p>

								<div class="post-thumbs" v-if="photos.length != 0">
									<lightbox id="mylightbox" :images="photos" :image_class=" 'img-responsive img-rounded' " :album_class=" 'my-album-class' "></lightbox>
							  </div>
							</article>
						</div>
					</div>
				</div>
				<!-- ... end Main Content -->
			</div>
		</div>
	</div>
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
  import Lightbox from 'vue-simple-lightbox'

	export default {
		name: 'problemdetail',
		components: {
	    Avatar,
	    Lightbox
	  },
		data: function() {
			return {
				image: '',
				problem: {
					problem: "",
					description: "",
					building_id: "",
					room_id: "",
					username: "",
					problem_status: 0,
					user: [],
					building: []
				},
				message: {
					description: '',
					problem_status: 1, //0 = open, 1 = in progress, 2 = solved
					photos: []
				},
				problemId: '',
				categories: [],
				photos: [],
				messages: []
			}
		},
		created: function () {
			var _this = this;
			//_this.profile = _this.$auth.getProfile();

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
			refreshMessages: function() {
				var _this = this;

				this.axios.get('/problems/'+_this.problemId+'/messages').then(function (response) {
					_this.messages = response.data;
				}).catch(function (error) {})
			},
			loadData: function () {
				var _this = this;
				_this.problemId = _this.$route.params.problemId;
				
				if(_this.problemId) {
					this.axios.get('/problems/'+_this.problemId).then(function (response) {
						_this.problem = response.data.problem;
						_this.problem.username = _this.problem.user.name;
						_this.message.problem_status = _this.problem.problem_status;

						document.title = _this.problem.problem;
					}).catch(function (error) {})

					this.axios.get('/problems/'+_this.problemId+'/photos').then(function (response) {
						_this.photos = response.data;
					}).catch(function (error) {})

					_this.refreshMessages();
				} else {
					_this.reinitVar();
				}
			},
			publishMessageClose: function() {
				var _this = this;

				_this.message.problem_status = 2;
				_this.addMessage();
			},
			publishMessage: function() {
				var _this = this;

				_this.message.problem_status = 1;
				_this.addMessage();
			},
			addMessage: function() {
				var _this = this;
				_this.problem.problem_status = _this.message.problem_status;
				
				this.axios.post('/problems/'+_this.problemId+'/message', _this.message).then(function (response) {	
					alertify.success("Het bericht werd succesvol toegevoegd!");
					
					_this.refreshMessages();

					_this.message.description = '';
				}).catch(function (error) {})
			},
			reinitVar: function(){
				var _this = this;
				
				_this.rooms = [];
				_this.problem.problem = '';
				_this.problem.description = '';
				_this.problem.building_id = '';
				_this.problem.room_id = '';
				_this.categories = [];
				_this.photos = [];
				_this.messages = [];
			}
		}
	}
</script>