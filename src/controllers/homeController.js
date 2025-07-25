import db from "../models/index.js";
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

export default {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}