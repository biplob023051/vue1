<template>
	<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
		<div class="ui-block">
			<div class="today-events calendar">
				<div class="today-events-thumb coloroverlay" v-bind:style="{ 'background-image': 'url('+ building.gmapsimage +')' }">
					<div class="date">
						<div class="day-number">&nbsp;</div>
						<div class="day-week">{{building.name}}</div>
						<div class="month-year">{{building.street}}, {{building.postal}} {{building.city}}</div>
					</div>
				</div>

				<div class="list">
					<div class="control-block-button" style="display: none;">
						<a href="#" class="btn btn-control bg-primary" data-toggle="modal" data-target="#create-event">
							<svg class="olymp-plus-icon"><use xlink:href="static/v2/icns/icons.svg#olymp-plus-icon"></use></svg>
						</a>
					</div>

					<div id="accordion-1">
						<div class="card">
							<div class="card-header">
								<div class="">
									Laatste update
								</div>
								<h5 class="mb-0 title">
									{{ building.updated_at | moment("from") }}
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
	export default {
		name: 'buildingsidebar',
		props: {building: {}},
	}
</script>