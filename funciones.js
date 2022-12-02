/*Grupo A*/
function qatar() {

  var qatar = document.getElementById("qatar").value;
  var paisGanadorGrupoA1 = document.getElementById("paisGanadorGrupoA1").value;
  var paisGanadorGrupoA2 = document.getElementById("paisGanadorGrupoA2").value;


  if (paisGanadorGrupoA1 === "") {
    document.getElementById("paisGanadorGrupoA1").value = qatar;
    document.getElementById("octavos1A").value = qatar;
    document.getElementById("qatar").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoA2").value = qatar;
    document.getElementById("octavos2A").value = qatar;

    document.getElementById("qatar").disabled = true
  }

  if (paisGanadorGrupoA1 !== "" && paisGanadorGrupoA1 !== "") {
    document.getElementById("qatar").disabled = true
    document.getElementById("ecuador").disabled = true
    document.getElementById("senegal").disabled = true
    document.getElementById("paisesBajos").disabled = true
  }

}

function ecuador() {

  var ecuador = document.getElementById("ecuador").value;
  var paisGanadorGrupoA1 = document.getElementById("paisGanadorGrupoA1").value;
  var paisGanadorGrupoA2 = document.getElementById("paisGanadorGrupoA2").value;

  if (paisGanadorGrupoA1 === "") {
    document.getElementById("paisGanadorGrupoA1").value = ecuador;
    document.getElementById("octavos1A").value = ecuador;
    document.getElementById("ecuador").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoA2").value = ecuador;
    document.getElementById("octavos2A").value = ecuador;
    document.getElementById("ecuador").disabled = true
  }

  if (paisGanadorGrupoA1 !== "" && paisGanadorGrupoA1 !== "") {
    document.getElementById("qatar").disabled = true
    document.getElementById("ecuador").disabled = true
    document.getElementById("senegal").disabled = true
    document.getElementById("paisesBajos").disabled = true
  }
}

function senegal() {
  var senegal = document.getElementById("senegal").value;
  var paisGanadorGrupoA1 = document.getElementById("paisGanadorGrupoA1").value;
  var paisGanadorGrupoA2 = document.getElementById("paisGanadorGrupoA2").value;

  if (paisGanadorGrupoA1 === "") {
    document.getElementById("paisGanadorGrupoA1").value = senegal;
    document.getElementById("octavos1A").value = senegal;
    document.getElementById("senegal").disabled = true

  } else {
    document.getElementById("paisGanadorGrupoA2").value = senegal;
    document.getElementById("octavos2A").value = senegal;
    document.getElementById("senegal").disabled = true
  }

  if (paisGanadorGrupoA1 !== "" && paisGanadorGrupoA1 !== "") {
    document.getElementById("qatar").disabled = true
    document.getElementById("ecuador").disabled = true
    document.getElementById("senegal").disabled = true
    document.getElementById("paisesBajos").disabled = true
  }
}

