const obj={
  nombre:"Juan",
  apellido:"Gonzales",
  edad: 46,
  isDeveloper:true,
}

let edad = obj.edad

const lista = [
  {
      ...obj
  },{
      nombre: "Pedro",
      apellido: "Angulo",
      edad: 35,
      altura: 180,
      eresDesarrollador: true
  },{
      nombre: "Amaia",
      apellido: "Etxeberria",
      edad: 30,
      altura: 165,
      eresDesarrollador: false
  }
]

const listaOrdenada_edad = lista.sort((a,b)=>a.edad-b.edad)
console.log(listaOrdenada_edad);