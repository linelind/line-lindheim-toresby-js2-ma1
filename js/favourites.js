import { getExistingFavs } from "./ui/favFunctions.js";

const favourites = getExistingFavs();
const wishContainer = document.querySelector(".wishContainer");


if(favourites.length === 0) {
    wishContainer.innerHTML = `<div class="message emptyWishlist">You have no items in your wishlist!</div>`
}

favourites.forEach((favourite) => {

    wishContainer.innerHTML +=  `<div class="product">
                                        <h2>${favourite.title}</h2> 
                                        <p>Price: ${favourite.price}</p>
                                        <i class="fas fa-star"></i>
                                    </div>`;
});