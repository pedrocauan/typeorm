import { Request, Response } from "express";

class CreateUserController {
    handle(req: Request, res: Response) {
       
        const nome = req.body.nome;
        return res.json({
            mensagem: `Usuario ${nome} criado`,
        })
    }
}

export { CreateUserController };