document.querySelectorAll('input').forEach(input => {
    input.addEventListener('mouseover', function() {
        alert(this.value);
    });
})