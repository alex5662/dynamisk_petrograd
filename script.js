window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    // læs prduktliste

    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);

    visProdukt();

}

function visProduktListe(listen) {
    console.table(listen);
    listen.forEach(visProdukt);
}



function visProdukt(produkt) {
    console.log(produkt);
    // klone produkt_templaten
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);

    // indsæt data i klon



    // append klon til .produktliste
    document.querySelector(".produktliste").appendChild(klon);
}









//klon.querySelector(".data_billede").src = "imgd/small/" + produkt.billede + "-sm.jpg";
