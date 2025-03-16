StartupEvents.registry("item", e => {
	e.create("coin")
	.displayName("Fumo Coin")
	.texture("kubejs:item/coin")

	e.create('incomplete_coin','create:sequenced_assembly')
	.displayName("Incomplete Fumo Coin")
	.texture("kubejs:item/coin")
	.color((is, ti) => { return 0xaaaaaa; })
	
	
	
	
	
	
		e.create("premium_coin")
	.displayName("Premium Fumo Coin")
	.texture("kubejs:item/premium_coin")

	e.create('incomplete_premimu_coin','create:sequenced_assembly')
	.displayName("Incomplete Premium Fumo Coin")
	.texture("kubejs:item/premium_coin")
	.color((is, ti) => { return 0xaaaaaa; })
})