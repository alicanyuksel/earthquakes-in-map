function writeImportantQuakes(listFeaturesImportantQuakes, rangeValue) {

    if (listFeaturesImportantQuakes.length == 0) {
        infoQuakesImportantBox.innerHTML = `<center><h5>Önemli depremler</h5></center><hr>
                                            <p>Seçili ${rangeValue} deprem içinde 4 şiddetinin üstünde gösterilecek bir deprem yok.</p>`;

    }
    else {
        let htmlContent = "<center><h5>Önemli depremler</h5></center><hr>"
        for (var key in listFeaturesImportantQuakes) {
            htmlContent += `
            <a id="linkToFly" href="#" onclick="geoToFly(${listFeaturesImportantQuakes[key].longitude}, ${listFeaturesImportantQuakes[key].latitude}); toggleNav();"><p>Lokasyon: ${listFeaturesImportantQuakes[key].location}</p></a>
            <b><p style=color:red;>Şiddet: ${listFeaturesImportantQuakes[key].magnitude}</p></b>
            <p>Derinlik: ${listFeaturesImportantQuakes[key].depth}</p>
            <p>Saat/Tarih: ${listFeaturesImportantQuakes[key].time} - ${listFeaturesImportantQuakes[key].date}</p><hr>
            `
        }
        
        infoQuakesImportantBox.innerHTML = htmlContent;
        
    }
}

function geoToFly(longitude, latitude) {
    map.flyTo(
        {
            center: [longitude, latitude],
            zoom: 8
        }
    )
};
