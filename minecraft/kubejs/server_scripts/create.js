ServerEvents.recipes(e => {
	e.replaceInput({ id: "create:crafting/kinetics/deployer" }, "create:brass_hand", "#forge:sheets/gold")
	e.replaceInput({ id: "create:crafting/kinetics/deployer" }, "create:electron_tube", "#forge:sheets/gold")

	e.shapeless("create:rose_quartz", [ "#forge:gems/prismarine", "8x forge:dusts/redstone" ])

	// andesite age
	e.remove({ id: "create:crafting/materials/andesite_alloy" })
	e.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
	e.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
	e.remove({ id: "create:mixing/andesite_alloy" })
	
	e.recipes.immersiveengineering.alloy("create:andesite_alloy", "andesite", "#forge:nuggets/iron")
	e.recipes.immersiveengineering.alloy("create:andesite_alloy", "andesite", "#forge:nuggets/zinc")
	
	e.recipes.create.mixing("create:andesite_alloy", [ "andesite", "#forge:nuggets/iron" ]).heated()
	e.recipes.create.mixing("create:andesite_alloy", [ "andesite", "#forge:nuggets/zinc" ]).heated()
	
	// brass age
	e.remove({ id: "create:mixing/brass_ingot" })
	e.recipes.immersiveengineering.arc_furnace("create:brass_ingot", "#forge:ingots/copper", "#forge:ingots/zinc", "immersiveengineering:slag")
	
	e.replaceInput({ id: "create:sequenced_assembly/precision_mechanism" }, "#forge:plates/gold", "#forge:plates/brass")
	
	// electric age
	e.remove({ id: "create_new_age:shaped/generator_coil" })
	e.remove({ id: "create_new_age:shaped/basic_motor" })
	e.remove({ id: "create_new_age:shaped/advanced_motor" })
	e.remove({ id: "create_new_age:reinforced_motor" })
	e.remove({ id: "create_new_age:shaped/stirling_engine" })
	
	e.recipes.create.mechanical_crafting("create_new_age:generator_coil", [
		' III ',
		'IBSBI',
		'IBRBI',
		'IBCBI',
		' III '
	], {
		I: "#forge:plates/copper",
		B: "#forge:storage_blocks/copper",
		S: "createaddition:copper_spool",
		R: "#forge:rods/iron",
		C: "createaddition:capacitor"
	})
	
	e.recipes.create.mechanical_crafting("create_new_age:basic_motor", [
		'NNPPI',
		'NCRSS',
		'NNPPI'
	], {
		N: "#forge:nuggets/copper",
		P: "#forge:plates/copper",
		I: "#forge:ingots/copper",
		C: "create:andesite_casing",
		R: "#forge:dusts/redstone",
		S: "create:shaft"
	})
	
	e.recipes.create.mechanical_crafting("create_new_age:advanced_motor", [
		'IOPPI',
		'OCRSS',
		'IOPPI'
	], {
		O: "create_new_age:overcharged_iron",
		P: "#forge:plates/copper",
		I: "#forge:ingots/iron",
		C: "create:brass_casing",
		R: "#forge:storage_blocks/redstone",
		S: "create:shaft"
	})
	
	e.recipes.create.mechanical_crafting("create_new_age:reinforced_motor", [
		'IOPPIO',
		'OCRGES',
		'IOPPIO'
	], {
		O: "create_new_age:overcharged_diamond",
		P: "#forge:plates/steel",
		I: "#forge:gems/diamond",
		C: "create:brass_casing",
		R: "#forge:storage_blocks/redstone",
		S: "create:shaft",
		G: "createaddition:capacitor",
		E: "#forge:plates/electrum"
	})
	
	e.shaped("create_new_age:stirling_engine", [
		'ISI',
		'PCP',
		'PSP'
	], {
		I: "#forge:plates/iron",
		S: "create:shaft",
		C: "#forge:storage_blocks/copper",
		P: "create_new_age:heat_pipe"
	})
	
	// advanced electricity (diesel generators)
	e.remove({ id: "createdieselgenerators:crafting/diesel_engine" })
	e.remove({ id: "createdieselgenerators:crafting/huge_diesel_engine" })
	
	e.recipes.create.mechanical_crafting("createdieselgenerators:diesel_engine", [
		' F ',
		'PMP',
		'PSP',
		'PIP',
		'ITI'
	], {
		F: "flint_and_steel",
		P: "createdieselgenerators:engine_piston",
		M: "create:precision_mechanism",
		S: "create:steam_engine",
		I: "#forge:plates/steel",
		T: "create:fluid_tank"
	})
	
	e.recipes.create.mechanical_crafting("createdieselgenerators:huge_diesel_engine", [
		' F ',
		'PIP',
		'OBO',
		'VEV',
		'VTV'
	], {
		F: "flint_and_steel",
		P: "createdieselgenerators:engine_piston",
		S: "create:steam_engine",
		I: "#forge:plates/steel",
		T: "create:fluid_tank",
		V: "create:fluid_pipe",
		O: "create_new_age:overcharged_golden_sheet",
		E: "#forge:storage_blocks/brass",
		B: "createdieselgenerators:diesel_engine"
	})
	
	// remove stuff
	const ids = [
		"create_new_age:reactor/reactor_casing",
		"create_new_age:reactor/reactor_rod",
		"create_new_age:reactor/reactor_glass",
		"create_new_age:reactor/reactor_fuel_acceptor",
		"create_new_age:reactor/reactor_heat_vent",
		"create_new_age:thorium/nuclear_fuel",
		"createaddition:mechanical_crafting/electric_motor",
		"createaddition:mechanical_crafting/alternator",
		"computercraft:pocket_computer_advanced_upgrade"
	]
	
	for(const id of ids) {
		e.remove({ id: id })
	}
})