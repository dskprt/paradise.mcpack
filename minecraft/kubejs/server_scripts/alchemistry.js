ServerEvents.recipes(e => {
	e.remove({ id: "alchemistry:atomizer" })
	e.remove({ id: "alchemistry:compactor" })
	e.remove({ id: "alchemistry:combiner" })
	e.remove({ id: "alchemistry:dissolver" })
	e.remove({ id: "alchemistry:liquifier" })
	e.remove({ id: "alchemistry:fission_chamber_controller" })
	e.remove({ id: "alchemistry:fusion_chamber_controller" })
	
	e.recipes.create.mechanical_crafting("alchemistry:atomizer", [
		' SPS ',
		'SGGGS',
		'CGRGC',
		'SSSSS',
		'E L E'
	], {
		S: "#forge:ingots/steel",
		G: "#forge:ingots/gold",
		P: "#forge:plates/steel",
		C: "cauldron",
		R: "#forge:dusts/redstone",
		E: "#forge:ingots/electrum",
		L: "immersiveengineering:light_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:compactor", [
		' P P ',
		'SIPIS',
		'SIBIS',
		'SIIIS',
		'E L E'
	], {
		S: "#forge:ingots/steel",
		I: "#forge:storage_blocks/iron",
		P: "#forge:plates/steel",
		C: "cauldron",
		R: "#forge:dusts/redstone",
		E: "#forge:ingots/electrum",
		B: "#forge:buckets/empty",
		L: "immersiveengineering:light_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:combiner", [
		' OOO ',
		'SDDDS',
		'SOLOS',
		'EPPPE'
	], {
		S: "#forge:ingots/steel",
		G: "#forge:ingots/gold",
		P: "piston",
		C: "cauldron",
		R: "#forge:dusts/redstone",
		E: "#forge:ingots/electrum",
		O: "obsidian",
		D: "#forge:gems/diamond",
		L: "immersiveengineering:light_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:combiner", [
		' MMM ',
		'SDDDS',
		'SMLMS',
		'SEPES'
	], {
		S: "#forge:ingots/steel",
		G: "#forge:ingots/gold",
		P: "piston",
		C: "cauldron",
		R: "#forge:dusts/redstone",
		E: "#forge:ingots/electrum",
		O: "obsidian",
		D: "#forge:gems/diamond",
		M: "magma_block",
		L: "immersiveengineering:light_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:liquifier", [
		' WWW ',
		'GR RG',
		'EPCPE'
	], {
		S: "#forge:ingots/steel",
		G: "#forge:ingots/gold",
		P: "piston",
		C: "cauldron",
		R: "#forge:dusts/redstone",
		E: "#forge:ingots/electrum",
		O: "obsidian",
		D: "#forge:gems/diamond",
		W: "#forge:wool"
	})

	e.recipes.create.mechanical_crafting("alchemistry:fission_chamber_controller", [
		'CCCC',
		'SDDS',
		'HPPH',
		'CCCC'
	], {
		C: "alchemistry:reactor_casing",
		P: "piston",
		D: "#forge:gems/diamond",
		S: "#forge:sheetmetals/steel",
		H: "immersiveengineering:heavy_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:fusion_chamber_controller", [
		'CCCC',
		'SNNS',
		'HRRH',
		'CCCC'
	], {
		C: "alchemistry:reactor_casing",
		R: "#forge:dusts/redstone",
		N: "nether_star",
		S: "#forge:sheetmetals/steel",
		H: "immersiveengineering:heavy_engineering"
	})
})
