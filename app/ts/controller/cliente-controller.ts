class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputNumeroConta: HTMLInputElement;

    private clientes: Clientes;

    constructor(){
        this.inputNome =
            <HTMLInputElement>document.querySelector('#nome');
        this.inputCPF = 
            <HTMLInputElement>document.querySelector('#CPF');
        this.inputNumeroConta = 
            <HTMLInputElement>document.querySelector('#numeroConta');
        
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
    evento.preventDefault();
    
    let newCliente = new Cliente(this.inputNome.value, this.inputCPF.value, c1);
    this.clientes.inserir(newCliente);
    }

    listar(){
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            });
    }

    inserirClienteNoHTML(cliente : Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = (cliente.nome.toString() + 
        " | "+ cliente.cpf.toString() + 
        " | " + cliente.conta.toString());

        //elementoP.textContent = cliente.toString();
        
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            });
        
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}