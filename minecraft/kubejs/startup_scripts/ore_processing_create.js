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

	cw(e, "create", "raw_zinc", "Raw Zinc")
	ci(e, "create", "zinc_ingot", "Zinc Ingot")
	
	cw(e, "creatingspace", "raw_cobalt", "Raw Cobalt")
	ci(e, "creatingspace", "cobalt_ingot", "Cobalt Ingot")
})
