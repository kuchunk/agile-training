describe("shields", function () {
	var shield;
	
	beforeEach(function () {
		ship = new Ship();		
		shield = new Shield();
	});

	describe("shields can buckle", function () {
		it("shield is hit if raised", function () {
			// given
			shield.isUp = true;
			shield.level = 1;
		
			// when
			shield.hit();
		
			// then
			expect(shield.level).toBe(0);
		});
		if("subsystem takes damage if shield down or depleted", function(){
			// given
			shield.status = false;
			
			//when
			shield.hit();
			
			// then
			expect(ship.subSystemStatus["weapons"].status).toBe("down");
			
			
		});
	})
	
	describe("status", function () {
		it("should be down by default", function () {
			// given			
			// when


			// then
			expect(shield.isUp()).toBeFalsy();
		});

		it("should be up when shield is raised", function () {
			// given
					
			// when
			shield.raise();
		
			// then
			expect(shield.isUp()).toBeTruthy();
		});

		it("should be down when shield is lowered", function () {
			// given
					
			// when
			shield.raise();
			shield.lower();
		
			// then
			expect(shield.isUp()).toBeFalsy();
		});
	});
	
	describe("energy", function () {
		it("should be 0 by default", function () {
			// given					
			// when
		
			// then
			expect(shield.energy()).toBe(0);
		});
		
		it("should not be 0 when positive energy is transfered", function () {
			// given					
			// when
		
			shield.transfer(100);
			
			// then
			expect(shield.energy()).not.toBe(0);
		});
		
		it("should not exceed 10000 when positive energy more than 10000 is transfered", function () {
			// given					
			// when
		
			shield.transfer(11000);
						
			// then
			expect(shield.energy()).not.toBeGreaterThan(10000);
		});
		
		it("should be 7000 when we transfer 2000 for existing 5000", function () {
			// given					
			// when
		
			shield.transfer(5000);
			shield.transfer(2000);
						
			// then
			expect(shield.energy()).toBe(7000);
		});		
		
	});

});