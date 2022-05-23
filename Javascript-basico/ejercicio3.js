let factorial=10;
console.log(`factorial de ${factorial} es: `);
for(let i=factorial; i>0;i--){
  factorial *=i; 
}
console.log(factorial);

factorial=10;
console.log(`factorial de ${factorial} es: `);
let i=factorial-1;
while (i>0){
  factorial *=i; 
  i--;
}
console.log(factorial);

factorial=10;
console.log(`factorial de ${factorial} es: `);
i=factorial-1;
while (i>=0){
  factorial *=i; 
  i--;
  if(i==0) break;
}
console.log(factorial);