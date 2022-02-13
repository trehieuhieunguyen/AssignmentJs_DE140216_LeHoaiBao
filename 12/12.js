document.querySelectorAll('Span').forEach(span => {
    div.addEventListener('click', function() {
        window.open(span.innerText);
    });
});