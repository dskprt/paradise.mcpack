/*LootJS.modifiers(e => {
	e.addBlockLootModifier("minecraft:iron_ore").replaceLoot("minecraft:raw_iron", "immersivegeology:normal_ore_iron")
	e.addBlockLootModifier("minecraft:gold_ore").replaceLoot("minecraft:raw_gold", "immersivegeology:normal_ore_gold")
	e.addBlockLootModifier("minecraft:copper_ore").replaceLoot("minecraft:raw_copper", "immersivegeology:normal_ore_copper")
	
	e.addBlockLootModifier("minecraft:deepslate_iron_ore").replaceLoot("minecraft:raw_iron", "immersivegeology:normal_ore_iron")
	e.addBlockLootModifier("minecraft:deepslate_gold_ore").replaceLoot("minecraft:raw_gold", "immersivegeology:normal_ore_gold")
	e.addBlockLootModifier("minecraft:deepslate_copper_ore").replaceLoot("minecraft:raw_copper", "immersivegeology:normal_ore_copper")
	
	e.addBlockLootModifier("minecraft:nether_gold_ore").replaceLoot("minecraft:raw_gold", "immersivegeology:normal_ore_gold")
});*/

ServerEvents.recipes(e => {
	// input raw, cleaned raw (kubejs name), crushed raw, result
	function r(e, ore, oredrop, ir, clr, crr, r) {
		// remove recipes for ingot
		e.remove({ input: ore, output: r })
		e.remove({ input: ore.replace(":", ":deepslate"), output: r })
		e.remove({ input: ore, output: "#forge:ingots/" + ir })
		e.remove({ input: ore.replace(":", ":deepslate"), output: "#forge:ingots/" + ir })
		e.remove({ input: "#forge:ores/" + clr, output: r })
		e.remove({ input: "#forge:ores/" + clr, output: "#forge:ingots/" +  ir })
		e.remove({ input: "#forge:dusts/" + clr, output: r })
		e.remove({ input: "#forge:dusts/" + clr, output: "#forge:ingots/" + ir })
		e.remove({ input: "#forge:raw_materials/" + clr, output: r })
		e.remove({ input: "#forge:raw_materials/" + clr, output: "#forge:ingots/" + ir })
		
		// crushing recipes for raw ore block to raw ore
		e.recipes.create.crushing(oredrop, ore)
		e.recipes.immersiveengineering.crusher(oredrop, ore, [ { chance: 0.5, output: oredrop }, { chance: 0.2, output: oredrop } ])
		
		// crushing recipes for ingot to crushed
		e.recipes.create.crushing([crr, Item.of(crr).withChance(0.1)], r).processingTime(8 * 20)
		e.recipes.create.crushing(crr, "#forge:ingots/" + ir)
		e.recipes.immersiveengineering.crusher(crr, r, [ { chance: 0.01, output: "immersiveengineering:slag" } ])
		e.recipes.immersiveengineering.crusher(crr, "#forge:ingots/" + ir, [ { chance: 0.01, output: "immersiveengineering:slag" } ])
		
		// by le hand XD
		e.shapeless("8x kubejs:clean_raw_" + clr, [ "8x #forge:raw_materials/" + ir, "#forge:buckets/water" ])
		e.shapeless("kubejs:clean_raw_" + clr, [ "#forge:raw_materials/" + ir, Item.of("brush") ]).damageIngredient(Item.of("brush"))
		e.recipes.create.splashing("kubejs:clean_raw_" + clr, "#forge:raw_materials/" + ir)
		e.shapeless(crr, [ "kubejs:clean_raw_" + clr, "#immersiveengineering:tools/hammers" ])
		e.shapeless("kubejs:raw_" + clr + "_ingot", [ "#forge:dusts/" + clr, Item.of("kubejs:clay_mold") ]).damageIngredient(Item.of("kubejs:clay_mold"))
		//e.shapeless("kubejs:raw_" + clr + "_ingot", [ crr, Item.of("kubejs:clay_mold") ]).damageIngredient(Item.of("kubejs:clay_mold"))
		//e.smelting(r, "kubejs:raw_" + clr + "_ingot")
		e.recipes.immersiveengineering.alloy(Item.of(r, 2), "kubejs:raw_" + clr + "_ingot", "kubejs:raw_" + clr + "_ingot", 60 * 20)
		e.recipes.immersiveengineering.blast_furnace(r, "kubejs:raw_" + clr + "_ingot", "immersiveengineering:slag", 8 * 20)
		e.recipes.immersiveengineering.arc_furnace(Item.of(r, 2), Item.of(crr, 2), "#forge:sand", "immersiveengineering:slag", 22 * 20)
		
		// by machinery AUTOMATON
		e.recipes.create.pressing(crr, "kubejs:clean_raw_" + clr)
		e.recipes.create.crushing([crr, Item.of(crr).withChance(0.3)], "kubejs:clean_raw_" + clr)
		e.recipes.immersiveengineering.crusher(crr, "#forge:raw_materials/" + ir, [ { chance: 0.2, output: crr } ])
		//e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", crr, "immersiveengineering:mold_plate")
		e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", "#forge:dusts/" + clr, "immersiveengineering:mold_plate")
	}

	/*e.remove({ id: "immersivegeology:crafting/wash_dirty_crushed_iron" })
	e.recipes.create.crushing("immersivegeology:dirty_crushed_ore_iron", "immersivegeology:normal_ore_iron")
	e.recipes.immersiveengineering.crusher("immersiveengineering:dust_iron", "#forge:crushed_ore/iron") // TODO not working
	e.recipes.create.crushing("immersiveengineering:dust_iron", "#forge:crushed_ore/iron")
	
	e.remove({ id: "immersivegeology:crafting/wash_dirty_crushed_gold" })
	e.recipes.create.crushing("immersivegeology:dirty_crushed_ore_gold", "immersivegeology:normal_ore_gold")
	//e.recipes.create.crushing("immersiveengineering:d", "#forge:crushed_ore/gold")
	
	e.remove({ id: "immersivegeology:crafting/wash_dirty_crushed_copper" })
	e.recipes.create.crushing("immersivegeology:dirty_crushed_ore_copper", "immersivegeology:normal_ore_copper")
	e.recipes.create.crushing("immersiveengineering:dust_copper", "#forge:crushed_ore/copper")*/
	
	r(e, "minecraft:iron_ore", "minecraft:raw_iron", "iron", "iron", "create:crushed_raw_iron", "minecraft:iron_ingot")
	r(e, "minecraft:gold_ore", "minecraft:raw_gold", "gold", "gold", "create:crushed_raw_gold", "minecraft:gold_ingot")
	r(e, "minecraft:copper_ore", "minecraft:raw_copper", "copper", "copper", "create:crushed_raw_copper", "minecraft:copper_ingot")
	
	// netherite
	e.recipes.create.mixing("minecraft:netherite_scrap", ["ancient_debris", "diamond"]).superheated()
})
