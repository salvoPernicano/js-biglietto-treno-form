function confirm() {
    let kilometri = document.getElementById("kilometri").value;
    let age = document.getElementById("age").value;
    let tariffa = kilometri * 0.21;
  
    if (age === "minor") {
      document.getElementById("price").innerHTML = `Il suo prezzo è: €${((tariffa * 80) / 100).toFixed(2)}`;
  } else if (age === "senior") {
    document.getElementById("price").innerHTML = `Il suo prezzo è: €${((tariffa * 60) / 100).toFixed(2)}`;
  } else if (age === "grown"){
    document.getElementById("price").innerHTML = `Il suo prezzo è: €${tariffa.toFixed(2)}`;
  }
}