const request = require("supertest")
const { expect } = require ("chai")

async function getUnit(payload) {
    
    return (await response)
}

module.exports = {
    getUnit
}

//Add Unit
describe("Get Unit Detail", async ()=> {
    it("Status code is 200", async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .get("/units/64280c30-30ff-4cdf-9320-ac673a521c37")
        .set(
            {"Content-Type" : "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5ZjY0Y2JjLTgwNmMtNDYwNi1hYWY2LWFkNGRhZDBiNDkyZSIsImNvbXBhbnlJZCI6IjM2N2MwYjAyLWU4MzYtNDA2MS04YTIzLTA2NTIzYjQ5ZjU3NyIsImlhdCI6MTY5Njc4NTU0NX0.XoMOUvo8WSlpmOrrk1iV8yj87R1h-wGBAgblMhdS84Q",
            // "unitId" : "e4aea2c9-4a6b-4d2d-a7a4-4fb2e4c7a181"
        }
        )
        // console.log(JSON.stringify(await response.body))
        //Assertion
        expect((await response).status).equal(200)
        // expect((await response.body).message).to.include("Unit berhasil ditambahkan")
    }) 

})