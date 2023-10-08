const request = require("supertest")
const { expect } = require ("chai")


//Add Unit
describe("Update Unit", async ()=> {
    it("name", async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .put("/units/e4aea2c9-4a6b-4d2d-a7a4-4fb2e4c7a181")
        .send({
            
            "name": "update-gram",
            "description": "update weight"
             
        })
        .set(
            {"Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5ZjY0Y2JjLTgwNmMtNDYwNi1hYWY2LWFkNGRhZDBiNDkyZSIsImNvbXBhbnlJZCI6IjM2N2MwYjAyLWU4MzYtNDA2MS04YTIzLTA2NTIzYjQ5ZjU3NyIsImlhdCI6MTY5Njc4NTU0NX0.XoMOUvo8WSlpmOrrk1iV8yj87R1h-wGBAgblMhdS84Q",
            // "unitId" : "e4aea2c9-4a6b-4d2d-a7a4-4fb2e4c7a181"
        }
        )
        console.log(JSON.stringify(await response.body))
        //Assertion
        expect((await response).status).equal(200)
        // expect(responseJson.data).to.include({ "name": "update-gram" });
        // expect((await response.body.name)).to.include("update-gram")
    }) 

})