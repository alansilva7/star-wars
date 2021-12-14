const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters() {
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets')
    ])
    .then(data => {
        persons.style.fontSize = 'Sem';
        starships.style.fontSize = 'Sem';
        planets.style.fontSize = 'Sem';

        persons.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;   
})
    .catch(err => console.log('Erro:', err))
}

function getData(param) {
    return fetch(`https://swapi.dev/api/${param}`)
        .then(res => res.json())
}

function loadPhrase() {
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');

    return fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
        .then(data => data.json())
        .then(json => {
            btn.innerHTML = 'Ver mais uma frase!';
            phrase.innerHTML = `"${json.content}"`;

            phrase.animate([
                { transform: 'translateY(-70px'},
                { transform: 'translateY(0px'}
            ], {
                duration:500
            })
            phrase.style.color = 'yellow';
        })
        .catch(err => console.log('Erro ', err))
}

var dark = document.getElementById('btnDark');
var light = document.getElementById('btnLight');
var initial = document.getElementById('btnInitial');
var body = document.querySelector('body');
dark.onclick = function(){
 body.className = "dark";
}

light.onclick = function(){
 body.className = "light";
}

initial.onclick = function(){
 body.className = "";
}