import db from "../models/index.js";
import CRUDSevice from "../services/CRUDSevice.js";

let getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        return res.render('homepage', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

let getAboutPage = (req, res) => {
    return res.render('about/aboutpage');
}

let getCRUD = (req, res) => {
    return res.render('crud')
}

let create = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    return res.send("Added user successfully");
}

export default {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    create: create
}