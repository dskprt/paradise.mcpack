StartupEvents.registry("item", e => {
	function createCoin(i, n) {
		e.create(i)
		.displayName(n)
		.texture("kubejs:item/" + i)

		e.create('incomplete_' + i,'create:sequenced_assembly')
		.displayName("Incomplete " + n)
		.texture("kubejs:item/" + i)
		.color((is, ti) => { return 0xaaaaaa; })
	}
	
	// e.create("premium_coin")
	// .displayName("Premium Fumo Coin")
	// .texture("kubejs:item/premium_coin")

	// e.create('incomplete_premimu_coin','create:sequenced_assembly')
	// .displayName("Incomplete Premium Fumo Coin")
	// .texture("kubejs:item/premium_coin")
	// .color((is, ti) => { return 0xaaaaaa; })

	createCoin("coin", "Fumo Coin")
	createCoin("premium_coin", "Premium Coin")
	createCoin("chemical_coin", "Chemistry Coin")
	createCoin("electronics_coin", "Electronics Coin")
	createCoin("engineering_coin", "Engineering Coin")
	createCoin("logistics_coin", "Logistics Coin")
	createCoin("science_coin", "Science Coin")

	e.create("unusable_item")
	.displayName("Unknown Item")
	.texture("kubejs:item/unknown")
	.tooltip("An unusable item that has not been researched yet.")
})
