import express from "express";
import { createLogin, getAllLogins } from "../controlles/login-control.js";

const router = express.Router();

router.post('/home', createLogin);
router.get('/home', getAllLogins);

export default router;
