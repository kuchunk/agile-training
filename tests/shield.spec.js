describe("shields", function () {
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
});