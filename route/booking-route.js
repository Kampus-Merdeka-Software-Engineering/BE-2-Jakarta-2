import express from "express";
import { /* import fungsi yang diperlukan dari booking.js */ } from "../controller/booking.js";

const router = express.Router();

router.get('/booking', /* panggil fungsi yang diperlukan */);
router.get('/home', /* panggil fungsi yang diperlukan */);
router.get('/login', /* panggil fungsi yang diperlukan */);
router.get('/payment', /* panggil fungsi yang diperlukan */);

export default router;