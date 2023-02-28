import  { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();    

router.get("/", (req: Request, res: Response) => {

    //FUNCIONALIDADES DA ROTA

    return res.json({ mensagem: "Bem vindo a nossa DIO API" });
});

router.get("/usuarios", createUserController.handle);

export { router }