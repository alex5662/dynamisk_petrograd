window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    visProdukt();

    function visProdukt() {
        // klone produkt_templaten
        var klon = document.querySelector("#produkt_template").content.cloneNode(true);

        // indsæt data i klon



        // append klon til .produktliste
        document.querySelector(".produktliste").appendChild(klon);
    }
}









//klon.querySelector(".data_billede").src = "imgd/small/" + produkt.billede + "-sm.jpg";
