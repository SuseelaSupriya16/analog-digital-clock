function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the rotation degrees for each hand
    const hourDegrees = (hours % 12) * 30 + (minutes * (30 / 60));
    const minuteDegrees = (minutes * 6) + (seconds * (6 / 60));
    const secondDegrees = seconds * 6;

    // Update the rotation of each hand
    document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;

    // Update the digital time display
    const digitalTime = now.toLocaleTimeString();
    document.getElementById('digital-time').innerText = digitalTime;
}

// Call updateClock immediately to set the initial time and then every second
updateClock();
setInterval(updateClock, 1000);
