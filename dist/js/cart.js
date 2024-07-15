const addBtns = document.querySelectorAll('.add-btn');
const numCart = document.getElementById('numCart');
const totalPrice = document.getElementById('totalPrice');

let count = 0;
let totalAmount = 0;

addBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    count++;
    numCart.textContent = count;

    const price = parseInt(btn.getAttribute('data-price'));
    totalAmount += price;
    // totalAmount = totalAmount + price; || same sa taas
    totalPrice.textContent = `€ ${totalAmount.toFixed(2)}`; //lagay 2 decimal place
  });
});





// const addBtns = document.querySelectorAll('.add-btn');
// const numCart = document.getElementById('numCart');
// const totalPrice = document.getElementById('totalPrice');

// let count = 0;
// let totalAmount = 0;


// addBtns.forEach(btn => {
//   btn.addEventListener('click', function() {
//     event.preventDefault(); 
//     count++;
//     numCart.textContent = count;

//     const price = parseInt(getAttibute('data-price'));
//     totalAmount = totalAmount + price;
//     totalPrice.textContent = `Php ${totalAmount}`;
//   });
// });














