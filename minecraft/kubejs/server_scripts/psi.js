ServerEvents.recipes(e => {
	e.remove({ id: "psi:cad_assembly_iron" })
	e.shaped("psi:cad_assembly_iron", [
		'III',
		'IC '
	], {
		I: "#forge:ingots/iron",
		C: "create_new_age:copper_circuit"
	})

	e.remove({ id: "psi:cad_assembly_gold" })
	e.shaped("psi:cad_assembly_gold", [
		'III',
		'IC '
	], {
		I: "#forge:ingots/gold",
		C: "create_new_age:copper_circuit"
	})

	e.remove({ id: "psi:cad_assembly_psimetal" })
	e.shaped("psi:cad_assembly_psimetal", [
		'III',
		'IC '
	], {
		I: "#forge:ingots/psimetal",
		C: "create_new_age:copper_circuit"
	})

	e.remove({ id: "psi:cad_assembly_ivory_psimetal" })
	e.shaped("psi:cad_assembly_ivory_psimetal", [
		'III',
		'IC '
	], {
		I: "#forge:ingots/ivory_psimetal",
		C: "create_new_age:copper_circuit"
	})

	e.remove({ id: "psi:cad_assembly_ebony_psimetal" })
	e.shaped("psi:cad_assembly_ebony_psimetal", [
		'III',
		'IC '
	], {
		I: "#forge:ingots/ebony_psimetal",
		C: "create_new_age:copper_circuit"
	})

	e.replaceInput({ id: "psi:assembler" }, "piston", "kubejs:pcb")
})
