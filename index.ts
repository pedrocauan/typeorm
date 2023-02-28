import express, { Request, Response } from "express";

const server = express();
const PORT = 5004;

server.get("/", (req: Request, res: Response) => {
    //FUNCIONALIDADES DA ROTA
    return res.json({ mensagem: "Bem vindo a nossa DIO API" });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//VERBOS HTTP

/**
 * GET -> LER OS DADOS    
 * PUT/PATH -> ATUALIZA OS DADOS
 * UPDATE -> ATUALIZA OS DADOS
 * DELETE -> DELETA OS DADOS
 * 
 *  */ 