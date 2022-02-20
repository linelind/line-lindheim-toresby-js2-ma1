import { renderResults } from "./renderResults.js";

export function searchResults(result) {
    const search = document.querySelector(".search");
    
    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim();
        const filteredResults = result.filter(function (result) {

            if (result.price <= searchValue) {
                return true;
            } 
        });

        renderResults(filteredResults);
    };
}
