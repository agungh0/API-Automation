const request = require("supertest")
const { expect } = require ("chai")

//Create User
describe("Create User", async ()=> {
    it("response status is 201", async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/registration")
        .send({
            
                "name": "kasir-serbaguna",
                "email": "user25@example.com",
                "password": "jiasda10000@"
             
        })
        console.log(JSON.stringify(await response.body))
        //Assertion
        expect((await response).status).equal(201)
        expect((await response.body).message).to.include("Toko berhasil didaftarkan")
    }) 

})