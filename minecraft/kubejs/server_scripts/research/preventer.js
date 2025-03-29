BlockEvents.rightClicked(e => {
	let p = e.getEntity();
	let block = e.getBlock();

	let blockId = block.getId();
	let namespace = blockId.split(':')[0]

	if(namespace === "minecraft") return

	let stageMatch = null;
	let hasStage = false;

	if(blockId in global.research_stages) stageMatch = blockId
	else if(namespace in global.research_stages) stageMatch = namespace
	else return

	let o = global.research_stages[stageMatch]
	let stageStr = "";

	if(stageMatch === namespace) {
		for(let i = 0; i < o.exceptions.length; i++) {
			if(o.exceptions[i].test(blockId.split(':')[1])) {
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
		p.tell("You don't know how to use this block! Stage required: " + stageStr)
		e.cancel()
	}
})
