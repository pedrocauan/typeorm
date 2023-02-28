import express, { Request, Response } from "express";
import { router } from "./routes";
const server = express();
const PORT = 5004;

// Permite o express aceitar json
server.use(express.json());
server.use(router);


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