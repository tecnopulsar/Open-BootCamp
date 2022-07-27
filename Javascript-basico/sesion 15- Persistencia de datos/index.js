localStorage.setItem("nombre","Juan")
localStorage.setItem("nombre","Miguel")
localStorage.setItem("persona",JSON.stringify({nombre:"Miguel", edad: "34"}))
console.log(JSON.parse(localStorage.getItem("persona")))

localStorage.removeItem("nombre")

// sessionStorage idem localStorage


document.cookie = "nombreCookie= JuanCookie"

console.log(document.cookie);
