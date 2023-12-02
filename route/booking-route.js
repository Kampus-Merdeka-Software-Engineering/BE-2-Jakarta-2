import express from "express";
import { createBooking, getAllBookings } from "../controlles/booking-control.js";

const router = express.Router();

router.post('/booking', createBooking);
router.get('/booking', getAllBookings);

export default router;
