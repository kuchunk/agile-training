var Shield = function (ship) {
	var status = false;
	var level = 5;

	this.isUp = function () {
		return status;
	}

	this.raise = function () {
	}

	this.hit = function () {
		//return -1;
		
		if (this.isUp == true) {
			this.level = this.level - 1;
			
			if (this.level == 0){
				this.status = false;
			}
		} else {
			// to do - add damage to subsystem if less than zero
			ship.subSystemsStatus["weapons"].status = "down";
		}
	}
}

