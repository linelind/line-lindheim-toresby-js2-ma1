import { getExistingFavs } from "./ui/favFunctions.js";

const favourites = getExistingFavs();
const wishContainer = document.querySelector(".wishContainer");
const noWishMessage = document.querySelector(".wishContainer__message");


favourites.forEach((favourite) => {

    noWishMessage.innerHTML = "";


    wishContainer.innerHTML +=  `<div class="product">
                                        <h2>${favourite.title}</h2> 
                                        <p>Price: ${favourite.price}</p>
                                        <i class="fas fa-star"></i>
                                    </div>`;
});