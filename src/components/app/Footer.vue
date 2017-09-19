<template>

</template>

<script>
	export default {
		name: "footer",
		data: function() {
			return {
				building: {
					name: "",
					description: "",
					street: "",
					postal: "",
					city: "",
					country: "",
					image: "",
				}
			}
		},
		methods: {
			publishBuilding: function() {
				var _this = this;
				
				this.axios.post('/buildings', _this.building).then(function (response) {	
					alertify.success("Building published!");
					
					_this.building.name = '';
					_this.building.description = '';
					_this.building.street = '';
					_this.building.postal = '';
					_this.building.city = '';
					_this.building.country = '';
					_this.building.image = '';
					
					//_this.$router.push('/buildings');
					//_this.$emit('newBuilding', response.data);
				}).catch(function (error) {})
			}
		}
	}
</script>