// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;




load();
var id=0;
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
        id++;
        lista += "<li id='"+id+"' style='margin-bottom: 25px; border-top-width: 1px; background-color: #c0c0c094' class='list-group-item'> <h3 style='text-align: center; font-weight: bold;'>" + titulo + "</h3>"+"<p style='text-align: right; font-style: italic; font-size: 13px;'> Publicado em "+ str_data+ " às "+ str_hora+ " por Álvaro Renan, Discente UFRN." + "</p>" + text  + "<br>"
        + "</li>";
        
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

