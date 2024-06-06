import express from 'express';
import userRoutes from './user.routes.js';
const router = express.Router();

const baseURL = 'api/v1';


router.use(`/${baseURL}/users`, userRoutes);

export default router;