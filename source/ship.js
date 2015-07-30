var Ship = function (randUtilObj) {
	var subSystems = {
		"weapons":{ "damageReport": 0 },
		"impulse":{ "damageReport": 0 },
		"warp":{ "damageReport": 0 },
		"life-support":{ "damageReport": 0 },
		"communications":{ "damageReport": 0 }};
		
		var randUtil = randUtilObj;
		
		this.isAdjacentToBase = function(){
			return distanceToBase();
		};
		
		function distanceToBase(){
			var rand = randUtil.getRandomArbitrary(0,10);			
			return rand < 5;
		}

		this.subSystemsReport = subSystems;
};