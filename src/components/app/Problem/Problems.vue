<template>
<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>Meldingen</h1>
							<p>Hier kan je je dashboard bekijken, alle meldingen die je nog moet behandelen en die in behandeling zijn.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<div class="container">
			<div class="row">
				<problemssidebar></problemssidebar>

				<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
					<div class="ui-block">
						<ul class="widget w-friend-pages-added notification-list friend-requests">
							<li class="inline-items" v-for="problem in problems" :problem="problem">
								<div class="author-thumb author-thumb-36">
									<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}">
										<img :src="problem.photos[0].image" alt="sender photo"  v-if="problem.photos.length > 0">
										<avatar :username="problem.problem" :size="36" :rounded="false" v-else></avatar>
									</router-link>
								</div>
								<div class="notification-event">
									<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}" class="h6 notification-friend">{{ problem.problem }} <span class="pull-right"> &nbsp; ({{ problem.updated_at | moment("from") }})</span></router-link>
									<div class="chat-message-item"><span v-for="category in problem.categories">{{category.category}}</span></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div><!-- .wrap -->
</template>

<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	import ProblemsSidebar from 'components/app/Problem/ProblemsSidebar.vue';
	
	export default {
		name: 'ProblemList',
		components: {
	    Avatar,
			problemssidebar: ProblemsSidebar
		},
		watch: {
	    '$route.params.status': function (status) {
	      this.loadData()
	    }
	  },
		created: function () {
			this.problems = [];
			this.loadData();
			
			// this.interval = setInterval(function () {
			// 	this.loadData();
			// }.bind(this), 60000); 
		},
		data: function () {
			return {
				problems: [],
				status: ''
			}
		},
		methods: {
			reInitialize: function() {
				var _this = this;
				_this.loadData();
			},
			loadData: function () {
				var _this = this;

				console.log(_this.$route.params.status);

				_this.status = _this.$route.params.status;
				
				if(_this.status != '' && _this.status != undefined || _this.status == 0) {
					this.axios.get('/problems/status/'+_this.status).then(function (response) {
						_this.problems = response.data;


					}).catch(function (error) {})
				} else {
					this.axios.get('/problems').then(function (response) {
						_this.problems = response.data;
					}).catch(function (error) {})
				}
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>