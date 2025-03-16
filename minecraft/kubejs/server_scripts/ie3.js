ServerEvents.recipes(e => {
	e.remove({ id: "immersiveengineering:crafting/generator" })
	e.remove({ id: "immersiveengineering:crafting/radiator" })
	
	let inter = "kubejs:incomplete_gen"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:generator").withChance(60),
		Item.of("immersiveengineering:sheetmetal_steel").withChance(14),
		Item.of("mekanism:dust_coal", 2).withChance(17),
	], "immersiveengineering:sheetmetal_steel", [
		e.recipes.create.deploying(inter, [ "immersiveengineering:sheetmetal_steel", "#forge:ingots/copper" ]),
		e.recipes.create.deploying(inter, [ inter, "immersiveengineering:coil_mv" ]),
		e.recipes.create.deploying(inter, [ inter, "immersiveengineering:component_iron" ]),
	]).transitionalItem(inter).loops(1)

	inter = "kubejs:incomplete_rad"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:radiator").withChance(100),
	], "immersiveengineering:steel_scaffolding_standard", [
		e.recipes.create.deploying(inter, [ "immersiveengineering:steel_scaffolding_standard", "#forge:plates/copper" ]),
		e.recipes.create.filling(inter, [ inter, Fluid.water() ]),
	]).transitionalItem(inter).loops(1)
})
