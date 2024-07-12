const dropdowns = document.querySelectorAll("h4");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {

        dropdowns.forEach((dropdown) => {
            if (dropdown !== dropdown) {
            dropdown.nextElementSibling.classList.remove("open");
            dropdown.querySelector("i").classList.remove("open");
            }
          });


        dropdown.nextElementSibling.classList.toggle("open");
        dropdown.querySelector("i").classList.toggle("open");
    });
    
});


const icon = document.getElementById('')