var reseauverti = document.getElementsByClassName("vertical-menu");
reseauverti = reseauverti[0].children;
// console.log(reseauverti);

var request = new XMLHttpRequest();
request.open("GET", "reseau.json", false);

request.send(null)

var reseauinfo = JSON.parse(request.responseText);
var contentex = document.getElementById("contentex").children[0];
var iframe = document.getElementById("ifram");
var imgo = document.getElementById("imgo");
var id = 0;

for (var i = 0; i < reseauinfo.length; i++) {
    let div = document.createElement('a');
    div.innerHTML = reseauinfo[i][4];
    div.id = i;
    document.getElementById("vertico").appendChild(div);
    if (window.innerWidth > 600) {
        if (i == 0) div.classList.add("active");
    } else {
        iframe.removeAttribute("href");
    }

    reseauverti[i].addEventListener("click", function() {
        id = this.id;
        contentex.innerHTML = reseauinfo[parseInt(this.id)][1];
        imgo.src = reseauinfo[parseInt(this.id)][2];
     
        if (window.innerWidth > 600) {
               imgo.onload = function() {

            imgo.style.transform = reseauinfo[parseInt(id)][3];
        }
            var current = document.getElementsByClassName("active");
            current[1].className = current[1].className.replace("active", "");
            //console.log(current);
            this.className += " active";
            iframe.href = reseauinfo[parseInt(this.id)][0];
        } else {
            let item2 = document.getElementsByClassName("item2");
            let item7 = document.getElementsByClassName("item7");
            let item4 = document.getElementsByClassName("item4");
            let item18 = document.getElementsByClassName("item18");
            item18[0].innerHTML = reseauinfo[this.id][4];
            item18[0].style.display = "block";
            item2[0].style.display = "block";
            item7[0].style.display = "block";
            item4[0].style.display = "none";

        }
    });
}