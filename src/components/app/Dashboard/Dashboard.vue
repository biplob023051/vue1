<template>
	<div>
		<div class="header-spacer header-spacer-small"></div>

		<div class="main-header bg-group">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
						<div class="main-header-content">
							<h1>{{ this.$route.meta.title }}</h1>
							<p>Hier kan je je dashboard bekijken, alle meldingen die je nog moet behandelen en die in behandeling zijn.</p>
						</div>
					</div>
				</div>
			</div>

			<img class="img-bottom" src="static/v2/custom%20banners/banner_test.png?v=5" alt="friends" height="55%">
		</div>

		<div class="container dnone">
			<div class="row hidden-sm-down">
				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-content">
							<ul class="statistics-list-count">
								<li>
									<div class="points">
										<span>
											Meldingen vandaag
										</span>
									</div>
									<div class="count-stat">2
										<span class="indicator positive"> - 1</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-content">
							<ul class="statistics-list-count">
								<li>
									<div class="points">
										<span>
											Meldingen deze week
										</span>
									</div>
									<div class="count-stat">45
										<span class="indicator negative"> + 2</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-content">
							<ul class="statistics-list-count">
								<li>
									<div class="points">
										<span>
											Meldingen deze maand
										</span>
									</div>
									<div class="count-stat">165
										<span class="indicator positive"> - 15</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="ui-block">
						<div class="ui-block-content">
							<ul class="statistics-list-count">
								<li>
									<div class="points">
										<span>
											Meldingen dit jaar
										</span>
									</div>
									<div class="count-stat">3908
										<span class="indicator positive"> - 284</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">Openstaand ({{problems_open.length}})</h6>
							<router-link :to="{ name: 'problems', params: { status: 0 }}" class="more">ALLE</router-link>
						</div>

						<ul class="widget w-friend-pages-added notification-list friend-requests" v-if="problems_open.length > 0">
							<li class="inline-items" v-for="problem in problems_open" :problem="problem">
								<div class="author-thumb author-thumb-36">
									<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}">
										<img :src="problem.photos[0].image" alt="sender photo"  v-if="problem.photos.length > 0">
										<avatar :username="problem.problem" :size="36" :rounded="false" v-else></avatar>
									</router-link>
								</div>
								<div class="notification-event">
									<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}" class="h6 notification-friend">{{ problem.problem }}</router-link>
									<div class="chat-message-item"><span v-for="category in problem.categories">{{category.category}}</span></div>
								</div>
							</li>
						</ul>

						<ul class="widget w-friend-pages-added notification-list friend-requests" v-else>
							<li class="inline-items">
								Geen meldingen<span v-if="this.$auth.getUserType() == 1">, well done!</span>
							</li>
						</ul>
					</div>
				</div>
				
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
					<div class="ui-block">
						<div class="ui-block-title">
							<h6 class="title">In behandeling ({{problems_progress.length}})</h6>
							<router-link :to="{ name: 'problems', params: { status: 1 }}" class="more">ALLE</router-link>
						</div>

						<ul class="widget w-friend-pages-added notification-list friend-requests" v-if="problems_progress.length > 0">
							<li class="inline-items" v-for="problem in problems_progress" :problem="problem">
								<div class="author-thumb author-thumb-36">
									<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}">
										<img :src="problem.photos[0].image" alt="sender photo"  v-if="problem.photos.length > 0">
										<avatar :username="problem.problem" :size="36" :rounded="false" v-else></avatar>
									</router-link>
								</div>
								<div class="notification-event">
									<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}" class="h6 notification-friend">{{ problem.problem }}</router-link>
									<div class="chat-message-item"><span v-for="category in problem.categories">{{category.category}}</span></div>
								</div>
							</li>
						</ul>

						<ul class="widget w-friend-pages-added notification-list friend-requests" v-else>
							<li class="inline-items" v-if="problems_open.length > 0">
								Je hebt nog enkele openstaande meldingen.
							</li>

							<li class="inline-items" v-else>
								Geen meldingen<span v-if="this.$auth.getUserType() == 1">, well done!</span>
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

	export default {
		name: 'Dashboard',
		components: {
			Avatar
		},
		created: function () {
			this.problems_open = [];
			this.problems_progress = [];
			this.problems_closed = [];
			this.loadData();
		},
		data: function () {
			return {
				problems_open: [],
				problems_progress: [],
				problems_closed: []
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				
				this.axios.get('/problems/status/0').then(function (response) {
					_this.problems_open = response.data;
				}).catch(function (error) {})
				
				this.axios.get('/problems/status/1').then(function (response) {
					_this.problems_progress = response.data;
				}).catch(function (error) {})
				
				this.axios.get('/problems/status/2').then(function (response) {
					_this.problems_closed = response.data;
				}).catch(function (error) {})
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>