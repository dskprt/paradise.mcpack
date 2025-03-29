ServerEvents.recipes(e => {
	e.remove({ id: "creatingspace:alloy_recipe/reinforced_copper_ingot_mixing" })
	e.recipes.create.mixing("2x creatingspace:reinforced_copper_ingot", [ "2x #forge:ingots/copper", "#forge:ingots/stainlesssteel" ]).heated()

	e.remove({ id: "creatingspace:alloy_recipe/inconel_ingot_mixing" })
	e.recipes.create.mixing("creatingspace:incocel_ingot", [ "2x #forge:ingots/nickel", "#forge:ingots/steel" ]).superheated()

	e.remove({ id: "creatingspace:cryogenic_tank" })
	e.recipes.create.mechanical_crafting("creatingspace:cryogenic_tank", [
		'  S  ',
		' NRN ',
		'SRTRS',
		' NRN ',
		'  S  '
	], {
		S: "#forge:storage_blocks/stainlesssteel",
		N: "#forge:plates/nickel",
		R: "#forge:storage_blocks/redstone",
		T: "create:fluid_tank"
	})

	e.remove({ id: "creatingspace:rocket_generator" })
	e.recipes.create.mechanical_crafting("creatingspace:rocket_generator", [
		' SSS ',
		'SOHOS',
		'SOFOS',
		'SOCOS',
		' SSS '
	], {
		S: "#forge:plates/steel",
		O: "#forge:plates/obsidian",
		H: "create:shaft",
		F: "creatingspace:sturdy_propeller",
		C: "create:copper_casing"
	})

	e.remove({ id: "creatingspace:methane" })
})
