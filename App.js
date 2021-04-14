import React from 'react';
import { LogBox } from 'react-native'; //SOLUCION AL WARNING DEL TIMER PRODUCIDO POR FIREBASE
import { firebaseApp } from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";
import { decode, encode } from "base-64"


LogBox.ignoreLogs(["Setting a timer"]); //POR AHORA SOLO SE SOLUCIONA ASI Y SIEMPRE PASA EN EL DESARROLO EN REACT-NATIVE
//usa las tres primeras palabras para seleccionar el warning

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;


export default function App() {
  return <Navigation />;
}


