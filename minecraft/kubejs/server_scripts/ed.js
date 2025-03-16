ServerEvents.recipes(e => {
	const ids = [
		"electrodynamics:motor_steel",
		"electrodynamics:circuit_advanced",
		"electrodynamics:circuit_basic",
		"electrodynamics:circuit_elite",
		"electrodynamics:circuit_ultimate"
	]
	
	for(const id of ids) {
		e.remove({ id: id })
	}
	
	//
	
	e.shaped("electrodynamics:motor", [
		' S ',
		'WCW',
		'BEB'
	], {
		S: "#forge:plates/steel",
		W: "#forge:wires/insulated_copper",
		C: "electrodynamics:coil",
		B: "#forge:plates/brass",
		E: "#forge:ingots/electrum"
	})
	
	//
	
	e.remove({ id: "electrodynamics:wire_copper" })

    e.shapeless("2x electrodynamics:wirecopper", [ "#forge:ingots/copper", "#forge:shears" ])

    //e.replaceOutput({}, "electrodynamics:circuitbasic", "kubejs:raw_circuit_basic")
    //e.replaceOutput({}, "electrodynamics:circuitadvanced", "kubejs:raw_circuit_advanced")
    //e.replaceOutput({}, "electrodynamics:circuitelite", "kubejs:raw_circuit_elite")
    //e.replaceOutput({}, "electrodynamics:circuitultimate", "kubejs:raw_circuit_ultimate")

    //e.replaceInput({ output: "kubejs:raw_circuit_advanced" }, "electrodynamics:circuitbasic", "kubejs:raw_circuit_basic")
    //e.replaceInput({ output: "kubejs:raw_circuit_elite" }, "electrodynamics:circuitadvanced", "kubejs:raw_circuit_advanced")
    //e.replaceInput({ output: "kubejs:raw_circuit_ultimate" }, "electrodynamics:circuitelite", "kubejs:raw_circuit_elite")

    e.smelting("electrodynamics:circuitbasic", "kubejs:raw_circuit_basic")
    e.smelting("electrodynamics:circuitadvanced", "kubejs:raw_circuit_advanced")
    e.smelting("electrodynamics:circuitelite", "kubejs:raw_circuit_elite")
    e.smelting("electrodynamics:circuitultimate", "kubejs:raw_circuit_ultimate")
	
	//
	
	e.recipes.create.mixing("kubejs:raw_pcb", [ "#forge:glass_panes", "#forge:nuggets/copper", Fluid.of("immersiveengineering:phenolic_resin", 20) ]).heated()
	e.blasting("kubejs:pcb", "kubejs:raw_pcb")
	
	let inter = "kubejs:incomplete_pcb_basic"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:raw_circuit_basic").withChance(100)
	], "kubejs:pcb", [
		e.recipes.create.deploying(inter, [ inter, "createaddition:capacitor" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:dusts/redstone" ]),
		e.recipes.create.pressing(inter, inter)
	]).transitionalItem(inter).loops(1)
	
	inter = "kubejs:incomplete_pcb_advanced"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:raw_circuit_advanced").withChance(97),
		Item.of("createaddition:capacitor").withChance(1),
		Item.of("create_new_age:copper_circuit").withChance(1),
		Item.of("kubejs:raw_circuit_basic").withChance(1)
	], "kubejs:raw_circuit_basic", [
		e.recipes.create.deploying(inter, [ inter, "createaddition:capacitor" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/quartz" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "create_new_age:copper_circuit" ])
	]).transitionalItem(inter).loops(1)
	
	inter = "kubejs:incomplete_pcb_elite"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:raw_circuit_elite").withChance(93),
		Item.of("createaddition:capacitor").withChance(2),
		Item.of("kubejs:raw_circuit_advanced").withChance(5),
	], "kubejs:raw_circuit_advanced", [
		e.recipes.create.deploying(inter, [ inter, "createaddition:capacitor" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/gold" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/gold" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/steel" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/lapis" ]),
		e.recipes.create.pressing(inter, inter)
	]).transitionalItem(inter).loops(2)
	
	inter = "kubejs:incomplete_pcb_ultimate"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:raw_circuit_ultimate").withChance(86),
		Item.of("createaddition:capacitor").withChance(2),
		Item.of("create_new_age:overcharged_diamond").withChance(4),
		Item.of("kubejs:raw_circuit_elite").withChance(8),
	], "kubejs:raw_circuit_elite", [
		e.recipes.create.deploying(inter, [ inter, "createaddition:capacitor" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:dusts/obsidian" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/gold" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/steel" ]),
		e.recipes.create.deploying(inter, [ inter, "create_new_age:overcharged_diamond" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/steel" ]),
		e.recipes.create.pressing(inter, inter)
	]).transitionalItem(inter).loops(3)
})