console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Update the `cart.js` file to do the following:

// - Create a global variable named `basket` and set it to an empty array.

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array

let basket = ['item', 'hat', 'pants'];

function addItem( item) {
    return true
}
console.log(addItem('item'));

function listItems() {
    for (let i = 0; i < basket.length; i++)
    console.log(listItems('item'));
    
};

function empty() {
    return basket.length = 0;
}
console.log(empty())
console.log ( 'basket has', basket);





// 1. Add a global `const` named `maxItems` and set it to 5.

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

const maxItems = 5

function isFull() {
    if (basket > maxItems ) {
        return false
    } else {
        return true
    }

} console.log(isFull())

