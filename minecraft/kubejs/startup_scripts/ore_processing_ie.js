StartupEvents.registry('item', e => {
	function cw(e, ns, r, n) {
		e.create("clean_" + r)
			.texture(ns + ":item/metal_" + r)
			.glow(true)
			.displayName("Washed " + n)
	}

	function ci(e, ns, r, n) {
		e.create("raw_" + r)
			.texture(ns + ":item/metal_ingot_nickel")
			.color((is, ti) => { return 0xababab; })
			.displayName("Raw " + n)
	}

	cw(e, "immersiveengineering", "raw_nickel", "Raw Nickel")
	ci(e, "immersiveengineering", "nickel_ingot", "Nickel Ingot")
})