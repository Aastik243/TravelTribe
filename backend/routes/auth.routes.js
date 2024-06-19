import express from "express";
import {login, signup, logout, getMe} from "../controllers/auth.cotroller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router=express.Router();



router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", protectRoute, getMe);


export default router;
