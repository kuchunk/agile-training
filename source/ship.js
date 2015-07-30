var Ship = function (randUtilObj) {
	var subSystemsStatus = [{
		"weapons":{ "status": "up" },
		"impulse":{ "status": "up" },
		"warp":{ "status": "up" },
		"life-support":{ "status": "up" },
		"communications":{ "stauts": "up" }}];
		var randUtil = randUtilObj;
		
		this.isAdjacentToBase = function(){
			return distanceToBase();
		};
		
		function distanceToBase(){
			var rand = randUtil.getRandomArbitrary(0,10);			
			return rand < 5;
		}

};