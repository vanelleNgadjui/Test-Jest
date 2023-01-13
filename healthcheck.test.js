function testHealtcheck(url) {
	return fetch(url).then((response) => {
		// expect(response.status).toBe(400);
        expect(response.status).toBeLessThan(200);
	});
}
test("Status : Request fullfiled", () => {
	return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");
});