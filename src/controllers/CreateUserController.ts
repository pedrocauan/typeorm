import { Request, Response } from "express";

class CreateUserController {
    handle(req: Request, res: Response) {
        return res.json(
        [
            {
                nome: "joao",
            },
    
            {
                nome: "maria",
            },
    
            {
                nome: "Kate",
            },
        ]);
    }
}

export { CreateUserController };