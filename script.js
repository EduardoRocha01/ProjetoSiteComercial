setInterval(function() {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    if (div1.style.display === "block") {
      div1.style.display = "none";
      div2.style.display = "block";
    } else {
      div1.style.display = "block";
      div2.style.display = "none";
    }
  }, 8000); // Tempo em milisegundos para alternar


  //script de botões dos banners grandes

  document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
  });

  document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
  });

  //busca na pagina
  
  

  
  
  