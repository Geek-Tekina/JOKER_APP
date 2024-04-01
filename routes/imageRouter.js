import express from "express";
import {deleteImage, detail, getAllImages, uploadImage} from "../controllers/imageController.js"
const router = express.Router();

router.get("/images-list",getAllImages); //Image listing API
router.post("/add-image", uploadImage) ; //Image upload API
router.get("/details", detail); //Image details API
router.delete("/delete-image",deleteImage ) //Image delete API
export default router;