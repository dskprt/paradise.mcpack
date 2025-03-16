ServerEvents.recipes(e => {
	e.shaped("kubejs:bandage", [
		"SS ",
		"WW ",
		"   "
	], {
		S: "#forge:string",
		W: "#forge:wool"
	})

	e.shaped("kubejs:medkit", [
		"SSS",
		"WAW",
		"WWW"
	], {
		S: "#forge:string",
		W: "#forge:wool",
		A: "apple"
	})

	e.remove({ id: "majruszsdifficulty:bandage" })
	e.remove({ id: "majruszsdifficulty:bandage_reversed" })
	e.remove({ id: "majruszsdifficulty:golden_bandage" })
})
