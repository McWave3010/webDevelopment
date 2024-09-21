import express  from 'express';

import loginPage from "./controller";
const router = express.Router();




router.post("/register/user", loginPage);

export default router;