const { createUser } = require("../Object/object1")
const { userLogin } = require("../Object/Object2")
const { addUnit } = require("../Object/object3")

describe("CRUD Unit", () =>{
    const respCreateUser = createUser
    it('Create', async () =>{
    })

    const respLogin =  userLogin
    it(`Login`, async () =>{
    })

    const respAddUnit =  addUnit
    it('Add Unit', async () =>{
    })

    // it ("name equal to morpheus", async () => {
    //     expect((await response).body.name).to.include(user.name)
    // })
}) 