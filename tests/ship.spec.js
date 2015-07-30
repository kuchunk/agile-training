describe("ship", function () {
	var ship;
	var randUtil;

	beforeEach(function () {
		randUtil = new RandomUtil();
		ship = new Ship(randUtil);
	});

	it("should not be adjacent when distance is greater than 5", function () {
		// given
		
		// when
		spyOn(randUtil, "generator").and.returnValue(9);
		
		// then
		expect(ship.isAdjacentToBase()).toBe(false);
	});
});