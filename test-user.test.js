async function testUser(url) {
    return await fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => {
       
            expect(data.id).toBeGreaterThan(100);
            expect(data.firstName).not.toBe('');
            expect(data.lastName).not.toBe('');
  

    });
}



test("Status : Request fullfiled", () => {
       return  testUser("https://api-test-jest.up.railway.app/test-user");

});