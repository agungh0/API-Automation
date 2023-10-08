const request = require("supertest")
const { expect } = require ("chai")

//Create User
describe("LOGIN", async ()=> {
    it("Include Message", async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/authentications")
        .send({
            
                "email": "user25@example.com",
                "password": "jiasda10000@"
             
        })
        console.log(JSON.stringify(await response.body))
        //Assertion
        // expect((await response).status).equal(201)
        expect((await response.body).message).to.include("Authentication berhasil ditambahkan")
    }) 

})