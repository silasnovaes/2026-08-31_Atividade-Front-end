const fetchCountry = () => {
    const input = document.getElementById("countryInout") as HTMLInputElement;
    const countryName = input.value.trim();
    const resultCountry = document.getElementById("result") as HTMLDivElement;

    resultCountry.innerHTML = `<p>${countryName}</p>`
    console.log("Botão Acionado");
}