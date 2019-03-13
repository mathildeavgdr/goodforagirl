var reseauverti = document.getElementsByClassName("vertical-menu");
reseauverti = reseauverti[0].children;
// console.log(reseauverti);

var request = new XMLHttpRequest();
request.open("GET", "reseau.json", false);
request.send(null)
var reseauinfo = JSON.parse(request.responseText);

var contentex = document.getElementById("contentex");
var iframe = document.getElementById("ifram");
// var reseautext = reseauinfo[1];
// var reseaurl = reseauinfo[0];



// var aboutNumber = 301.5;
// var calendarNumber = 0;
// var biblioNumber = 100.5;
// var reseauNumber = 201;
// var infocheck = true;

// fin();
// deplacer(0);

// // Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < reseauverti.length; i++) {

    reseauverti[i].addEventListener("click", function() {
        contentex.innerHTML = reseauinfo[parseInt(this.id)][1];
        iframe.src = reseauinfo[parseInt(this.id)][0];
        var current = document.getElementsByClassName("active");
        current[1].className = current[1].className.replace("active", "");
        console.log(current);
        this.className += " active";
    });
}


//         if (this.classList.contains("about")) {
//             aboutNumber = 0;
//             calendarNumber = -301.5;
//             reseauNumber = -100.5;
//             biblioNumber = -201;
//             infocheck = true;
//             deplacer(0);
//             fin();
//             setTimeout(function() {
//                 if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
//                     fin();

//                 }
//             }, 2000);

//         };

//         if (this.classList.contains("bibliographie")) {
//             aboutNumber = 201;
//             calendarNumber = -100.5;
//             reseauNumber = 100.5;
//             biblioNumber = 0;
//             infocheck = true;
//             deplacer(0);
//             setTimeout(function() {
//                 if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
//                     fin();

//                 }
//             }, 2000);


//         };

//         if (this.classList.contains("calendrier")) {
//             infocheck = true;
//             aboutNumber = 301.5;
//             calendarNumber = 0;
//             reseauNumber = 201;
//             biblioNumber = 100.5;
//             deplacer(0);
//             setTimeout(function() {
//                 if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
//                     fin();

//                 }
//             }, 2000);

//         };



//     });
// }

// function deplacer(filo) {
//     about[1].style.transform = "translate(" + aboutNumber + "%, " + filo + "%)"
//     calendar[1].style.transform = "translate(" + calendarNumber + "%, " + filo + "%)"
//     reseau[1].style.transform = "translate(" + reseauNumber + "%, " + filo + "%)"
//     biblio[1].style.transform = "translate(" + biblioNumber + "%, " + filo + "%)"
// }

// function perfo() {

//     about[1].style.transitionDuration = "0s";
//     calendar[1].style.transitionDuration = "0s";
//     reseau[1].style.transitionDuration = "0s";
//     biblio[1].style.transitionDuration = "0s";

//     about[1].style.display = "grid"
//     calendar[1].style.display = "grid"
//     reseau[1].style.display = "grid"
//     biblio[1].style.display = "grid"

//     deplacer(0);
//     about[1].style.transitionDuration = "0.5s";
//     calendar[1].style.transitionDuration = "2s";
//     reseau[1].style.transitionDuration = "2s";
//     biblio[1].style.transitionDuration = "2s";
// }

// function fin() {
//     var tab = [aboutNumber, calendarNumber, biblioNumber, reseauNumber];
//     var tab2 = [about, calendar, biblio, reseau];

//     for (var i = 0; i < tab.length; i++) {

//         if (tab[i] == 0) {
//             tab2[i][1].style.display = "grid";

//         } else {
//             if (tab2[i]) {
//                 if (i != 4) {} else {}
//             }
//         }
//     }
// }