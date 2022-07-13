var dia = document.getElementById("day");
var month = document.getElementById("month");
var boton = document.getElementById("button");

boton.addEventListener("click", calc)



const SIGNOS = ["Acuario", "Picis", "Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"];




function calc() {
    // Acuario
    var day = parseInt(dia.value);
    var mes = month.value.toLowerCase();

    if (day <= 31 && day >= 20 && mes === "enero") {
        console.log( "Tu signo es " + SIGNOS[0]);
    } else if (day >= 1 && day <= 19 && mes === "febrero") {
        console.log ("Tu signo es " + SIGNOS[0]);
    }
    // Picis 
    else if (day >= 20 && day <= 31 && mes == "febrero") {
        console.log ("Tu signo es " + SIGNOS[1]);
    } else if (day <= 20 && day >= 1 && mes == "marzo") {
        console.log("Tu signo es " + SIGNOS[1]);
    }
    // Aries 
    else if (day >= 21 && day <= 31 && mes == "marzo") {
        console.log("Tu signo es " + SIGNOS[2]);    
    } else if (day <= 20 && day >= 1 && mes == "abril") {
        console.log("Tu signo es: " + SIGNOS[2]);
    }
    // Tauro 
    else if (day >= 21 && day <= 31 && mes == "abril") {
        console.log("Tu signo es: " + SIGNOS[3]);

    } else if (day >= 1 && day <= 21 && mes == "mayo")
       { console.log( "Tu signo es: " + SIGNOS[3])
   }
    // Geminis
    else if (day >= 22 && day <= 31 && mes === "mayo") {
        console.log("Tu signo es: " + SIGNOS[4])
    } 


    else if (day <= 21 && day >= 1 && mes == "junio") {
        console.log( "Tu signo es: " + SIGNOS[4]);
    }
    //Cancer
    else if (day >= 22 && day <= 31 && mes == "junio") {
        console.log( "Tu signo es: " + SIGNOS[5]);
    } else if (day <= 23 && day >= 1 && mes == "julio") {
        console.log( "Tu signo es: " + SIGNOS[5]);
    }
    //Leo 
    else if (day >= 24 && day <= 31) {
        console.log( "Tu signo es: " + SIGNOS[6]);
    } 
    else if (day <= 23 && day > 1 && mes == "agosto") {
        console.log( "Tu signo es: " + SIGNOS[6]);
    }
    // Virgo
    else if (day >= 24 && day <= 31 && mes == "agosto") {   
        console.log( "Tu signo es: " + SIGNOS[7]);
    }
     else if (day >= 1 && day && day <= 22 && mes == "septiembre") {
        console.log( "Tu signo es: " + SIGNOS[7]);
    }
    // Libra
    else if (day >= 23 && day <= 31 && mes == "septiembre") {
        console.log("Tu signo es: " + SIGNOS[8]);
    } 
    else if (day >= 1 && day <= 22 && mes == "octubre") {
        console.log("Tu signo es: " + SIGNOS[8]);
    }
    // Escorpio
    else if (day >= 23 && day <= 31 && mes == "octubre") {
        console.log("Tu signo es:" + SIGNOS[9]);
    } else if (day >= 1 && day <= 22 && mes == "noviembre") {
        console.log("Tu signo es: " + SIGNOS[9]);
    }
    // Sagitario 
    else if (day >= 23 && day <= 31 && mes == "noviembre") {
        console.log("Tu signo es: " + SIGNOS[10]);
    } else if (day >= 1 && day <= 21 && mes == "diciembre") {
        console.log( "Tu signo es: " + SIGNOS[10]);
    }
    // Capriconio 
    else if (day >= 22 && day <= 31 && mes == "diciembre") {
        console.log("Tu signo es: " + SIGNOS[11]);
    } 
    else if (day >= 1 && day <= 19 && mes == "enero") {
        console.log("Tu signo es: " + SIGNOS[11]);
    }
    // Falso
    else {
         console.log("No se aun");
    }
}