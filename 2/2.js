let currentTime = document.getElementById('currentTime')

const updateTime = () => {
    currentTime.innerText = new Date().toLocaleTimeString();
}

updateTime();

setInterval(updateTime, 1000);