function paisesBajos() {
  var paisesBajos = document.getElementById("paisesBajos").value;
  var paisGanadorGrupoA1 = document.getElementById("paisGanadorGrupoA1").value;
  var paisGanadorGrupoA2 = document.getElementById("paisGanadorGrupoA2").value;

  if (paisGanadorGrupoA1 === "") {
    document.getElementById("paisGanadorGrupoA1").value = paisesBajos;
    document.getElementById("octavos1A").value = paisesBajos;
    document.getElementById("paisesBajos").disabled = true

  } else {
    document.getElementById("paisGanadorGrupoA2").value = paisesBajos;
    document.getElementById("octavos2A").value = paisesBajos;
    document.getElementById("paisesBajos").disabled = true
  }

  if (paisGanadorGrupoA1 !== "" && paisGanadorGrupoA1 !== "") {
    document.getElementById("qatar").disabled = true
    document.getElementById("ecuador").disabled = true
    document.getElementById("senegal").disabled = true
    document.getElementById("paisesBajos").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoA() {
  var paisGanadorGrupoA1 = document.getElementById("paisGanadorGrupoA1").value;
  var paisGanadorGrupoA2 = document.getElementById("paisGanadorGrupoA2").value;

  if (paisGanadorGrupoA1 && paisGanadorGrupoA2 !== "") {
    document.getElementById("paisGanadorGrupoA1").value = "";
    document.getElementById("paisGanadorGrupoA2").value = "";
    document.getElementById("qatar").disabled = false
    document.getElementById("ecuador").disabled = false
    document.getElementById("senegal").disabled = false
    document.getElementById("paisesBajos").disabled = false
  }
}

/*Grupo B*/
function inglaterra() {

  var inglaterra = document.getElementById("inglaterra").value;
  var paisGanadorGrupoB1 = document.getElementById("paisGanadorGrupoB1").value;
  var paisGanadorGrupoB2 = document.getElementById("paisGanadorGrupoB2").value;

  if (paisGanadorGrupoB1 === "") {
    document.getElementById("paisGanadorGrupoB1").value = inglaterra;
    document.getElementById("octavos1B").value = inglaterra;
    document.getElementById("inglaterra").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoB2").value = inglaterra;
    document.getElementById("octavos2B").value = inglaterra;
    document.getElementById("inglaterra").disabled = true
  }

  if (paisGanadorGrupoB1 !== "" && paisGanadorGrupoB1 !== "") {
    document.getElementById("inglaterra").disabled = true
    document.getElementById("iran").disabled = true
    document.getElementById("estadosUnidos").disabled = true
    document.getElementById("gales").disabled = true
  }

}

function iran() {

  var iran = document.getElementById("iran").value;
  var paisGanadorGrupoB1 = document.getElementById("paisGanadorGrupoB1").value;
  var paisGanadorGrupoB2 = document.getElementById("paisGanadorGrupoB2").value;

  if (paisGanadorGrupoB1 === "") {
    document.getElementById("paisGanadorGrupoB1").value = iran;
    document.getElementById("octavos1B").value = iran;
    document.getElementById("iran").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoB2").value = iran;
    document.getElementById("octavos2B").value = iran;
    document.getElementById("iran").disabled = true
  }

  if (paisGanadorGrupoB1 !== "" && paisGanadorGrupoB1 !== "") {
    document.getElementById("inglaterra").disabled = true
    document.getElementById("iran").disabled = true
    document.getElementById("estadosUnidos").disabled = true
    document.getElementById("gales").disabled = true
  }
}

function estadosUnidos() {
  var estadosUnidos = document.getElementById("estadosUnidos").value;
  var paisGanadorGrupoB1 = document.getElementById("paisGanadorGrupoB1").value;
  var paisGanadorGrupoB2 = document.getElementById("paisGanadorGrupoB2").value;

  if (paisGanadorGrupoB1 === "") {
    document.getElementById("paisGanadorGrupoB1").value = estadosUnidos;
    document.getElementById("octavos1B").value = estadosUnidos;
    document.getElementById("estadosUnidos").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoB2").value = estadosUnidos;
    document.getElementById("octavos2B").value = estadosUnidos;
    document.getElementById("estadosUnidos").disabled = true
  }

  if (paisGanadorGrupoB1 !== "" && paisGanadorGrupoB1 !== "") {
    document.getElementById("inglaterra").disabled = true
    document.getElementById("iran").disabled = true
    document.getElementById("estadosUnidos").disabled = true
    document.getElementById("gales").disabled = true
  }
}

function gales() {
  var gales = document.getElementById("gales").value;
  var paisGanadorGrupoB1 = document.getElementById("paisGanadorGrupoB1").value;
  var paisGanadorGrupoB2 = document.getElementById("paisGanadorGrupoB2").value;

  if (paisGanadorGrupoB1 === "") {
    document.getElementById("paisGanadorGrupoB1").value = gales;
    document.getElementById("octavos1B").value = gales;
    document.getElementById("gales").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoB2").value = gales;
    document.getElementById("octavos2B").value = gales;
    document.getElementById("gales").disabled = true
  }

  if (paisGanadorGrupoB1 !== "" && paisGanadorGrupoB1 !== "") {
    document.getElementById("inglaterra").disabled = true
    document.getElementById("iran").disabled = true
    document.getElementById("estadosUnidos").disabled = true
    document.getElementById("gales").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoB() {
  var paisGanadorGrupoB1 = document.getElementById("paisGanadorGrupoB1").value;
  var paisGanadorGrupoB2 = document.getElementById("paisGanadorGrupoB2").value;
  var octavos1B = document.getElementById("octavos1B").value;

  if (paisGanadorGrupoB1 && paisGanadorGrupoB2 !== "") {
    document.getElementById("paisGanadorGrupoB1").value = "";
    document.getElementById("paisGanadorGrupoB2").value = "";
    document.getElementById("inglaterra").disabled = false
    document.getElementById("iran").disabled = false
    document.getElementById("estadosUnidos").disabled = false
    document.getElementById("gales").disabled = false
  }
}

/*Grupo C*/
function argentina() {

  var argentina = document.getElementById("argentina").value;
  var paisGanadorGrupoC1 = document.getElementById("paisGanadorGrupoC1").value;
  var paisGanadorGrupoC2 = document.getElementById("paisGanadorGrupoC2").value;

  if (paisGanadorGrupoC1 === "") {
    document.getElementById("paisGanadorGrupoC1").value = argentina;
    document.getElementById("octavos1C").value = argentina;
    document.getElementById("argentina").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoC2").value = argentina;
    document.getElementById("octavos2C").value = argentina;
    document.getElementById("argentina").disabled = true
  }

  if (paisGanadorGrupoC1 !== "" && paisGanadorGrupoC1 !== "") {
    document.getElementById("argentina").disabled = true
    document.getElementById("arabiaSaudita").disabled = true
    document.getElementById("mexico").disabled = true
    document.getElementById("polonia").disabled = true
  }

}

function arabiaSaudita() {

  var arabiaSaudita = document.getElementById("arabiaSaudita").value;
  var paisGanadorGrupoC1 = document.getElementById("paisGanadorGrupoC1").value;
  var paisGanadorGrupoC2 = document.getElementById("paisGanadorGrupoC2").value;

  if (paisGanadorGrupoC1 === "") {
    document.getElementById("paisGanadorGrupoC1").value = arabiaSaudita;
    document.getElementById("octavos1C").value = arabiaSaudita;
    document.getElementById("arabiaSaudita").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoC2").value = arabiaSaudita;
    document.getElementById("octavos2C").value = arabiaSaudita;
    document.getElementById("arabiaSaudita").disabled = true
  }

  if (paisGanadorGrupoC1 !== "" && paisGanadorGrupoC1 !== "") {
    document.getElementById("argentina").disabled = true
    document.getElementById("arabiaSaudita").disabled = true
    document.getElementById("mexico").disabled = true
    document.getElementById("polonia").disabled = true
  }
}

function mexico() {
  var mexico = document.getElementById("mexico").value;
  var paisGanadorGrupoC1 = document.getElementById("paisGanadorGrupoC1").value;
  var paisGanadorGrupoC2 = document.getElementById("paisGanadorGrupoC2").value;

  if (paisGanadorGrupoC1 === "") {
    document.getElementById("paisGanadorGrupoC1").value = mexico;
    document.getElementById("octavos1C").value = mexico;
    document.getElementById("mexico").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoC2").value = mexico;
    document.getElementById("octavos2C").value = mexico;
    document.getElementById("mexico").disabled = true
  }

  if (paisGanadorGrupoC1 !== "" && paisGanadorGrupoC1 !== "") {
    document.getElementById("argentina").disabled = true
    document.getElementById("arabiaSaudita").disabled = true
    document.getElementById("mexico").disabled = true
    document.getElementById("polonia").disabled = true
  }
}

function polonia() {
  var polonia = document.getElementById("polonia").value;
  var paisGanadorGrupoC1 = document.getElementById("paisGanadorGrupoC1").value;
  var paisGanadorGrupoC2 = document.getElementById("paisGanadorGrupoC2").value;

  if (paisGanadorGrupoC1 === "") {
    document.getElementById("paisGanadorGrupoC1").value = polonia;
    document.getElementById("octavos1C").value = polonia;
    document.getElementById("polonia").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoC2").value = polonia;
    document.getElementById("octavos2C").value = polonia;
    document.getElementById("polonia").disabled = true
  }

  if (paisGanadorGrupoC1 !== "" && paisGanadorGrupoC1 !== "") {
    document.getElementById("argentina").disabled = true
    document.getElementById("arabiaSaudita").disabled = true
    document.getElementById("mexico").disabled = true
    document.getElementById("polonia").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoC() {
  var paisGanadorGrupoC1 = document.getElementById("paisGanadorGrupoC1").value;
  var paisGanadorGrupoC2 = document.getElementById("paisGanadorGrupoC2").value;

  if (paisGanadorGrupoC1 && paisGanadorGrupoC2 !== "") {
    document.getElementById("paisGanadorGrupoC1").value = "";
    document.getElementById("paisGanadorGrupoC2").value = "";
    document.getElementById("octavos2C").value = "";
    document.getElementById("argentina").disabled = false
    document.getElementById("arabiaSaudita").disabled = false
    document.getElementById("mexico").disabled = false
    document.getElementById("polonia").disabled = false
  }
}

/*Grupo D*/
function francia() {

  var francia = document.getElementById("francia").value;
  var paisGanadorGrupoD1 = document.getElementById("paisGanadorGrupoD1").value;
  var paisGanadorGrupoD2 = document.getElementById("paisGanadorGrupoD2").value;

  if (paisGanadorGrupoD1 === "") {
    document.getElementById("paisGanadorGrupoD1").value = francia;
    document.getElementById("octavos1D").value = francia;
    document.getElementById("francia").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoD2").value = francia;
    document.getElementById("octavos2D").value = francia;
    document.getElementById("francia").disabled = true
  }

  if (paisGanadorGrupoD1 !== "" && paisGanadorGrupoD1 !== "") {
    document.getElementById("francia").disabled = true
    document.getElementById("australia").disabled = true
    document.getElementById("dinamarca").disabled = true
    document.getElementById("tunez").disabled = true
  }

}

function australia() {

  var australia = document.getElementById("australia").value;
  var paisGanadorGrupoD1 = document.getElementById("paisGanadorGrupoD1").value;
  var paisGanadorGrupoD2 = document.getElementById("paisGanadorGrupoD2").value;

  if (paisGanadorGrupoD1 === "") {
    document.getElementById("paisGanadorGrupoD1").value = australia;
    document.getElementById("octavos1D").value = australia;
    document.getElementById("australia").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoD2").value = australia;
    document.getElementById("octavos2D").value = australia;
    document.getElementById("australia").disabled = true
  }

  if (paisGanadorGrupoD1 !== "" && paisGanadorGrupoD1 !== "") {
    document.getElementById("francia").disabled = true
    document.getElementById("australia").disabled = true
    document.getElementById("dinamarca").disabled = true
    document.getElementById("tunez").disabled = true
  }
}

function dinamarca() {
  var dinamarca = document.getElementById("dinamarca").value;
  var paisGanadorGrupoD1 = document.getElementById("paisGanadorGrupoD1").value;
  var paisGanadorGrupoD2 = document.getElementById("paisGanadorGrupoD2").value;

  if (paisGanadorGrupoD1 === "") {
    document.getElementById("paisGanadorGrupoD1").value = dinamarca;
    document.getElementById("octavos1D").value = dinamarca;
    document.getElementById("dinamarca").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoD2").value = dinamarca;
    document.getElementById("octavos2D").value = dinamarca;
    document.getElementById("dinamarca").disabled = true
  }

  if (paisGanadorGrupoD1 !== "" && paisGanadorGrupoD1 !== "") {
    document.getElementById("francia").disabled = true
    document.getElementById("australia").disabled = true
    document.getElementById("dinamarca").disabled = true
    document.getElementById("tunez").disabled = true
  }
}

function tunez() {
  var tunez = document.getElementById("tunez").value;
  var paisGanadorGrupoD1 = document.getElementById("paisGanadorGrupoD1").value;
  var paisGanadorGrupoD2 = document.getElementById("paisGanadorGrupoD2").value;

  if (paisGanadorGrupoD1 === "") {
    document.getElementById("paisGanadorGrupoD1").value = tunez;
    document.getElementById("octavos1D").value = tunez;
    document.getElementById("tunez").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoD2").value = tunez;
    document.getElementById("octavos2D").value = tunez;
    document.getElementById("tunez").disabled = true
  }

  if (paisGanadorGrupoD1 !== "" && paisGanadorGrupoD1 !== "") {
    document.getElementById("francia").disabled = true
    document.getElementById("australia").disabled = true
    document.getElementById("dinamarca").disabled = true
    document.getElementById("tunez").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoD() {
  var paisGanadorGrupoD1 = document.getElementById("paisGanadorGrupoD1").value;
  var paisGanadorGrupoD2 = document.getElementById("paisGanadorGrupoD2").value;

  if (paisGanadorGrupoD1 && paisGanadorGrupoD2 !== "") {
    document.getElementById("paisGanadorGrupoD1").value = "";
    document.getElementById("paisGanadorGrupoD2").value = "";
    document.getElementById("octavos1D").value = "";
    document.getElementById("francia").disabled = false
    document.getElementById("australia").disabled = false
    document.getElementById("dinamarca").disabled = false
    document.getElementById("tunez").disabled = false
  }
}

/*Grupo E*/
function espania() {

  var espania = document.getElementById("espania").value;
  var paisGanadorGrupoE1 = document.getElementById("paisGanadorGrupoE1").value;
  var paisGanadorGrupoE2 = document.getElementById("paisGanadorGrupoE2").value;

  if (paisGanadorGrupoE1 === "") {
    document.getElementById("paisGanadorGrupoE1").value = espania;
    document.getElementById("octavos1E").value = espania;
    document.getElementById("espania").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoE2").value = espania;
    document.getElementById("octavos2E").value = espania;
    document.getElementById("espania").disabled = true
  }

  if (paisGanadorGrupoE1 !== "" && paisGanadorGrupoE1 !== "") {
    document.getElementById("espania").disabled = true
    document.getElementById("costaRica").disabled = true
    document.getElementById("alemania").disabled = true
    document.getElementById("japon").disabled = true
  }
}

function costaRica() {

  var costaRica = document.getElementById("costaRica").value;
  var paisGanadorGrupoE1 = document.getElementById("paisGanadorGrupoE1").value;
  var paisGanadorGrupoE2 = document.getElementById("paisGanadorGrupoE2").value;

  if (paisGanadorGrupoE1 === "") {
    document.getElementById("paisGanadorGrupoE1").value = costaRica;
    document.getElementById("octavos1E").value = costaRica;
    document.getElementById("costaRica").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoE2").value = costaRica;
    document.getElementById("octavos2E").value = costaRica;
    document.getElementById("costaRica").disabled = true
  }

  if (paisGanadorGrupoE1 !== "" && paisGanadorGrupoE1 !== "") {
    document.getElementById("espania").disabled = true
    document.getElementById("costaRica").disabled = true
    document.getElementById("alemania").disabled = true
    document.getElementById("japon").disabled = true
  }
}

function alemania() {
  var alemania = document.getElementById("alemania").value;
  var paisGanadorGrupoE1 = document.getElementById("paisGanadorGrupoE1").value;
  var paisGanadorGrupoE2 = document.getElementById("paisGanadorGrupoE2").value;

  if (paisGanadorGrupoE1 === "") {
    document.getElementById("paisGanadorGrupoE1").value = alemania;
    document.getElementById("octavos1E").value = alemania;
    document.getElementById("alemania").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoE2").value = alemania;
    document.getElementById("octavos2E").value = alemania;
    document.getElementById("alemania").disabled = true
  }

  if (paisGanadorGrupoE1 !== "" && paisGanadorGrupoE1 !== "") {
    document.getElementById("espania").disabled = true
    document.getElementById("costaRica").disabled = true
    document.getElementById("alemania").disabled = true
    document.getElementById("japon").disabled = true
  }
}

function japon() {
  var japon = document.getElementById("japon").value;
  var paisGanadorGrupoE1 = document.getElementById("paisGanadorGrupoE1").value;
  var paisGanadorGrupoE2 = document.getElementById("paisGanadorGrupoE2").value;

  if (paisGanadorGrupoE1 === "") {
    document.getElementById("paisGanadorGrupoE1").value = japon;
    document.getElementById("octavos1E").value = japon;
    document.getElementById("japon").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoE2").value = japon;
    document.getElementById("octavos2E").value = japon;
    document.getElementById("japon").disabled = true
  }

  if (paisGanadorGrupoE1 !== "" && paisGanadorGrupoE1 !== "") {
    document.getElementById("espania").disabled = true
    document.getElementById("costaRica").disabled = true
    document.getElementById("alemania").disabled = true
    document.getElementById("japon").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoE() {
  var paisGanadorGrupoE1 = document.getElementById("paisGanadorGrupoE1").value;
  var paisGanadorGrupoE2 = document.getElementById("paisGanadorGrupoE2").value;

  if (paisGanadorGrupoE1 && paisGanadorGrupoE2 !== "") {
    document.getElementById("paisGanadorGrupoE1").value = "";
    document.getElementById("paisGanadorGrupoE2").value = "";
    document.getElementById("espania").disabled = false
    document.getElementById("costaRica").disabled = false
    document.getElementById("alemania").disabled = false
    document.getElementById("japon").disabled = false
  }
}

/*Grupo F*/
function belgica() {

  var belgica = document.getElementById("belgica").value;
  var paisGanadorGrupoF1 = document.getElementById("paisGanadorGrupoF1").value;
  var paisGanadorGrupoF2 = document.getElementById("paisGanadorGrupoF2").value;

  if (paisGanadorGrupoF1 === "") {
    document.getElementById("paisGanadorGrupoF1").value = belgica;
    document.getElementById("octavos1F").value = belgica;
    document.getElementById("belgica").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoF2").value = belgica;
    document.getElementById("octavos2F").value = belgica;
    document.getElementById("belgica").disabled = true
  }

  if (paisGanadorGrupoF1 !== "" && paisGanadorGrupoF1 !== "") {
    document.getElementById("belgica").disabled = true
    document.getElementById("canada").disabled = true
    document.getElementById("marruecos").disabled = true
    document.getElementById("croacia").disabled = true
  }
}

function canada() {

  var canada = document.getElementById("canada").value;
  var paisGanadorGrupoF1 = document.getElementById("paisGanadorGrupoF1").value;
  var paisGanadorGrupoF2 = document.getElementById("paisGanadorGrupoF2").value;

  if (paisGanadorGrupoF1 === "") {
    document.getElementById("paisGanadorGrupoF1").value = canada;
    document.getElementById("octavos1F").value = canada;
    document.getElementById("canada").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoF2").value = canada;
    document.getElementById("octavos2F").value = canada;
    document.getElementById("canada").disabled = true
  }

  if (paisGanadorGrupoF1 !== "" && paisGanadorGrupoF1 !== "") {
    document.getElementById("belgica").disabled = true
    document.getElementById("canada").disabled = true
    document.getElementById("marruecos").disabled = true
    document.getElementById("croacia").disabled = true
  }
}

function marruecos() {
  var marruecos = document.getElementById("marruecos").value;
  var paisGanadorGrupoF1 = document.getElementById("paisGanadorGrupoF1").value;
  var paisGanadorGrupoF2 = document.getElementById("paisGanadorGrupoF2").value;

  if (paisGanadorGrupoF1 === "") {
    document.getElementById("paisGanadorGrupoF1").value = marruecos;
    document.getElementById("octavos1F").value = marruecos;
    document.getElementById("marruecos").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoF2").value = marruecos;
    document.getElementById("octavos2F").value = marruecos;
    document.getElementById("marruecos").disabled = true
  }

  if (paisGanadorGrupoF1 !== "" && paisGanadorGrupoF1 !== "") {
    document.getElementById("belgica").disabled = true
    document.getElementById("canada").disabled = true
    document.getElementById("marruecos").disabled = true
    document.getElementById("croacia").disabled = true
  }
}

function croacia() {
  var croacia = document.getElementById("croacia").value;
  var paisGanadorGrupoF1 = document.getElementById("paisGanadorGrupoF1").value;
  var paisGanadorGrupoF2 = document.getElementById("paisGanadorGrupoF2").value;

  if (paisGanadorGrupoF1 === "") {
    document.getElementById("paisGanadorGrupoF1").value = croacia;
    document.getElementById("octavos1F").value = croacia;
    document.getElementById("croacia").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoF2").value = croacia;
    document.getElementById("octavos2F").value = croacia;
    document.getElementById("croacia").disabled = true
  }

  if (paisGanadorGrupoF1 !== "" && paisGanadorGrupoF1 !== "") {
    document.getElementById("belgica").disabled = true
    document.getElementById("canada").disabled = true
    document.getElementById("marruecos").disabled = true
    document.getElementById("croacia").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoF() {
  var paisGanadorGrupoF1 = document.getElementById("paisGanadorGrupoF1").value;
  var paisGanadorGrupoF2 = document.getElementById("paisGanadorGrupoF2").value;

  if (paisGanadorGrupoF1 && paisGanadorGrupoF2 !== "") {
    document.getElementById("paisGanadorGrupoF1").value = "";
    document.getElementById("paisGanadorGrupoF2").value = "";
    document.getElementById("belgica").disabled = false
    document.getElementById("canada").disabled = false
    document.getElementById("marruecos").disabled = false
    document.getElementById("croacia").disabled = false
  }
}

/*Grupo G*/

function brasil() {

  var brasil = document.getElementById("brasil").value;
  var paisGanadorGrupoG1 = document.getElementById("paisGanadorGrupoG1").value;
  var paisGanadorGrupoG2 = document.getElementById("paisGanadorGrupoG2").value;

  if (paisGanadorGrupoG1 === "") {
    document.getElementById("paisGanadorGrupoG1").value = brasil;
    document.getElementById("octavos1G").value = brasil;
    document.getElementById("brasil").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoG2").value = brasil;
    document.getElementById("octavos2G").value = brasil;
    document.getElementById("brasil").disabled = true
  }

  if (paisGanadorGrupoG1 !== "" && paisGanadorGrupoG1 !== "") {
    document.getElementById("brasil").disabled = true
    document.getElementById("serbia").disabled = true
    document.getElementById("suiza").disabled = true
    document.getElementById("camerun").disabled = true
  }
}

function serbia() {
  var serbia = document.getElementById("serbia").value;
  var paisGanadorGrupoG1 = document.getElementById("paisGanadorGrupoG1").value;
  var paisGanadorGrupoG2 = document.getElementById("paisGanadorGrupoG2").value;

  if (paisGanadorGrupoG1 === "") {
    document.getElementById("paisGanadorGrupoG1").value = serbia;
    document.getElementById("octavos1G").value = serbia;
    document.getElementById("serbia").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoG2").value = serbia;
    document.getElementById("octavos2G").value = serbia;
    document.getElementById("serbia").disabled = true
  }

  if (paisGanadorGrupoG1 !== "" && paisGanadorGrupoG1 !== "") {
    document.getElementById("brasil").disabled = true
    document.getElementById("serbia").disabled = true
    document.getElementById("suiza").disabled = true
    document.getElementById("camerun").disabled = true
  }
}

function suiza() {
  var suiza = document.getElementById("suiza").value;
  var paisGanadorGrupoG1 = document.getElementById("paisGanadorGrupoG1").value;
  var paisGanadorGrupoG2 = document.getElementById("paisGanadorGrupoG2").value;

  if (paisGanadorGrupoG1 === "") {
    document.getElementById("paisGanadorGrupoG1").value = suiza;
    document.getElementById("octavos1G").value = suiza;
    document.getElementById("suiza").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoG2").value = suiza;
    document.getElementById("octavos2G").value = suiza;
    document.getElementById("suiza").disabled = true
  }

  if (paisGanadorGrupoG1 !== "" && paisGanadorGrupoG1 !== "") {
    document.getElementById("brasil").disabled = true
    document.getElementById("serbia").disabled = true
    document.getElementById("suiza").disabled = true
    document.getElementById("camerun").disabled = true
  }
}

function camerun() {
  var camerun = document.getElementById("camerun").value;
  var paisGanadorGrupoG1 = document.getElementById("paisGanadorGrupoG1").value;
  var paisGanadorGrupoG2 = document.getElementById("paisGanadorGrupoG2").value;

  if (paisGanadorGrupoG1 === "") {
    document.getElementById("paisGanadorGrupoG1").value = camerun;
    document.getElementById("octavos1G").value = camerun;
    document.getElementById("camerun").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoG2").value = camerun;
    document.getElementById("octavos2G").value = camerun;
    document.getElementById("camerun").disabled = true
  }

  if (paisGanadorGrupoG1 !== "" && paisGanadorGrupoG1 !== "") {
    document.getElementById("brasil").disabled = true
    document.getElementById("serbia").disabled = true
    document.getElementById("suiza").disabled = true
    document.getElementById("camerun").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoG() {
  var paisGanadorGrupoG1 = document.getElementById("paisGanadorGrupoG1").value;
  var paisGanadorGrupoG2 = document.getElementById("paisGanadorGrupoG2").value;

  if (paisGanadorGrupoG1 && paisGanadorGrupoG2 !== "") {
    document.getElementById("paisGanadorGrupoG1").value = "";
    document.getElementById("paisGanadorGrupoG2").value = "";
    document.getElementById("brasil").disabled = false
    document.getElementById("serbia").disabled = false
    document.getElementById("suiza").disabled = false
    document.getElementById("camerun").disabled = false
  }
}

/*Grupo H*/

function portugal() {
  var portugal = document.getElementById("portugal").value;
  var paisGanadorGrupoH1 = document.getElementById("paisGanadorGrupoH1").value;
  var paisGanadorGrupoH2 = document.getElementById("paisGanadorGrupoH2").value;

  if (paisGanadorGrupoH1 === "") {
    document.getElementById("paisGanadorGrupoH1").value = portugal;
    document.getElementById("octavos1H").value = portugal;
    document.getElementById("portugal").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoH2").value = portugal;
    document.getElementById("octavos2H").value = portugal;
    document.getElementById("portugal").disabled = true
  }

  if (paisGanadorGrupoH1 !== "" && paisGanadorGrupoH1 !== "") {
    document.getElementById("portugal").disabled = true
    document.getElementById("ghana").disabled = true
    document.getElementById("uruguay").disabled = true
    document.getElementById("coreaDelSur").disabled = true
  }
}

function ghana() {
  var ghana = document.getElementById("ghana").value;
  var paisGanadorGrupoH1 = document.getElementById("paisGanadorGrupoH1").value;
  var paisGanadorGrupoH2 = document.getElementById("paisGanadorGrupoH2").value;

  if (paisGanadorGrupoH1 === "") {
    document.getElementById("paisGanadorGrupoH1").value = ghana;
    document.getElementById("octavos1H").value = ghana;
    document.getElementById("ghana").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoH2").value = ghana;
    document.getElementById("octavos2H").value = ghana;
    document.getElementById("ghana").disabled = true
  }

  if (paisGanadorGrupoH1 !== "" && paisGanadorGrupoH1 !== "") {
    document.getElementById("portugal").disabled = true
    document.getElementById("ghana").disabled = true
    document.getElementById("uruguay").disabled = true
    document.getElementById("coreaDelSur").disabled = true
  }
}

function uruguay() {
  var uruguay = document.getElementById("uruguay").value;
  var paisGanadorGrupoH1 = document.getElementById("paisGanadorGrupoH1").value;
  var paisGanadorGrupoH2 = document.getElementById("paisGanadorGrupoH2").value;

  if (paisGanadorGrupoH1 === "") {
    document.getElementById("paisGanadorGrupoH1").value = uruguay;
    document.getElementById("octavos1H").value = uruguay;
    document.getElementById("uruguay").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoH2").value = uruguay;
    document.getElementById("octavos2H").value = uruguay;
    document.getElementById("uruguay").disabled = true
  }

  if (paisGanadorGrupoH1 !== "" && paisGanadorGrupoH1 !== "") {
    document.getElementById("portugal").disabled = true
    document.getElementById("ghana").disabled = true
    document.getElementById("uruguay").disabled = true
    document.getElementById("coreaDelSur").disabled = true
  }
}

function coreaDelSur() {
  var coreaDelSur = document.getElementById("coreaDelSur").value;
  var paisGanadorGrupoH1 = document.getElementById("paisGanadorGrupoH1").value;
  var paisGanadorGrupoH2 = document.getElementById("paisGanadorGrupoH2").value;

  if (paisGanadorGrupoH1 === "") {
    document.getElementById("paisGanadorGrupoH1").value = coreaDelSur;
    document.getElementById("octavos1H").value = coreaDelSur;
    document.getElementById("coreaDelSur").disabled = true
  } else {
    document.getElementById("paisGanadorGrupoH2").value = coreaDelSur;
    document.getElementById("octavos2H").value = coreaDelSur;
    document.getElementById("coreaDelSur").disabled = true
  }

  if (paisGanadorGrupoH1 !== "" && paisGanadorGrupoH1 !== "") {
    document.getElementById("portugal").disabled = true
    document.getElementById("ghana").disabled = true
    document.getElementById("uruguay").disabled = true
    document.getElementById("coreaDelSur").disabled = true
  }
}

function limpiarPaisesGanadoresGrupoH() {
  var paisGanadorGrupoH1 = document.getElementById("paisGanadorGrupoH1").value;
  var paisGanadorGrupoH2 = document.getElementById("paisGanadorGrupoH2").value;

  if (paisGanadorGrupoH1 && paisGanadorGrupoH2 !== "") {
    document.getElementById("paisGanadorGrupoH1").value = "";
    document.getElementById("paisGanadorGrupoH2").value = "";
    document.getElementById("portugal").disabled = false
    document.getElementById("ghana").disabled = false
    document.getElementById("uruguay").disabled = false
    document.getElementById("coreaDelSur").disabled = false
  }
}

/**BA */
/*Obtener 1B */
function ganador1B() {
  var octavos1B = document.getElementById("octavos1B").value;
  document.getElementById("ganadorBA").value = octavos1B;
  document.getElementById("cganadorBA").value = octavos1B;
  document.getElementById("octavos1B").disabled = true
  document.getElementById("octavos2A").disabled = true
}

/*Obtener 2A */
function ganador2A() {
  var octavos2A = document.getElementById("octavos2A").value;
  document.getElementById("ganadorBA").value = octavos2A;
  document.getElementById("cganadorBA").value = octavos2A;
  document.getElementById("octavos1B").disabled = true
  document.getElementById("octavos2A").disabled = true

}

function limpiarGanadorBA() {
  var ganadorBA = document.getElementById("ganadorBA").value;
  if (ganadorBA !== "") {
    document.getElementById("ganadorBA").value = "";
    document.getElementById("octavos1B").disabled = false
    document.getElementById("octavos2A").disabled = false
  }
}

/**DC */
/*Obtener 1D */
function ganador1D() {
  var octavos1D = document.getElementById("octavos1D").value;
  document.getElementById("ganadorDC").value = octavos1D;
  document.getElementById("cganadorDC").value = octavos1D;
  document.getElementById("octavos1D").disabled = true
  document.getElementById("octavos2C").disabled = true
}

/*Obtener 2C */
function ganador2C() {
  var octavos2C = document.getElementById("octavos2C").value;
  document.getElementById("ganadorDC").value = octavos2C;
  document.getElementById("cganadorDC").value = octavos2C;
  document.getElementById("octavos1D").disabled = true
  document.getElementById("octavos2C").disabled = true

}

function limpiarGanadorDC() {
  var ganadorDC = document.getElementById("ganadorDC").value;
  if (ganadorDC !== "") {
    document.getElementById("ganadorDC").value = "";
    document.getElementById("octavos1D").disabled = false
    document.getElementById("octavos2C").disabled = false
  }
}

/**FE */
/*Obtener 1F */
function ganador1F() {
  var octavos1F = document.getElementById("octavos1F").value;
  document.getElementById("ganadorFE").value = octavos1F;
  document.getElementById("cganadorFE").value = octavos1F;
  document.getElementById("octavos1F").disabled = true
  document.getElementById("octavos2E").disabled = true
}

/*Obtener 2E*/
function ganador2E() {
  var octavos2E = document.getElementById("octavos2E").value;
  document.getElementById("ganadorFE").value = octavos2E;
  document.getElementById("cganadorFE").value = octavos2E;
  document.getElementById("octavos1F").disabled = true
  document.getElementById("octavos2E").disabled = true

}

function limpiarGanadorFE() {
  var ganadorFE = document.getElementById("ganadorFE").value;
  if (ganadorFE !== "") {
    document.getElementById("ganadorFE").value = "";
    document.getElementById("octavos1F").disabled = false
    document.getElementById("octavos2E").disabled = false
  }
}

/**HG */
/*Obtener 1H */
function ganador1H() {
  var octavos1H = document.getElementById("octavos1H").value;
  document.getElementById("ganadorHG").value = octavos1H;
  document.getElementById("cganadorHG").value = octavos1H;
  document.getElementById("octavos1H").disabled = true
  document.getElementById("octavos2G").disabled = true
}

/*Obtener 2G*/
function ganador2G() {
  var octavos2G = document.getElementById("octavos2G").value;
  document.getElementById("ganadorHG").value = octavos2G;
  document.getElementById("cganadorHG").value = octavos2G;
  document.getElementById("octavos1H").disabled = true
  document.getElementById("octavos2G").disabled = true

}

function limpiarGanadorHG() {
  var ganadorHG = document.getElementById("ganadorHG").value;
  if (ganadorHG !== "") {
    document.getElementById("ganadorHG").value = "";
    document.getElementById("octavos1H").disabled = false
    document.getElementById("octavos2G").disabled = false
  }
}

/**AB */
/*Obtener 1A */
function ganador1A() {
  var octavos1A = document.getElementById("octavos1A").value;
  document.getElementById("ganadorAB").value = octavos1A;
  document.getElementById("cganadorAB").value = octavos1A;
  document.getElementById("octavos1A").disabled = true
  document.getElementById("octavos2B").disabled = true
}

/*Obtener 2B*/
function ganador2B() {
  var octavos2B = document.getElementById("octavos2B").value;
  document.getElementById("ganadorAB").value = octavos2B;
  document.getElementById("cganadorAB").value = octavos2B;
  document.getElementById("octavos1A").disabled = true
  document.getElementById("octavos2B").disabled = true

}

function limpiarGanadorAB() {
  var ganadorAB = document.getElementById("ganadorAB").value;
  if (ganadorAB !== "") {
    document.getElementById("ganadorAB").value = "";
    document.getElementById("octavos1A").disabled = false
    document.getElementById("octavos2B").disabled = false
  }
}

/**CD */
/*Obtener 1C */
function ganador1C() {
  var octavos1C = document.getElementById("octavos1C").value;
  document.getElementById("ganadorCD").value = octavos1C;
  document.getElementById("cganadorCD").value = octavos1C;
  document.getElementById("octavos1C").disabled = true
  document.getElementById("octavos2D").disabled = true
}

/*Obtener 2D*/
function ganador2D() {
  var octavos2D = document.getElementById("octavos2D").value;
  document.getElementById("ganadorCD").value = octavos2D;
  document.getElementById("cganadorCD").value = octavos2D;
  document.getElementById("octavos1C").disabled = true
  document.getElementById("octavos2D").disabled = true
}

function limpiarGanadorCD() {
  var ganadorCD = document.getElementById("ganadorCD").value;
  if (ganadorCD !== "") {
    document.getElementById("ganadorCD").value = "";
    document.getElementById("octavos1C").disabled = false
    document.getElementById("octavos2D").disabled = false
  }
}

/**EF */
/*Obtener 1E */
function ganador1E() {
  var octavos1E = document.getElementById("octavos1E").value;
  document.getElementById("ganadorEF").value = octavos1E;
  document.getElementById("cganadorEF").value = octavos1E;
  document.getElementById("octavos1E").disabled = true
  document.getElementById("octavos2F").disabled = true
}

/*Obtener 2F*/
function ganador2F() {
  var octavos2F = document.getElementById("octavos2F").value;
  document.getElementById("ganadorEF").value = octavos2F;
  document.getElementById("cganadorEF").value = octavos2F;
  document.getElementById("octavos1E").disabled = true
  document.getElementById("octavos2F").disabled = true
}

function limpiarGanadorEF() {
  var ganadorEF = document.getElementById("ganadorEF").value;
  if (ganadorEF !== "") {
    document.getElementById("ganadorEF").value = "";
    document.getElementById("octavos1E").disabled = false
    document.getElementById("octavos2F").disabled = false
  }
}

/**GH */
/*Obtener 1G */
function ganador1G() {
  var octavos1G = document.getElementById("octavos1G").value;
  document.getElementById("ganadorGH").value = octavos1G;
  document.getElementById("cganadorGH").value = octavos1G;
  document.getElementById("octavos1G").disabled = true
  document.getElementById("octavos2H").disabled = true
}

/*Obtener 2H*/
function ganador2H() {
  var octavos2H = document.getElementById("octavos2H").value;
  document.getElementById("ganadorGH").value = octavos2H;
  document.getElementById("cganadorGH").value = octavos2H;
  document.getElementById("octavos1G").disabled = true
  document.getElementById("octavos2H").disabled = true
}

function limpiarGanadorGH() {
  var ganadorGH = document.getElementById("ganadorGH").value;
  if (ganadorGH !== "") {
    document.getElementById("ganadorGH").value = "";
    document.getElementById("octavos1G").disabled = false
    document.getElementById("octavos2H").disabled = false
  }
}

/**Cuartos */

function ganadorBA() {
  var cganadorBA = document.getElementById("cganadorBA").value; semisBADC
  document.getElementById("ganadorBA_DC").value = cganadorBA;
  document.getElementById("semisBADC").value = cganadorBA;
  document.getElementById("cganadorBA").disabled = true
  document.getElementById("cganadorDC").disabled = true
}

function ganadorDC() {
  var cganadorDC = document.getElementById("cganadorDC").value;
  document.getElementById("ganadorBA_DC").value = cganadorDC;
  document.getElementById("semisBADC").value = cganadorDC;
  document.getElementById("cganadorBA").disabled = true
  document.getElementById("cganadorDC").disabled = true
}

function limpiarGanadorBA_DC() {
  var ganadorBA_DC = document.getElementById("ganadorBA_DC").value;
  if (ganadorBA_DC !== "") {
    document.getElementById("ganadorBA_DC").value = "";
    document.getElementById("cganadorBA").disabled = false
    document.getElementById("cganadorDC").disabled = false
  }
}

//

function ganadorFE() {
  var cganadorFE = document.getElementById("cganadorFE").value;
  document.getElementById("ganadorFE_HG").value = cganadorFE;
  document.getElementById("semisFEHG").value = cganadorFE;
  document.getElementById("cganadorFE").disabled = true
  document.getElementById("cganadorHG").disabled = true
}

function ganadorHG() {
  var cganadorHG = document.getElementById("cganadorHG").value;
  document.getElementById("ganadorFE_HG").value = cganadorHG;
  document.getElementById("semisFEHG").value = cganadorHG;
  document.getElementById("cganadorFE").disabled = true
  document.getElementById("cganadorHG").disabled = true
}

function limpiarganadorFE_HG() {
  var ganadorFE_HG = document.getElementById("ganadorFE_HG").value;
  if (ganadorFE_HG !== "") {
    document.getElementById("ganadorFE_HG").value = "";
    document.getElementById("cganadorFE").disabled = false
    document.getElementById("cganadorHG").disabled = false
  }
}

//

function ganadorAB() {
  var cganadorAB = document.getElementById("cganadorAB").value;
  document.getElementById("ganadorAB_CD").value = cganadorAB;
  document.getElementById("semisABCD").value = cganadorAB;
  document.getElementById("cganadorAB").disabled = true
  document.getElementById("cganadorCD").disabled = true
}

function ganadorCD() {
  var cganadorCD = document.getElementById("cganadorCD").value;
  document.getElementById("ganadorAB_CD").value = cganadorCD;
  document.getElementById("semisABCD").value = cganadorCD;
  document.getElementById("cganadorAB").disabled = true
  document.getElementById("cganadorCD").disabled = true
}

function limpiarganadorAB_CD() {
  var ganadorAB_CD = document.getElementById("ganadorAB_CD").value;
  if (ganadorAB_CD !== "") {
    document.getElementById("ganadorAB_CD").value = "";
    document.getElementById("cganadorAB").disabled = false
    document.getElementById("cganadorCD").disabled = false
  }
}

//

function ganadorEF() {
  var cganadorEF = document.getElementById("cganadorEF").value;
  document.getElementById("ganadorEF_GH").value = cganadorEF;
  document.getElementById("semisEFGH").value = cganadorEF;
  document.getElementById("cganadorEF").disabled = true
  document.getElementById("cganadorGH").disabled = true
}

function ganadorGH() {
  var cganadorGH = document.getElementById("cganadorGH").value;
  document.getElementById("ganadorEF_GH").value = cganadorGH;
  document.getElementById("semisEFGH").value = cganadorGH;
  document.getElementById("cganadorEF").disabled = true
  document.getElementById("cganadorGH").disabled = true
}

function limpiarganadorEF_GH() {
  var ganadorEF_GH = document.getElementById("ganadorEF_GH").value;
  if (ganadorEF_GH !== "") {
    document.getElementById("ganadorEF_GH").value = "";
    document.getElementById("cganadorEF").disabled = false
    document.getElementById("cganadorGH").disabled = false
  }
}

/** */

function semisBADC() {
  var semisBADC = document.getElementById("semisBADC").value;
  var semisFEHG = document.getElementById("semisFEHG").value;
  document.getElementById("ganadorSemis1").value = semisBADC;
  document.getElementById("finalista1").value = semisBADC;
  document.getElementById("tercerPuesto1").value = semisFEHG;
}

function semisFEHG() {
  var semisFEHG = document.getElementById("semisFEHG").value;
  var semisBADC = document.getElementById("semisBADC").value;
  document.getElementById("ganadorSemis1").value = semisFEHG;
  document.getElementById("finalista1").value = semisFEHG;
  document.getElementById("tercerPuesto1").value = semisBADC;
}

function semisABCD() {
  var semisABCD = document.getElementById("semisABCD").value;
  var semisEFGH = document.getElementById("semisEFGH").value;
  document.getElementById("ganadorSemis2").value = semisABCD;
  document.getElementById("finalista2").value = semisABCD;
  document.getElementById("tercerPuesto2").value = semisEFGH;
}

function semisEFGH() {
  var semisEFGH = document.getElementById("semisEFGH").value;
  var semisABCD = document.getElementById("semisABCD").value;
  document.getElementById("ganadorSemis2").value = semisEFGH;
  document.getElementById("finalista2").value = semisEFGH;
  document.getElementById("tercerPuesto2").value = semisABCD;

}

function finalista1() {
  var finalista1 = document.getElementById("finalista1").value;
  document.getElementById("campeon").value = finalista1;
}
function finalista2() {
  var finalista2 = document.getElementById("finalista2").value;
  document.getElementById("campeon").value = finalista2;
}

/**/
function tercerPuesto1() {
  var tercerPuesto1 = document.getElementById("tercerPuesto1").value
  document.getElementById("ganadorTercerPuesto").value = tercerPuesto1;
}
function tercerPuesto2() {
  var tercerPuesto2 = document.getElementById("tercerPuesto2").value
  document.getElementById("ganadorTercerPuesto").value = tercerPuesto2;
}









