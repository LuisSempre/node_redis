import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const getUserInfoController = new GetUserInfoController();

router.post("/users", createUserController.handle);

router.post("/login", loginUserController.handle);
router.get("/users/profile", authentication, getUserInfoController.handle);

export default router;
