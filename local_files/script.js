document.addEventListener('DOMContentLoaded', () => {
    const mainCard = document.querySelector('#card-container');
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const p = document.createElement('p');

    div.className = 'card';
    title.className = 'heading';
    p.className = 'para';

    // Defining content
    title.textContent = "Country name"; // Fixed typo from "Counrty" to "Country"
    p.textContent = "Lorem ipsum is a dummy text content"; // Optional: Fixed casing

    div.appendChild(title);
    div.appendChild(p);
    mainCard.appendChild(div);
});
