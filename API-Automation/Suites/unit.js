const { createUser } = require("../Object/object1")
const { userLogin } = require("../Object/Object2")
const { addUnit } = require("../Object/object3")
const { getUnit } = require("../Object/object4")
const { updateUnit } = require("../Object/object5")
const { deleteUnit } = require("../Object/object6")

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

    const respgetUnit =  getUnit
    it('Get Unit', async () =>{
    })

    const respUpdateUnit =  updateUnit
    it('Update Unit', async () =>{
    })

    const respdeleteUnit =  deleteUnit
    it('Delete Unit', async () =>{
    })

    // it ("name equal to morpheus", async () => {
    //     expect((await response).body.name).to.include(user.name)
    // })
}) 