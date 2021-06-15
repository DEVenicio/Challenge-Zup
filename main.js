const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const botao = document.querySelector('button');

var idCharacters = [];

while (idCharacters.length <= 3)
    idCharacters.push(Math.floor(672 * Math.random()));
console.log(idCharacters);

getCharacter = () => {

    fetch(`https://rickandmortyapi.com/api/character/${idCharacters}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }

    }).then(response => response.json())
        .then((data) => {

            document.querySelector(".name1").innerHTML = data[0].name;
            img1.src = data[0].image;
            document.querySelector(".name2").innerHTML = data[1].name;
            img2.src = data[1].image;
            document.querySelector(".name3").innerHTML = data[2].name;
            img3.src = data[2].image;
            document.querySelector(".name4").innerHTML = data[3].name;
            img4.src = data[3].image;
        })

}

onload = getCharacter;
