ServerEvents.recipes(e => {
	e.remove({ id: "immersiveengineering:crafting/blastbrick" })
	e.remove({ id: "immersiveengineering:crafting/cokebrick" })
	
	//e.remove({ id: "immersiveengineering:crafting/alloybrick" })
	//e.remove({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick" })
	//e.remove({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick_using_deployer" })

	let inter = "kubejs:incomplete_blastbrick"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:blastbrick").withChance(78),
		Item.of("iceandfire:ash").withChance(14),
		Item.of("gravel").withChance(8),
	], "bricks", [
		e.recipes.create.deploying(inter, [ "bricks", "nether_brick" ]),
		e.recipes.create.deploying(inter, [ inter, "magma_block" ]),
		e.recipes.create.pressing(inter, inter),
	]).transitionalItem(inter).loops(1)

	inter = "kubejs:incomplete_cokebrick"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:cokebrick").withChance(89),
		Item.of("sand").withChance(8),
		Item.of("clay").withChance(1),
	], "clay", [
		e.recipes.create.deploying(inter, [ "clay", "brick" ]),
		e.recipes.create.deploying(inter, [ inter, "sand" ]),
		e.recipes.create.pressing(inter, inter),
	]).transitionalItem(inter).loops(1)

	//e.recipes.create.mixing("immersiveengineering:alloybrick", [ "sandstone", "brick" ])
	e.replaceOutput({ id: "immersiveengineering:crafting/alloybrick" }, "immersiveengineering:alloybrick", "kubejs:raw_alloybrick")
	e.replaceOutput({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick_using_deployer" }, "immersiveengineering:alloybrick", "kubejs:raw_alloybrick")
	e.replaceOutput({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick" }, "immersiveengineering:alloybrick", "kubejs:raw_alloybrick")
	e.smelting("immersiveengineering:alloybrick", "kubejs:raw_alloybrick")
	
	// hammah
	e.replaceInput({ id: "immersiveengineering:crafting/hammer" }, "#forge:ingots/iron", "#forge:stone")
	
	// dynamo
	e.remove({ id: "recipestages:immersiveengineering_crafting/dynamo" })
	e.remove({ id: "immersiveengineering:crafting/dynamo" })
	
	inter = "kubejs:incomplete_dyn"
	e.recipes.create.sequenced_assembly([
		Item.of("immersiveengineering:dynamo").withChance(100)
	], "immersiveengineering:coil_lv", [
		e.recipes.create.deploying(inter, [ inter, "immersiveengineering:component_iron" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:dusts/redstone" ]),
		e.recipes.create.pressing(inter, inter),
	]).transitionalItem(inter).loops(1)

	// steel block
	e.replaceInput({ id: "immersiveengineering:crafting/ingot_steel_to_storage_steel" }, "immersiveengineering:ingot_steel", "#forge:ingots/steel")

	// coke dust
	e.recipes.create.milling(Item.of("immersiveengineering:dust_coke").withChance(0.33), "#forge:coal_coke")
})
