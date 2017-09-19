<template>
	<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
		<div class="ui-block">
			<div class="today-events calendar">
				<div class="today-events-thumb coloroverlay" v-bind:style="{ 'background-image': 'url('+ student.image +')' }" v-if="student.image">
					<div class="date">
						<div class="day-number">&nbsp;</div>
						<div class="day-week">{{student.firstname}} {{student.lastname}}</div>
						<div class="month-year">&nbsp;</div>
					</div>
				</div>
				<div class="avataroverlay" v-else>
					<div class="date">
						<avatar :username="student.firstname" :size="90" :rounded="false"></avatar>
					</div>
				</div>

				<div class="list">
					<div id="accordion-1">
						<div class="card">
							<div class="card-header">
								<div>
									Persoonsgegevens
								</div>
								<h5 class="mb-0 title">
									{{student.firstname}} {{student.lastname}}
								</h5>
							</div>
							<div class="card-header">
								<div class="">
									Email
								</div>
								<h5 class="mb-0 title">
									{{student.email}}
								</h5>
							</div>
							<div class="card-header" v-if="student.phone">
								<div class="">
									Telefoon
								</div>
								<h5 class="mb-0 title">
									{{student.phone}}
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
		name: 'studentsidebar',
		components: {
	    Avatar
		},
		props: {student: {}},
	}
</script>