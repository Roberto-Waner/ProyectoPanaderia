function HoraActual(){
    document.getElementById('current-time').innerText = new Date().toLocaleTimeString('en-US');
}
setInterval(HoraActual, 1000); //Actualiza la hora cada segundo
HoraActual(); // Llama a la función para mostrar la hora inmediatamente