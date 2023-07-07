class Cliente {
    constructor(_nome, _cpf, _conta) {
        this._nome = _nome;
        this._cpf = _cpf;
        this._conta = _conta;
    }
    //Métodos acessores
    get nome() {
        return this._nome;
    }
    set nome(newNome) {
        this.nome = newNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        this.cpf = newCpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(newConta) {
        this.conta = newConta;
    }
}
