<template>
	<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
		<div class="ui-block">
			<div class="birthday-item inline-items">
				<div class="author-thumb">
					<router-link :to="{ name: 'studentdetail', params: { studentId: student.id }}">
						<img :src="student.image" alt="sender photo"  v-if="student.image">
						<avatar :username="student.firstname" :size="42" :rounded="false" v-else></avatar>
					</router-link>
				</div>
				<div class="birthday-author-name">
					<router-link :to="{ name: 'studentdetail', params: { studentId: student.id }}" class="h6 author-name">
						{{student.firstname}} {{student.lastname}}
						
						<small v-if="student.linked_user_id"> - Geregistreerd</small>
						<small v-else> - Nog niet geregistreerd</small>
					</router-link>
					<div class="birthday-date">{{student.email}}</div>
					<div class="birthday-date">
						<span v-if="student.phone">{{student.phone}}</span>
						<span v-else>&nbsp;</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	
	export default {
		name: 'student',
		props: {student: {}},
		components: {
	    Avatar
	  }
	}
</script>