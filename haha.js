const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const label = document.getElementById('label');
const gifContainer = document.getElementById('gifContainer');

button1.addEventListener('click', () => {
    label.textContent = 'THANK YOU';
    gifContainer.innerHTML = '<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnZ4OTBjZ3Znd3g2ZDI1dXI3YjdvMGRwcG9wMzNpdnN1ZXJjZWI4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3CCXHZWV6F6O9VQ7FL/giphy.gif" class="gif" alt="Happy GIF">';
});

button2.addEventListener('click', () => {
    moveButton(button2);
    gifContainer.innerHTML += '<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzY1M2JvbnU1cHBmZjR6YmZzbjBlanZraXc5YW9lbW54M3B3ZjRiNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W0c3xcZ3F1d0EYYb0f/giphy.gif" class="gif" alt="Crying GIF">';
});

button2.addEventListener('mouseover', () => {
    moveButton(button2);
});

function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}