ServerEvents.recipes(e => {
	e.remove({ id: "createoreexcavation:extractor" })

	function createDeposit(id, name, ore, placement, biome, extractTime, extractStress, drill) {
		e.recipes.createoreexcavation.vein("Raw " + name, ore)
			.placement(placement[0], placement[1], placement[2])
			.biomeWhitelist(biome)
			.id("kubejs:vein_" + id)
		e.recipes.createoreexcavation.drilling(ore, "kubejs:vein_" + id, extractTime)
			.drill(drill)
			.stress(extractStress)
			.id("kubejs:drill_" + id)
	}

	// earth
	createDeposit("coal_earth", "Coal", "minecraft:coal", [ 50, 4, 48375847 ], "forge:is_overworld", 30 * 20, 64, "createoreexcavation:drill")
	createDeposit("uranium_earth", "Uraninite", "electrodynamics:raworeuranium", [ 100, 32, 43298295 ], "forge:is_overworld", 70 * 20, 96, "createoreexcavation:diamond_drill")
	createDeposit("diamond_earth", "Diamond", "createoreexcavation:raw_diamond", [ 100, 64, 5849845 ], "forge:is_cold", 60 * 20, 256, "createoreexcavation:netherite_drill")

	// space
	createDeposit("gold_space", "Gold", "minecraft:raw_gold", [ 30, 20, 43425245 ], "creatingspace:space", 80 * 20, 128, "createoreexcavation:diamond_drill")
	createDeposit("aluminum_space", "Bauxite", "electrodynamics:orealuminum", [ 20, 6, 1289895 ], "creatingspace:space", 20 * 20, 40, "createoreexcavation:drill")

	// moon
	createDeposit("iron_moon", "Iron", "minecraft:raw_iron", [ 40, 6, 21344234 ], "creatingspace:is_moon", 45 * 20, 64, "createoreexcavation:drill")
	createDeposit("tin_moon", "Cassiterite", "electrodynamics:raworetin", [ 35, 6, 2384235 ], "creatingspace:is_moon", 35 * 20, 64, "createoreexcavation:drill")
	createDeposit("lead_moon", "Galena", "electrodynamics:raworelead", [ 50, 8, 35259453 ], "creatingspace:is_moon", 60 * 20, 80, "createoreexcavation:drill")
	createDeposit("titanium_moon", "Rutile", "electrodynamics:raworetitanium", [ 90, 12, 4243244 ], "creatingspace:is_moon", 100 * 20, 128, "createoreexcavation:netherite_drill")
	createDeposit("silver_moon", "Argentite", "electrodynamics:raworesilver", [ 50, 10, 9934784 ], "creatingspace:is_moon", 50 * 20, 80, "createoreexcavation:drill")

	// mars
	createDeposit("zinc_mars", "Zinc", "create:raw_zinc", [ 50, 5, 34252532 ], "creatingspace:is_mars", 50 * 20, 64, "createoreexcavation:drill")
	createDeposit("copper_mars", "Copper", "minecraft:raw_copper", [ 30, 4, 53235645 ], "creatingspace:is_mars", 30 * 20, 64, "createoreexcavation:drill")
	createDeposit("nickel_mars", "Nickel", "immersiveengineering:raw_nickel", [ 50, 7, 12009543 ], "creatingspace:is_mars", 60 * 20, 64, "createoreexcavation:drill")

	// venus
	createDeposit("lithium_mars", "Lepidolite", "electrodynamics:raworelepidolite", [ 50, 6, 4325536 ], "creatingspace:is_venus", 60 * 20, 80, "createoreexcavation:drill")
	createDeposit("redstone_mars", "Redstone", "createoreexcavation:raw_redstone", [ 40, 6, 9889234 ], "creatingspace:is_venus", 30 * 20, 64, "createoreexcavation:drill")
	createDeposit("uranium_mars", "Uraninite", "electrodynamics:raworeuranium", [ 70, 10, 42093885 ], "creatingspace:is_venus", 60 * 20, 96, "createoreexcavation:diamond_drill")
})
