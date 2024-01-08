function confirm() {
    let kilometri = document.getElementById("kilometri").value;
    let age = document.getElementById("age").value;
    let tariffa = kilometri * 0.21;
    let nomePasseggero = document.getElementById("name").value;
  
document.getElementById("nome").innerHTML = nomePasseggero;

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