ServerEvents.recipes(e => {
	let inter = "minecraft:obsidian"
	e.recipes.create.sequenced_assembly([
		Item.of("minecraft:crying_obsidian").withChance(50),
		Item.of("minecraft:obsidian").withChance(50),
	], "minecraft:obsidian", [
		e.recipes.create.deploying(inter, [ "minecraft:obsidian", "supplementaries:bamboo_spikes" ]),
		e.recipes.create.deploying(inter, [ inter, "ghast_tear" ]),
		e.recipes.create.deploying(inter, [ inter, "supplementaries:bamboo_spikes" ]),
	]).transitionalItem(inter).loops(3)
})
