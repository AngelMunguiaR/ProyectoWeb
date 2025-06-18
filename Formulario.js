let mainForm=document.getElementById("mainForm");
let input_nom=document.getElementById("nombre");
let input_codpost=document.getElementById("codigopostal");
let input_eda=document.getElementById("edad");
mainForm.addEventListener("submit",event=>{
    event.preventDefault();
    alert("Ojo cuidado")
    console.log("El nombre es: " + input_nom.value);
    if (input_codpost.value.length == 5)
        console.log("el codigo postal es correcto: " + input_codpost.value);
    else
        console.log("Codigo postal invalido");
    if(isNaN(input_eda.value)==true)
        console.log("la edad no es numerica");
    else
        console.log("todo correcto :D : " + input_eda.value);
    if(input_eda.value <=0)
    {
        console.log("Edad Invalida");
        alert("Edad Invalida");
    }
    else
        console.log("muy bien tu edad es: " + input_eda.value);
    let Paises = ["venezuela","mexico","alemania","turquia","portugal","españa","EUA","otro"];
    let input_pais=document.querySelector("input[name='pais']:checked");
    console.log("Tu país es: " + input_carrera.value)
    if(Paises.indexOf(input_pais.value) != -1)
        console.log("país valido");
    else
        console.log("deja de mover el codigo -.-");
});