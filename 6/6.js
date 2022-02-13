document.querySelectorAll('div').forEach(div => {
    div.addEventListener('click', function() {
        window.open(div.innerText);
    });
});