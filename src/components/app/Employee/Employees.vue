<template>
	<div class="wrap">
		<section class="app-content">
			<div class="row">
				<div class="col-md-12">
					<div class="table-responsive">
						<table class="table mail-list">
							<tr>
								<td>
									<employee v-for="employee in employees" :employee="employee"></employee>
								</td>
							</tr>
						</table>
					</div>
				</div><!-- END column -->
			</div><!-- .row -->
		</section><!-- .app-content -->
	</div><!-- .wrap -->
</template>

<script>
	import Employee from 'components/app/Employee/Employee.vue';
	
	export default {
		name: 'EmployeeList',
		components: {
			employee: Employee,
		},
		created: function () {
			this.employees = [];
			this.loadData();
			
			this.interval = setInterval(function () {
				this.loadData();
			}.bind(this), 60000); 
		},
		data: function () {
			return {
				employees: []
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				
				this.axios.get('/employees').then(function (response) {
					_this.employees = response.data;
				}).catch(function (error) {})
			}
		},
		beforeDestroy: function(){
			clearInterval(this.interval);
		}
	}
</script>