//

//$(document0).ready(()=>{})

$(()=> {

  //
  $(".hide-btn").click(()=>{
    console.log("Ocultando btn");
    $("h1").hide()
  })
  $(".show-btn").click(()=>{
    $("h1").show()
  })

})