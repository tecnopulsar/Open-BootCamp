let listaPeliculas=[
  {
    titulo:"Rescatando al soldado Ryan",
    director:"Steven Spielberg",
    fecha:1998
  },
  {
    titulo:"Forest Gump",
    director:"Robert Zemeckis",
    fecha:1994
  },
  {
    titulo:"Avengers: Infinity War",
    director:"Anthony Russo",
    fecha:2018
  }
]

const obj={
  id:4,
  nombre:"Juan",
  apellido:"Gonzales",
  isDeveloper:true,
  libros_favoritos:["El metodo","El codigo DaVinci"],
  "4-juegos":[1,2,3,4]
}

console.log(obj["4-juegos"]);

console.log(listaPeliculas.sort((a,b)=>a.fecha-b.fecha));

const fecha = new Date()
console.log(fecha);

const fecha2= new Date()

//Ejercicio 7

const familia = new Set([`papa`,'mama','hermano','hermana','abuelo','abuela','tia','mama'])
console.log(familia);
// const array_familia=[...familia];
// array_familia.push('papa')
// console.log(array_familia)
console.log(familia.add('papa'))
console.log(familia.add('javascript'))


