const reloj = document.getElementById("reloj");

function escribir(){
    
    const hora = new Date();
    reloj.innerHTML= hora.toLocaleTimeString();
}

setInterval(escribir, 1000);


