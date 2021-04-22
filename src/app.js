/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function tipo() {
  let tipos = ["♦", "♥", "♠", "♣"];
  let indice = Math.floor(Math.random() * tipos.length);
  return tipos[indice];
}

function numero() {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indice = Math.floor(Math.random() * numeros.length);
  return numeros[indice];
}

window.onload = function() {
  //write your code here

  let cambiarNumero = document.getElementById("sizeNumber");
  cambiarNumero.innerHTML = numero();
  let simboloencabezado = document.getElementById("symbol-top");
  let simbolopie = document.getElementById("symbol-botton");
  let NuevoSimbolo = tipo();
  if (NuevoSimbolo == "♠" || NuevoSimbolo == "♣") {
    simboloencabezado.style.color = "black";
    simbolopie.style.color = "black";
  } else {
    //corazones o diamantes

    simboloencabezado.style.color = "red";
    simbolopie.style.color = "red";
  }
  simboloencabezado.innerHTML = NuevoSimbolo;
  simbolopie.innerHTML = NuevoSimbolo;
};
