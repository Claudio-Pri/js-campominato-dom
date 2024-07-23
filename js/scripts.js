//===== Appunti ======
// ` backtick

//===== Code ======
//prendo il mio container dall'html
const gridContainer = document.getElementById('grid-container');
// console.log(gridContainer, typeof gridContainer);
const generateButton = document.getElementById('generate-button');
// event listener sul button per generare la griglia
generateButton.addEventListener('click', () => {
    // selezione difficoltà
    const diffSelector = document.getElementById('level');
    console.log('Difficoltà: ', diffSelector.value);
    // gridcontainer.innerhtml=''; per resettare la board 
    gridContainer.innerHTML = ('');
    // livelli
    let cellsNumber = parseInt(diffSelector.value);

    // switch (diffSelector.value) {
    //     case '2':
    //         cellsNumber = 81;
    //         break;
    //     case '3':
    //         cellsNumber = 49;
    //         break;
    //     default:
    //         cellsNumber = 100;
    //         break;
    // };

    // if (diffSelector.value == '2') {
    //     cellsNumber = 81;
    // }
    // else if (diffSelector.value == '3') {
    //     cellsNumber = 49;
    // }
    // genero l'elemento
    for (let i = 0; i < cellsNumber; i++) {
        let newCell = document.createElement('div');
        newCell.innerHTML = (i + 1);
        // ridimensionamento celle in base al livello
        // opzione 3 (modificate classi css)
        newCell.classList.add('cell-' + cellsNumber);
        // opzione 1:
        // if (cellsNumber == 100) {
        //     newCell.classList.add('easy');
        // }
        // else if (cellsNumber == 81) {
        //     newCell.classList.add('medium');
        // }
        // else if (cellsNumber == 49) {
        //     newCell.classList.add('hard');
        // }
        // opzione 2:
        // switch (cellsNumber) {
        //     case 81:
        //         newCell.classList.add('medium');
        //         break;
        //     case 49:
        //         newCell.classList.add('hard');
        //         break;
        //     default:
        //         newCell.classList.add('easy');
        //         break;
        // };
        //aggiungo event listener sulla cella
        newCell.addEventListener('click', function () {
            //perchè This funziona con - function () - ma non con - () => -?
            this.classList.toggle('selected');
            console.log('cella n°', newCell.innerHTML);

        });
        gridContainer.append(newCell);
        console.log(newCell, typeof newCell);
    };
});

//===== Functions =====


