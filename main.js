"use strict";

// Hinzufügen von Operatoren und/oder Zahlen
function addNummer(nummer) {
  document.getElementById('ergebnis').value += nummer;
}

// Zurücksetzen
function ergebnisZuruecksetzen() {
  document.getElementById('ergebnis').value = '';
}

// Berechnung
function berechnen() {
  let ergebnis = document.getElementById('ergebnis').value;

  if (ergebnis.includes('+')) {
    let zahlen = ergebnis.split('+');
    let operand1 = parseFloat(zahlen[0]);
    let operand2 = parseFloat(zahlen[1]);
    let ergebnisWert = operand1 + operand2;
    document.getElementById('ergebnis').value = ergebnisWert;

  } else if (ergebnis.includes('-')) {
    let zahlen = ergebnis.split('-');
    let operand1 = parseFloat(zahlen[0]);
    let operand2 = parseFloat(zahlen[1]);
    let ergebnisWert = operand1 - operand2;
    document.getElementById('ergebnis').value = ergebnisWert;

  } else if (ergebnis.includes('*')) {
    let zahlen = ergebnis.split('*');
    let operand1 = parseFloat(zahlen[0]);
    let operand2 = parseFloat(zahlen[1]);
    let ergebnisWert = operand1 * operand2;
    document.getElementById('ergebnis').value = ergebnisWert;
    
  } else if (ergebnis.includes('/')) {
    let zahlen = ergebnis.split('/');
    let operand1 = parseFloat(zahlen[0]);
    let operand2 = parseFloat(zahlen[1]);
    let ergebnisWert = operand1 / operand2;
    document.getElementById('ergebnis').value = ergebnisWert;
  }
}
