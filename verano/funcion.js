var nombre= document.getElementById('nombre');
var buttom= document.getElementById('DN');
var edad= document.getElementById('edad');
buttom.addEventListener('click',

    function(){
        //nam.value="Sara del Carmen";
        window.location.href = "Resultados.html"+"?"+"nombre="+nombre.value+"&"+"edad="+edad.value;
        
    }

);