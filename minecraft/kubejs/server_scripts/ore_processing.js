ServerEvents.recipes(e => {
	e.shaped("kubejs:clay_mold",
		[
			'C C',
			' C '
		],
		{
			C: "#forge:clay"
		})
	
	/*let a = [
		"iron", "gold", "copper", "lead", "uranium", "tin", "silver", "nickel", "zinc", "aluminum"
	]
	for(const o of a) {
		e.remove({ output: "create:crushed_raw_" + o })
	}
	
	let a = [
		"iron", "gold", "copper", "lead", "aluminum", "silver", "nickel", "uranium"
	]
	for(const o of a) {
		e.remove({ output: "immersiveengineering:dust_" + o })
	}*/
	
	const ids = [
		"immersiveengineering:crusher/raw_ore_zinc",
		"immersiveengineering:crusher/raw_block_zinc",
		"immersiveengineering:crusher/ingot_zinc",
		"immersiveengineering:crusher/ore_zinc",
		"immersiveengineering:crafting/raw_hammercrushing_zinc",
		"immersiveengineering:crafting/hammercrushing_zinc",
		"immersiveengineering:crusher/raw_ore_tin",
		"immersiveengineering:crusher/raw_block_tin",
		"immersiveengineering:crusher/ingot_tin",
		"immersiveengineering:crusher/ore_tin",
		"immersiveengineering:crafting/raw_hammercrushing_tin",
		"immersiveengineering:crafting/hammercrushing_tin",
		"immersiveengineering:crafting/hammercrushing_aluminum",
		"immersiveengineering:crusher/ore_aluminum",
		"create:crushing/aluminum_ore",
		"electrodynamics:smelting/superconductive_ingot_from_dust",
		"electrodynamics:dust_superconductive",
		"immersiveengineering:crafting/raw_hammercrushing_nickel",
		"immersiveengineering:crafting/hammercrushing_nickel",
		"electrodynamics:blasting/steel_ingot_from_iron_ingot",
		"immersiveengineering:crafting/hammercrushing_copper",
		"immersiveengineering:crafting/raw_hammercrushing_copper",
		"immersiveengineering:crafting/raw_hammercrushing_aluminum",
		"immersiveengineering:crafting/hammercrushing_lead",
		"immersiveengineering:crafting/raw_hammercrushing_lead",
		"immersiveengineering:crafting/hammercrushing_silver",
		"immersiveengineering:crafting/raw_hammercrushing_silver",
		"immersiveengineering:crafting/hammercrushing_uranium",
		"immersiveengineering:crafting/raw_hammercrushing_uranium",
		"immersiveengineering:crafting/hammercrushing_iron",
		"immersiveengineering:crafting/raw_hammercrushing_iron",
		"immersiveengineering:crafting/hammercrushing_gold",
		"immersiveengineering:crafting/raw_hammercrushing_gold"
	]
	
	for(const id of ids) {
		e.remove({ id: id })
	}
	
	e.replaceInput(
		{ id: "electrodynamics:machine_mineral_grinder_triple" },
		"#forge:dusts/superconductive",
		"#forge:ingots/superconductive"
	)
	
	const io = [
		{ input: "#forge:dusts/aluminum", output: "#forge:ingots/aluminum" },
		{ input: "#forge:raw_materials/aluminum", output: "#forge:ingots/aluminum" }
	]
	
	for(const o of io) {
		e.remove(o)
	}
	
	e.shaped("4x basalt", [
		"BB ",
		"BB ",
		"   "
	], {
		B: "minecraft:smooth_basalt"
	})
	
	e.remove({ id: "minecraft:brush" })
	
	e.shaped("brush", [
		"F",
		"W",
		"S"
	], {
		F: "feather",
		W: "#forge:wool",
		S: "#forge:rods/wooden"
	})
})
