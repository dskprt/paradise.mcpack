StartupEvents.registry("item", e => {		
    e.create('incomplete_blastbrick','create:sequenced_assembly').displayName("Incomplete Blast Brick")
    e.create('incomplete_cokebrick','create:sequenced_assembly').displayName("Incomplete Blast Brick")

    e.create('incomplete_le','create:sequenced_assembly').displayName("Incomplete LE Block")
    e.create('incomplete_he','create:sequenced_assembly').displayName("Incomplete He")
    e.create('incomplete_re','create:sequenced_assembly').displayName("Incomplete RE Block")

    e.create('incomplete_gen','create:sequenced_assembly').displayName("Incomplete Generator")
    e.create('incomplete_rad','create:sequenced_assembly').displayName("Incomplete Radiator")
	
    e.create('incomplete_dyn','create:sequenced_assembly').displayName("Incomplete Dynamo")
})

StartupEvents.registry("block", e => {
	e.create("raw_alloybrick")
		.displayName("Raw Kiln Brick")
		.textureAll("immersiveengineering:block/alloybrick")
})
