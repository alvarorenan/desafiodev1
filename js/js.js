


load();

function adicionar(){
    let text = document.getElementById("conteudo").value;
    let titulo = document.getElementById("titulo").value;
    let lista = document.getElementById("lista").innerHTML;
    var verif = true;
    
    if (text=="" || titulo==""){
        verif = false;
        alert("Preencha todos os campos!");
       
    }
    if(verif){
        lista += "<li style='margin-bottom: 25px; border-top-width: 1px;' class='list-group-item'> <h4>" + titulo + "</h4>" + text + "</li>";
        document.getElementById("lista").innerHTML = lista;
        localStorage.setItem("lista", document.getElementById("lista").innerHTML);
        load();
        document.getElementById("conteudo").value = "";
        document.getElementById("titulo").value = "";
    }
        
    
   

}


   

function load(){
    document.getElementById("lista").innerHTML = localStorage.getItem("lista");
}   

