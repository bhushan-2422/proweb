import { Router } from "express";
import { getCurrentUser, loginUser, logoutUser, registerUser, sayMyName } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/say-my-name").post(sayMyName)

//upload.none --> multer middleware ---> used for passing form data 
router.route("/register").post(
   upload.none(),
    registerUser
    
)
router.route("/login").post(upload.none(), loginUser)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/getCurrentUser").post(verifyJWT, getCurrentUser)

export default router