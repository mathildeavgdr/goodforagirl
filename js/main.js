// Get all buttons with class="btn" inside the container
var navbar = document.getElementsByClassName("btn");
var about = document.getElementsByClassName("about");;
var biblio = document.getElementsByClassName("bibliographie");;
var reseau = document.getElementsByClassName("reseau");;

var aboutNumber = 0;
var biblioNumber = 104.5;
var reseauNumber = 201;
var infocheck = true;
var adresseActuelle = window.location;
if (adresseActuelle.hash == "#reseau") {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementsByClassName("reseau")[0].className += " active";
    aboutNumber = -201;
    reseauNumber = 0;
    biblioNumber = -104.5;
    infocheck = true;
}

let item20 = document.getElementsByClassName("item20");

            if (window.innerWidth <= 600) {
                for (let j = 0; j < item20[0].parentNode.children.length; j++) {
                    //item20[0].children[j].style.display = "none";
                    //console.log(item20[0].parentNode.children[j]);
                    item20[0].parentNode.children[j].style.display = "none";
                }

                item20[0].style.display = "flex";

            }

if (adresseActuelle.hash == "#about") {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementsByClassName("about")[0].className += " active";
    aboutNumber = 0;
    reseauNumber = 201;
    biblioNumber = 104.5;
    infocheck = true;



}


if (adresseActuelle.hash == "#bibliographie") {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    document.getElementsByClassName("bibliographie")[0].className += " active";
    aboutNumber = -104.5;
    reseauNumber = 104.5;
    biblioNumber = 0;
    infocheck = true;


}

fin();
deplacer(0);
let item18 = document.getElementsByClassName("item18");

item18[0].addEventListener("click", function() {
    let item2 = document.getElementsByClassName("item2");
    let item7 = document.getElementsByClassName("item7");
    let item4 = document.getElementsByClassName("item4");
    item2[0].style.display = "none";
    item7[0].style.display = "none";
    item4[0].style.display = "block";
    item18[0].style.display = "none";

});



// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navbar.length; i++) {

    navbar[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if (this.classList.contains("reseau")) {
            aboutNumber = -201;
            reseauNumber = 0;
            biblioNumber = -104.5;
            infocheck = true;
            deplacer(0);
            fin();
            setTimeout(function() {
                if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
                    fin();
                }
            }, 2000);
            if (window.innerWidth <= 600) {

                let item2 = document.getElementsByClassName("item2");
                let item7 = document.getElementsByClassName("item7");
                let item4 = document.getElementsByClassName("item4");
                item2[0].style.display = "none";
                item7[0].style.display = "none";
                item4[0].style.display = "block";
                item18[0].style.display = "none";

            }
        };

        if (this.classList.contains("about")) {
            aboutNumber = 0;
            reseauNumber = 201;
            biblioNumber = 104.5;
            infocheck = true;

            if (window.innerWidth <= 600) {
                for (let j = 0; j < item20[0].parentNode.children.length; j++) {
                    //item20[0].children[j].style.display = "none";
                    //console.log(item20[0].parentNode.children[j]);
                    item20[0].parentNode.children[j].style.display = "none";
                }

                item20[0].style.display = "flex";

            }
            deplacer(0);
            fin();
            setTimeout(function() {
                if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
                    fin();
                }
            }, 2000);
        };

        if (this.classList.contains("bibliographie")) {
            aboutNumber = -104.5;
            reseauNumber = 104.5;
            biblioNumber = 0;
            infocheck = true;
            infocheck = true;
            deplacer(0);
            setTimeout(function() {
                if (biblio[1].style.transform == "translate(" + biblioNumber + "%, 0%)") {
                    fin();

                }
            }, 2000);

            if (window.innerWidth <= 600) {

                document.getElementById("verticobib").style.display = "block";
                document.getElementsByClassName("container")[0].style.display = "none";
            }
        };

    });

}

function deplacer(filo) {
    about[1].style.transform = "translate(" + aboutNumber + "%, " + filo + "%)"
    reseau[1].style.transform = "translate(" + reseauNumber + "%, " + filo + "%)"
    biblio[1].style.transform = "translate(" + biblioNumber + "%, " + filo + "%)"
}

function perfo() {

    about[1].style.transitionDuration = "0s";
    reseau[1].style.transitionDuration = "0s";
    biblio[1].style.transitionDuration = "0s";

    about[1].style.display = "grid"
    reseau[1].style.display = "grid"
    biblio[1].style.display = "grid"

    deplacer(0);
    about[1].style.transitionDuration = "0.5s";
    reseau[1].style.transitionDuration = "2s";
    biblio[1].style.transitionDuration = "2s";
}

function fin() {
    var tab = [aboutNumber, biblioNumber, reseauNumber];
    var tab2 = [about, biblio, reseau];

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