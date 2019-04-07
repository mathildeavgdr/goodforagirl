var reseauverti = document.getElementsByClassName("vertical-menu");
reseauverti = reseauverti[0].children;
// console.log(reseauverti);

// var request = new XMLHttpRequest();
// request.open("GET", "reseau.json",false);

// request.send(null)
// console.log(request.responseText)
 var reseauinfo = [
{
    "0": "https://depatriarchisedesign.com",
    "1": "Depatriarchise Design est une plateforme de recherche axée sur la pratique qui examine la responsabilité du design dans la reproduction de systèmes oppressifs, se concentrant principalement sur le patriarcat, en utilisant une analyse féministe intersectionnelle.<br>La plate-forme est actuellement gérée par Anja Neidhardt, basée à Berlin, et Maya Ober, basée à Bâle.",
    "2": "reseau_img/depatriarchise_design.png",
    "3": "translate(-19.5%,0%)"

},
{
    "0": "https://www.decolonisingdesign.com",
    "1": "Il s'agit d'un blog de groupe, composé d'universitaires, de chercheurs et de praticiens travaillant dans et avec les domaines des études de design et de la recherche en design. Il s'agit d'un effort collectif, né d'une frustration générale quant à la façon dont les ontologies et épistémologies du design sont constituées et validées au sein et en dehors du milieu universitaire. Nous pensons qu'une façon de remédier à cette frustration était de favoriser d'autres débouchés et d'autres plates-formes dans lesquels différentes formes de production du savoir pourraient trouver leur place.",
    "2": "reseau_img/decolonising_design.png",
    "3": "translate(-20%,0%)"
},
{
    "0": "https://www.egalitariancities.com",
    "1": "Egalitarian Cities est un projet de réhabilitation architecturale réunissant des designers et un groupe de femmes. L’idée est de combiner des sondes culturelles avec des promenades exploratoires. Les sondes culturelles serviront à comprendre les individu.e.s et leurs expériences individuelles qui sont aussi sociales. Ce projet permettra à tous de créer des villes plus accueillantes et plus égalitaire.<br>C’est un projet engagé par Ornella Galvani.",
    "2": "reseau_img/egalitarian_cities.png",
    "3": "translate(0%,0%)"
},
{
    "0": "http://notamuse.de/en",
    "1": "Notamuse met l'accent sur le manque de visibilité des graphistes féminines dans le public du design. La signification du nom est claire : pas une muse. Contrairement à la muse, qui inspire les esprits masculins et créatifs par son rôle inspirant mais passif, Notamuse s’intéresse aux femmes designers qui sont elles-mêmes créatives et participent activement à la conception du paysage créatif. Notamuse les place au centre de l'attention sur cette page.<br>Notamuse est un projet de Silva Baum, Claudia Scheer und Lea Sievertsen.",
    "2": "reseau_img/notamuse.png",
    "3": "translate(0%,0%)"
},
{
    "0": "http://common-interest.ch",
    "1": "Common Interest se consacre à rendre la recherche publique. En d'autres termes, elles des publications, des expositions, des ateliers, des textes, etc., qui veulent ouvrir des perspectives socialement et culturellement pertinentes - scientifiques, savantes, artistiques ou autres - à un large public en utilisant des moyens créatifs de narration et de médiation des connaissances.<br>Fondée en 2018 par Corinne Gisel et Nina Paim, collaboratrices de longue date.",
    "2": "reseau_img/common_interest.png",
    "3": "translate(0%,0%)"
},
{
    "0": "http://www.pansy.ch/",
    "1": "Pansy est une plateforme dont l’objectif est d’informer et de mettre en lumière l’influence du genre sur le paysage visuel dans lequel nous évoluons. Pansy parle de genre, de design et de typographie.<br>Pansy est le projet de mémoire de Clémentine Rousset entrepris lors de sa dernière année de Bachelor Design Graphique à l’ECAL.",
    "2": "reseau_img/pansy.png",
    "3": "translate(-2.5%,0%)"
},
{
    "0": "http://www.beyondchange.ch/front",
    "1": "Dans un contexte de catastrophe permanente et de crise normalisée, l'image des designers en tant que résolveurs de problèmes et façonneurs de la culture matérielle-visuelle est constamment évoquée. Les concepteurs doivent venir à la rescousse et élaborer des scénarios spéculatifs, construire des mondes artificiels et développer des solutions intelligentes. Le design est utilisé comme un catalyseur du changement global.",
    "2": "reseau_img/beyond_change.png",
    "3": "translate(0%,0%)"
},
{
    "0": "https://thecheapestuniversity.org",
    "1": "The Cheapest University est une école expérimentale et gratuite. Son dessin et son organisation sont pris en charge par des artistes. Elle s’est constituée par affinités électives, autour d’un esprit d’enthousiasme et d’ouverture. École contributive et artistique, elle est aussi engagée qu’immédiate : seulement dépendante de la volonté de ceux.lles qui la composent, elle s’inscrit comme nécessité dans leurs pratiques, par prolongement de leurs recherches personnelles ou par invention collective de situations tendant vers l’œuvre.",
    "2": "reseau_img/cheapestuniversity.png",
    "3": "translate(0%,0%)"
},
{
    "0": "https://eyeondesign.aiga.org",
    "1": "Aiga Eye on Design s'intéresse de près aux meilleures créations des designers émergents et accompli.e.s les plus passionnants du monde. AIGA Eye on Design est publiés par AIGA, l'association professionnelle du design, la plus ancienne et la plus importante organisation de design à but non lucratif aux États-Unis.",
    "2": "reseau_img/aiga_eye_on_design.png",
    "3": "translate(-20%,0%)"
}];

var contentex = document.getElementById("contentex");
var iframe = document.getElementById("ifram");
var imgo = document.getElementById("imgo");
var id = 0;
for (var i = 0; i < reseauverti.length; i++) {

    reseauverti[i].addEventListener("click", function() {
        id = this.id;
        contentex.innerHTML = reseauinfo[parseInt(this.id)][1];
        iframe.href = reseauinfo[parseInt(this.id)][0];
        imgo.src = reseauinfo[parseInt(this.id)][2];
        imgo.onload = function () {

        imgo.style.transform = reseauinfo[parseInt(id)][3];
}

        //console.log(reseauinfo[parseInt(this.id)])
        var current = document.getElementsByClassName("active");
        current[1].className = current[1].className.replace("active", "");
        //console.log(current);
        this.className += " active";
    });
}

