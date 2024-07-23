console.log('js collegato');
//===== Appunti ======
// ` backtick

//===== Code ======
//prendo il mio container dall'html
const gridContainer = document.getElementById('grid-container');
// console.log(gridContainer, typeof gridContainer);
const generateButton = document.getElementById('generate-button');
// event listener sul button per generare la griglia
generateButton.addEventListener('click', () => {
    // gridcontainer.innerhtml=''; per resettare la board 
    gridContainer.innerHTML = ('');
    // genero l'elemento
    for (let i = 0; i < 100; i++) {
        let newCell = document.createElement('div');
        newCell.innerHTML = (i + 1);
        //aggiungo event listener sulla cella
        newCell.addEventListener('click', () => {
            newCell.classList.toggle('selected');
            console.log('cella n°', i + 1);

        });
        gridContainer.append(newCell);
        console.log(newCell, typeof newCell);
    };
});

//===== Functions =====

//bonus- correzione
