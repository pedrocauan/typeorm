// service é uma camada de software que oferece um tipo de serviço para o controller
// nesse caso  se quisermos adicionar mais campos para o usuario preencher, podemos usar esse service
// para adicionar mais um campo.

// interface é como se fosse uma estrutura que cria um tipo para um objeto
interface iUser {
    nome: string,
    email: string,

}

//Salva as informações no DB
class CreateUserService {
    execute({ nome, email}:iUser){
        const data =[];

        data.push(nome, email);

        return data;            
    }
}

export { CreateUserService };