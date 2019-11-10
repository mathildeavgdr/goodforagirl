let eventrequest = new XMLHttpRequest();
eventrequest.open("GET", "events.json", false);

eventrequest.send(null);
let eventinfo = JSON.parse(eventrequest.responseText);

let enventhlm = '<div class="event">' +
    '<div class="eventdate">20.10 </div>' +
    '<br>' +
    '<div class="eventitre"> jhuhuh </div>' +
    '<br>' +
    '<div class="eventphoto"> <div class="eventimg"><img src=""></div>' +
    '</div>' +
    '<div class="eventposter"> <div class="eventimgpost"><img src=""></div>' +
    '</div>' +
    '<div class="eventext"> jhbjhvvjvhhj</div>' +
    '</div>';



for (let j = 0; j < item20[0].children.length; j++) {
    item20[0].children[j].addEventListener("click", function() {

        for (var i = 0; i < this.parentNode.parentNode.children.length; i++) {
            this.parentNode.parentNode.children[i].style.display = "none";
        }
        document.getElementById(this.children[0].innerHTML).style.display = "block";

    });
}

for (var i = 0; i < eventinfo.length; i++) {


    let container = document.createElement('div');
    container.innerHTML = enventhlm;
    let div = container.firstChild;
    div.querySelector(".eventdate").innerHTML = eventinfo[i][0];
    div.querySelector(".eventitre").innerHTML = eventinfo[i][1];
    if (eventinfo[i][2] != "") {
    	div.querySelector(".eventphoto").children[0].children[0].src = eventinfo[i][2];
    } else {
    	div.querySelector(".eventphoto").innerHTML = ""
    }
    div.querySelector(".eventext").innerHTML = eventinfo[i][4];
    if (eventinfo[i][3] != "") {
    	div.querySelector(".eventposter").children[0].children[0].src = eventinfo[i][3];
    } else {
    	    	div.querySelector(".eventposter").innerHTML = ""

    }
    document.getElementById("Evenements").appendChild(div);
}