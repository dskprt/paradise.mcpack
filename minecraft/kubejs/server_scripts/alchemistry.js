ServerEvents.recipes(e => {
	e.remove({ id: "alchemistry:atomizer" })
	e.remove({ id: "alchemistry:compactor" })
	e.remove({ id: "alchemistry:combiner" })
	e.remove({ id: "alchemistry:dissolver" })
	e.remove({ id: "alchemistry:liquifier" })
	e.remove({ id: "alchemistry:fission_chamber_controller" })
	e.remove({ id: "alchemistry:fusion_chamber_controller" })
	e.remove({ id: "alchemistry:fission_core" })
	e.remove({ id: "alchemistry:fusion_core" })
	
	e.recipes.create.mechanical_crafting("alchemistry:atomizer", [
		' TPT ',
		'SGGGS',
		'CGRGC',
		'SSSSS',
		'E L E'
	], {
		T: "#forge:storage_blocks/steel",
		S: "#forge:ingots/steel",
		G: "#forge:ingots/gold",
		C: "cauldron",
		P: "piston",
		R: "#forge:dusts/redstone",
		E: "#forge:ingots/electrum",
		L: "immersiveengineering:light_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:combiner", [
		' T T ',
		'SIPIS',
		'SIBIS',
		'SIGIS',
		'E L E'
	], {
		T: "#forge:storage_blocks/steel",
		S: "#forge:ingots/steel",
		I: "#forge:storage_blocks/iron",
		P: "#forge:plates/steel",
		E: "#forge:ingots/electrum",
		B: "#forge:buckets/empty",
		L: "immersiveengineering:light_engineering",
		G: "#forge:plates/gold"
	})

	e.recipes.create.mechanical_crafting("alchemistry:compactor", [
		' OOO ',
		'SDDDS',
		'SOLOS',
		'EPPPE'
	], {
		S: "#forge:ingots/steel",
		P: "piston",
		E: "#forge:ingots/electrum",
		O: "obsidian",
		D: "#forge:gems/diamond",
		L: "immersiveengineering:heavy_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:dissolver", [
		' MMM ',
		'SDDDS',
		'SMLMS',
		'SEPES'
	], {
		S: "#forge:ingots/steel",
		P: "piston",
		E: "#forge:ingots/electrum",
		D: "#forge:gems/diamond",
		M: "magma_block",
		L: "immersiveengineering:heavy_engineering"
	})

	e.recipes.create.mechanical_crafting("alchemistry:liquifier", [
		' WWW ',
		'GR RG',
		'EPCPE'
	], {
		G: "#forge:ingots/gold",
		P: "piston",
		C: "cauldron",
		R: "#forge:dusts/redstone",
		E: "#forge:ingots/electrum",
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
		D: "netherite_scrap",
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

	e.shaped("alchemistry:fission_core", [
		"YRY",
		"YRY",
		"YRY"
	], {
		Y: "#forge:storage_blocks/yttrium",
		R: "#forge:rods/blaze"
	})

	e.shaped("alchemistry:fusion_core", [
		"YRY",
		"YRY",
		"YRY"
	], {
		Y: "#forge:storage_blocks/tungsten",
		R: "#forge:ingots/netherite"
	})
})
