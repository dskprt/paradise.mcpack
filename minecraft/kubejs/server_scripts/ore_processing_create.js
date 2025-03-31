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
		e.remove({ id: "immersiveengineering:crusher/ingot_" + ir })
		e.remove({ id: "immersiveengineering:crusher/ore_" + ir })
		e.remove({ id: "immersiveengineering:crusher/raw_ore_" + ir })
		
		// crushing recipes for raw ore block to raw ore
		e.recipes.create.crushing(oredrop, ore)
		e.recipes.immersiveengineering.crusher(oredrop, ore, [ { chance: 0.5, output: oredrop }, { chance: 0.2, output: oredrop } ])
		
		// crushing recipes for ingot to crushed
		//e.recipes.create.crushing([crr, Item.of(crr).withChance(0.1)], r).processingTime(20 * 20)
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
		e.recipes.immersiveengineering.arc_furnace(Item.of(r, 2), Item.of("kubejs:raw_" + clr + "_ingot", 2), "chemlib:oxygen", "immersiveengineering:slag", 18 * 20)
		
		// by machinery AUTOMATON
		e.recipes.create.milling(Item.of(crr).withChance(0.9), "kubejs:clean_raw_" + clr)
		e.recipes.create.crushing([crr, Item.of(crr).withChance(0.1)], "kubejs:clean_raw_" + clr)
		e.recipes.immersiveengineering.crusher(crr, "#forge:raw_materials/" + ir, [ { chance: 0.2, output: crr } ])
		//e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", crr, "immersiveengineering:mold_plate")
		e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", "#forge:dusts/" + clr, "immersiveengineering:mold_plate")
	}
	
	r(e, "create:zinc_ore", "create:raw_zinc", "zinc", "zinc", "create:crushed_raw_zinc", "create:zinc_ingot")
	r(e, "creatingspace:moon_cobalt_ore", "creatingspace:raw_cobalt", "cobalt", "cobalt", "creatingspace:crushed_cobalt_ore", "creatingspace:cobalt_ingot")
})
