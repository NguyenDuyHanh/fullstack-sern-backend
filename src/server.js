import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors';

import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./route/web.js";
import connectDB from "./config/connectDB.js";

let app = express();
app.use(cors({ origin: true, credentials: true }));

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

configViewEngine(app);
initWebRoutes(app);
connectDB();

dotenv.config();
let port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});