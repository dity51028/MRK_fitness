import express from "express";
import {config} from "dotenv";
import cors from "cors";

const app = express();
const router = express.Router();

config({path:"./config.env"});
app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`));