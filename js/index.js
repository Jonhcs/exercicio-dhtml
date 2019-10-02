function cadastraPessoas() {
    event.preventDefault()
    
    let name = document.getElementById("name").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;

    let html = "<tr>";
    html += "<td>" + name + "</td>";
    html += "<td>" + sobrenome + "</td>";
    html += "<td>" + cpf + "</td>";
    html += "<td>" + telefone + "</td>";
    html += "</tr>";
    
    document.getElementById("table").addEventListener("click", function(event){
    });
    let name = document.getElementById("name").value = "";
    let sobrenome = document.getElementById("sobrenome").value = "";
    let cpf = document.getElementById("cpf").value  = "" ;
    let telefone = document.getElementById("telefone").value  = "";
};
