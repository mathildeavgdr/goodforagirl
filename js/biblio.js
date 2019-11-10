$(function() {

    $(".container").mousewheel(function(event, delta) {
        if (window.innerWidth > 600) {

            this.scrollLeft -= (delta * 30);
        }
        event.preventDefault();

    });

});


let bibliorequest = new XMLHttpRequest();
bibliorequest.open("GET", "bibliot.json", false);

bibliorequest.send(null);
let biblioinfo = JSON.parse(bibliorequest.responseText);

let bibliothlm = '<div class="box">' +
    '<div class="boxtitle navbarinside">' +
    '<div>bloublou</div>' +
    '</div>' +
    '<div class="boxcontenu navbarinside" style="display: block;">' +
    '<div class="boximage"><img src="biblio/0.jpg"></div>' +
    '<div class="boxecrit"></div>' +
    '</div>' +
    '</div>';

for (var i = 0; i < biblioinfo.length; i++) {
    let boul = document.createElement('a');
    boul.innerHTML = biblioinfo[i][1] + " - " + biblioinfo[i][0];
    boul.id = i;
    document.getElementById("verticobib").appendChild(boul);
    let bibliomenu = document.getElementById("verticobib");
    bibliomenu = bibliomenu.children;
    bibliomenu[i].addEventListener("click", function() {
        console.log(this.id);
        document.getElementById("verticobib").style.display = "none";

        for (let j = 0; j < biblioinfo.length; j++) {
            if (j == this.id) {
        document.getElementsByClassName("container")[0].children[j].style.display = "flex";
            } else {
        document.getElementsByClassName("container")[0].children[j].style.display = "none";
            }
        }
        document.getElementsByClassName("container")[0].style.display = "block";

    });

    let container = document.createElement('div');
    container.innerHTML = bibliothlm;
    let div = container.firstChild;
    div.querySelector(".boxtitle").children[0].innerHTML = biblioinfo[i][0] + "<br>" + biblioinfo[i][1] + "<br>" + biblioinfo[i][2];
    div.querySelector(".boximage").children[0].src = biblioinfo[i][3];
    div.querySelector(".boxecrit").innerHTML = biblioinfo[i][4];
    	    if (window.innerWidth <= 600) {
    div.addEventListener("click", function() {

        document.getElementById("verticobib").style.display = "block";
        document.getElementsByClassName("container")[0].style.display = "none";
    });

    }
    document.getElementById("boite").appendChild(div);

}