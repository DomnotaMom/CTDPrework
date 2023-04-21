// const URL= https://swapi.dev/

/* fetch('http swapi.dev/api/planets/')
.then(res => { 
        return res.json();
    })
    .then(data => {
        data.forEach(people => {
            const markup = `<li>${CharacterData}</li>`;

    document.querySelector('ul').insertAdjacentElement('beforeend', markup);
    })
})
    .catch(error => console.log(error));*/

fetch('Access-Control-Allow-Origin: http swapi.dev/api/planets')
    .then(res => { 
        return res.json();
    })
    .then(characters => {
        console.log(chacters.characters(3))
    })
    })
})
    .catch(error => console.log(error)); 