ServerEvents.recipes(e => {
	e.remove({ id: "immersive_aircraft:propeller" })
	e.remove({ id: "immersive_aircraft:hull" })

	e.shaped("immersive_aircraft:propeller", [
		'SSS',
		' S ',
		'SSS'
	], {
		S: "#forge:ingots/iron"
	})

	e.shaped("immersive_aircraft:hull", [
		'IWI',
		'WGW',
		'SSS'
	], {
		I: "iron_block",
		W: "#minecraft:logs",
		G: "#forge:glass",
		S: "#forge:ingots/steel"
	})

	e.replaceInput({ id: "immersive_aircraft:engine" }, "cobblestone", "smooth_stone")
	e.replaceInput({ id: "immersive_aircraft:steel_boiler" }, "iron_ingot", "#forge:ingots/steel")
})
