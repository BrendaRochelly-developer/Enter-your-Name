
//Criar um evento para salvar as informações
const bt = document.getElementById("bt-salvar");
bt.addEventListener("click", salvarDados);

//Event Handler para salvar dados do formulário no SessionStorage
function salvarDados() {
    let nm = document.getElementById("nome-jogador").value;
    sessionStorage.setItem("nome", nm);
    console.log("Dados Salvos");
}
