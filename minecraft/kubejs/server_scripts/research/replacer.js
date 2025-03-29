/*PlayerEvents.inventoryChanged(e => {
	let p = e.getEntity();
	let is = e.getItem();
	let slot = e.getSlot();

	let itemId = is.getId();
	let namespace = itemId.split(':')[0]

	p.tell(itemId)

	if(itemId === "kubejs:unusable_item") {
		let trueItem = is.getNbt()["rsTrueItem"]
		let owner = is.getNbt()["rsOwner"]

		//p.tell("a: " + trueItem)
		//p.tell("has: " + p.stages.has("ed"))

		//if(p.getUuid() != owner) return;

		let namespace = trueItem.split(':')[0]

		let stageMatch = null;
		if(namespace in global.research_stages) stageMatch = global.research_stages[namespace];
		else if(trueItem in global.research_stages) stageMatch = global.research_stages[itemId];

		//p.tell("ns: " + namespace)
		//p.tell("sm: " + stageMatch)

		if(stageMatch !== null && p.stages.has(stageMatch)) {
			// replace into the true item
			let replacementItem = Item.of(trueItem, is.count)

			// armor slots are also different...
			if(slot == 8) slot = 36
			else if(slot == 7) slot = 37
			else if(slot == 6) slot = 38
			else if(slot == 5) slot = 39
			else if(slot >= 36 && slot <= 44) {
				slot -= 36 // hotbar slots are numbered differently
			}
			else if(slot == 45) { // and so is offhand
				p.offHandItem = replacementItem
				return
			}

			p.inventory.setStackInSlot(slot, replacementItem)
		}
		return
	}

	let stageMatch = null;
	if(namespace in global.research_stages) stageMatch = global.research_stages[namespace];
	else if(itemId in global.research_stages) stageMatch = global.research_stages[itemId];

	if(stageMatch !== null) {
		if(!p.stages.has(stageMatch)) {
			let replacementItem = Item.of("kubejs:unusable_item", is.count, `{rsOwner:"${p.getUuid()}",rsTrueItem:"${itemId}",display:{Name:'{"text":"Unknown Item - ${is.getItem().getName(is).getString()}"}'}}`)

			// armor slots are also different...
			if(slot == 8) slot = 36
			else if(slot == 7) slot = 37
			else if(slot == 6) slot = 38
			else if(slot == 5) slot = 39
			else if(slot >= 36 && slot <= 44) {
				slot -= 36 // hotbar slots are numbered differently
			}
			else if(slot == 45) { // and so is offhand
				p.offHandItem = replacementItem
				return
			}

			p.inventory.setStackInSlot(slot, replacementItem)
		}
	}
})*/

PlayerEvents.tick(e => {
	let p = e.getEntity();

	//for(let slot = 0; slot < p.inventory.size; slot++) {
	p.inventory.items.forEach(is => {
		//let is = p.inventory.get(slot);

		let itemId = is.getId();
		let namespace = itemId.split(':')[0]

		if(namespace === "minecraft") return

		let slot = p.inventory.findSlotMatchingItem(is)

		if(itemId === "kubejs:unusable_item") {
			let trueItem = is.getNbt()["rsTrueItem"]
			//let owner = is.getNbt()["rsOwner"]
	
			//if(p.getUuid() != owner) return;
	
			let namespace = trueItem.split(':')[0]
	
			let stageMatch = null;
			if(trueItem in global.research_stages) stageMatch = global.research_stages[trueItem]
			else if(namespace in global.research_stages) stageMatch = global.research_stages[namespace].stage
	
			if(stageMatch !== null && p.stages.has(stageMatch)) {
				// replace into the true item
				let replacementItem = Item.of(trueItem, is.count)
				p.inventory.setItem(slot, replacementItem)
			}

			return
		}
	
		let stageMatch = null;
		let hasStage = false;

		if(itemId in global.research_stages) stageMatch = itemId
		else if(namespace in global.research_stages) stageMatch = namespace
		else return

		let o = global.research_stages[stageMatch]
		let stageStr = "";

		if(stageMatch === namespace) {
			for(let i = 0; i < o.exceptions.length; i++) {
				if(o.exceptions[i].test(itemId.split(':')[1])) {
					return
				}
			}

			hasStage = p.stages.has(o.stage)
			stageStr = o.stage
		} else {
			hasStage = p.stages.has(o)
			stageStr = o
		}
	
		if(stageMatch !== null && !hasStage) {
			let replacementItem = Item.of("kubejs:unusable_item", is.count, `{rsTrueItem:"${itemId}",display:{Lore:['{"text":"Required Stage: ${stageStr}"}'],Name:'{"text":"Unknown Item - ${is.getItem().getName(is).getString()}"}'}}`)
			p.inventory.setItem(slot, replacementItem)
		}
	})
})
