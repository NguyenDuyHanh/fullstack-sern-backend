import db from "../models/index.js";
import CRUDSevice from "../services/CRUDSevice.js";

let getHomePage = async (req, res) => {
    return res.render('homepage');
}

let getCreate = (req, res) => {
    return res.render('create');
}

const getUsers = async (req, res) => {
    const data = await CRUDSevice.getAllUsers();
    console.log(data);
    return res.render('display', {
        data: data
    })
}

let create = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    return res.send("Added user successfully");
}

export default {
    getHomePage: getHomePage,
    getCreate: getCreate,
    create: create,
    getUsers: getUsers
}