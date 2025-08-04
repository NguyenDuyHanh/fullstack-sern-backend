import express from "express"
import homeController from "../controllers/homeController.js";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/create", homeController.getCreate);
    router.post("/post-create", homeController.create);
    router.get("/get-read", homeController.getUsers);


    return app.use("/", router)
}

export default initWebRoutes;