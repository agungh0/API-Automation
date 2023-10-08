const request = require("supertest")
const { expect } = require ("chai")


async function addUnit(payload) {
    
    return (await response)
}

module.exports = {
    addUnit
}

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
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5ZjY0Y2JjLTgwNmMtNDYwNi1hYWY2LWFkNGRhZDBiNDkyZSIsImNvbXBhbnlJZCI6IjM2N2MwYjAyLWU4MzYtNDA2MS04YTIzLTA2NTIzYjQ5ZjU3NyIsImlhdCI6MTY5Njc4NTU0NX0.XoMOUvo8WSlpmOrrk1iV8yj87R1h-wGBAgblMhdS84Q"
        }
        )
        // console.log(JSON.stringify(await response.body))
        //Assertion
        // expect((await response).status).equal(201)
        expect((await response.body).message).to.include("Unit berhasil ditambahkan")
    }) 

})