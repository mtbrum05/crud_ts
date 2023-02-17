import express from "express"
import config from "config"
require("dotenv").config();

const app = express()

const port = config.get<number>("port")

app.use(express.json())

import router from "./router"
import db from "../config/db"

import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";


app.use(morganMiddleware)
app.use("/api/", router)


app.listen(port,async () => {
    await db()
    Logger.info(`Aplicação rodando na porta ${port}`);
});

