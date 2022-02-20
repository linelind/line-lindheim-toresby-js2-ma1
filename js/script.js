import { renderResults } from "./ui/renderResults.js";
import { searchResults } from "./ui/searchResults.js";
import { displayMessage } from "./ui/displayMessage.js";
import { getExistingFavs } from "./ui/favFunctions.js";

const baseUrl = "https://fakestoreapi.com/";
const url = baseUrl + "products";

async function getResult() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        
        renderResults(result);
        searchResults(result);

        const favButton = document.querySelectorAll(".product i");

        favButton.forEach((button) => {
            button.addEventListener("click", handleClick);
        });

        function handleClick() {
            this.classList.toggle("far");
            this.classList.toggle("fas");

            const title = this.dataset.title;
            const price = this.dataset.price;

            const currentFavs = getExistingFavs();

            const productExist = currentFavs.find(function(fav) {
                return fav.title === title;
            });

            if(!productExist) {
                const product = {title: title, price: price};
                currentFavs.push(product);
                saveFavs(currentFavs);
            }
            else {
                const newFavs = currentFavs.filter(fav => fav.title !== title);
                saveFavs(newFavs);
            }
        }

        function saveFavs(favs) {
            localStorage.setItem("favourites", JSON.stringify(favs));
        }
        
    } catch (error) {
        displayMessage("error", "Oh no! An unexpected error occured.", ".resultsContainer");
    }
}

getResult();
