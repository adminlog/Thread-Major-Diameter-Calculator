/*
MIT License

Copyright (c) 2019 Anthony Reimche

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var E;
var M = parseFloat(prompt("Measurement"));
var P = parseFloat(prompt("Pitch",1.5));
var G = parseFloat(prompt("Dowel Diameter",0.895));
var a = parseFloat(prompt("Thread angle",60))/2;
console.log("Measurement (M) = "+M+"\nPitch (P) = "+P+"\nDowel Diameter (G) = "+G+"\nThread Angle (a) = "+a+"\nMajor Diameter (E) = "+(M+((P/2)*(1/Math.tan(a*(Math.PI/180))))-(G*(1+(1/Math.sin(a*(Math.PI/180))))))+"\n\nCreated by Anthony Reimche");





