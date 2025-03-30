ServerEvents.tags('item', e => {
	e.add("forge:dusts/iron", "create:crushed_raw_iron")
	e.add("forge:dusts/gold", "create:crushed_raw_gold")
	e.add("forge:dusts/copper", "create:crushed_raw_copper")
	e.add("forge:dusts/zinc", "create:crushed_raw_zinc")
	e.add("forge:dusts/silver", "create:crushed_raw_silver")
	e.add("forge:dusts/tin", "create:crushed_raw_tin")
	e.add("forge:dusts/lead", "create:crushed_raw_lead")
	e.add("forge:dusts/aluminum", "create:crushed_raw_aluminum")
	e.add("forge:dusts/uranium", "create:crushed_raw_uranium")
	e.add("forge:dusts/nickel", "create:crushed_raw_nickel")
	
	e.add("forge:raw_materials/molybdenum", "electrodynamics:oremolybdenum")

	e.removeAllTagsFrom("blocksyouneed:brass_ingot")
	e.removeAllTagsFrom("blocksyouneed:brass_block")
	e.removeAllTagsFrom("blocksyouneed:aluminum_ingot")
	e.removeAllTagsFrom("blocksyouneed:aluminum_block")
	e.removeAllTagsFrom("blocksyouneed:steel_ingot")
	e.removeAllTagsFrom("blocksyouneed:steel_block")
	e.removeAllTagsFrom("blocksyouneed:bronze_ingot")
	e.removeAllTagsFrom("blocksyouneed:bronze_block")
})
