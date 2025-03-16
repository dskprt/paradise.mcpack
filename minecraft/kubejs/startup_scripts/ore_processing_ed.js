StartupEvents.registry('item', e => {
	function cw(e, ns, r, tex, n) {
		e.create("clean_" + r)
			.texture(ns + ":item/rawore/" + r.replace("_", "ore"))
			.glow(true)
			.displayName("Washed " + n)
	}

	function ci(e, ns, r, n) {
		e.create("raw_" + r)
			.texture(ns + ":item/ingot/ingot" + r.replace("_ingot", ""))
			.color((is, ti) => { return 0xababab; })
			.displayName("Raw " + n)
	}

	cw(e, "electrodynamics", "raw_lead", "raworelead", "Raw Lead")
	ci(e, "electrodynamics", "lead_ingot", "Lead Ingot")
	
	cw(e, "electrodynamics", "raw_lithium", "raworelepidolite", "Raw Lithium")
	ci(e, "electrodynamics", "lithium_ingot", "Lithium Ingot")
	
	cw(e, "electrodynamics", "raw_molybdenum", "raworemolybdenum", "Raw Molybdenum")
	ci(e, "electrodynamics", "molybdenum_ingot", "Molybdenum Ingot")
	
	cw(e, "electrodynamics", "raw_tin", "raworetin", "Raw Tin")
	ci(e, "electrodynamics", "tin_ingot", "Tin Ingot")
	
	cw(e, "electrodynamics", "raw_uranium", "raworeuranium", "Raw Uranium")
	ci(e, "electrodynamics", "uranium_ingot", "Uranium Ingot")
	
	cw(e, "electrodynamics", "raw_vanadinite", "raworevanadinite", "Raw Vanadinite")
	e.create("raw_vanadinite_ingot")
		.texture("electrodynamics:item/ingot/ingotvanadium")
		.color((is, ti) => { return 0xababab; })
		.displayName("Raw Vanadium Ingot")
	
	cw(e, "electrodynamics", "raw_silver", "raworesilver", "Raw Silver")
	ci(e, "electrodynamics", "silver_ingot", "Silver Ingot")
})