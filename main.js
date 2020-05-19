const firstName = "Paulina";
const age = "28";

console.log(firstName);
console.log(age);

console.log(`Cześć. Mam na imię ${firstName} i mam ${age} lat.`);

const emptyParagraph = document.querySelector('.homework--js');
emptyParagraph.innerHTML = 'Zadanie domowe z JS wykonane!';

const greet = (age1, name1) => {
    console.log(`Witaj Drogi Odwiedzający, mam na imię ${name1} i mam ${age1} lat.`);
}

greet(28, 'Paulina')