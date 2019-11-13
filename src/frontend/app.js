setInterval(setClock, 1000);

const [hourHand, minHand, secHand] = document.querySelectorAll('.hand');


function setClock(){
    const currDate = new Date();
    const secRatio = currDate.getSeconds() / 60;
    const minRatio = (secRatio + currDate.getMinutes()) / 60;
    const hourRatio = (minRatio + currDate.getHours()) / 12;

    setRotation(secHand, secRatio);
    setRotation(minHand, minRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
