ServerEvents.recipes(e => {
	const ids = [
		"blocksyouneed_luna:solar_panels",
		"blocksyouneed_luna:he_solar_panel",
		"blocksyouneed_luna:uhe_solar_panel"
	]
	
	for(const id of ids) {
		e.remove({ id: id })
	}
})
