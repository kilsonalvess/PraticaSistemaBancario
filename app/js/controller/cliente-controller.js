class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector('#nome');
        this.inputCPF =
            document.querySelector('#CPF');
        this.inputNumeroConta =
            document.querySelector('#numeroConta');
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let newCliente = new Cliente(this.inputNome.value, this.inputCPF.value, c1);
        this.clientes.inserir(newCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = (cliente.nome.toString() +
            " | " + cliente.cpf.toString() +
            " | " + cliente.conta.toString());
        //elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
