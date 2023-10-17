let divCategories = document.querySelector(".categories-container")

fetch("data.json").then((response) => {
    response.json().then((dados) => {
        dados.map((categoria) => {
            console.log(categoria);
            divCategories.innerHTML += ` <div class="category" id="${categoria.category}">
            <div class="category-name">
                <img src="${categoria.icon}" alt="">  
                <span>${categoria.category}</span>
            </div>
            <div class="category-value">  
                <b>${categoria.score}</b> / 100
              </div>    
        </div>`;
        })
    })
})