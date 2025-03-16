// Listen to item registry event
StartupEvents.registry("item", e => {
    const tint = 0xaaaaaa;

    e.create("raw_circuit_basic", "basic")
    .displayName("Raw Basic Circuit")
    .texture("electrodynamics:item/circuit/circuitbasic")
    .color((is, ti) => { return tint; })

    e.create("raw_circuit_advanced", "basic")
    .displayName("Raw Advanced Circuit")
    .texture("electrodynamics:item/circuit/circuitadvanced")
    .color((is, ti) => { return tint; })

    e.create("raw_circuit_elite", "basic")
    .displayName("Raw Elite Circuit")
    .texture("electrodynamics:item/circuit/circuitelite")
    .color((is, ti) => { return tint; })

    e.create("raw_circuit_ultimate", "basic")
    .displayName("Raw Ultimate Circuit")
    .texture("electrodynamics:item/circuit/circuitultimate")
    .color((is, ti) => { return tint; })
	
	// pcb
	e.create("raw_pcb")
	.displayName("Raw Circuit Board")
	
	e.create("pcb")
	.displayName("Empty Circuit Board")
	
	e.create('incomplete_pcb_basic','create:sequenced_assembly').displayName("Incomplete Basic Circuit")
	e.create('incomplete_pcb_advanced','create:sequenced_assembly').displayName("Incomplete Advanced Circuit")
	e.create('incomplete_pcb_elite','create:sequenced_assembly').displayName("Incomplete Elite Circuit")
	e.create('incomplete_pcb_ultimate','create:sequenced_assembly').displayName("Incomplete Ultimate Circuit")
})
