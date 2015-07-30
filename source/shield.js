var Shield = function (ship) {
	var status = false;
	var strength = 0;
	var maxStrength = 10000;
	var level = 5;

	this.isUp = function(){
			return status === true;	
	}
	
	this.raise = function(){
		status = true;	
	}
	
	this.lower = function(){
		status = false;	
	}
	this.energy = function(){
		return strength;
	};
	
	this.transfer = function(energy){
		var energyAvailable = strength + energy;
		
		if(energyAvailable > maxStrength){
			strength = maxStrength;
		} else {
			strength = strength + energy;			
		}
		
	};

	this.setStatus = function (status) {
		this.status = status;
	}

	this.hit = function () {
		if (this.isUp == true) {
			this.level = this.level - 1;

			if (this.level == 0) {
				this.status = false;
			}
		} else {
				var randomSystem = Math.floor((Math.random() * Object.keys(ship.subSystemsReport).length + 1)) - 1;
				var systemHit = Object.keys(ship.subSystemsReport)[randomSystem];

				ship.subSystemsReport[systemHit].damageReport += 1;
		}
	}
}
