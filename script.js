function CountDown() {
    let presentDate = new Date();
    let finalDate = new Date();
    finalDate.setFullYear(finalDate.getFullYear() + 1, 0, 1);
    finalDate.setHours(0, 0, 0, 0);

    let duration = finalDate - presentDate;

    let days = Math.floor(duration / (1000 * 3600 * 24));

    let hours = Math.floor(duration / (1000 * 3600)) % 24;

    let minutes = Math.floor(duration / (1000 * 60)) % 60;

    let seconds = Math.floor(duration / 1000) % 60;
    
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    setTimeout(CountDown, 100);
}

CountDown();
