// Get all buttons with class="btn" inside the container
var navbar = document.getElementsByClassName("btn");
var about = document.getElementsByClassName("about");;
var calendar = document.getElementsByClassName("calendrier");;
var biblio = document.getElementsByClassName("bibliographie");;
var reseau = document.getElementsByClassName("reseau");;

var aboutNumber = 301.5;
var calendarNumber = 0;
var biblioNumber = 100.5;
var reseauNumber = 201;
var infocheck = true;
var adresseActuelle = window.location;
if (adresseActuelle.hash == "#reseau") {
            var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        document.getElementsByClassName("reseau")[0].className += " active";
    aboutNumber = 100.5;
    calendarNumber = -201;
    reseauNumber = 0;
    biblioNumber = -100.5;
    infocheck = true;
}

if (adresseActuelle.hash == "#about") {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        document.getElementsByClassName("about")[0].className += " active";
    aboutNumber = 0;
    calendarNumber = -301.5;
    reseauNumber = -100.5;
    biblioNumber = -201;
    infocheck = true;
}

if (adresseActuelle.hash == "#calendar") {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        document.getElementsByClassName("calendar")[0].className += " active";
    infocheck = true;
            aboutNumber = 301.5;
            calendarNumber = 0;
            reseauNumber = 201;
            biblioNumber = 100.5;
}

if (adresseActuelle.hash == "#bibliographie") {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        document.getElementsByClassName("bibliographie")[0].className += " active";
              aboutNumber = 201;
            calendarNumber = -100.5;
            reseauNumber = 100.5;
            biblioNumber = 0;
            infocheck = true;
}

fin();
deplacer(0);





// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navbar.length; i++) {

    navbar[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if (this.classList.contains("reseau")) {
            aboutNumber = 100.5;
            calendarNumber = -201;
            reseauNumber = 0;
            biblioNumber = -100.5;
            infocheck = true;
            deplacer(0);
            fin();
            setTimeout(function() {
                if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
                    fin();
                }
            }, 2000);

        };

        if (this.classList.contains("about")) {
            aboutNumber = 0;
            calendarNumber = -301.5;
            reseauNumber = -100.5;
            biblioNumber = -201;
            infocheck = true;
            deplacer(0);
            fin();
            setTimeout(function() {
                if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
                    fin();

                }
            }, 2000);

        };

        if (this.classList.contains("bibliographie")) {
            aboutNumber = 201;
            calendarNumber = -100.5;
            reseauNumber = 100.5;
            biblioNumber = 0;
            infocheck = true;
            deplacer(0);
            setTimeout(function() {
                if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
                    fin();

                }
            }, 2000);


        };

        if (this.classList.contains("calendrier")) {
            infocheck = true;
            aboutNumber = 301.5;
            calendarNumber = 0;
            reseauNumber = 201;
            biblioNumber = 100.5;
            deplacer(0);
            setTimeout(function() {
                if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
                    fin();

                }
            }, 2000);

        };



    });
}

function deplacer(filo) {
    about[1].style.transform = "translate(" + aboutNumber + "%, " + filo + "%)"
    calendar[1].style.transform = "translate(" + calendarNumber + "%, " + filo + "%)"
    reseau[1].style.transform = "translate(" + reseauNumber + "%, " + filo + "%)"
    biblio[1].style.transform = "translate(" + biblioNumber + "%, " + filo + "%)"
}

function perfo() {

    about[1].style.transitionDuration = "0s";
    calendar[1].style.transitionDuration = "0s";
    reseau[1].style.transitionDuration = "0s";
    biblio[1].style.transitionDuration = "0s";

    about[1].style.display = "grid"
    calendar[1].style.display = "grid"
    reseau[1].style.display = "grid"
    biblio[1].style.display = "grid"

    deplacer(0);
    about[1].style.transitionDuration = "0.5s";
    calendar[1].style.transitionDuration = "2s";
    reseau[1].style.transitionDuration = "2s";
    biblio[1].style.transitionDuration = "2s";
}

function fin() {
    var tab = [aboutNumber, calendarNumber, biblioNumber, reseauNumber];
    var tab2 = [about, calendar, biblio, reseau];

    for (var i = 0; i < tab.length; i++) {

        if (tab[i] == 0) {
            tab2[i][1].style.display = "grid";

        } else {
            if (tab2[i]) {
                if (i != 4) {} else {}
            }
        }
    }
}