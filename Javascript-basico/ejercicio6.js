let listaCompras=['carne','leche','pan','verduras','fideos']
listaCompras.push("Aceite de Girasol")
console.log(listaCompras);
console.log(listaCompras.pop())
console.log(listaCompras);

let listaPeliculas=[
  {
    titulo:"Forest Gump",
    director:"Robert Zemeckis",
    fecha:1994
  },
  {
    titulo:"Rescatando al soldado Ryan",
    director:"Steven Spielberg",
    fecha:1998
  },
  {
    titulo:"Avengers: Infinity War",
    director:"Anthony Russo",
    fecha:2018
  }
]

let listaPeliculas2010=listaPeliculas.filter((pelicula)=>pelicula.fecha>2010)
console.log(listaPeliculas2010);

let listaPeliculasDirector=listaPeliculas.map((pelicula)=>pelicula.director)
console.log(listaPeliculasDirector);

let listaPeliculasTitulo=listaPeliculas.map((pelicula)=>pelicula.titulo)
console.log(listaPeliculasTitulo);

let listaDirectoresTitulos= listaPeliculasDirector.concat(listaPeliculasTitulo)
console.log(listaDirectoresTitulos);

let listaDirectoresTitulosSE= [...listaPeliculasDirector, ...listaPeliculasTitulo]
console.log(listaDirectoresTitulos);

