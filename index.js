//voorbeeld1

let aantalkliks = 0;

document.getElementById("klikhier").addEventListener("click", aantalkeergeklikt);



function aantalkeergeklikt()
{
    aantalkliks++;
    document.getElementById("uitkomst1").innerHTML = "Je hebt " + aantalkliks + " virus(sen) op je computer!";
}


// Voorbeeld 2

let box = document.getElementById("box");
let uitkomst = document.getElementById("uitkomst2");

box.addEventListener("mouseover",inDeBox);
box.addEventListener("mouseout",uitDeBox);

function inDeBox(){
uitkomst.innerHTML += "<br> De muis is in DA HOUSE";
}
function uitDeBox(){
    uitkomst.innerHTML += "<br> Sad de muis is niet meer in da house";
}


// Voorbeeld 3

document.getElementById("waardetonen").addEventListener("click" , waardeTonen);

function waardeTonen(){

    document.getElementById("uitkomst3").innerHTML="Gegroet, " + document.getElementById("tekstvak").value + "!";


}







