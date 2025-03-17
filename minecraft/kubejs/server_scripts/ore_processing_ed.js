ServerEvents.recipes(e => {
	// input raw, cleaned raw (kubejs name), crushed raw, result
	function r(e, ore, oredrop, ir, clr, crr, r) {
		// remove recipes for ingot
		//e.remove({ output: r })
		/*e.remove({ input: ore, output: r })
		e.remove({ input: ore.replace(":", ":deepslate"), output: r })
		e.remove({ input: ore, output: "#forge:ingots/" + ir })
		e.remove({ input: ore.replace(":", ":deepslate"), output: "#forge:ingots/" + ir })
		e.remove({ input: "#forge:ores/" + clr, output: r })
		e.remove({ input: "#forge:ores/" + clr, output: "#forge:ingots/" +  ir })
		e.remove({ input: "#forge:dusts/" + clr, output: r })
		e.remove({ input: "#forge:dusts/" + clr, output: "#forge:ingots/" + ir })
		e.remove({ input: "#forge:raw_materials/" + clr, output: r })
		e.remove({ input: "#forge:raw_materials/" + clr, output: "#forge:ingots/" + ir })

		e.remove({ id: "immersiveengineering:arcfurnace/raw_block_" + ir })
		e.remove({ id: "immersiveengineering:arcfurnace/raw_ore_" + ir })*/
		
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
		e.recipes.create.crushing(crr, "kubejs:clean_raw_" + clr)
		e.recipes.immersiveengineering.crusher(crr, "#forge:raw_materials/" + ir, [ { chance: 0.2, output: crr } ])
		//e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", crr, "immersiveengineering:mold_plate")
		e.recipes.immersiveengineering.metal_press("kubejs:raw_" + clr + "_ingot", "#forge:dusts/" + clr, "immersiveengineering:mold_plate")
	}

	/*r(e, "electrodynamics:orelead", "electrodynamics:raworelead", "lead", "lead", "electrodynamics:dustlead", "chemlib:lead_ingot")
	r(e, "electrodynamics:orelithium", "electrodynamics:raworelepidolite", "lithium", "lithium", "electrodynamics:dustlithium", "chemlib:lithium_ingot")
	r(e, "electrodynamics:oremolybdenum", "electrodynamics:oremolybdenum", "molybdenum", "molybdenum", "electrodynamics:dustmolybdenum", "chemlib:molybdenum_ingot")
	r(e, "electrodynamics:oretin", "electrodynamics:raworetin", "tin", "tin", "electrodynamics:dusttin", "chemlib:tin_ingot")
	//r(e, "electrodynamics:oretitanium", "electrodynamics:raworetitanium", "titanium", "titanium", "electrodynamics:dusttitanium", "cheamlib:titanium_ingot")
	r(e, "electrodynamics:oreuranium", "electrodynamics:raworeuranium", "uranium", "uranium", "immersiveengineering:dust_uranium", "chemlib:uranium_ingot")
	r(e, "electrodynamics:orevanadium", "electrodynamics:raworevanadinite", "vanadinite", "vanadinite", "electrodynamics:dustvanadium", "chemlib:vanadium_ingot")
	r(e, "electrodynamics:oresilver", "electrodynamics:raworesilver", "silver", "silver", "electrodynamics:dustsilver", "chemlib:silver_ingot")*/
	
	r(e, "electrodynamics:orelead", "electrodynamics:raworelead", "lead", "lead", "chemlib:lead_dust", "chemlib:lead_ingot")
	r(e, "electrodynamics:orelithium", "electrodynamics:raworelepidolite", "lithium", "lithium", "chemlib:lithium_dust", "chemlib:lithium_ingot")
	r(e, "electrodynamics:oremolybdenum", "electrodynamics:oremolybdenum", "molybdenum", "molybdenum", "chemlib:molybdenum_dust", "chemlib:molybdenum_ingot")
	r(e, "electrodynamics:oretin", "electrodynamics:raworetin", "tin", "tin", "chemlib:tin_dust", "chemlib:tin_ingot")
	//r(e, "electrodynamics:oretitanium", "electrodynamics:raworetitanium", "titanium", "titanium", "electrodynamics:dusttitanium", "cheamlib:titanium_ingot")
	r(e, "electrodynamics:oreuranium", "electrodynamics:raworeuranium", "uranium", "uranium", "chemlib:uranium_dust", "chemlib:uranium_ingot")
	r(e, "electrodynamics:orevanadium", "electrodynamics:raworevanadinite", "vanadinite", "vanadinite", "chemlib:vanadium_dust", "chemlib:vanadium_ingot")
	r(e, "electrodynamics:oresilver", "electrodynamics:raworesilver", "silver", "silver", "chemlib:silver_dust", "chemlib:silver_ingot")
})
