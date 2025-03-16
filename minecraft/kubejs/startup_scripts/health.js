// Listen to item registry event
StartupEvents.registry("item", e => {
	e.create("bandage", "basic")
		.useAnimation("eat")
		.useDuration((is) => 3 * 20)
		.use((level, player, hand) => true)
		.finishUsing((is, level, entity) => {
			let effects = entity.potionEffects;
			effects.add("majruszsdifficulty:bleeding_immunity", 40 * 20, 0)
			effects.add("regeneration", 25 * 12, 0)

			is.shrink(1)
			return is;
		})
		.releaseUsing((is, level, entity, tick) => true)
		.maxStackSize(16)
		.displayName("Bandage")
		.tooltip("Grants Regeneration (0:20) and Bleeding Immunity (0:40) on use")

	e.create("medkit", "basic")
		.useAnimation("eat")
		.useDuration((is) => 5 * 20)
		.use((level, player, hand) => true)
		.finishUsing((is, level, entity) => {
			let effects = entity.potionEffects;
			effects.add("majruszsdifficulty:bleeding_immunity", 100 * 20, 0)
			effects.add("regeneration", 15 * 20, 1)

			is.shrink(1)
			return is;
		})
		.releaseUsing((is, level, entity, tick) => true)
		.maxStackSize(8)
		.displayName("Medkit")
		.tooltip("Grants Regeneration II (0:18) and Bleeding Immunity (1:30) on use")
})
