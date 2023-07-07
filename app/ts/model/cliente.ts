class Cliente {
    constructor(private _nome: string, private _cpf: string, private _conta: Conta){}

    //Métodos acessores
    get nome(){
        return this._nome;
    }

    set nome(newNome: string){
        this.nome = newNome;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(newCpf: string){
        this.cpf = newCpf;
    }

    get conta(){
        return this._conta;
    }

    set conta(newConta: Conta){
        this.conta = newConta;
    }
}