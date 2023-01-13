async function testEmail(url) {
    const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
    return await fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => {

            expect(data.email).toMatch(regex);
 
    });
}
test("Status : Request fullfiled", () => {
    for (let user=0; user<20;user++ ){
     testEmail("https://api-test-jest.up.railway.app/test-user");
    }
    
});


async function testEmail(url) {
    const regex2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return await fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => {

            expect(data.email).toMatch(regex2);
 
    });
}
test("Status : Request fullfiled", () => {
    for (let user=0; user<20;user++ ){
     testEmail("https://api-test-jest.up.railway.app/test-user");
    }
    
});