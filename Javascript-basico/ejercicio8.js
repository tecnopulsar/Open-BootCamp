function verdadera(){
  return true
}

verdadera();

const promesa = new Promise((resolve,reject)=>{
  setTimeout(function (){
    console.log("Hola soy una Promesa");
  }, 5000)
})


promesa; 

function* generadoraIndices(){
  let id=2;
  while(true){
    yield id;
    id+=2;
  }
  
}
const gen=generadoraIndices();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
