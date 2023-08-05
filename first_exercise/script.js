// select container
const container = document.querySelector('#container');
// creating <p>
const odst = document.createElement('p');
odst.textContent = "Hey I'm red!";
odst.setAttribute('style', 'color: red;');
container.append(odst);
// creating <h3>
const nadpis = document.createElement('h3');
nadpis.textContent = "I'm a blue h3!";
nadpis.setAttribute('style', 'color: blue;');
container.append(nadpis);
// creating <div>
const slozka = document.createElement('div');
slozka.setAttribute('style', 'border-color: black; border: 4px solid; background: pink;')
const nadpisB = document.createElement('h1');
const odstB = document.createElement('p');
nadpisB.textContent = "I'm in a div";
odstB.textContent = "ME TOO!";
container.append(slozka);
slozka.append(nadpisB);
slozka.append(odstB);
// button action 2 (button action 1 je napsaný v html)
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World 2");
// button action 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("Hello World 3");
});

