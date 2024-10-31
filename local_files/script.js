document.addEventListener('DOMContentLoaded', () => {
    const mainCard = document.querySelector('#card-container');
    const array = [1,2,3,4,5,6,7,8,9,10,11,12]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const p = document.createElement('p');
        const button  = document.createElement('button');
        const link = document.createElement('a');

        link.href = 'https://www.google.com'; // Add 'https://' for t
        link.targe = '_blank';
        link.className = 'a';
        button.className = 'btn';
        div.className = 'card';
        // title.className = 'heading';
        p.className = 'para';
        div.setAttribute('title','My First Page');

        // Defining content
        button.textContent = "View more";
        // title.textContent = "Country name"; // Fixed typo from "Counrty" to "Country"
        p.textContent = "Lorem ipsum is a dummy text content"; // Optional: Fixed casing

        link.appendChild(button); // Wrap the button with the link
        div.appendChild(title);
        div.appendChild(p);
        div.appendChild(link); // Append the link instead of button
        mainCard.appendChild(div);
    }
    
});



