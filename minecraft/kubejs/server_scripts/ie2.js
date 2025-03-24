ServerEvents.recipes(e => {
	e.remove({ id: "immersiveengineering:crafting/light_engineering" })
	e.remove({ id: "immersiveengineering:crafting/heavy_engineering" })
	e.remove({ id: "immersiveengineering:crafting/rs_engineering" })
	
	let inter = "kubejs:incomplete_le"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:light_engineering", 2).withChance(85),
		Item.of("immersiveengineering:sheetmetal_aluminum").withChance(12),
		Item.of("immersiveengineering:component_iron").withChance(4),
	], "immersiveengineering:sheetmetal_aluminum", [
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:ingots/copper" ]),
		e.recipes.create.deploying(inter, [ inter, "immersiveengineering:component_iron" ]),
	]).transitionalItem(inter).loops(2)

	inter = "kubejs:incomplete_he"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:heavy_engineering", 3).withChance(71),
		Item.of("immersiveengineering:sheetmetal_steel").withChance(16),
		Item.of("immersiveengineering:component_steel").withChance(9),
	], "immersiveengineering:sheetmetal_steel", [
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:ingots/electrum" ]),
		e.recipes.create.deploying(inter, [ inter, "immersiveengineering:component_steel" ]),
		e.recipes.create.deploying(inter, [ inter, "immersiveengineering:component_steel" ]),
	]).transitionalItem(inter).loops(3)

	inter = "kubejs:incomplete_re"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:rs_engineering", 1).withChance(59),
		Item.of("immersiveengineering:sheetmetal_iron").withChance(10),
		Item.of("redstone").withChance(4),
	], "immersiveengineering:sheetmetal_iron", [
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:ingots/copper" ]),
		e.recipes.create.deploying(inter, [ inter, "redstone" ]),
	]).transitionalItem(inter).loops(2)
})
