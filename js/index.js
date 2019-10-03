
function cadastraPessoas() {
    
    let name = document.getElementById("name").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;

    
    let html = "<tr><td>" + name + "</td><td>" + sobrenome + "</td></tr>";
    
    
    document.getElementById("name").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("cpf").value  = "" ;
    document.getElementById("telefone").value  = "";

    document.getElementById("table_pessoa").innerHTML += html;
    
};
