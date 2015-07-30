var Shield = function (ship) {
	var status = false;
	var level = 5;

	this.isUp = function () {
		return status;
	}

	this.raise = function () {
	}

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