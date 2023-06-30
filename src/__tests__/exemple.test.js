describe("exemple test success", function () {
    it("should add two numbers correctly", function () {
        const a = 2 + 2;
        expect(a).toBe(4);
    });
});

describe("exemple test fail", function () {
    it("should add two numbers incorrectly", function () {
        const b = 2 + 1;
        expect(b).toBe(4);  // Cette assertion échouera
    });
});
