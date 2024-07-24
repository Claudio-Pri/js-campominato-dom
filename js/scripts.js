//===== Appunti ======
// ` backtick

//===== Code ======
//prendo il mio container dall'html
const gridContainer = document.getElementById('grid-container');
// console.log(gridContainer, typeof gridContainer);
const generateButton = document.getElementById('generate-button');


// event listener sul button per generare la griglia
generateButton.addEventListener('click', function () {
    // selezione difficoltà
    const diffSelector = document.getElementById('level');
    console.log('Difficoltà: ', diffSelector.value);

    // livelli
    let cellsNumber = parseInt(diffSelector.value);
    //bombe
    let bombs = [];
    // for (let i = 0; i < 16; i++) {
    while (bombs.length < 16) {
        const randomNumber = generateRandom(1, cellsNumber);
        console.log('numero a cso: ', randomNumber);
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);

        };
    };
    console.log('bombs: ', bombs);

    // gridcontainer.innerhtml=''; per resettare la board 
    gridContainer.innerHTML = ('');
    // genero l'elemento
    for (let i = 0; i < cellsNumber; i++) {
        let newCell = document.createElement('div');
        newCell.innerHTML = (i + 1);
        // ridimensionamento celle in base al livello
        // opzione 3 (modificate classi css)
        newCell.classList.add('cell-' + cellsNumber);

        //aggiungo event listener sulla cella
        newCell.addEventListener('click', function () {
            //perchè This funziona con - function () - ma non con - () => -?
            this.classList.toggle('selected');
            console.log('cella n°', newCell.innerHTML);
            const cellNumber = parseInt(this.innerText);
            // console.log(cellNumber);
            if (bombs.includes(cellNumber)) {
                this.classList.add('bomb');
            }
            else {
                this.classList.add('not-bomb');
            }
        });
        gridContainer.append(newCell);
        // console.log(newCell, typeof newCell);
    };
});

//correzione
//===== Functions =====
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

