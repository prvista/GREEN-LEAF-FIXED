const addBtns = document.querySelectorAll('.add-btn');
const numCart = document.getElementById('numCart');
let count = 0;

addBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    event.preventDefault(); 
    count++;
    numCart.textContent = count;
  });
});