/*
Created on 2019 04 01 by Anthony Reimche.
Unauhorized replication of the file is a violation of the Copyright cc laws.
Copyright CC Anthony Reimche.
*/

var E;
var M = parseFloat(prompt("Measurement"));
var P = parseFloat(prompt("Pitch",1.5));
var G = parseFloat(prompt("Dowel Diameter",0.895));
var a = parseFloat(prompt("Thread angle",60))/2;
console.log("Measurement (M) = "+M+"\nPitch (P) = "+P+"\nDowel Diameter (G) = "+G+"\nThread Angle (a) = "+a+"\nMajor Diameter (E) = "+(M+((P/2)*(1/Math.tan(a*(Math.PI/180))))-(G*(1+(1/Math.sin(a*(Math.PI/180))))))+"\n\nCreated by Anthony Reimche");





