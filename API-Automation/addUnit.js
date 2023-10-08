const request = require("supertest")
const { expect } = require ("chai")


//Add Unit
describe("Add Unit", async ()=> {
    it("message", async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/units")
        .send({
            
            "name": "gram",
            "description": "weight measurement"
             
        })
        .set(
            {"Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkZDQ1NGI2LTg4NzgtNDBjOS04MjllLWJhYmY0YmY4NjI1NSIsImNvbXBhbnlJZCI6IjAzZDgzYmNlLWViYmUtNDAwMC1iZTEyLTc5ODc1OGY2OTdkZiIsImlhdCI6MTY5Njc3OTk1MH0.HAXFVkMYKDIhHJFjiniU4ixTHc_WbNL-5iFSA1gVeMc"
        }
        )
        console.log(JSON.stringify(await response.body))
        //Assertion
        // expect((await response).status).equal(201)
        expect((await response.body).message).to.include("Unit berhasil ditambahkan")
    }) 

})