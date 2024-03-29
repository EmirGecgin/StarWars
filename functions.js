const characters = [{
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
    },
    {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
    },
    {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
    },
    {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
    },
    {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
    }
];

const charactersCard = document.getElementById("charactersCard");
charactersCard.innerHTML = "";
const renderButton = document.getElementById("showCharacters");
let isRendering = true;
renderButton.style.backgroundColor = "#abff2e";




function showCharacters() {
    if (isRendering && charactersCard.innerHTML == "") {
        charactersCard.innerHTML = characters.map(function(character) {
            return `<div class="col-lg-3 col-md-4 col-sm-6 col-12 m-3 d-flex justify-content-center align-items-center">
            <div class="card ">
                <img class="card-img" src="${character.pic}">
                <div class="card-body">
                    <p class="card-text fw-bold fs-5">${character.id}</p>
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">${character.homeworld || "other"}</p>
                </div>
            </div>
        </div>`;
        });
        isRendering = false;
        renderButton.textContent = "Hide Characters";
        renderButton.style.backgroundColor = "pink";
    } else {
        renderButton.textContent = "Show Characters";
        renderButton.style.backgroundColor = "#abff2e";
        charactersCard.innerHTML = "";
        isRendering = true;
    }
}

for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    if (!character.homeworld) {
        // Yoda'nın homeworld'ünü ekliyoruz
        character.homeworld = "other";
    }
}

let homeworldsRaw = characters.map(function(homeworldItem) {
    return homeworldItem.homeworld !== null && homeworldItem.homeworld !== undefined ? homeworldItem.homeworld.toLowerCase() : "other"; // ?? nullish operator does not work my compiler, so i create this method. 
});

let uniqueHomeworlds = [...new Set(homeworldsRaw)];
const homeworlds = uniqueHomeworlds;
console.log(homeworlds);



const filterHomeworldsButtons = document.getElementById("filterButtons");
for (let i = 0; i < homeworlds.length; i++) {
    filterHomeworldsButtons.innerHTML += `
    <div class="form-check col-lg-1 col-md-3 col-sm-4 col-6 col text-center justify-content-center d-flex mx-2">
  <input class="form-check-input" type="radio" name="homeworld"  value="${homeworlds[i]}" id="${homeworlds[i]}-world" >
  <label class="form-check-label ms-1" for="${homeworlds[i]}-world">
    ${homeworlds[i]}
  </label>
</div>
    `
}

const filteredHomeworld = document.querySelectorAll(".form-check-input");

filteredHomeworld.forEach(function(filtered) {
    filtered.addEventListener("click", function(select) {
        let selected = select.target.value;
        console.log(selected);

        if (selected !== null) {
            let filteredItems = characters.filter(function(filteredH) {
                return filteredH.homeworld && filteredH.homeworld.toLowerCase() === selected;
            });
            console.log(filteredItems);
            if (charactersCard.innerHTML !== "") {
                charactersCard.innerHTML = filteredItems.map(function(filteredHW) {
                    return `<div class="col-lg-3 col-md-4 col-sm-6 col-12 m-3 d-flex justify-content-center align-items-center">
                        <div class="card ">
                            <img class="card-img" src="${filteredHW.pic}">
                            <div class="card-body">
                                <p class="card-text fw-bold fs-5">${filteredHW.id|| 'unknown'}</p>
                                <h5 class="card-title">${filteredHW.name}</h5>
                                <p class="card-text">${filteredHW.homeworld || 'unknown'}</p>
                            </div>
                        </div>
                    </div>`;
                });
            } else {
                alert("First, you must click 'Show Characters' button, after you can filter!");
            }


        }

    });
});