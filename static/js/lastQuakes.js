function writeLastQuakes(detailsOfAllQuakes, rangeValue) {    

    let htmlContent = `<center><h5>Son ${rangeValue} Deprem</h5></center><hr>`
    for (var key in detailsOfAllQuakes.slice(null, rangeValue)) {

        if (detailsOfAllQuakes[key].magnitude > 0 && detailsOfAllQuakes[key].magnitude <= 2) {
            htmlContent += `
            <a id="linkToFly" href="#" onclick="geoToFly(${detailsOfAllQuakes[key].longitude}, ${detailsOfAllQuakes[key].latitude});"><p>Lokasyon: ${detailsOfAllQuakes[key].location}</p></a>
            <b><p style=color:#4daf7c;>Şiddet: ${detailsOfAllQuakes[key].magnitude}</p></b>
            <p>Derinlik: ${detailsOfAllQuakes[key].depth}</p>
            <p>Saat/Tarih: ${detailsOfAllQuakes[key].time} - ${detailsOfAllQuakes[key].date}</p><hr>`
        }
        else if (detailsOfAllQuakes[key].magnitude >= 2 && detailsOfAllQuakes[key].magnitude <= 4) {
            htmlContent += `
            <a id="linkToFly" href="#" onclick="geoToFly(${detailsOfAllQuakes[key].longitude}, ${detailsOfAllQuakes[key].latitude});"><p>Lokasyon: ${detailsOfAllQuakes[key].location}</p></a>
            <b><p style=color:#F7CA18;>Şiddet: ${detailsOfAllQuakes[key].magnitude}</p></b>
            <p>Derinlik: ${detailsOfAllQuakes[key].depth}</p>
            <p>Saat/Tarih: ${detailsOfAllQuakes[key].time} - ${detailsOfAllQuakes[key].date}</p><hr>`
        }
        else if (detailsOfAllQuakes[key].magnitude >= 4) {
            htmlContent += `
            <a id="linkToFly" href="#" onclick="geoToFly(${detailsOfAllQuakes[key].longitude}, ${detailsOfAllQuakes[key].latitude});"><p>Lokasyon: ${detailsOfAllQuakes[key].location}</p></a>
            <b><p style=color:red;>Şiddet: ${detailsOfAllQuakes[key].magnitude}</p></b>
            <p>Derinlik: ${detailsOfAllQuakes[key].depth}</p>
            <p>Saat/Tarih: ${detailsOfAllQuakes[key].time} - ${detailsOfAllQuakes[key].date}</p><hr>`
        }    
    }

    lastQuakesBox.innerHTML = htmlContent;

}

function geoToFly(longitude, latitude) {
    map.flyTo(
        {
            center: [longitude, latitude],
            zoom: 8
        }
    )
};