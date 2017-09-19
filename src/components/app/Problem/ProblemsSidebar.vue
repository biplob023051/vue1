<template>
	<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
		<div class="ui-block">
			<div class="your-profile">
				<div class="ui-block-title">
					<router-link :to="{ name: 'problems'}" class="h6 title">Alle</router-link>
				</div>
				<div class="ui-block-title">
					<router-link :to="{ name: 'problems', params: { status: 0 }}" class="h6 title">Openstaand</router-link>
					<router-link :to="{ name: 'problems', params: { status: 0 }}" class="items-round-little bg-danger">{{problemscount}}</router-link>
				</div>
				<div class="ui-block-title">
					<router-link :to="{ name: 'problems', params: { status: 1 }}" class="h6 title">In behandeling</router-link>
					<router-link :to="{ name: 'problems', params: { status: 1 }}" class="items-round-little bg-primary">{{problemscount}}</router-link>
				</div>
				<div class="ui-block-title">
					<router-link :to="{ name: 'problems', params: { status: 2 }}" class="h6 title">Opgelost</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'problemsSidebar',
		components: {
		},
		created: function () {
			//this.loadData();
		},
		data: function () {
			return {
				problemscount: 0
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				
				// this.axios.get('/user').then(function (response) {
				// 	_this.user = response.data.user;
				// }).catch(function (error) {})
			}
		}
	}
</script>