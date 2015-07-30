Ship = function () {
	var subSystems = {
		"weapons":{ "damageReport": 0 },
		"impulse":{ "damageReport": 0 },
		"warp":{ "damageReport": 0 },
		"life-support":{ "damageReport": 0 },
		"communications":{ "damageReport": 0 }};
		
	return {subSystemsReport:subSystems};
	
};