import menu from "./database.js"
// console.log(menu);

const menuContainer = document.getElementById("menu-container")
// console.log(menuContainer);

const filterBtn = document.querySelectorAll(".filter-btn")
// console.log(filterBtn);

document.addEventListener("DOMContentLoaded", () => {
    displayMenu(menu)
})

function displayMenu(menuItems) {
    // console.log(menuItems);

    let displayMenu = menuItems.map((menuItems) => `
    <div
    class="d-flex align-items-center gap-3 flex-column flex-md-row my-2"
    id="card"
   >
    <img
      src=${menuItems.img}
      alt=""
      id="image"
      class="rounded shadow"
    />
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <h4>${menuItems.title}</h4>
        <p class="price">${menuItems.price} $</p>
      </div>
      <p class="lead">
        ${menuItems.desc}
      </p>
    </div>
   </div>
    `);
    displayMenu = displayMenu.join("");
    menuContainer.innerHTML = displayMenu
}

filterBtn.forEach((button) => {
    

    button.addEventListener("click", (e) => {
        const category = e.target.dataset.id

        searchCategory(category)
    })
})


function searchCategory(categoryInfo) {

    const filteredMenu = menu.filter(
        (menuItems) => menuItems.category === categoryInfo
    );

    if(categoryInfo === 'all'){
        displayMenu(menu)
    }else {
        displayMenu(filteredMenu)
    }
}