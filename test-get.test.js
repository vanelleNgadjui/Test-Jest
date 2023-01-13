async function testGet(url) {
    return await fetch(url).then((response) => response.json()).then((data) => {
        expect(data.brand).toMatch('Ford');
        expect(data.model).toBe('Mustang');
        expect(data.year).toEqual(1969);
    });
}
test("Status : Request fullfiled", () => {
    return testGet("https://api-test-jest.up.railway.app/test-get");
});