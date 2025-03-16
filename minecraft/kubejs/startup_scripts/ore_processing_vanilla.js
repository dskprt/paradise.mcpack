StartupEvents.registry('item', e => {
	function cw(e, ns, r, n) {
		e.create("clean_" + r)
			.texture(ns + ":item/" + r)
			.glow(true)
			.displayName("Washed " + n)
	}

	function ci(e, ns, r, n) {
		e.create("raw_" + r)
			.texture(ns + ":item/" + r)
			.color((is, ti) => { return 0xababab; })
			.displayName("Raw " + n)
	}

	cw(e, "minecraft", "raw_iron", "Raw Iron")
	ci(e, "minecraft", "iron_ingot", "Iron Ingot")
	
	cw(e, "minecraft", "raw_copper", "Raw Copper")
	ci(e, "minecraft", "copper_ingot", "Copper Ingot")
	
	cw(e, "minecraft", "raw_gold", "Raw Gold")
	ci(e, "minecraft", "gold_ingot", "Gold Ingot")
})