const hoy =new Date()
console.log(hoy);

const fechaNacimiento = new Date(1976,1,1)
console.log(fechaNacimiento);

const esMayor = hoy.getTime() > fechaNacimiento.getTime();
console.log(esMayor);

const diaNac = fechaNacimiento.getDate();
console.log(diaNac);

const mesNac = fechaNacimiento.getMonth();
console.log(mesNac);

const anyoNac = fechaNacimiento.getFullYear();
console.log(anyoNac);


