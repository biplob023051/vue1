<template>
	<!-- a single mail -->
	<div class="mail-item">
		<table class="mail-container">
			<tr>
				<td class="mail-left">
					<div class="avatar avatar-lg avatar-circle">
						<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}">
							<img :src="problem.photos[0].image" alt="sender photo"  v-if="problem.photos.length > 0">
							<avatar :username="problem.problem" :size="60" :rounded="false" v-else></avatar>
						</router-link>
					</div>
				</td>
				<td class="mail-center">
					<div class="mail-item-header">
						<h4 class="mail-item-title"><router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}" class="title-color">{{problem.problem}}</router-link></h4>
						<!--<router-link :to="{ name: 'problemdetail', params: { problemId: problem.id }}"><span class="label label-primary">Tuin</span></router-link>-->
					</div>
					<p class="mail-item-excerpt">{{problem.description}}</p>
				</td>
				<td class="mail-right">
					<p class="mail-item-date">{{ problem.updated_at | moment("from") }}</p>
				</td>
			</tr>
		</table>
	</div><!-- END mail-item -->
</template>

<script>
	import Avatar from 'vue-avatar/dist/Avatar';
	
	export default {
		name: 'problem',
		props: {problem: {}},
		components: {
	    Avatar
	  }
	}
</script>