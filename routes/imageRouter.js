import express from "express";
import {deleteImage, detail, getAllImages, getImages, test, uploadImage} from "../controllers/imageController.js"
const router = express.Router();

router.get("/images-list",getAllImages); //Image listing API
router.post("/add-image", uploadImage) ; //Image upload API
router.get("/details", detail); //Image details API
router.delete("/delete-image",deleteImage ) //Image delete API
router.get("/test", test) //testing api
router.get("/getImages", getImages) //json image api
export default router;