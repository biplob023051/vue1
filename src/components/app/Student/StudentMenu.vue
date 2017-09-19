<template>
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="ui-block responsive-flex">
					<div class="ui-block-title">
						<ul class="nav nav-tabs calendar-events-tabs" role="tablist">
							<li class="nav-item">
								<router-link :to="{ name: 'studentdetail', params: { id: student.id }}" class="nav-link">
									Overzicht
								</router-link>
							</li>

							<li class="nav-item">
								<router-link :to="{ name: 'studentproblems', params: { id: student.id }}" class="nav-link">
									Meldingen <span class="items-round-little bg-primary" v-if="problems.length > 0">{{problems.length}}</span>
								</router-link>
							</li>

							<li class="nav-item dnone">
								<a class="nav-link" href="#">
									Statistieken
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'studentmenu',
		props: {student: {}},
		data: function() {
			return {
				problems: []
			}
		},
		created: function () {
			var _this = this;
			_this.loadData();
			
			// _this.interval = setInterval(function () {
			// 	_this.loadData();
			// }.bind(this), 60000);
		},
		watch: {
			'$route': 'reInitialize'
		},
		methods: {
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
					this.axios.get('/students/'+_this.studentId+'/problems').then(function (response) {
						_this.problems = response.data;
					}).catch(function (error) {})
				} else {
					_this.reinitVar();
				}
			},
			reinitVar: function(){
				var _this = this;
				
				_this.problems = [];
			}
		}
	}
</script>