<template>
	<!-- a single mail -->
	<div class="mail-item">
		<table class="mail-container">
			<tr>
				<td class="mail-left">
					<div class="avatar avatar-lg avatar-circle">
						<router-link :to="{ name: 'employeedetail', params: { employeeId: employee.id }}">
							<img :src="employee.image" alt="sender photo"  v-if="employee.image">
							<avatar :username="employee.firstname" :size="60" :rounded="false" v-else></avatar>
						</router-link>
					</div>
				</td>
				<td class="mail-center">
					<div class="mail-item-header">
						<h4 class="mail-item-title"><router-link :to="{ name: 'employeedetail', params: { employeeId: employee.id }}" class="title-color">{{employee.firstname}} {{employee.lastname}}</router-link></h4>
					</div>
					<p class="mail-item-excerpt">{{employee.email}} - {{employee.phone}}</p>
				</td>
				<td class="mail-right">
					<p class="mail-item-date">{{ employee.updated_at | moment("from") }}</p>
				</td>
			</tr>
		</table>
	</div><!-- END mail-item -->
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';

	export default {
		name: 'employee',
		props: {employee: {}},
		components: {
	    Avatar
	  }
	}
</script>