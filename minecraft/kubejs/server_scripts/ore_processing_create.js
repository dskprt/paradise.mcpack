ServerEvents.recipes(e => {
	// input raw, cleaned raw (kubejs name), crushed raw, result
	function r(e, ore, oredrop, ir, clr, crr, r) {
		// remove recipes for ingot
		//e.remove({ output: r })
		e.remove({ input: ore, output: r })
		e.remove({ input: ore.replace(":", ":deepslate_"), output: r })
		e.remove({ input: ore, output: "#forge:ingots/" + ir })
		e.remove({ input: ore.replace(":", ":deepslate_"), output: "#forge:ingots/" + ir })
		e.remove({ input: "#forge:ores/" + clr, output: r })
		e.remove({ input: "#forge:ores/" + clr, output: "#forge:ingots/" +  ir })
		e.remove({ input: "#forge:dusts/" + clr, output: r })
		e.remove({ input: "#forge:dusts/" + clr, output: "#forge:ingots/" + ir })
		e.remove({ input: "#forge:raw_materials/" + clr, output: r })
		
		// crushing recipes for raw ore block to raw ore
		e.recipes.create.crushing(oredrop, ore)
		e.recipes.immersiveengineering.crusher(oredrop, ore, [ { chance: 0.5, output: oredrop }, { chance: 0.2, output: oredrop } ])
		
		// crushing recipes for ingot to crushed
		e.recipes.create.crushing(crr, r)
		e.recipes.create.crushing(crr, "#forge:ingots/" + ir)
		e.recipes.immersiveengineering.crusher(crr, r, [ { chance: 0.01, output: "immersiveengineering:slag" } ])
		e.recipes.immersiveengineering.crusher(crr, "#forge:ingots/" + ir, [ { chance: 0.01, output: "immersiveengineering:slag" } ])
		
		// by le hand XD
		e.shapeless("8x kubejs:clean_raw_" + clr, [ "8x #forge:raw_materials/" + ir, "#forge:buckets/water" ])
		e.shapeless("kubejs:clean_raw_" + clr, [ "#forge:raw_materials/" + ir, "brush" ])
		e.recipes.create.splashing("kubejs:clean_raw_" + clr, "#forge:raw_materials/" + ir)
		e.shapeless(crr, [ "kubejs:clean_raw_" + clr, "#immersiveengineering:tools/hammers" ])
		e.shapeless("kubejs:raw_" + clr + "_ingot", [ "#forge:dusts/" + clr, Item.of("kubejs:clay_mold") ]).damageIngredient(Item.of("kubejs:clay_mold"))
		//e.shapeless("kubejs:raw_" + clr + "_ingot", [ crr, Item.of("kubejs:clay_mold") ]).damageIngredient(Item.of("kubejs:clay_mold"))
		e.blasting(r, "kubejs:raw_" + clr + "_ingot")
		
		// by machinery AUTOMATON
		e.recipes.create.crushing(crr, "kubejs:clean_raw_" + clr)
		e.recipes.immersiveengineering.crusher(crr, "#forge:raw_materials/" + ir, [ { chance: 0.2, output: crr } ])
		//e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", crr, "immersiveengineering:mold_plate")
		e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", "#forge:dusts/" + clr, "immersiveengineering:mold_plate")
	}
	
	r(e, "create:zinc_ore", "create:raw_zinc", "zinc", "zinc", "create:crushed_raw_zinc", "create:zinc_ingot")
})
