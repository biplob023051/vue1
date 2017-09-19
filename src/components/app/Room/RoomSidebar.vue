<template>
	<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
		<div class="ui-block">
			<div class="today-events calendar">
				<div class="today-events-thumb coloroverlay" v-bind:style="{ 'background-image': 'url('+ room.image +')' }" v-if="room.image">
					<div class="date">
						<div class="day-number">&nbsp;</div>
						<div class="day-week">{{room.room}}</div>
						<div class="month-year">&nbsp;</div>
					</div>
				</div>
				<div class="avataroverlay" v-else>
					<div class="date">
						<avatar :username="room.room" :size="90" :rounded="false" :initials="room.initials"></avatar>
					</div>
				</div>

				<div class="list">
					<div id="accordion-1">
						<div class="card">
							<div class="card-header">
								<div>
									Verblijf gegevens
								</div>
								<h5 class="mb-0 title">
									{{room.room}}
								</h5>
							</div>
							<div class="card-header">
								<div class="">
									Laatste update
								</div>
								<h5 class="mb-0 title">
									{{ room.updated_at | moment("from") }}
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Avatar from 'vue-avatar/dist/Avatar';

	export default {
		name: 'roomsidebar',
		components: {
	    Avatar
		},
		props: {room: {}},
	}
</script>