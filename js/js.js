var numeroIngresado = parseInt(prompt("Ingrese un numero entre 0 y 10"));

for (i=0; i < 11; i++){
    
   alert(i);
   if (i == numeroIngresado) {
    alert(`El numero elegido por el usuario es ${i} `)
   break;
}
}

