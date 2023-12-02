import express from "express";
import { getAllHomeData, addHomeData } from "../controlles/home-control.js";

const router = express.Router();

router.get('/home', getAllHomeData);
router.post('/home', addHomeData);

export default router;
