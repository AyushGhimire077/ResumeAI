import express from "express";

import {giveResponse} from "../controllers/userInfoController";

const openRouter = express.Router();

openRouter.post("/get-resume", giveResponse);

export default openRouter;
