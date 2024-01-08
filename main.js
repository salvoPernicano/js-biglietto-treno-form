function confirm() {
    let kilometri = document.getElementById("kilometri").value;
    let age = document.getElementById("age").value;
    let tariffa = kilometri * 0.21;
    let nomePasseggero = document.getElementById("name").value;
    let codice = Math.floor(Math.random()* 99999 + 1);
    let posto = Math.floor(Math.random()* 9 + 1);
    const generazione = document.querySelector(".ticket");

  
document.getElementById("nome").innerHTML = nomePasseggero;
document.getElementById("codiceCp").innerHTML = codice;
document.getElementById("carrozza").innerHTML = posto;
generazione.classList.remove("genera")

    if (age === "minor") {
      document.getElementById("price").innerHTML = `${((tariffa * 80) / 100).toFixed(2)}€`;
      document.getElementById("offer").innerHTML = "Biglietto ridotto minor"
  } else if (age === "senior") {
    document.getElementById("price").innerHTML = `${((tariffa * 60) / 100).toFixed(2)}€`;
    document.getElementById("offer").innerHTML = "Biglietto ridotto senior"
  } else if (age === "grown"){
    document.getElementById("price").innerHTML = `${tariffa.toFixed(2)}€`;
    document.getElementById("offer").innerHTML = "Biglietto standard"
  }
}

function rimuovi(){
    const rimuovi = document.querySelector(".ticket");
    rimuovi.classList.add("genera");
}