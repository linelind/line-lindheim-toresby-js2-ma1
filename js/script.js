import { renderResults } from "./ui/renderResults.js";
import { searchResults } from "./ui/searchResults.js";
import { displayMessage } from "./ui/displayMessage.js";

const baseUrl = "https://fakestoreapi.com/";
const url = baseUrl + "products";

async function getResult() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        
        renderResults(result);
        searchResults(result);


    } catch (error) {
        displayMessage("error", "Oh no! An unexpected error occured.", ".resultsContainer");
    }
}


getResult();

