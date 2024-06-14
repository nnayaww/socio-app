import express from 'express';
import { updateUserController } from '../controllers/user.controller.js';

const router = express.Router();

//update User

router.put("/:id", updateUserController);
//delete User
//get a User


export default router;