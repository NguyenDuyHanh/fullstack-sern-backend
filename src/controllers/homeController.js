
let getHomePage = (req, res) => {
    return res.render('homepage');
}

let getAboutPage = (req, res) => {
    return res.render('about/aboutpage');
}

export default {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}