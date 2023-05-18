function entradas(){
    var entradas = document.getElementById("entradas_num").value;
    var precio=10;
    entradas = Number(entradas); // para convertir en numero
    

    switch(true){
        case (entradas == 1):
                precio = entradas * precio;
                mensaje = precio + "€";
        break;
        case (entradas == 2):
                precio = entradas * precio * 0.90;
                mensaje = precio + "€";
        break;
        case (entradas == 3):
            precio = entradas * precio * 0.85;
            mensaje = precio + "€";
        break;
        case (entradas == 4):
            precio = entradas * precio * 0.80;
            mensaje = precio + "€";
        break;
        case (entradas == 5):
            precio = entradas * precio * 0.75;
            mensaje = precio + "€";
        break;
        
    }  
    document.getElementById("precio").innerHTML = mensaje; 
}

function vaciarCarrito(){
    document.getElementById("precio").remove();
}