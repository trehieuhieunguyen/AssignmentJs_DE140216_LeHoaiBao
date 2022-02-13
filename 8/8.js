const updatePopup = (message) => {
    document.getElementById('popup').innerText = message;
}

const removePopup = () => {
    document.getElementById('popup').innerText = '';
}

document.getElementById('username').addEventListener('mouseover', function() {
    updatePopup('Username')
});

document.getElementById('username').addEventListener('mouseout', function() {
    removePopup()
});

document.getElementById('submit').addEventListener('mouseover', function() {
    updatePopup('Register')
});

document.getElementById('submit').addEventListener('mouseout', function() {
    removePopup()
});