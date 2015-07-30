describe("shields", function () {
	beforeEach(function () {
		ship = new Ship();		
		shield = new Shield(ship);
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
		
		it("subsystem takes damage if shield down or depleted", function(){
			// given
			shield.setStatus = false;
			var beforeAttack = (JSON.parse(JSON.stringify(ship.subSystemsReport)));
			
			//when
			shield.hit();
			
			// then
			//expect(ship.subSystemsStatus.length).toBe(5);
			expect(ship.subSystemsReport).not.toEqual(beforeAttack);
		});
		
		//it("Damaged Subsystem", function(){
		//})
	})
});