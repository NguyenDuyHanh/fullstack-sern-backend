import CRUDSevice from "../services/CRUDSevice.js";

let getHomePage = async (req, res) => {
    return res.render('homepage');
}

let getCreate = (req, res) => {
    return res.render('create');
}

const getUsers = async (req, res) => {
    const data = await CRUDSevice.getAllUsers();
    return res.render('display', {
        data: data
    })
}

const edit = async (req, res) => {
    const userId = req.query.id;
    if(userId) {
        const userData =  await CRUDSevice.getUserFindById(userId);
        return res.render('edit', {
            data: userData
        })
    }
    else {
        return res.send("User not found");
    }
}

let create = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    return res.send("Added user successfully");
}

const update = async (req, res) => {
    const data = req.body;
    console.log(data);
    await CRUDSevice.updateUserData(data);
    return res.send('Updated data user successfully');
}

export default {
    getHomePage: getHomePage,
    getCreate: getCreate,
    create: create,
    getUsers: getUsers,
    edit: edit,
    update: update
}