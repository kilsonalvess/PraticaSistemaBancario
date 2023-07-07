class Clientes {
    private _clientes: Cliente[];
    
    constructor(){
        this._clientes = [];
        
        const c1 = new Conta('1', 100);
        const cliente1 = new Cliente('Gabriel', '123321', c1);
        this._clientes.push(cliente1);
    }

    inserir(cliente: Cliente): void{
        this._clientes.push(cliente);
    }

    remover(cpf: string): void{
        const indexRemocao = this._clientes.findIndex(cliente => cpf === cliente.cpf);
        console.log("indexRemocao", indexRemocao)
        this._clientes.splice(indexRemocao, 1);
    }

    listar(): Cliente[]{
        return this._clientes;
    }

    pesquisar(cpf: string): Cliente{
        return this._clientes.find(
            cliente => cliente.cpf === cpf
        );
    }
}