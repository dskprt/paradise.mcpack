ServerEvents.recipes(e => {
	e.replaceInput({ id: "computercraft:computer_normal" }, "#forge:stone", "#forge:ingots/iron")
	e.replaceInput({ id: "computercraft:computer_normal" }, "#forge:dusts/redstone", "create_new_age:copper_circuit")
	
	e.replaceInput({ id: "computercraft:pocket_computer_normal" }, "#forge:stone", "#forge:plates/iron")
	e.replaceInput({ id: "computercraft:pocket_computer_normal" }, "golden_apple", "create_new_age:copper_circuit")
	
	e.replaceInput({ id: "computercraft:computer_advanced" }, "#forge:ingots/gold", "#forge:ingots/gold")
	e.replaceInput({ id: "computercraft:computer_advanced" }, "#forge:dusts/redstone", "create_new_age:copper_circuit")
	e.replaceInput({ id: "computercraft:computer_advanced" }, "#forge:glass_panes", "#forge:ingots/electrum")
	
	e.replaceInput({ id: "computercraft:pocket_computer_advanced" }, "#forge:ingots/gold", "#forge:plates/gold")
	e.replaceInput({ id: "computercraft:pocket_computer_advanced" }, "golden_apple", "create_new_age:copper_circuit")
	e.replaceInput({ id: "computercraft:pocket_computer_advanced" }, "#forge:glass_panes", "#forge:plates/electrum")
})