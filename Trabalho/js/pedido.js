var pedidos = []

loadDataFromLocalStorage()

start()

function loadDataFromLocalStorage(){
    var pedSaved = localStorage.getItem("Pedidos");
     if(pedSaved){
        pedidos = JSON.parse(pedSaved);
     }
 
}

function start(){
    var btn = document.getElementById("btnPeCad")
    btn.onclick = function(){
        savePedido()
    }
}

function savePedido(){

    var inputNome = document.getElementById("nameField")
    var inputEndereco = document.getElementById("endField")
    var inputRg = document.getElementById("rgField")
    var inputCpf = document.getElementById("cpfField")
    var inputTelefone = document.getElementById("telField")
    var inputProduto = document.getElementById("prodField")

    var pedido = {
        nome: inputNome.value,
        endereco: inputEndereco.value,
        rg: inputRg.value,
        cpf: inputCpf.value,
        telefone: inputTelefone.value,
        produto: inputProduto.value
    }

    pedidos.push(pedido)
    savePedidoStorage()

}

function savePedidoStorage(){
    var data = JSON.stringify(pedidos);
    localStorage.setItem("Pedidos", data);
    alert("Novo pedido cadastrado com sucesso!")
}