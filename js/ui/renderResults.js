import { getExistingFavs } from "./favFunctions.js";

export function renderResults(resultToRender) {
    const resultsContainer = document.querySelector(".resultsContainer");
    const favourites = getExistingFavs();
    
    resultsContainer.innerHTML = "";

    resultToRender.forEach(function (result) {

        let cssClass = "far";

        const doesObjectExist = favourites.find(function(fav) {
            return fav.title === result.title;
        });
    
        if(doesObjectExist) {
            cssClass = "fas";
        }

        resultsContainer.innerHTML += `<div class="product">
                                        <h2>${result.title}</h2> 
                                        <p>Price: ${result.price}</p>
                                        <i class="${cssClass} fa-star" data-title="${result.title}" data-price="${result.price}"></i>
                                        </div>`; 

    });

    const product = document.querySelector(".product");

    if(!product) {
        resultsContainer.innerHTML +=  `<div class="message noresult">No results</div>`;
    };


}