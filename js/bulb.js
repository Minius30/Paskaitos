
let lemposBusena = 0;

let lempa = document.getElementById('lempute');

function toggleLamp() {
    if (lemposBusena === 0) {
        lempa.src = 'Img/lempa_off.jpg';
        lemposBusena = 1;
    } else if (lemposBusena === 1) {
        lempa.src = 'Img/lempa_ooo.jpg';
        lemposBusena = 2
    } else {
        lempa.src =
            'Img/lempa_on.jpg';
        lemposBusena = 0;
    }


}

