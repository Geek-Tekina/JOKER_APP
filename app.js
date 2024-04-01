import express from 'express';
import dotenv from "dotenv";
import {dbConnection} from './database/dbConnection.js';
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import imageRouter from "./routes/imageRouter.js"


const app = express();
dotenv.config({path: "./config/config.env"})


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use
    (fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

app.use("/api-inspirational-joker.com/", imageRouter);
// dbConnection();
export default app;