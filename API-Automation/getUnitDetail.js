const request = require("supertest")
const { expect } = require ("chai")


//Add Unit
describe("Get Unit Detail", async ()=> {
    it("Status code is 200", async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .get("/units/e4aea2c9-4a6b-4d2d-a7a4-4fb2e4c7a181")
        .set(
            {"Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkZDQ1NGI2LTg4NzgtNDBjOS04MjllLWJhYmY0YmY4NjI1NSIsImNvbXBhbnlJZCI6IjAzZDgzYmNlLWViYmUtNDAwMC1iZTEyLTc5ODc1OGY2OTdkZiIsImlhdCI6MTY5Njc3OTk1MH0.HAXFVkMYKDIhHJFjiniU4ixTHc_WbNL-5iFSA1gVeMc",
            // "unitId" : "e4aea2c9-4a6b-4d2d-a7a4-4fb2e4c7a181"
        }
        )
        console.log(JSON.stringify(await response.body))
        //Assertion
        expect((await response).status).equal(200)
        // expect((await response.body).message).to.include("Unit berhasil ditambahkan")
    }) 

})