import mods.recipestages.Recipes;
import mods.recipemachinestage.RecipeMachineStage;

Recipes.setRecipeStageByMod("cele_basic", "create_new_age");
Recipes.setRecipeStageByMod("cele_basic", "createadditions");
Recipes.setRecipeStageByMod("cele_adv", "createdieselgenerators");

Recipes.setRecipeStage("cbasic", <item:create:andesite_alloy>);
Recipes.setRecipeStage("cadv", <item:create:brass_ingot>);

Recipes.setRecipeStage("circ", <item:create_new_age:blank_circuit>);
Recipes.setRecipeStage("circ", <item:create_new_age:copper_circuit>);
Recipes.setRecipeStage("circ", <item:kubejs:raw_pcb>);
Recipes.setRecipeStage("circ", <item:kubejs:pcb>);

Recipes.setRecipeStage("iele_adv", <item:immersiveengineering:thermoelectric_generator>);
Recipes.setRecipeStage("iele_adv", <item:immersiveengineering:capacitor_mv>);
Recipes.setRecipeStage("iele_adv", <item:immersiveengineering:coil_mv>);
Recipes.setRecipeStage("iele_adv", <item:immersiveengineering:generator>);
Recipes.setRecipeStage("iele_basic", <item:immersiveengineering:dynamo>);
Recipes.setRecipeStage("iele_basic", <item:immersiveengineering:watermill>);
Recipes.setRecipeStage("iele_basic", <item:immersiveengineering:windmill>);
Recipes.setRecipeStage("iele_basic", <item:immersiveengineering:windmill_sail>);
Recipes.setRecipeStage("iele_basic", <item:immersiveengineering:capacitor_lv>);
Recipes.setRecipeStage("iele_basic", <item:immersiveengineering:coil_lv>);

Recipes.setRecipeStage("iadv", <item:immersiveengineering:rs_engineering>);
Recipes.setRecipeStage("iadv", <item:immersiveengineering:heavy_engineering>);
Recipes.setRecipeStage("iadv", <item:immersiveengineering:light_engineering>);
Recipes.setRecipeStage("iadv", <item:immersiveengineering:ingot_electrum>);
Recipes.setRecipeStage("iadv", <item:immersiveengineering:dust_electrum>);
RecipeMachineStage.addRecipe("create:sequenced_assembly", "create:kjs/7im23ikdqay5772vk2iivo0wn", "iadv");
RecipeMachineStage.addRecipe("create:sequenced_assembly", "create:kjs/8hu741kqdtqoxgzczom5vmxhw", "iadv");
RecipeMachineStage.addRecipe("create:sequenced_assembly", "create:kjs/93k9jd6otapsf5rg7wgwrrir", "iadv");

Recipes.setRecipeStageByMod("ed", "electrodynamics");
Recipes.setRecipeStageByMod("ns", "nuclearscience");
Recipes.setRecipeStageByMod("cc", "computercraft");
Recipes.setRecipeStageByMod("xnet", "xnet");
Recipes.setRecipeStageByMod("alchemistry", "alchemistry");
Recipes.setRecipeStageByMod("hn", "hostilenetworks");
Recipes.setRecipeStageByMod("pc", "pneumaticcraft");
