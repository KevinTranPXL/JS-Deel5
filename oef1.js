//oef 1
// document.getElementById("toon").addEventListener("click" , sesam);

// function sesam(){

//     document.getElementById("uitkomst1").innerHTML= document.getElementById("tekstvak").value +"!!";


// }

//oef2


document.getElementById("toon").addEventListener("click" , sesam);

 function sesam() {


      let linebreak = document.createElement("br");

      let para1 = document.createElement("p");
      let tekstvakinhoud = document.getElementById("tekstvak").value;
      let inhoud = createTextNode(tekstvakinhoud);

      para1.appendChild(inhoud);

      document.getElementById

   //   document.getElementById("uitkomst1").innerHTML = document.getElementById("uitkomst1").innerHTML + document.getElementById("tekstvak").value + linebreak;





    //  let print = document.getElementById("uitkomst1");
    //
    //
    //
    //  // let para1 = document.createElement("p");
    //
    //  let tekst = document.getElementById("tekstvak").value;
    //
    //  let para1 = document.createTextNode("Voorhoofd lol");
    //  let paragraaf = document.createElement("p");
    //
    // para1.appendChild(paragraaf);
    //
    //  let entervak = document.createElement("br")
    //
    //
    //
    //  // let tekstvak = document.createTextNode(tekst);
    //
    //
    //     let uitkomst = para1
    //      print.innerHTML += uitkomst + entervak;

 }



