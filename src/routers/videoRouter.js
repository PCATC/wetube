import express from "express";
import {see,edit,deleteVideo,upload} from "../controllers/videoControllers";


const videoRouter = express.Router()

videoRouter.get("/upload", upload)
videoRouter.get("/:id(\\d+)", see) //정규식(//d+)
videoRouter.get("/:id(\\d+)/edit", edit)
videoRouter.get("/:id(\\d+)/delete", deleteVideo)

export default videoRouter