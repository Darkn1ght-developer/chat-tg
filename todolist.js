const addButton = document.querySelector('.addButton');
let inputValue = document.querySelector('.input')
const container = document.querySelector('.container');


class Item {
    constructor(itemName) {
        this.createDiv(itemName);
    }


    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = 'text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        container.appendChild(itemBox);
        itemBox.appendChild(input);

        

    }
    
}

addButton.addEventListener('click', () => {
    if (inputValue.value != "") {
        new Item(inputValue.value);
        inputValue.value = "";
    }
});



