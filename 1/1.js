document.getElementById('helloDivButton').addEventListener('click', function() {
    let text = prompt('Enter text');
    document.getElementById('helloDiv').innerText = text;
});