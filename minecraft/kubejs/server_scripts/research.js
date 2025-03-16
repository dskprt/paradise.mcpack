ServerEvents.recipes(e => {
	let inter = "kubejs:incomplete_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:coin").withChance(100),
	], "#forge:plates/iron", [
		e.recipes.create.deploying(inter, [ inter, "#forge:ingots/copper" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:nuggets/gold" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(4)
	
	inter = "kubejs:incomplete_premium_coin"
	e.recipes.create.sequenced_assembly([
		Item.of("kubejs:premium_coin").withChance(100),
	], "kubejs:coin", [
		e.recipes.create.deploying(inter, [ inter, "#forge:plates/brass" ]),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.cutting(inter, inter),
		e.recipes.create.deploying(inter, [ inter, "#forge:gems/diamond" ]),
		e.recipes.create.pressing(inter, inter),
		e.recipes.create.cutting(inter, inter),
	]).transitionalItem(inter).loops(5)
})