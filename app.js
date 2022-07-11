console.log("script working");

function Alquileres() {
    document.getElementById("Alquileres").style.display = "block";
    document.getElementById("Impresiones").style.display = "none";
    document.getElementById("Decoraciones").style.display = "none";
    document.getElementById("Personalizados").style.display= "none";
}
function Impresiones() {
    document.getElementById("Alquileres").style.display = "none";
    document.getElementById("Impresiones").style.display = "block";    document.getElementById("Impresiones").style.display = "block";
    document.getElementById("Decoraciones").style.display = "none";
    document.getElementById("Personalizados").style.display= "none";
}
function Decoraciones() {
    document.getElementById("Alquileres").style.display = "none";
    document.getElementById("Impresiones").style.display = "none";
    document.getElementById("Decoraciones").style.display = "block";
    document.getElementById("Personalizados").style.display= "none";
}
function Personalizados() {
    document.getElementById("Alquileres").style.display = "none";
    document.getElementById("Impresiones").style.display = "none";
    document.getElementById("Decoraciones").style.display = "none";
    document.getElementById("Personalizados").style.display = "block";
}