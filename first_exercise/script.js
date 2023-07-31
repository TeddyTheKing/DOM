// select container
const container = document.querySelector('#container');
// creating <p>
const odst = document.createElement('p');
odst.textContent = "Hey I'm red!";
odst.setAttribute('color: red;');
//creating <h3>
const nadpis = document.createElement('h3');
nadpis.textContent = "I'm a blue h3!";
nadpis.setAttribute('color: blue;');
// creating <div>
const slozka = document.createElement('div');
slozka.setAttribute('border-color: black; background: pink;')
const nadpisB = document.createElement('h1');
const odstB = document.createElement('p');
slozka.append(nadpisB);
slozka.append(odstB);
