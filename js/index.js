function cadastra(event) {
    event.preventdefault()
    let name = document.getElementById("name").value;
    alert(name)
    let html = "<tbody><tr><td>" + name + "</td></tr></tbody>>";
    
    document.getElementById("table_name").innerHTML += html;
    
    document.getElementById("name").value = "";
};
