var equipamentos = []

loadDataFromLocalStorage();

start();

function loadDataFromLocalStorage(){
    var equipSaved = localStorage.getItem("Equipamentos");
     if(equipSaved){
        equipamentos = JSON.parse(equipSaved);
     }
 
}

function start(){
    var btn = document.getElementById("btnCadEquip")
    btn.onclick = function (){
        saveEquip()
    }
}

function saveEquip(){
    var inputCodigo = document.getElementById("fieldCodigo")
    var inputFabricante = document.getElementById("fieldFabricante")
    var inputModelo = document.getElementById("fieldModelo")
    var inputVeiculo = document.getElementById("fieldVeiculo")
    var inputQuantidade = document.getElementById("fieldQuantidade")

    var equipamento = {
        codigo: inputCodigo.value,
        fabricante: inputFabricante.value,
        modelo: inputModelo.value,
        veiculo: inputVeiculo.value,
        quantidade: inputQuantidade.value
    }

    equipamentos.push(equipamento)
    saveLocalStorage()

}

function saveLocalStorage(){
    var data = JSON.stringify(equipamentos);
    localStorage.setItem("Equipamentos", data);
    alert("Novo equipamento cadastrado com sucesso!")
}