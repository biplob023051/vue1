<template>
	<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
		<div class="ui-block" data-mh="friend-groups-item">
			<div class="friend-item friend-groups">
				<div class="friend-item-content">
					<div class="more">
						<svg class="olymp-three-dots-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-three-dots-icon"></use></svg>
						<ul class="more-dropdown">
							<li>
								<router-link :to="{ name: 'buildingdetail', params: { buildingId: building.id }}">Details</router-link>
							</li>
							<li>
								<router-link :to="{ name: 'buildingproblems', params: { buildingId: building.id }}">Meldingen</router-link>
							</li>
							<li>
								<router-link :to="{ name: 'buildingupdate', params: { buildingId: building.id }}" v-if="this.$auth.getUserType() == 1">Bewerken</router-link>
							</li>
						</ul>
					</div>
					<div class="friend-avatar">
						<div class="author-thumb">
							<router-link :to="{ name: 'buildingdetail', params: { buildingId: building.id }}">
								<img :src="building.image" width="120.5px" alt="sender photo"  v-if="building.image">
								<avatar :username="building.name" :size="120" :rounded="false" :initials="building.initials" v-else></avatar>
							</router-link>
						</div>
						<div class="author-content">
							<router-link :to="{ name: 'buildingdetail', params: { buildingId: building.id }}" class="h5 author-name">{{building.name}}</router-link>
							<div class="country">{{ building.updated_at | moment("from") }}</div>
						</div>
					</div>

					<ul class="friends-harmonic dnone">
						<li>
							<a href="#">
								<img src="static/v2/img/friend-harmonic5.jpg" alt="friend">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="static/v2/img/friend-harmonic10.jpg" alt="friend">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="static/v2/img/friend-harmonic7.jpg" alt="friend">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="static/v2/img/friend-harmonic8.jpg" alt="friend">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="static/v2/img/friend-harmonic2.jpg" alt="friend">
							</a>
						</li>
						<li>
							<a href="#">
								<img src="static/v2/img/avatar30-sm.jpg" alt="author">
							</a>
						</li>
					</ul>

					<div class="control-block-button">
						<router-link :to="{ name: 'buildingdetail', params: { buildingId: building.id }}" class="btn btn-control btn-grey-lighter">
							<svg class="olymp-settings-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-settings-icon"></use></svg>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Avatar from 'vue-avatar/dist/Avatar';

	export default {
		name: 'building',
		props: {building: {}},
		components: {
	    Avatar
	  }
	}
</script>