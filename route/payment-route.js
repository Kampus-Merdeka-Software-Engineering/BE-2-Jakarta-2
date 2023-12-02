import express from "express";
import { createPayment, getAllPayments } from "../controlles/payment-control.js";

const router = express.Router();

router.post('/home', createPayment);
router.get('/home', getAllPayments);

export default router;
