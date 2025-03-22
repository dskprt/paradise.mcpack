ServerEvents.recipes(e => {
	e.shaped("chest", [
		"PPP",
		"P P",
		"PPP"
	], {
		P: "#minecraft:planks"
	})

	e.shapeless("createaddition:zinc_sheet", ["#immersiveengineering:tools/hammers", "#forge:ingots/zinc"])
})