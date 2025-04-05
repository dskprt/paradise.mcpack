ServerEvents.recipes(e => {
	let inter = "kubejs:incomplete_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:coin").withChance(100),
	], "#forge:plates/iron", [
		e.recipes.create.deploying(inter, [ inter, "#forge:ingots/copper" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:nuggets/gold" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(2)

	inter = "kubejs:incomplete_premium_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:premium_coin").withChance(100),
	], "kubejs:coin", [
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:obsidian" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/lapis" ]),
		e.recipes.create.pressing(inter, inter),
	]).transitionalItem(inter).loops(4)
	
	inter = "kubejs:incomplete_chemical_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:chemical_coin").withChance(100),
	], "kubejs:coin", [
		e.recipes.create.deploying(inter, [ inter, "chemlib:hydrogen" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(4)

	inter = "kubejs:incomplete_electronics_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:electronics_coin").withChance(100),
	], "kubejs:coin", [
		e.recipes.create.deploying(inter, [ inter, "create_new_age:copper_circuit" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(3)

	inter = "kubejs:incomplete_engineering_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:engineering_coin").withChance(100),
	], "kubejs:coin", [
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/lead" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/steel" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(5)

	inter = "kubejs:incomplete_logistics_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:logistics_coin").withChance(100),
	], "kubejs:coin", [
		e.recipes.create.deploying(inter, [ inter, "#forge:barrels" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:slimeballs" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(3)

	inter = "kubejs:incomplete_science_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:science_coin").withChance(100),
	], "kubejs:engineering_coin", [
		e.recipes.create.deploying(inter, [ inter, "#forge:dusts/fissile" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:ender_pearls" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(7)

	inter = "kubejs:incomplete_combat_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:combat_coin").withChance(100),
	], "kubejs:coin", [
		e.recipes.create.deploying(inter, [ inter, "rotten_flesh" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "experience_bottle" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.pressing(inter, inter),
	]).transitionalItem(inter).loops(3)
})
