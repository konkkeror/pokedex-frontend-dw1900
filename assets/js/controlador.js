let p = {
  nombre: "Pikachu",
  tipos: ["Electrico", "Acero", "Poison", "Agua"],
  urlImagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  color: "#000"
};


// p.nombre = "Bolbasor";

console.log(p);
// alert(JSON.stringify(p));

function suma(a,b) { return a+b; }

let a = function() {
  console.log("Hola");
}

let b = suma(4,5);

a();

let x = a;

x();

function ejecutar(z) {
  z();
}

ejecutar(x);



function restar(a,b) {
  return a - b;
}

const dividir = function(a, b) {
  return  a/b;
}

const multiplicar = (a,b) => a*b;



/// Javascript:
// Modificar el Document Object Model
// Modificar los estilos
// Eventos




// ID -> getElementById, querySelector, querySelectorAll, getElementsByClassName


document.getElementById("nombre").innerHTML = p.nombre;
document.querySelector(".card-pokemon .contenedor-imagen img").setAttribute("src", p.urlImagen);
document.querySelector(".card-pokemon").style.backgroundColor = p.color;
