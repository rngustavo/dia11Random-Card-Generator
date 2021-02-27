/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function tipo() {
  let tipos = ["♦", "♥", "♠", "♣"];
  let indice = math.floor(math.random() * tipos.length);
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
  let indice = math.floor(math.random() * numeros.length);
  return numeros[indice];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
