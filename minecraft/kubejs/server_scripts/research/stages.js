global.research_stages = {
	"electrodynamics:circuitadvanced": "ed_advanced",
	"electrodynamics:circuitelite": "ed_plus",
	"electrodynamics:circuitultimate": "ed_plus",
	"electrodynamics": {
		stage: "ed",
		exceptions: [
			/^ore.+$/,
			/^deepslateore.+$/,
			/^rawore.+$/,
		]
	},
	"chemlib:uranium_ingot": "uranium_processing",
	"nuclearscience:msrfuelpreprocessor": "uranium_processing",
	"nuclearscience:nuclearboiler": "uranium_processing",
	"nuclearscience:gascentrifuge": "uranium_processing",
	"nuclearscience:fissiledust": "uranium_processing",
	"nuclearscience:uranium235": "uranium_processing",
	"nuclearscience:uranium238": "uranium_processing",
	"nuclearscience:fuelplutonium": "plutonium_processing",
	"nuclearscience:plutoniumoxide": "plutonium_processing",
	"nuclearscience:plutonium239": "plutonium_processing",
	"nuclearscience:controlrodassembly": "nuclear_fission",
	"nuclearscience:fuelheuo2": "nuclear_fission",
	"nuclearscience:fuelleuo2": "nuclear_fission",
	"nuclearscience:fissionreactorcore": "nuclear_fission",
	"nuclearscience:msreactorcore": "nuclear_ms",
	"nuclearscience:fusionreactorcore": "nuclear_fusion",
	"nuclearscience:particleinjector": "nuclear_particles",
	"nuclearscience": {
		stage: "nuclear",
		exceptions: []
	},
	"create_new_age:energiser_t2": "newage_advanced",
	"create_new_age:energiser_t3": "newage_advanced",
	"create_new_age:advanced_motor": "newage_advanced",
	"create_new_age:advanced_motor_extension": "newage_advanced",
	"create_new_age:reinforced_motor": "newage_advanced",
	"create_new_age:fluxuated_magnetite": "newage_advanced",
	"create_new_age:netherite_magnet": "newage_advanced",
	"create_new_age:overcharged_diamond": "newage_advanced",
	"createadditions:large_connector": "newage_advanced",
	"createadditions:portable_energy_interface": "newage_advanced",
	"createadditions:digital_adapter": "newage_advanced",
	"create_new_age": {
		stage: "newage",
		exceptions: []
	},
	"createadditions": {
		stage: "newage",
		exceptions: []
	},
	"immersiveengineering:dynamo": "iele",
	"immersiveengineering:watermill": "iele",
	"immersiveengineering:windmill": "iele",
	"immersiveengineering:windmill_sail": "iele",
	"immersiveengineering:capacitor_lv": "iele",
	"immersiveengineering:coil_lv": "iele",
	"immersiveengineering:connector_lv": "iele",
	"immersiveengineering:connector_lv_relay": "iele",
	"immersiveengineering:transformer": "iele",
	"immersiveengineering:thermoelectric_generator": "iele_advanced",
	"immersiveengineering:capacitor_mv": "iele_advanced",
	"immersiveengineering:coil_mv": "iele_advanced",
	"immersiveengineering:connector_hv": "iele_advanced",
	"immersiveengineering:connector_hv_relay": "iele_advanced",
	"immersiveengineering:coil_mv": "iele_advanced",
	"immersiveengineering:generator": "iele_advanced",
	"immersiveengineering:current_transformer": "iele_advanced",
	"immersiveengineering:rs_engineering": "ie_advanced",
	"immersiveengineering:heavy_engineering": "ie_advanced",
	"immersiveengineering:light_engineering": "ie_advanced",
	"immersiveengineering:ingot_electrum": "ie_advanced",
	"immersiveengineering:dust_electrum": "ie_advanced",
	"createdieselgenerators:huge_diesel_engine": "diesel_advanced",
	"createdieselgenerators:large_diesel_engine": "diesel_advanced",
	"createdieselgenerators:chemical_turret": "diesel_advanced",
	"createdieselgenerators": {
		stage: "diesel",
		exceptions: []
	},
	"create_new_age:blank_circuit": "circuits",
	"create_new_age:copper_circuit": "circuits",
	"kubejs:raw_pcb": "pcbs",
	"kubejs:pcb": "pcbs",
	"create:brass_ingot": "create_advanced",
	"create:brass_sheet": "create_advanced",
	"create:brass_nugget": "create_advanced",
	"create:brass_casing": "create_advanced",
	"create:controls": "trains",
	"create:track": "trains",
	"create:railway_casing": "trains",
	"create:stock_link": "logistics_advanced",
	"create:stock_ticker": "logistics_advanced",
	"create:packager": "logistics_advanced",
	"create:repackager": "logistics_advanced",
	"computercraft:turtle_advanced": "computing_advanced",
	"computercraft:computer_advanced": "computing_advanced",
	"computercraft:pocket_computer_advanced": "computing_advanced",
	"computercraft:wireless_modem_advanced": "networking",
	"computercraft:wired_modem": "networking",
	"computercraft:wired_modem_full": "networking",
	"computercraft:cable": "networking",
	"computercraft:monitor_advanced": "computing_advanced",
	"computercraft:redstone_relay": "computing_peripherals",
	"computercraft:speaker": "computing_peripherals",
	"computercraft:printer": "computing_peripherals",
	"computercraft:disk_drive": "computing_peripherals",
	"computercraft": {
		stage: "computing",
		exceptions: []
	},
	"xnet": {
		stage: "networking",
		exceptions: []
	},
	"alchemistry:fission_chamber_controller": "alchemistry_fission",
	"alchemistry:fission_core": "alchemistry_fission",
	"alchemistry:fusion_chamber_controller": "alchemistry_fusion",
	"alchemistry:fusion_core": "alchemistry_fusion",
	"alchemistry": {
		stage: "alchemistry",
		exceptions: []
	},
	"hostilenetworks": {
		stage: "hostilenetworks",
		exceptions: []
	},
	"pneumaticcraft": {
		stage: "pneumaticcraft",
		exceptions: []
	},
	"creatingspace:big_rocket_engine": "spaceage_advanced",
	"creatingspace:advanced_spacesuit_boots": "spaceage_advanced",
	"creatingspace:advanced_spacesuit_leggings": "spaceage_advanced",
	"creatingspace:advanced_spacesuit_helmet": "spaceage_advanced",
	"creatingspace:netherite_oxygen_backtank": "spaceage_advanced",
	"creatingspace:rocket_generator": "spaceage_advanced",
	"creatingspace": {
		stage: "spaceage",
		exceptions: []
	},
	"dimensional_item_cannons": {
		stage: "dimensional_cannons",
		exceptions: []
	},
	"tacz:gun_smith_table": "tacz_smithing",
	"tacz": {
		stage: "tacz",
		exceptions: []
	},
	"securitycraft": {
		stage: "security",
		exceptions: []
	},
	"createoreexcavation:diamond_drill": "oreexcavation_advanced",
	"createoreexcavation:netherite_drill": "oreexcavation_advanced",
	"createoreexcavation": {
		stage: "oreexcavation",
		exceptions: []
	},
	"psi": {
		stage: "psi",
		exceptions: []
	},
	"ballistix:nuclear": "ballistix_nuclear",
	"ballistix:missilemediumrange": "ballistix_nuclear",
	"ballistix:antimatter": "ballistix_advanced",
	"ballistix:largeantimatter": "ballistix_advanced",
	"ballistix:darkmatter": "ballistix_advanced",
	"ballistix:missilelongrange": "ballistix_advanced",
	"ballistix": {
		stage: "ballistix",
		exceptions: []
	},
	"dynamicelectricity": {
		stage: "ed",
		exceptions: []
	},
	"immersive_aircraft:biplane": "aero_advanced",
	"immersive_aircraft:quadrocopter": "aero_advanced",
	"immersive_aircraft:bomb_bay": "aero_advanced",
	"immersive_aircraft:rotary_cannon": "aero_advanced",
	"immersive_aircraft:enhanced_propeller": "aero_advanced",
	"immersive_aircraft:steel_boiler": "aero_advanced",
	"man_of_many_planes": {
		stage: "aero_advanced",
		exceptions: []
	},
	"immersive_aircraft": {
		stage: "aero",
		exceptions: []
	}
}
