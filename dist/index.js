"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aguarda a construção do DOM para evitar leitura de elementos nulos
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("searchBtn");
    button.addEventListener("click", () => {
        // Corrigido o erro de digitação para "countryInput"
        const input = document.getElementById("countryInput");
        const resultCountry = document.getElementById("result");
        const countryName = input.value.trim();
        resultCountry.innerHTML = `<p>${countryName}</p>`;
        console.log("Botão Acionado. País buscado:", countryName);
    });
});
//# sourceMappingURL=index.js.map