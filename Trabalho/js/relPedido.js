var pedidos = []

loadDataFromLocalStorage();

function loadDataFromLocalStorage(){
    var pedSaved = localStorage.getItem("Pedidos");
     if(pedSaved){
        pedidos = JSON.parse(pedSaved);
        populateTable();
     }
 
}

function populateTable(){
    var table = document.getElementById("tablePed");

    for(var i=0; i < pedidos.length; i++){
        var pedido = pedidos[i];
       
        var tr = document.createElement('tr');
        var tdNome = document.createElement("td");
        var tdEndereco = document.createElement('td');
        var tdRg = document.createElement("td");
        var tdCpf = document.createElement("td");
        var tdTelefone = document.createElement("td");
        var tdProduto = document.createElement("td");


        tdNome.innerHTML = pedido.nome;
        tdEndereco.innerHTML = pedido.endereco;
        tdRg.innerHTML = pedido.rg;
        tdCpf.innerHTML = pedido.cpf;
        tdTelefone.innerHTML = pedido.telefone;
        tdProduto.innerHTML = pedido.produto;
        
        tr.appendChild(tdNome);
        tr.appendChild(tdEndereco);
        tr.appendChild(tdRg);
        tr.appendChild(tdCpf);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdProduto);

        table.appendChild(tr);

    }
}