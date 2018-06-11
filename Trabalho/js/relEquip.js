var equipamentos = []

loadDataFromLocalStorage();

function loadDataFromLocalStorage(){
    var equipSaved = localStorage.getItem("Equipamentos");
     if(equipSaved){
        equipamentos = JSON.parse(equipSaved);
        populateTable();
     }
 
}

function populateTable(){
    var table = document.getElementById("tableEquip");

    for(var i=0; i < equipamentos.length; i++){
        var equipmento = equipamentos[i];
       
        var tr = document.createElement('tr');
        var tdCodigo = document.createElement("td");
        var tdFabricante = document.createElement('td');
        var tdModelo = document.createElement("td");
        var tdVeiculo = document.createElement("td");
        var tdQuantidade = document.createElement("td");


        tdCodigo.innerHTML = equipmento.codigo;
        tdFabricante.innerHTML = equipmento.fabricante;
        tdModelo.innerHTML = equipmento.modelo;
        tdVeiculo.innerHTML = equipmento.veiculo;
        tdQuantidade.innerHTML = equipmento.quantidade;
        
        tr.appendChild(tdCodigo);
        tr.appendChild(tdFabricante);
        tr.appendChild(tdModelo);
        tr.appendChild(tdVeiculo);
        tr.appendChild(tdQuantidade);

        table.appendChild(tr);

    }
}