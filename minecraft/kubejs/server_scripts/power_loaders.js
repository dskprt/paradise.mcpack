ServerEvents.recipes(e => {
	e.remove({ id: "create_power_loader:crafting/emppty_andesite_chunk_loader" })
	e.remove({ id: "create_power_loader:crafting/emppty_brass_chunk_loader" })

	e.shaped("create_power_loader:andesite_chunk_loader", [
		'GGG',
		'GMG',
		'CSC'
	], {
		G: "#forge:glass",
		M: "create:precision_mechanism",
		C: "create:andesite_casing",
		S: "create:shaft"
	})

	e.recipes.create.mechanical_crafting("create_power_loader:brass_chunk_loader", [
		'GGGGG',
		'G   G',
		'G M G',
		'CIMIC',
		'CCSCC'
	], {
		G: "#forge:glass",
		M: "create:precision_mechanism",
		C: "crate:brass_casing",
		I: "#forge:ingots/brass",
		S: "create:shaft"
	})
})
