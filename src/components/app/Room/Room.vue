<template>
	<!-- a single mail -->
	<div class="mail-item">
		<table class="mail-container">
			<tr>
				<td class="mail-left">
					<div class="avatar avatar-lg avatar-circle">
						<router-link :to="{ name: 'roomdetail', params: { buildingId: room.building_id, id: room.id }}">
							<img :src="room.image" alt="sender photo"  v-if="room.image">
							<avatar :username="room.room" :size="60" :rounded="false" v-else></avatar>
						</router-link>
					</div>
				</td>
				<td class="mail-center">
					<div class="mail-item-header">
						<h4 class="mail-item-title"><router-link :to="{ name: 'roomdetail', params: { buildingId: room.building_id, id: room.id }}" class="title-color">{{room.room}}</router-link></h4>
					</div>
					<p class="mail-item-excerpt">{{room.room_detail}}</p>
				</td>
				<td class="mail-right">
					<p class="mail-item-date">{{ room.updated_at | moment("from") }}</p>
				</td>
			</tr>
		</table>
	</div><!-- END mail-item -->
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';

	export default {
		name: 'room',
		props: {
			room: {}
		},
		components: {
	    Avatar
	  }
	}
</script>