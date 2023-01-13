const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
async function testPost(url) {
    return await fetch(url, { 
        method: 'POST',
        headers: {
            'token': token ,
        }
    }).then((response)=> {
        expect(response.status).toBe(403);
	});
}

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
// function testPost(url) {
//     return  fetch(url, { 
//         method: 'POST',
//         headers: {
//            'token': token ,
//         }
//     }).then((response)=> response.json()).then((data) => {
//         expect(data.length).toBeLessThanOrEqual(4);
// 	});
// }



test("Status : Request fullfiled", () => {
    return testPost("https://api-test-jest.up.railway.app/test-post");
});