var url = window.location.href;
console.log(url);
var urlObj = new URL(url);
var params = urlObj.searchParams;
console.log(params)
var nombre = params.get("nombre");
var edad = params.get("edad");
var label = document.getElementById('DN');
label.innerHTML="Mi nombre es: "+nombre+", y mi edad es: "+edad+" años.";





