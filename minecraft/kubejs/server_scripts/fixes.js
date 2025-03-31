ServerEvents.recipes(e => {
	e.shaped("chest", [
		"PPP",
		"P P",
		"PPP"
	], {
		P: "#minecraft:planks"
	})

	e.shapeless("createaddition:zinc_sheet", ["#immersiveengineering:tools/hammers", "#forge:ingots/zinc"])

	e.replaceInput({ id: "toms_storage:storage_terminal" }, "glowstone", "redstone_block")
	e.replaceInput({ id: "toms_storage:storage_terminal" }, "comparator", "repeater")
	e.replaceInput({ id: "toms_storage:inventory_connector" }, "comparator", "repeater")

	e.remove({ id: "blocksyouneed_luna:coke" })
	e.remove({ id: "electrodynamics:blasting/coal_coke" })
	e.remove({ id: "electrodynamics:smelting/coal_coke" })
})
